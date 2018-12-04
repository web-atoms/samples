// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import MDViewModel from "../../view-models/MDViewModel";

export default  class MDHost extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(MDViewModel, 'owner') ;
                    
        const e1 = document.createTextNode("\r\n");
        
        this.element.appendChild(e1);
                }
            }

            

            