import { App } from "web-atoms-core/dist/App";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import IMovie from "../../models/IMovie";
import IPagedList from "../../models/IPagedList";
import { ModuleFiles } from "../../ModuleFiles";
import MovieService from "../../services/http/MovieService";

export default class ButtonSampleViewModel extends AtomViewModel {

    public movies: IPagedList<IMovie>;

    constructor(
        @Inject app: App,
        @Inject private movieService: MovieService,
        @Inject private windowService: NavigationService
    ) {
        super(app);
    }

    public async init(): Promise<any> {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }

    public async addMovie(): Promise<any> {

        try {

            const movie = await this.windowService.openPage<IMovie>
            (ModuleFiles.views.samples.basicControls.AtomWindowSample);
            this.movies.value.add(movie);

        } catch (e) {
            // tslint:disable-next-line:no-console
            console.error(e);
            this.windowService.alert(e);
        }

    }

}
