import resolveModulePath from "../../../core/web/resolveModulePath";
import MenuItem from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import CustomTemplateDemo from "./custom-template/CustomTemplateDemo";
import SimpleDemo from "./simple/SimpleDemo";

declare var require: { resolve: (a) => string };

export function addDateFields(ms: MenuService) {
    const form = ms.addGroup("Date Field");
    form.addTabLink("Simple", resolveModulePath(require, SimpleDemo));
    form.addTabLink("Custom Template", resolveModulePath(require, CustomTemplateDemo));
}
