import IMovie from "../../../models/IMovie";
import IPagedList from "../../../models/IPagedList";
import MovieService from "../MovieService";

export default class MockMovieService extends MovieService {

    public getMovies(
        category: string,
        search: string,
        start: number,
        size: number): Promise<IPagedList<IMovie>> {
        return this.sendResult({
            count: 1,
            value: [
                {
                    name: "Inception",
                    genre: "Action"
                }
            ]
        });
    }

}
