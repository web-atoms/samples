// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import CustomValidationViewModel from "../../../../view-models/samples/validation/CustomValidationViewModel";

export default  class CustomValidation extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(CustomValidationViewModel) ;
                    
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

            const e9 = new AtomItemsControl(this.app);
            
            
        const e10 = document.createTextNode("\r\n        ");
        
        e9.element.appendChild(e10);

        const e11 = document.createTextNode("    \r\n    ");
        
        e9.element.appendChild(e11);
            
            e9.runAfterInit( () =>
            e9.setLocalValue(e9.element, "items", (((this.viewModel) ? this.viewModel.model : undefined) ? this.viewModel.model.emails : undefined)) );

        e9.itemTemplate = CustomValidation_itemTemplate_1_10Creator(this);
            
            this.append(e9);


        const e12 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e12);

        const e13 = document.createElement("button");
        
        this.append(e13);
        
            this.runAfterInit( () =>
            this.setLocalValue(e13, "eventClick", () => (this.viewModel).addEmail()) );
        
        const e14 = document.createTextNode("Add Email");
        
        e13.appendChild(e14);

        const e15 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e15);

        const e16 = document.createElement("div");
        
        this.append(e16);
        
        
        const e17 = document.createTextNode("\r\n        Other fields...\r\n    ");
        
        e16.appendChild(e17);

        const e18 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e18);

        const e19 = document.createElement("button");
        
        this.append(e19);
        
            this.runAfterInit( () =>
            this.setLocalValue(e19, "eventClick", () => (this.viewModel).signup()) );
        
        const e20 = document.createTextNode("Signup");
        
        e19.appendChild(e20);

        const e21 = document.createTextNode("\r\n");
        
        this.element.appendChild(e21);
                }
            }

            function CustomValidation_itemTemplate_1_10Creator(__creator){
                return  class CustomValidation_itemTemplate_1_10 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
                    
        const e1 = document.createTextNode("\r\n            ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("input");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "placeholder", "Email" );
        

            this.bind(e2, "value",  [["data","email"]], true  );
        

        const e3 = document.createTextNode("\r\n            ");
        
        this.element.appendChild(e3);

        const e4 = document.createElement("span");
        
        this.append(e4);
        
        this.setPrimitiveValue(e4, "style", "color: red" );
        

            this.bind(e4, "text",  [["data","error"]], false , (v1) => (v1) );
        

        const e5 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e5);
                }
            }

            

            
            }

            