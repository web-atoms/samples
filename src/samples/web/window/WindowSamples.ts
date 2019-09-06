import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import WindowDemo from "./simple/WindowDemo";
import WindowSample from "./simple/WindowSample";
import { WindowSampleViewModel } from "./simple/WindowSampleViewModel";

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
        }
    ]);

}
