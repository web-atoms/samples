import FileViewer from "../../../../core/web/FileViewer";
import CustomFormSample from "./CustomFormSample";

declare var require: any;

export default class CustomDemo extends FileViewer {

	public create(): void {

		super.create();

		this.require = require;
		this.files = [
			"./CustomFormSample.html",
			"./CustomTemplate.html",
			"./CustomFormStyle.ts",
			"./CustomForm.ts",
			"../SimpleFormViewModel.ts"
		];
		this.demo = CustomFormSample;
	}
}
