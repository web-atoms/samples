// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";

    import InsuranceViewModel from "../../../../../view-models/samples/validation/multi-view-model/InsuranceViewModel";
    import Applicant from "./Applicant";

export default  class Insurance extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(InsuranceViewModel) ;
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("input");
        
        e2.appendChild(e4);
        
        this.setPrimitiveValue(e4, "placeholder", "Name" );
        

            this.bind(e4, "value",  [["viewModel","model","broker"]], true  );
        

        const e5 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e5);

        const e6 = document.createElement("span");
        
        e2.appendChild(e6);
        
        this.setPrimitiveValue(e6, "style", "color: red" );
        

            this.bind(e6, "text",  [["viewModel","errorBroker"]], false , (v1) => (v1) );
        

        const e7 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e7);

        const e8 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e8);

            const e9 = new AtomItemsControl(this.app);
            
            
        const e10 = document.createTextNode("\r\n        ");
        
        e9.element.appendChild(e10);

        const e11 = document.createTextNode("    \r\n    ");
        
        e9.element.appendChild(e11);
            
            e9.runAfterInit( () =>
            e9.setLocalValue(e9.element, "items", (((this.viewModel) ? this.viewModel.model : undefined) ? this.viewModel.model.applicants : undefined)) );

        e9.itemTemplate = Insurance_itemTemplate_1_21Creator(this);
            
            this.append(e9);


        const e12 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e12);

        const e13 = document.createElement("button");
        
        this.append(e13);
        
            this.runAfterInit( () =>
            this.setLocalValue(e13, "eventClick", () => (this.viewModel).addApplicant()) );
        
        const e14 = document.createTextNode("Add Applicant");
        
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
            this.setLocalValue(e19, "eventClick", () => (this.viewModel).save()) );
        
        const e20 = document.createTextNode("Save");
        
        e19.appendChild(e20);

        const e21 = document.createTextNode("\r\n");
        
        this.element.appendChild(e21);
                }
            }

            function Insurance_itemTemplate_1_21Creator(__creator){
                return  class Insurance_itemTemplate_1_21 extends Applicant {

                

                public create(): void {
                    super.create();

                     ;

                    

                    
                    
                    
                    
        const e1 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e1);
                }
            }

            

            
            }

            