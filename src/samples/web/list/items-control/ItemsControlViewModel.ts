import { App } from "@web-atoms/core/dist/App";
import { BindableProperty } from "@web-atoms/core/dist/core/BindableProperty";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import MovieService from "../../../../services/http/MovieService";
import { IMovie, IPagedList } from "../../services/http/simple/MovieService";

export default class ItemsControlViewModel extends AtomViewModel {

    public movies: IPagedList<IMovie>;

    /**
     * In following example, MovieService which is registered as DISingleton
     * will be injected in this view model.
     *
     * Keyword `private` makes it a field of class.
     */
    @Inject private movieService: MovieService;

    /**
     * You must initialize your model by calling web services in init method
     */
    public async init(): Promise<any> {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }

}
