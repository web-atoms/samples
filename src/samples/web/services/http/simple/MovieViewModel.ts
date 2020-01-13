import { App } from "@web-atoms/core/dist/App";
import { Inject } from "@web-atoms/core/dist/di/Inject";
import { AtomViewModel } from "@web-atoms/core/dist/view-model/AtomViewModel";
import MovieService, { IMovie, IPagedList } from "./MovieService";

export default class MovieViewModel extends AtomViewModel {

    public movies: IPagedList<IMovie>;

    @Inject private movieService: MovieService;

    /**
     * You must initialize your model by calling web services in init method
     */
    public async init(): Promise<any> {
        this.movies = await this.movieService.getMovies("", "", 0, 10);
    }

}
