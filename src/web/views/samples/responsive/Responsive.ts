// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import ResponsiveStyle from "../../../styles/ResponsiveStyle";

export default  class Responsive extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.defaultControlStyle =  ResponsiveStyle ;
            

                    this.runAfterInit(() => {
                        this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root );
                    });
                    
                    
                }
            }

            

            