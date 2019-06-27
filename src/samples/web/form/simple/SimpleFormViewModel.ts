import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel, Validate } from "web-atoms-core/dist/view-model/AtomViewModel";

export default class SimpleFormViewModel extends AtomViewModel {

    public model = {
        firstName: "",
        lastName: "",
        emailAddress: "",
        password: "",
        passwordAgain: ""
    };

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
    private navigationService: NavigationService;

    public async signup(): Promise<void> {
        if (!this.isValid) {
            return await this.navigationService.alert("Please complete all required fields");
        }
        await this.navigationService.alert("Signup success");
    }

}
