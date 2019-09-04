import { asClass, asView } from "../../../models/MenuItem";
import MenuService from "../../../services/MenuService";
import BindingViewModel from "./BindingViewModel";
import Binding from "./simple/Binding";
import SimpleDemo from "./simple/SimpleDemo";

declare var require: { resolve: (a) => string };

export function addBindingSamples(ms: MenuService) {
    ms.addSamples(
            require,
            "Binding",
            [{
                label: "Simple",
                demo: Binding,
                files: [
                asView(Binding) ,
                asClass(BindingViewModel) ]
            }]
    );
}
