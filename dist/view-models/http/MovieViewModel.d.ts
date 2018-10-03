import { App } from "web-atoms-core/dist/App";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import IMovie from "../../models/IMovie";
import IPagedList from "../../models/IPagedList";
import MovieService from "../../services/http/MovieService";
export default class MovieViewModele extends AtomViewModel {
    private movieService;
    movies: IPagedList<IMovie>;
    /**
     * First parameter is always app of type App, every parameter
     * must be injected explicitly.
     *
     * In following example, MovieService which is registered as DISingleton
     * will be injected in this view model.
     *
     * Keyword `private` makes it a field of class.
     */
    constructor(app: App, movieService: MovieService);
    /**
     * You must initialize your model by calling web services in init method
     */
    init(): Promise<any>;
}
