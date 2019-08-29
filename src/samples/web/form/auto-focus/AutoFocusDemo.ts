import FileViewer from "../../../../core/web/FileViewer";
import AutoFocusNext from "./AutoFocusNext";

declare var require: any;

export default class AutoFocusDemo extends FileViewer {

	public create(): void {

		super.create();

		this.require = require;
		this.files = [
			"./AutoFocusNext.html",
			"../side-by-side/SideBySideFormStyle.ts",
			"../SimpleFormViewModel.ts"
		];
		this.demo = AutoFocusNext;
	}
}
