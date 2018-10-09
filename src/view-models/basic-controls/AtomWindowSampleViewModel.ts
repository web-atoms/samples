import { App } from "web-atoms-core/dist/App";
import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { BindableReceive, Validate } from "web-atoms-core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/dist/view-model/AtomWindowViewModel";
import IMovie from "../../models/IMovie";

export class AtomWindowSampleViewModel extends AtomWindowViewModel {
    @BindableProperty
    public movie: IMovie = {
        name: "",
        genre: "",
        description: ""
    };

    @Validate
    public get errorName(): string {
        return this.movie.name ? "" : "*Name cannot be empty";
    }

    @Validate
    public get errorType(): string {
        return this.movie.genre ? "" : "*Type cannot be empty";
    }

    constructor(
        @Inject app: App,
        @Inject private windowService: NavigationService) {
        super(app);
    }

    public async save(): Promise<any> {
        if (!this.isValid) {
            await this.windowService.alert("Please complete all required fields.");
            return;
        }
        this.close(this.movie);
    }
}
