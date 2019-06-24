// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomViewStack} from "web-atoms-core/dist/web/controls/AtomViewStack";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
	
	    import { ViewStackViewModel } from "./ViewStackViewModel";
	
	
	export default class ViewStack extends AtomGridView {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(ViewStackViewModel) ;
			
			this.setPrimitiveValue(this.element, "columns", "*" );
			
			this.setPrimitiveValue(this.element, "rows", "50, *" );
			
			const e1 = document.createElement("div");
			
			this.append(e1);
			
			const e2 = new AtomToggleButtonBar(this.app);
			
			e2.runAfterInit( () => e2.setLocalValue(e2.element, "items",  ((this.viewModel) ? this.viewModel.items : undefined) ) );
			
			e2.bind(e2.element, "value",  [["viewModel","index"]], true  );
			
			e1.appendChild(e2.element);
			
			const e3 = new AtomViewStack(this.app);
			
			e3.setPrimitiveValue(e3.element, "row", "1" );
			
			e3.bind(e3.element, "selectedIndex",  [["viewModel","index"]], false , null );
			
			const e4 = document.createElement("div");
			
			e3.append(e4);
			
			const e5 = document.createTextNode("View 1");
			e4.appendChild(e5);
			
			const e6 = document.createElement("div");
			
			e3.append(e6);
			
			const e7 = document.createTextNode("View 2");
			e6.appendChild(e7);
			
			const e8 = document.createElement("div");
			
			e3.append(e8);
			
			const e9 = document.createTextNode("View 3");
			e8.appendChild(e9);
			
			this.append(e3);
		}
	}