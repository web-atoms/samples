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

    /**
     * Validate decorator will begin watching changes in property and it will
     * return error if validation failed. First time, when the form is empty,
     * no error will be displayed.
     *
     * But as soon as you hit `this.isValid` or method is decorated with `@Action({ validate: true})`
     * the errors bound to UI element will display an error. And it will automatically remove when
     * the property is modified.
     */
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

    /**
     * This method will be executed automatically when view model is initialized.
     */
    @Load({ init: true })
    public async loadCountries(): Promise<void> {
        this.countryList = await this.signupService.countries();
    }

    /**
     * This method will be executed when view model is initialized. This method will
     * also be executed when any property chain of `this` e.g. `this.model.country` is
     * modified.
     */
    @Load({ init: true, watch: true, watchDelayMS: 1 })
    public async loadStates(ct: CancelToken): Promise<void> {
        this.stateList = await this.signupService.states(this.model.country, ct);
        this.model.state = this.stateList[0].value;
    }

    /**
     * Argument `validate` true will force validation error to be displayed and it will stop execution if
     * there are any validations that have failed.
     *
     * Argument `success` will display an alert with message if the execution was successful.
     *
     * By default this method will display an alert if there was any exception while trying to execute
     * this method.
     */
    @Action({ validate: true, success: "Signup success"})
    public async signup(): Promise<void> {
        await this.signupService.signup(this.model);
    }

}
