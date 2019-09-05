import resolveModulePath from "../../../core/web/resolveModulePath";
import MenuItem, { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import AutoFocusNext from "./auto-focus/AutoFocusNext";
import CustomForm from "./custom/CustomForm";
import CustomFormSample from "./custom/CustomFormSample";
import CustomFormStyle from "./custom/CustomFormStyle";
import CustomTemplate from "./custom/CustomTemplate";
import SideBySideForm from "./side-by-side/SideBySideForm";
import SideBySideFormStyle from "./side-by-side/SideBySideFormStyle";
import SimpleForm from "./simple/SimpleForm";
import SimpleFormViewModel from "./SimpleFormViewModel";

declare var require: { resolve: (a) => string };

export function addFormSamples(ms: MenuService) {
    ms.addSamples(require, "Form", [
        {
            label: "Simple",
            demo: SimpleForm,
            files: [
                asView(SimpleForm),
                asClass(SimpleFormViewModel)
            ]
        },
        {
            label: "Auto Focus",
            demo: AutoFocusNext,
            files: [
                asView(AutoFocusNext),
                asClass(SimpleFormViewModel)
            ]
        },
        {
            label: "Side By Side",
            demo: SideBySideForm,
            files: [
                asView(SideBySideForm),
                asClass(SideBySideFormStyle),
                asClass(SimpleFormViewModel)
            ]
        },
        {
            label: "Custom",
            demo: CustomFormSample,
            files: [
                asView(CustomFormSample),
                asClass(CustomForm),
                asClass(CustomFormStyle),
                asView(CustomTemplate),
                asClass(SimpleFormViewModel)
            ]
        }
    ]);
}
