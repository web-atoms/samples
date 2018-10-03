import { BaseService } from "web-atoms-core/dist/services/http/RestService";
import IMovie from "../../models/IMovie";
import IPagedList from "../../models/IPagedList";
/**
 * It is easy to mock any web service by specifying mock parameter while
 * setting it up as DISingleton.
 *
 * When designMode is true, mock web service will be used, please make sure
 * mock class must be set as default in mock module.
 */
export default class MovieService extends BaseService {
    getMovies(category: string, search: string, start: number, size: number): Promise<IPagedList<IMovie>>;
}
