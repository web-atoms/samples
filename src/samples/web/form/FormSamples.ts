import resolveModulePath from "../../../core/web/resolveModulePath";
import MenuItem from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import AutoFocusDemo from "./auto-focus/AutoFocusDemo";
import CustomDemo from "./custom/CustomDemo";
import SideBySideDemo from "./side-by-side/SideBySideDemo";
import SimpleDemo from "./simple/SimpleDemo";

declare var require: { resolve: (a) => string };

export function addFormSamples(ms: MenuService) {
    const form = ms.addGroup("Form");
    form.addTabLink("Simple", resolveModulePath(require, SimpleDemo));
    form.addTabLink("Auto Focus", resolveModulePath(require, AutoFocusDemo));
    form.addTabLink("Side By Side", resolveModulePath(require, SideBySideDemo));
    form.addTabLink("Custom", resolveModulePath(require, CustomDemo));
}
