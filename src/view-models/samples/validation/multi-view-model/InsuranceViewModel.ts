import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel, Validate } from "web-atoms-core/dist/view-model/AtomViewModel";

export interface IInsurance  {
    id?: number;
    date?: Date;
    broker: string;
    type: string;
    applicants: IApplicant[];
}

export interface IApplicant {
    name: string;
    type: string;
    address?: string;
    city?: string;
}

export default class InsuranceViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model: IInsurance = {
        broker: "",
        type: "General",
        applicants: [
            {
                name: "",
                type: "Primary"
            }
        ]
    };

    @Validate
    public get errorBroker(): string {
        return this.model.broker ? "" : "Broker cannot be empty";
    }

    public addApplicant(): void {
        this.model.applicants.add({
            name: "",
            type: "Dependent"
        });
    }

    public async save(): Promise<void> {
        if (!this.isValid) {
            await this.navigationService.alert("Please fix all errors", "Error");
            return;
        }
        await this.navigationService.alert("Save Successful", "Success");
    }

}
