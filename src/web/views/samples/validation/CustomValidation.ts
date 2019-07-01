// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import CustomValidationViewModel from "../../../../view-models/samples/validation/CustomValidationViewModel";
	
	
	export default class CustomValidation extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(CustomValidationViewModel) ;
			
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
			
			const e4 = new AtomItemsControl(this.app);
			
			e4.runAfterInit( () => e4.setLocalValue(e4.element, "items",  (((e4.viewModel) ? e4.viewModel.model : undefined) ? e4.viewModel.model.emails : undefined) ) );
			
			e4.itemTemplate = CustomValidation_itemTemplate_1_10Creator(this);
			
			this.append(e4);
			
			const e5 = document.createElement("button");
			
			this.append(e5);
			
			this.runAfterInit( () => this.setLocalValue(e5, "eventClick",  () => (this.viewModel).addEmail() ) );
			
			const e6 = document.createTextNode("Add Email");
			e5.appendChild(e6);
			
			const e7 = document.createElement("div");
			
			this.append(e7);
			
			const e8 = document.createTextNode("\r\n        Other fields...\r\n    ");
			e7.appendChild(e8);
			
			const e9 = document.createElement("button");
			
			this.append(e9);
			
			this.runAfterInit( () => this.setLocalValue(e9, "eventClick",  () => (this.viewModel).signup() ) );
			
			const e10 = document.createTextNode("Signup");
			e9.appendChild(e10);
		}
	}
	
	function CustomValidation_itemTemplate_1_10Creator(__creator) {
		return class CustomValidation_itemTemplate_1_10 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("input");
				
				this.append(e1);
				
				this.setPrimitiveValue(e1, "placeholder", "Email" );
				
				this.bind(e1, "value",  [["data","email"]], true  );
				
				const e2 = document.createElement("span");
				
				this.append(e2);
				
				this.setPrimitiveValue(e2, "style", "color: red" );
				
				this.bind(e2, "text",  [["data","error"]], false , null );
			}
		}
	}