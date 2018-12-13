// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import SimpleValidationViewModel from "../../../../view-models/samples/validation/SimpleValidationViewModel";

export default  class SimpleValidation extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(SimpleValidationViewModel) ;
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("input");
        
        e2.appendChild(e4);
        
        this.setPrimitiveValue(e4, "placeholder", "Name" );
        

            this.bind(e4, "value",  [["viewModel","model","name"]], true  );
        

        const e5 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e5);

        const e6 = document.createElement("span");
        
        e2.appendChild(e6);
        
        this.setPrimitiveValue(e6, "style", "color: red" );
        

            this.bind(e6, "text",  [["viewModel","errorName"]], false , (v1) => (v1) );
        

        const e7 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e7);

        const e8 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e8);

        const e9 = document.createElement("div");
        
        this.append(e9);
        
        
        const e10 = document.createTextNode("\r\n        ");
        
        e9.appendChild(e10);

        const e11 = document.createElement("input");
        
        e9.appendChild(e11);
        
        this.setPrimitiveValue(e11, "placeholder", "Email" );
        

            this.bind(e11, "value",  [["viewModel","model","email"]], true  );
        

        const e12 = document.createTextNode("\r\n        ");
        
        e9.appendChild(e12);

        const e13 = document.createElement("span");
        
        e9.appendChild(e13);
        
        this.setPrimitiveValue(e13, "style", "color: red" );
        

            this.bind(e13, "text",  [["viewModel","errorEmail"]], false , (v1) => (v1) );
        

        const e14 = document.createTextNode("\r\n    ");
        
        e9.appendChild(e14);

        const e15 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e15);

        const e16 = document.createElement("button");
        
        this.append(e16);
        
            this.runAfterInit( () =>
            this.setLocalValue(e16, "eventClick", () => (this.viewModel).signup()) );
        
        const e17 = document.createTextNode("Signup");
        
        e16.appendChild(e17);

        const e18 = document.createTextNode("\r\n");
        
        this.element.appendChild(e18);
                }
            }

            

            