// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import InsuranceViewModel from "../../../../../view-models/samples/validation/multi-view-model/InsuranceViewModel";
    import Applicant from "./Applicant";

export default  class Insurance extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(InsuranceViewModel) ;
                    
        const e1 = document.createElement("div");
        
        this.append(e1);
        
        
        const e2 = document.createElement("input");
        
        e1.appendChild(e2);
        
        this.setPrimitiveValue(e2, "placeholder", "Name" );
        

            this.bind(e2, "value",  [["viewModel","model","broker"]], true  );
        

        const e3 = document.createElement("span");
        
        e1.appendChild(e3);
        
        this.setPrimitiveValue(e3, "style", "color: red" );
        

            this.bind(e3, "text",  [["viewModel","errorBroker"]], false , (v1) => (v1) );
        

            const e4 = new AtomItemsControl(this.app);
            
            
            
            e4.runAfterInit( () =>
            e4.setLocalValue(e4.element, "items",  (((this.viewModel) ? this.viewModel.model : undefined) ? this.viewModel.model.applicants : undefined) ) );

        e4.itemTemplate = Insurance_itemTemplate_1_11Creator(this);
            
            this.append(e4);


        const e5 = document.createElement("button");
        
        this.append(e5);
        
            this.runAfterInit( () =>
            this.setLocalValue(e5, "eventClick",  () => (this.viewModel).addApplicant() ) );
        
        const e6 = document.createTextNode("Add Applicant");
        
        e5.appendChild(e6);

        const e7 = document.createElement("div");
        
        this.append(e7);
        
        
        const e8 = document.createTextNode("\r\n        Other fields...\r\n    ");
        
        e7.appendChild(e8);

        const e9 = document.createElement("button");
        
        this.append(e9);
        
            this.runAfterInit( () =>
            this.setLocalValue(e9, "eventClick",  () => (this.viewModel).save() ) );
        
        const e10 = document.createTextNode("Save");
        
        e9.appendChild(e10);
                }
            }

            function Insurance_itemTemplate_1_11Creator(__creator){
                return  class Insurance_itemTemplate_1_11 extends Applicant {

                

                public create(): void {
                    super.create();

                     ;

                    

                    
                    
                    
                    
                }
            }

            

            
            }

            