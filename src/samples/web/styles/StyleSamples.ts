import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import MovieService from "../services/http/simple/MovieService";
import ListBox from "./list-box/ListBox";
import ListBoxStyle from "./list-box/ListBoxStyle";
import MovieViewModel from "./list-box/MovieViewModel";
import AppPanelStyle from "./panel/AppPanelStyle";
import Panel from "./panel/Panel";

declare var require: any;

export default function addStyleSamples(ms: MenuService) {

    ms.addSamples(require, "Styles", [
        {
            label: "Panel",
            demo: Panel,
            files: [
                asView(Panel),
                asClass(AppPanelStyle)
            ]
        },
        {
            label: "List Box",
            demo: ListBox,
            files: [
                asView(ListBox),
                asClass(ListBoxStyle),
                asClass(MovieViewModel),
                asClass(MovieService)
            ]
        }
    ]);
}
