// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import BindingViewModel from "../BindingViewModel";
	
	
	export default class Binding extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(BindingViewModel) ;
			
			const e1 = document.createElement("div");
			
			this.append(e1);
			
			const e2 = document.createTextNode("One Time Binding");
			e1.appendChild(e2);
			
			const e3 = document.createElement("div");
			
			this.append(e3);
			
			this.runAfterInit( () => this.setLocalValue(e3, "text",  ((this.viewModel) ? this.viewModel.title : undefined) ) );
			
			const e4 = document.createElement("div");
			
			this.append(e4);
			
			const e5 = document.createTextNode("One Way Binding - if you modify anything in following box, \r\n        it will not update anywhere");
			e4.appendChild(e5);
			
			const e6 = document.createElement("input");
			
			this.append(e6);
			
			this.bind(e6, "value",  [["viewModel","title"]], false , null );
			
			const e7 = document.createElement("div");
			
			this.append(e7);
			
			const e8 = document.createTextNode("Two Way Binding - if you modify anything here, it will \r\n        also update on one way binding but not one time binding");
			e7.appendChild(e8);
			
			const e9 = document.createElement("input");
			
			this.append(e9);
			
			this.bind(e9, "value",  [["viewModel","title"]], true  );
		}
	}