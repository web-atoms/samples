import Markdown from "web-atoms-core/dist/core/Markdown";
import { CancelToken } from "web-atoms-core/dist/core/types";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import Action from "web-atoms-core/dist/view-model/Action";
import { AtomViewModel, Validate } from "web-atoms-core/dist/view-model/AtomViewModel";
import Load from "web-atoms-core/dist/view-model/Load";
import SignupService, { IUser } from "./SignupService";

export default class SimpleViewModel extends AtomViewModel {

    public model: IUser = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        passwordAgain: "",
        country: "IN"
    };

    public countryList: any;

    public stateList: any;

    @Validate
    public get errorFirstName(): string {
        return this.model.firstName ? null : "First name is required";
    }

    @Validate
    public get errorLastName(): string {
        return this.model.lastName ? null : "Last name is required";
    }

    @Validate
    public get errorEmailAddress(): string {
        const email = this.model.emailAddress;
        if (!email) {
            return "Email address is required";
        }
        if (!/@/i.test(email)) {
            return "Email address is invalid";
        }
        return null;
    }

    @Validate
    public get errorPassword(): string {
        return this.model.password ? null : "Password is required";
    }

    @Validate
    public get errorPasswordAgain(): string {
        return this.model.passwordAgain === this.model.password ? null : "Passwords do not match";
    }

    @Inject
    private signupService: SignupService;

    @Load({ init: true })
    public async loadCountries(): Promise<void> {
        this.countryList = await this.signupService.countries();
    }

    /**
     * This method reloads whenever country is changed
     */
    @Load({ init: true, watch: true, watchDelayMS: 1 })
    public async loadStates(ct: CancelToken): Promise<void> {
        this.stateList = await this.signupService.states(this.model.country, ct);
        this.model.state = this.stateList[0].value;
    }

    @Action({ validate: true, success: "Signup success"})
    public async signup(): Promise<void> {
        await this.signupService.signup(this.model);
    }

}
