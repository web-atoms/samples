import FileViewer from "../../../core/web/FileViewer";
import resolveModulePath from "../../../core/web/resolveModulePath";
import { asView } from "../../../models/MenuItem";
import SimpleForm from "./simple/SimpleForm";
import SimpleFormViewModel from "./SimpleFormViewModel";

declare var require: any;

export default class FormDemo extends FileViewer {

    public create(): void {
        this.require = require;
        this.demo = SimpleForm;
        this.files = [
            resolveModulePath(require, SimpleForm).replace("/dist/", "/src/") + ".html",
            resolveModulePath(require, SimpleFormViewModel).replace("/dist/", "/src/") + ".ts"
        ];
        super.create();
    }

}
