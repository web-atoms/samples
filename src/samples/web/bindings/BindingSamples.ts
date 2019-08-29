import resolveModulePath from "../../../core/web/resolveModulePath";
import MenuItem from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import SimpleDemo from "./simple/SimpleDemo";

declare var require: { resolve: (a) => string };

export function addBindingSamples(ms: MenuService) {
    const form = ms.addGroup("Binding");
    form.addTabLink("Simple", resolveModulePath(require, SimpleDemo));
    // form.addTabLink("Custom Template", resolveModulePath(require, CustomTemplateDemo));
}
