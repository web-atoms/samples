import { App } from "web-atoms-core/dist/App";
import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import IMovie from "../../models/IMovie";
import IPagedList from "../../models/IPagedList";
import MovieService from "../../services/http/MovieService";

export default class AtomComboBoxSampleViewModel extends AtomViewModel {

    @BindableProperty
    public name: string = "";

    public movies: IPagedList<IMovie>;

    /**
     * First parameter is always app of type App, every parameter
     * must be injected explicitly.
     *
     * In following example, MovieService which is registered as DISingleton
     * will be injected in this view model.
     *
     * Keyword `private` makes it a field of class.
     */
    constructor(
        @Inject app: App,
        @Inject private movieService: MovieService
    ) {
        super(app);
    }

    /**
     * You must initialize your model by calling web services in init method
     */
    public async init(): Promise<any> {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }
}
