import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import Action from "@web-atoms/core/dist/view-model/Action";
import { AtomViewModel, Validate } from "@web-atoms/core/dist/view-model/AtomViewModel";

export default class IndexViewModel extends AtomViewModel {
    public model: IFeedbackModel = {};

    public collapsed: boolean = false;

    @Inject
    public windowService: NavigationService;
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
    public get errorMessage(): string {
        return this.model.message ? null : "Message is required";
    }

    @Action({ validate: true, success: "Email sent successfully."})
    public async onSubmit() {
        // await this.windowService.alert("Email sent successfully.");
    }

    public menuClick() {
        this.collapsed = !this.collapsed;
    }

}
export interface IFeedbackModel {
    firstName?: string;
    lastName?: string;
    emailAddress?: string;
    message?: string;
}