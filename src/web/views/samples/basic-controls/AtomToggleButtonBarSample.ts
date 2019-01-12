// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import AtomToggleButtonBarSampleViewModel from "../../../../view-models/basic-controls/AtomToggleButtonBarSampleViewModel";
    import ToggleBarSampleStyle from "../../../styles/ToggleBarSampleStyle";

export default  class AtomToggleButtonBarSample extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(AtomToggleButtonBarSampleViewModel) ;

        this.setPrimitiveValue(this.element, "style", "padding: 10px;" );
        
                    
            const e1 = new AtomToggleButtonBar(this.app);
            
            
            
                e1.controlStyle =  ToggleBarSampleStyle ;

        e1.setPrimitiveValue(e1.element, "labelPath", "label" );
        

        e1.setPrimitiveValue(e1.element, "valuePath", "value" );
        

            e1.runAfterInit( () =>
            e1.setLocalValue(e1.element, "items", ((this.viewModel) ? this.viewModel.genderList : undefined)) );

            e1.bind(e1.element, "value",  [["viewModel","gender"]], ["change", "keyup", "keydown", "blur"]  );

        e1.setPrimitiveValue(e1.element, "style", "height:33px;" );
        
            this.append(e1);


        const e2 = document.createElement("div");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "style", "font-size: 15px;\n                 margin-top: 20px;\n                 font-weight: 600" );
        

            this.bind(e2, "text",  [["viewModel","gender"]], false , (v1) => 'Selected Movie: ' + (v1) );
        
                }
            }

            

            