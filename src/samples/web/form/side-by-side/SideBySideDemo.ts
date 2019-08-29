import FileViewer from "../../../../core/web/FileViewer";
import SideBySideForm from "./SideBySideForm";

declare var require: any;

export default class SideBySideDemo extends FileViewer {

	public create(): void {

		super.create();

		this.require = require;
		this.files = [
			"./SideBySideForm.html",
			"./SideBySideFormStyle.ts",
			"../SimpleFormViewModel.ts"
		];
		this.demo = SideBySideForm;
	}
}
