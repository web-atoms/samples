// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import DemoView from "../../../../core/web/DemoView";
	    import FileViewer from "../../../../core/web/FileViewer";
	    import SimpleForm from "./SimpleForm";
	
	    var files = [
	        "web-atoms-samples/src/samples/web/form/simple/SimpleForm.html",
	        "web-atoms-samples/src/samples/web/form/simple/SimpleFormViewModel.ts"
	    ];
	
	
	
	export default class Demo extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			const e1 = new FileViewer(this.app);
			
			e1.setPrimitiveValue(e1.element, "style", "width: 800px; height: 400px" );
			
			e1.setPrimitiveValue(e1.element, "files",  files );
			
			this.append(e1);
			
			const e2 = new DemoView(this.app);
			
			const e3 = new SimpleForm(this.app);
			
			e2.append(e3);
			
			this.append(e2);
		}
	}