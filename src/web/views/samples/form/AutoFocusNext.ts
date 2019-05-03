// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
    import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
    import SignupFormViewModel from "../../../../view-models/form/SignupFormViewModel";
    import SideBySideFormStyle from "./SideBySideFormStyle"; 

export default  class AutoFocusNext extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(SignupFormViewModel) ;
                    
            const e1 = new AtomForm(this.app);
            
            
            e1.defaultControlStyle =  SideBySideFormStyle ;
            

                e1.setPrimitiveValue(e1.element, "focusNextOnEnter",  true );

                e1.setPrimitiveValue(e1.element, "eventSubmit",  () => this.viewModel.signup() );
            
            const e2 = new AtomField(this.app);
            
            
        e2.setPrimitiveValue(e2.element, "label", "First name:" );
        

        e2.setPrimitiveValue(e2.element, "required", "true" );
        

            e2.bind(e2.element, "error",  [["viewModel","errorFirstName"]], false , (v1) => (v1) );
            
            const e3 = document.createElement("input");
            
            e2.append(e3);
            
        e2.setPrimitiveValue(e3, "type", "text" );
        

            e2.bind(e3, "value",  [["viewModel","model","firstName"]], true  );
            
            e1.append(e2);


            const e4 = new AtomField(this.app);
            
            
        e4.setPrimitiveValue(e4.element, "label", "Last name:" );
        

        e4.setPrimitiveValue(e4.element, "required", "true" );
        

            e4.bind(e4.element, "error",  [["viewModel","errorLastName"]], false , (v1) => (v1) );
            
            const e5 = document.createElement("input");
            
            e4.append(e5);
            
        e4.setPrimitiveValue(e5, "type", "text" );
        

            e4.bind(e5, "value",  [["viewModel","model","lastName"]], true  );
            
            e1.append(e4);


            const e6 = new AtomField(this.app);
            
            
        e6.setPrimitiveValue(e6.element, "label", "Email Address:" );
        

        e6.setPrimitiveValue(e6.element, "required", "true" );
        

            e6.bind(e6.element, "error",  [["viewModel","errorEmailAddress"]], false , (v1) => (v1) );

        e6.setPrimitiveValue(e6.element, "helpText", "We will send you email to verify your account." );
        
            
            const e7 = document.createElement("input");
            
            e6.append(e7);
            
        e6.setPrimitiveValue(e7, "style", "width: 500px" );
        

        e6.setPrimitiveValue(e7, "type", "text" );
        

            e6.bind(e7, "value",  [["viewModel","model","emailAddress"]], true  );
            
            e1.append(e6);


            const e8 = new AtomField(this.app);
            
            
        e8.setPrimitiveValue(e8.element, "label", "Password:" );
        

        e8.setPrimitiveValue(e8.element, "required", "true" );
        

            e8.bind(e8.element, "error",  [["viewModel","errorPassword"]], false , (v1) => (v1) );
            
            const e9 = document.createElement("input");
            
            e8.append(e9);
            
        e8.setPrimitiveValue(e9, "type", "text" );
        

            e8.bind(e9, "value",  [["viewModel","model","password"]], true  );
            
            e1.append(e8);


            const e10 = new AtomField(this.app);
            
            
        e10.setPrimitiveValue(e10.element, "label", "Password (Again):" );
        

        e10.setPrimitiveValue(e10.element, "required", "true" );
        

            e10.bind(e10.element, "error",  [["viewModel","errorPasswordAgain"]], false , (v1) => (v1) );
            // e11
//  last input must have submit class 

            const e12 = document.createElement("input");
            
            e10.append(e12);
            
        e10.setPrimitiveValue(e12, "class", "submit" );
        

        e10.setPrimitiveValue(e12, "type", "text" );
        

            e10.bind(e12, "value",  [["viewModel","model","passwordAgain"]], true  );
            
            e1.append(e10);

            this.append(e1);


            const e13 = document.createElement("button");
            
            this.append(e13);
            
                this.setPrimitiveValue(e13, "eventClick",  () => this.viewModel.signup() );
            
        const e14 = document.createTextNode("Signup");
        
        e13.appendChild(e14);
                }
            }

            

            