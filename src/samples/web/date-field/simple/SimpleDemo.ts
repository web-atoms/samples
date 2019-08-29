import FileViewer from "../../../../core/web/FileViewer";
import DateField from "./DateField";

declare var require: any;

export default class SimpleDemo extends FileViewer {

	public create(): void {

		super.create();

		this.files = [
			"./DateField.html",
			"./DateFieldViewModel.ts"
		];
		this.require = require;
		this.demo = DateField;
	}
}
