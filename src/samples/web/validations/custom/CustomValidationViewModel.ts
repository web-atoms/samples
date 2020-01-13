import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel, Validate } from "@web-atoms/core/dist/view-model/AtomViewModel";
import bindProperty from "@web-atoms/core/dist/view-model/bindProperty";

export interface IModel {
    name: string;
    emails: IEmailModel[];
}

export interface IEmailModel {
    email: string;
    type?: string;
    error?: string;
}

export default class CustomValidationViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model: IModel = {
        name: "",
        emails: [
            {
                email: "",
                type: "Default"
            }
        ]
    };

    @Validate
    public get errorName(): string {
        return this.model.name ? "" : "Name cannot be empty";
    }

    public addEmail(): void {
        this.model.emails.add({
            email: ""
        });
    }

    public async signup(): Promise<void> {
        let isValid = this.isValid;

        for (const email of this.model.emails) {
            if (!email.email) {
                isValid = false;
                if (email.error === undefined) {
                    bindProperty(this, email, "error", email, [["email"]], (v) => this.getEmailError(email));
                }
            }
        }

        if (!isValid) {
            await this.navigationService.alert("Please complete all required fields", "Error");
            return;
        }
        await this.navigationService.alert("Signup Successful", "Success");
    }

    private getEmailError(email: IEmailModel): string {
        if (!email.email) {
            return "Email cannot be empty";
        }
        if (!/[^\@]+\@[^\@]+/.test(email.email)) {
            return "Invalid email";
        }
        return "";
    }
}
