// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
	    import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
	    import SimpleFormViewModel from "../SimpleFormViewModel";
	    import SideBySideFormStyle from "../side-by-side/SideBySideFormStyle"; 
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class AutoFocusNext extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(SimpleFormViewModel) ;
			
			const e1 = document.createElement("h3");
			
			this.append(e1);
			
			const e2 = document.createTextNode("The focus will move to next input as you press enter");
			e1.appendChild(e2);
			// e3
			//  event-submit and focus-next-on-enter must be set 
			
			const e4 = new AtomForm(this.app);
			
			e4.defaultControlStyle =  SideBySideFormStyle ;
			
			e4.setPrimitiveValue(e4.element, "focusNextOnEnter",  true );
			
			e4.setPrimitiveValue(e4.element, "eventSubmit",  () => this.viewModel.signup() );
			
			const e5 = new AtomField(this.app);
			
			e5.setPrimitiveValue(e5.element, "label", "First name:" );
			
			e5.setPrimitiveValue(e5.element, "required", "true" );
			
			e5.bind(e5.element, "error",  [["viewModel","errorFirstName"]], false , null );
			
			const e6 = document.createElement("input");
			
			e5.append(e6);
			
			e5.setPrimitiveValue(e6, "type", "text" );
			
			e5.bind(e6, "value",  [["viewModel","model","firstName"]], true  );
			
			e4.append(e5);
			
			const e7 = new AtomField(this.app);
			
			e7.setPrimitiveValue(e7.element, "label", "Last name:" );
			
			e7.setPrimitiveValue(e7.element, "required", "true" );
			
			e7.bind(e7.element, "error",  [["viewModel","errorLastName"]], false , null );
			
			const e8 = document.createElement("input");
			
			e7.append(e8);
			
			e7.setPrimitiveValue(e8, "type", "text" );
			
			e7.bind(e8, "value",  [["viewModel","model","lastName"]], true  );
			
			e4.append(e7);
			
			const e9 = new AtomField(this.app);
			
			e9.setPrimitiveValue(e9.element, "label", "Email Address:" );
			
			e9.setPrimitiveValue(e9.element, "required", "true" );
			
			e9.bind(e9.element, "error",  [["viewModel","errorEmailAddress"]], false , null );
			
			e9.setPrimitiveValue(e9.element, "helpText", "We will send you email to verify your account." );
			
			const e10 = document.createElement("input");
			
			e9.append(e10);
			
			e9.setPrimitiveValue(e10, "style", "width: 500px" );
			
			e9.setPrimitiveValue(e10, "type", "text" );
			
			e9.bind(e10, "value",  [["viewModel","model","emailAddress"]], true  );
			
			e4.append(e9);
			
			const e11 = new AtomField(this.app);
			
			e11.setPrimitiveValue(e11.element, "label", "Password:" );
			
			e11.setPrimitiveValue(e11.element, "required", "true" );
			
			e11.bind(e11.element, "error",  [["viewModel","errorPassword"]], false , null );
			
			const e12 = document.createElement("input");
			
			e11.append(e12);
			
			e11.setPrimitiveValue(e12, "type", "password" );
			
			e11.bind(e12, "value",  [["viewModel","model","password"]], true  );
			
			e4.append(e11);
			
			const e13 = new AtomField(this.app);
			
			e13.setPrimitiveValue(e13.element, "label", "Password (Again):" );
			
			e13.setPrimitiveValue(e13.element, "required", "true" );
			
			e13.bind(e13.element, "error",  [["viewModel","errorPasswordAgain"]], false , null );
			// e14
			//  last input must have submit class 
			
			const e15 = document.createElement("input");
			
			e13.append(e15);
			
			e13.setPrimitiveValue(e15, "class", "submit" );
			
			e13.setPrimitiveValue(e15, "type", "password" );
			
			e13.bind(e15, "value",  [["viewModel","model","passwordAgain"]], true  );
			
			e4.append(e13);
			
			this.append(e4);
			
			const e16 = document.createElement("button");
			
			this.append(e16);
			
			this.setPrimitiveValue(e16, "eventClick",  () => this.viewModel.signup() );
			
			const e17 = document.createTextNode("Signup");
			e16.appendChild(e17);
		}
	}