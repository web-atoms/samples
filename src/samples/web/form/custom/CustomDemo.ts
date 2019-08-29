import FileViewer from "../../../../core/web/FileViewer";
import CustomFormSample from "./CustomFormSample";

declare var require: any;

export default class CustomDemo extends FileViewer {

	public create(): void {

		super.create();

		this.require = require;
		this.files = [
			"./CustomFormSample.html",
			"./CustomFormSampleStyle.ts",
			"./CustomForm.ts",
			"./CustomTemplate.ts",
			"../SimpleFormViewModel.ts"
		];
		this.demo = CustomFormSample;
	}
}
