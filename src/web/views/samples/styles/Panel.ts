// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import AppPanelStyle from "../../../styles/AppPanelStyle";

export default  class Panel extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.defaultControlStyle =  AppPanelStyle ;
            

        this.setPrimitiveValue(this.element, "style", "padding:10px" );
        
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
            this.bind(e2, "styleClass",  [["this","controlStyle","root"]], false , (v1) => (v1) , __creator);
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("header");
        
        e2.appendChild(e4);
        
        
        const e5 = document.createTextNode("Header");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e6);

        const e7 = document.createElement("section");
        
        e2.appendChild(e7);
        
        
        const e8 = document.createTextNode("Panel Text");
        
        e7.appendChild(e8);

        const e9 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e9);

        const e10 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e10);
                }
            }

            

            