import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import MockMovieService from "../services/http/simple/mocks/MockMovieService";
import MovieService from "../services/http/simple/MovieService";
import ComboBoxSample from "./combo-box/ComboBoxSample";
import ComboBoxViewModel from "./combo-box/ComboBoxViewModel";
import ItemsControlSample from "./items-control/ItemsControlSample";
import ItemsControlViewModel from "./items-control/ItemsControlViewModel";
import ListBoxSample from "./list-box/ListBoxSample";
import ListBoxSampleStyle from "./list-box/ListBoxSampleStyle";
import ListBoxStyle from "./list-box/ListBoxStyle";
import ListBoxViewModel from "./list-box/ListBoxViewModel";
import ToggleBarSampleStyle from "./toggle-button-bar/ToggleBarSampleStyle";
import ToggleButtonBarSample from "./toggle-button-bar/ToggleButtonBarSample";
import ViewModel from "./toggle-button-bar/ViewModel";
import VirtualListViewModel from "./virtual-list-box/view-model/VirtualListViewModel";
import VirtualListBoxSample from "./virtual-list-box/VirtualListBoxSample";

declare var require: any;

const services = [
    asClass(MovieService),
    asClass(MockMovieService)
];

export default function addListSamples(ms: MenuService) {
    ms.addSamples(require, "List", [
        {
            label: "Items Control",
            demo: ItemsControlSample,
            files: [
                asView(ItemsControlSample),
                asClass(ItemsControlViewModel),
                ... services
            ]
        },
        {
            label: "Combo Box",
            demo: ComboBoxSample,
            files: [
                asView(ComboBoxSample),
                asClass(ComboBoxViewModel),
                ... services
            ]
        },
        {
            label: "List Box",
            demo: ListBoxSample,
            files: [
                asView(ListBoxSample),
                asClass(ListBoxViewModel),
                asClass(ListBoxSampleStyle),
                asClass(ListBoxStyle),
                ... services
            ]
        },
        {
            label: "Virtual List",
            demo: VirtualListBoxSample,
            files: [
                asView(VirtualListBoxSample),
                asClass(VirtualListViewModel)
            ]
        },
        {
            label: "Toggle Button Bar",
            demo: ToggleButtonBarSample,
            files: [
                asView(ToggleButtonBarSample),
                asClass(ToggleBarSampleStyle),
                asClass(ViewModel)
            ]
        }
    ]);
}
