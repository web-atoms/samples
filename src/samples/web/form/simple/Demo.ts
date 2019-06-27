// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import DemoView from "../../../../core/web/DemoView";
	
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
			
			const e1 = new DemoView(this.app);
			
			e1.setPrimitiveValue(e1.element, "files",  files );
			
			this.append(e1);
		}
	}