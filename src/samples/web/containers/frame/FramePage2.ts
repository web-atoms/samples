// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	// tslint:disable
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class FramePage2 extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "style", "padding: 5px;" );
			
			const e1 = document.createTextNode("\n    Frame Page 2\n");
			this.element.appendChild(e1);
		}
	}