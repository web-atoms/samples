// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import FontAwesomeStyle from "./FontAwesomeStyle";

export default  class FontAwesome extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.defaultControlStyle =  FontAwesomeStyle ;
            

                    this.runAfterInit(() => {
                        this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root );
                    });
                    
                    
            const e1 = document.createElement("button");
            
            this.append(e1);
            
            
            const e2 = document.createElement("i");
            
            e1.appendChild(e2);
            
        this.setPrimitiveValue(e2, "class", "far fa-arrow-alt-circle-left" );
        
            

        const e3 = document.createTextNode("\r\n        Back");
        
        e1.appendChild(e3);

            const e4 = document.createElement("button");
            
            this.append(e4);
            
            
            const e5 = document.createElement("i");
            
            e4.appendChild(e5);
            
        this.setPrimitiveValue(e5, "class", "far fa-arrow-alt-circle-right" );
        
            

        const e6 = document.createTextNode("\r\n        Back");
        
        e4.appendChild(e6);
                }
            }

            

            