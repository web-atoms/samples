import FileViewer from "../../../core/web/FileViewer";
import resolveModulePath from "../../../core/web/resolveModulePath";
import { asView } from "../../../models/MenuItem";
import MockSignupService from "./simple/MockSignupService";
import SignupService from "./simple/SignupService";
import SimpleForm from "./simple/SimpleForm";
import SimpleViewModel from "./simple/SimpleViewModel";
import SimpleFormViewModel from "./SimpleFormViewModel";

declare var require: any;

declare var UMD: any;
UMD.designMode = true;

export default class FormDemo extends FileViewer {

    public create(): void {
        super.create();
        this.require = require;
        this.demo = SimpleForm;
        this.files = [
            resolveModulePath(require, SimpleForm).replace("/dist/", "/src/") + ".tsx",
            resolveModulePath(require, SimpleViewModel).replace("/dist/", "/src/") + ".ts",
            resolveModulePath(require, SignupService).replace("/dist/", "/src/") + ".ts",
            resolveModulePath(require, MockSignupService).replace("/dist/", "/src/") + ".ts"
        ];
    }

}
