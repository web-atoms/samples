import { App } from "web-atoms-core/dist/App";
import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { BindableReceive, Validate } from "web-atoms-core/dist/view-model/AtomViewModel";
import { AtomWindowViewModel } from "web-atoms-core/dist/view-model/AtomWindowViewModel";
import IMovie from "../../../../models/IMovie";

export class WindowSampleViewModel extends AtomWindowViewModel {
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

    public get types() {
        return [{
            label: "Select Type",
            value: ""
        }, {
            label: "Action",
            value: "Action"
        },
        {
            label: "Animated",
            value: "Animated"
        },
        {
            label: "Sci-Fi",
            value: "Sci-Fi"
        },
        {
            label: "Thriller",
            value: "Thriller"
        },
        {
            label: "Comedy",
            value: "Comedy"
        },
        {
            label: "Horror",
            value: "Horror"
        }];
    }

    @Inject private windowService: NavigationService;

    public async save(): Promise<any> {
        if (!this.isValid) {
            await this.windowService.alert("Please complete all required fields.");
            return;
        }
        this.close(this.movie);
    }
}
