// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	// tslint:disable
	
	export default class Start extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "style", "padding: 5px;" );
			
			const e1 = document.createTextNode("\r\n    Start Page.\r\n\r\n    ");
			this.element.appendChild(e1);
			// e2
			//  Frame's view model has parent set to Frame Host's View Model 
			
			const e3 = document.createElement("button");
			
			this.append(e3);
			
			this.setPrimitiveValue(e3, "eventClick",  () => this.parent.viewModel.openPage1() );
			
			const e4 = document.createTextNode("Open Page 1");
			e3.appendChild(e4);
			
			const e5 = document.createElement("button");
			
			this.append(e5);
			
			this.setPrimitiveValue(e5, "eventClick",  () => this.parent.viewModel.openPage2() );
			
			const e6 = document.createTextNode("Open Page 2");
			e5.appendChild(e6);
		}
	}