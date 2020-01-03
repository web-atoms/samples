import { Inject } from "@web-atoms/core/dist/di/Inject";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import { AtomViewModel, Validate } from "@web-atoms/core/dist/view-model/AtomViewModel";
import InsuranceViewModel, { IApplicant } from "./InsuranceViewModel";

export default class ApplicantViewModel extends AtomViewModel {

    @Inject
    public navigationService: NavigationService;

    public model: IApplicant;

    @Validate
    public get errorName(): string {
        return this.model.name ? "" : "Name cannot be empty";
    }

    @Validate
    public get errorAddress(): string {
        return this.model.address ? "" : "Address cannot be empty";
    }

    public async delete(): Promise<void> {
        if (!( await this.navigationService.confirm("Are you sure you want to delete this?") )) {
            return;
        }
        (this.parent as InsuranceViewModel).model.applicants.remove(this.model);
    }
}
