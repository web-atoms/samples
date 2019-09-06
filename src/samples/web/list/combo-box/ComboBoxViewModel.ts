import { App } from "web-atoms-core/dist/App";
import { BindableProperty } from "web-atoms-core/dist/core/BindableProperty";
import { Inject } from "web-atoms-core/dist/di/Inject";
import { AtomViewModel } from "web-atoms-core/dist/view-model/AtomViewModel";
import MovieService, { IMovie, IPagedList } from "../../services/http/simple/MovieService";

export default class ComboBoxViewModel extends AtomViewModel {

    @BindableProperty
    public name: string = "";

    public movies: IPagedList<IMovie>;

    /**
     * In following example, MovieService which is registered as DISingleton
     * will be injected in this view model.
     */
    @Inject private movieService: MovieService;

    /**
     * You must initialize your model by calling web services in init method
     */
    public async init(): Promise<any> {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }
}
