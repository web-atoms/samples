// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import SimpleValidationViewModel from "./SimpleValidationViewModel";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class SimpleValidation extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(SimpleValidationViewModel) ;
			
			const e1 = document.createElement("div");
			
			this.append(e1);
			
			const e2 = document.createElement("input");
			
			e1.appendChild(e2);
			
			this.setPrimitiveValue(e2, "placeholder", "Name" );
			
			this.bind(e2, "value",  [["viewModel","model","name"]], true  );
			
			const e3 = document.createElement("span");
			
			e1.appendChild(e3);
			
			this.setPrimitiveValue(e3, "style", "color: red" );
			
			this.bind(e3, "text",  [["viewModel","errorName"]], false , null );
			
			const e4 = document.createElement("div");
			
			this.append(e4);
			
			const e5 = document.createElement("input");
			
			e4.appendChild(e5);
			
			this.setPrimitiveValue(e5, "placeholder", "Email" );
			
			this.bind(e5, "value",  [["viewModel","model","email"]], true  );
			
			const e6 = document.createElement("span");
			
			e4.appendChild(e6);
			
			this.setPrimitiveValue(e6, "style", "color: red" );
			
			this.bind(e6, "text",  [["viewModel","errorEmail"]], false , null );
			
			const e7 = document.createElement("button");
			
			this.append(e7);
			
			this.runAfterInit( () => this.setLocalValue(e7, "eventClick",  () => (this.viewModel).signup() ) );
			
			const e8 = document.createTextNode("Signup");
			e7.appendChild(e8);
			
			const e9 = document.createElement("button");
			
			this.append(e9);
			
			this.runAfterInit( () => this.setLocalValue(e9, "eventClick",  () => (this.viewModel).cancel() ) );
			
			const e10 = document.createTextNode("Cancel");
			e9.appendChild(e10);
		}
	}