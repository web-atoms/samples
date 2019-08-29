import FileViewer from "../../../../core/web/FileViewer";
import Binding from "./Binding";

declare var require: any;

export default class SimpleDemo extends FileViewer {

	public create(): void {

		super.create();

		this.files = [
			"./Binding.html",
			"../BindingViewModel.ts"
		];
		this.require = require;
		this.demo = Binding;
	}
}
