import DISingleton from "@web-atoms/core/dist/di/DISingleton";
import { BaseService, Get, Path, Query } from "@web-atoms/core/dist/services/http/RestService";

export interface IPagedList<T> {
    count: number;
    value: T[];
}

export interface IMovie {
    name: string;
    genre: string;
    description?: string;
}

/**
 * It is easy to mock any web service by specifying mock parameter while
 * setting it up as DISingleton.
 *
 * When designMode is true, mock web service will be used, please make sure
 * mock class must be set as default in mock module.
 */
@DISingleton({ mock: "./mocks/MockMovieService" })
export default class MovieService extends BaseService {

    @Get("/api/movies/{category}")
    public getMovies(
        @Path("category") category: string,
        @Query("search") search: string,
        @Query("start") start: number,
        @Query("size") size: number
    ): Promise<IPagedList<IMovie>> {
        // don't worry about null, it will never execute..
        return null;
    }

}
