import resolveModulePath from "../../../core/web/resolveModulePath";
import MenuItem, { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import AutoFocusNext from "./auto-focus/AutoFocusNext";
import CustomForm from "./custom/CustomForm";
import CustomFormSample from "./custom/CustomFormSample";
import CustomFormStyle from "./custom/CustomFormStyle";
import SideBySideForm from "./side-by-side/SideBySideForm";
import SideBySideFormStyle from "./side-by-side/SideBySideFormStyle";
import MockSignupService from "./simple/MockSignupService";
import SignupService from "./simple/SignupService";
import SimpleForm from "./simple/SimpleForm";
import SimpleViewModel from "./simple/SimpleViewModel";
import SimpleFormViewModel from "./SimpleFormViewModel";

declare var require: { resolve: (a) => string };

export function addFormSamples(ms: MenuService) {
    ms.addSamples(require, "Form", [
        {
            label: "Simple",
            demo: SimpleForm,
            files: [
                asView(SimpleForm),
                asClass(SimpleViewModel),
                asClass(SignupService),
                asClass(MockSignupService)
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
                asClass(SimpleFormViewModel)
            ]
        }
    ]);
}
