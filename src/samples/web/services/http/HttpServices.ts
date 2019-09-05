import { asClass, asView } from "../../../../models/MenuItem";
import MenuService from "../../../../services/MenuService";
import MockMovieService from "./simple/mocks/MockMovieService";
import Movies from "./simple/Movies";
import MovieService from "./simple/MovieService";
import MovieViewModel from "./simple/MovieViewModel";

declare var require: any;

export default function addHttpServiceSamples(ms: MenuService) {
    ms.addSamples(require, "REST Services", [
        {
            label: "Simple",
            demo: Movies,
            files: [
                asView(Movies),
                asClass(MovieViewModel),
                asClass(MovieService),
                asClass(MockMovieService)
            ]
        }
    ]);
}
