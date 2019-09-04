import resolveModulePath from "../../../core/web/resolveModulePath";
import MenuItem, { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import CustomDateField from "./custom-template/CustomDateField";
import CustomDateFieldViewModel from "./custom-template/CustomDateFieldViewModel";
import DateField from "./simple/DateField";
import DateFieldViewModel from "./simple/DateFieldViewModel";

declare var require: { resolve: (a) => string };

export function addDateFields(ms: MenuService) {
    ms.addSamples(require, "Date Field", [
        {
            label: "Simple",
            demo: DateField,
            files: [
                asView(DateField),
                asClass(DateFieldViewModel)
            ]
        },
        {
            label: "Custom",
            demo: CustomDateField,
            files: [
                asView(CustomDateField),
                asClass(CustomDateFieldViewModel)
            ]
        }
    ]);
}
