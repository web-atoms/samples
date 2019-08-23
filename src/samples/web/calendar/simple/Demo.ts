import FileViewer from "../../../../core/web/FileViewer";
import Calendar from "./Calendar";

declare var require: any;

export default class Demo extends FileViewer {

	public create(): void {

		super.create();

		this.files = [
			"./Calendar.html",
			"./CalendarViewModel.ts"
		];
		this.require = require;
		this.demo = Calendar;
	}
}
