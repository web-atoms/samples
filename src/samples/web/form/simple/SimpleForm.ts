// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomComboBox} from "web-atoms-core/dist/web/controls/AtomComboBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
	    import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
	    import SimpleViewModel from "./SimpleViewModel";
	
	
	export default class SimpleForm extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(SimpleViewModel) ;
			
			const e1 = new AtomForm(this.app);
			
			const e2 = new AtomField(this.app);
			
			e2.setPrimitiveValue(e2.element, "label", "First name:" );
			
			e2.setPrimitiveValue(e2.element, "required", "true" );
			
			e2.bind(e2.element, "error",  [["viewModel","errorFirstName"]], false , null );
			
			const e3 = document.createElement("input");
			
			e2.append(e3);
			
			e2.setPrimitiveValue(e3, "type", "text" );
			
			e2.bind(e3, "value",  [["viewModel","model","firstName"]], true  );
			
			e1.append(e2);
			
			const e4 = new AtomField(this.app);
			
			e4.setPrimitiveValue(e4.element, "label", "Last name:" );
			
			e4.setPrimitiveValue(e4.element, "required", "true" );
			
			e4.bind(e4.element, "error",  [["viewModel","errorLastName"]], false , null );
			
			const e5 = document.createElement("input");
			
			e4.append(e5);
			
			e4.setPrimitiveValue(e5, "type", "text" );
			
			e4.bind(e5, "value",  [["viewModel","model","lastName"]], true  );
			
			e1.append(e4);
			
			const e6 = new AtomField(this.app);
			
			e6.setPrimitiveValue(e6.element, "label", "Email Address:" );
			
			e6.setPrimitiveValue(e6.element, "required", "true" );
			
			e6.bind(e6.element, "error",  [["viewModel","errorEmailAddress"]], false , null );
			
			e6.setPrimitiveValue(e6.element, "helpText", "We will send you email to verify your account." );
			
			const e7 = document.createElement("input");
			
			e6.append(e7);
			
			e6.setPrimitiveValue(e7, "type", "text" );
			
			e6.bind(e7, "value",  [["viewModel","model","emailAddress"]], true  );
			
			e1.append(e6);
			
			const e8 = new AtomField(this.app);
			
			e8.setPrimitiveValue(e8.element, "label", "Country:" );
			
			const e9 = new AtomComboBox(this.app);
			
			e9.bind(e9.element, "items",  [["viewModel","countryList"]], false , null );
			
			e9.bind(e9.element, "value",  [["viewModel","model","country"]], true  );
			
			e8.append(e9);
			
			e1.append(e8);
			
			const e10 = new AtomField(this.app);
			
			e10.setPrimitiveValue(e10.element, "label", "State:" );
			
			const e11 = new AtomComboBox(this.app);
			
			e11.bind(e11.element, "items",  [["viewModel","stateList"]], false , null );
			
			e11.bind(e11.element, "value",  [["viewModel","model","state"]], true  );
			
			e10.append(e11);
			
			e1.append(e10);
			
			const e12 = new AtomField(this.app);
			
			e12.setPrimitiveValue(e12.element, "label", "Password:" );
			
			e12.setPrimitiveValue(e12.element, "required", "true" );
			
			e12.bind(e12.element, "error",  [["viewModel","errorPassword"]], false , null );
			
			const e13 = document.createElement("input");
			
			e12.append(e13);
			
			e12.setPrimitiveValue(e13, "type", "password" );
			
			e12.bind(e13, "value",  [["viewModel","model","password"]], true  );
			
			e1.append(e12);
			
			const e14 = new AtomField(this.app);
			
			e14.setPrimitiveValue(e14.element, "label", "Password (Again):" );
			
			e14.setPrimitiveValue(e14.element, "required", "true" );
			
			e14.bind(e14.element, "error",  [["viewModel","errorPasswordAgain"]], false , null );
			
			const e15 = document.createElement("input");
			
			e14.append(e15);
			
			e14.setPrimitiveValue(e15, "type", "password" );
			
			e14.bind(e15, "value",  [["viewModel","model","passwordAgain"]], true  );
			
			e1.append(e14);
			
			this.append(e1);
			
			const e16 = document.createElement("button");
			
			this.append(e16);
			
			this.setPrimitiveValue(e16, "eventClick",  () => this.viewModel.signup() );
			
			const e17 = document.createTextNode("Signup");
			e16.appendChild(e17);
		}
	}