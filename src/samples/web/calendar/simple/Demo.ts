// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import FileViewer from "../../../../core/web/FileViewer";
	    import Calendar from "./Calendar";
	
	    declare var require: any;
	
	    var files = [
	        "./Calendar.html",
	        "./CalendarViewModel.ts"
	    ];
	
	
	
	export default class Demo extends FileViewer {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "files",  files );
			
			this.setPrimitiveValue(this.element, "require",  require );
			
			this.setPrimitiveValue(this.element, "demo",  Calendar );
		}
	}