import resolveModulePath from "../../../core/web/resolveModulePath";
import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import CustomValidation from "./custom/CustomValidation";
import CustomValidationViewModel from "./custom/CustomValidationViewModel";
import Applicant from "./multi-view-model/Applicant";
import ApplicantViewModel from "./multi-view-model/ApplicantViewModel";
import Insurance from "./multi-view-model/Insurance";
import InsuranceViewModel from "./multi-view-model/InsuranceViewModel";
import SimpleValidation from "./simple/SimpleValidation";
import SimpleValidationViewModel from "./simple/SimpleValidationViewModel";

declare var require: { resolve: (a) => string };

export function addValidationSamples(ms: MenuService) {
    ms.addSamples(require, "Validations", [
        {
            label: "Simple",
            demo: SimpleValidation,
            files: [
                asView(SimpleValidation),
                asClass(SimpleValidationViewModel)
            ]
        },
        {
            label: "Custom",
            demo: CustomValidation,
            files: [
                asView(CustomValidation),
                asClass(CustomValidationViewModel)
            ]
        },
        {
            label: "Multi View Model",
            demo: Insurance,
            files: [
                asView(Insurance),
                asClass(InsuranceViewModel),
                asView(Applicant),
                asClass(ApplicantViewModel)
            ]
        }
    ]);
}
