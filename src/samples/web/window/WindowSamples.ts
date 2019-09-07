import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import WindowDemo from "./simple/WindowDemo";
import WindowSample from "./simple/WindowSample";
import { WindowSampleViewModel } from "./simple/WindowSampleViewModel";
import PageLinkDemo from "./page-link/PageLinkDemo";
import PageLinkViewModel from "./page-link/PageLinkViewModel";
import InlinePageLinkDemo from "./inline-page-link/InlinePageLinkDemo";
import InlinePageLinkViewModel from "./inline-page-link/InlinePageLinkViewModel";

declare var require: any;

export default function addWindowSamples(ms: MenuService) {

    ms.addSamples(require, "Window & Popup", [
        {
            label: "Window",
            demo: WindowDemo,
            files: [
                asView(WindowDemo),
                asView(WindowSample),
                asClass(WindowSampleViewModel)
            ]
        }, {
            label: "Page Link",
            demo: PageLinkDemo,
            files: [
                asView(PageLinkDemo),
                asClass(PageLinkViewModel),
                asView(WindowSample),
                asClass(WindowSampleViewModel)
            ]
        }, {
            label: "Inline Page Link",
            demo: InlinePageLinkDemo,
            files: [
                asView(InlinePageLinkDemo),
                asClass(InlinePageLinkViewModel)
            ]
        }
    ]);

}
