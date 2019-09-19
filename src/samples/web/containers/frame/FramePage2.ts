// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	// tslint:disable
	
	export default class FramePage2 extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "style", "padding: 5px;" );
			
			const e1 = document.createTextNode("\r\n    Frame Page 2\r\n");
			this.element.appendChild(e1);
		}
	}