import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel, Validate } from "web-atoms-core/dist/view-model/AtomViewModel";

export default class SimpleValidationViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model = {
        name: "",
        email: ""
    };

    @Validate
    public get errorName(): string {
        return this.model.name ? "" : "Name cannot be empty";
    }

    @Validate
    public get errorEmail(): string {
        if (!this.model.email) {
            return "Email cannot be empty";
        }
        if (!/[^\@]+\@[^\@]+/.test(this.model.email)) {
            return "Invalid email";
        }
        return "";
    }

    public async signup(): Promise<void> {
        if (!this.isValid) {
            await this.navigationService.alert("Please complete all required fields", "Error");
            return;
        }
        await this.navigationService.alert("Save Successful", "Success");
    }

    public cancel(): void {
        // this will reset all validations and remove all errors.
        this.resetValidations();
    }
}
