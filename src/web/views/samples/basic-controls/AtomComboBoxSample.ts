// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomComboBox} from "web-atoms-core/dist/web/controls/AtomComboBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import AtomComboBoxSampleViewModel from "../../../../view-models/basic-controls/AtomComboBoxSampleViewModel";

export default  class AtomComboBoxSample extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(AtomComboBoxSampleViewModel) ;

        this.setPrimitiveValue(this.element, "style", "padding: 10px;" );
        
                    
        const e1 = document.createTextNode("\n    ");
        
        this.element.appendChild(e1);

            const e2 = new AtomComboBox(this.app, document.createElement("select"));
            
            
        const e3 = document.createTextNode("\n    ");
        
        e2.element.appendChild(e3);
            
        e2.setPrimitiveValue(e2.element, "labelPath", "name" );
        

        e2.setPrimitiveValue(e2.element, "valuePath", "name" );
        

            e2.bind(e2.element, "items",  [["viewModel","movies","value"]], false , (v1) => (v1) );

            e2.bind(e2.element, "value",  [["viewModel","name"]], ["change", "keyup", "keydown", "blur"]  );

        e2.setPrimitiveValue(e2.element, "style", "width:200px;height:33px;margin-bottom:10px;" );
        
            this.append(e2);


        const e4 = document.createTextNode("\n    ");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("div");
        
        this.append(e5);
        
            this.bind(e5, "text",  [["viewModel","name"]], false , (v1) => 'Selected Movie: ' + (v1) );
        
        const e6 = document.createTextNode("\n    ");
        
        e5.appendChild(e6);

        const e7 = document.createTextNode("\n");
        
        this.element.appendChild(e7);
                }
            }

            

            