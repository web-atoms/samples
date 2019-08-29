import FileViewer from "../../../../core/web/FileViewer";
import SimpleForm from "./SimpleForm";

declare var require: any;

export default class SimpleDemo extends FileViewer {

	public create(): void {

		super.create();

		this.require = require;
		this.files = [
			"./SimpleForm.html",
			"../SimpleFormViewModel.ts"
		];
		this.demo = SimpleForm;
	}
}
