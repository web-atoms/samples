// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
export default  class Index extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        this.setPrimitiveValue(this.element, "rows", "50,*,30" );
        
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("header");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("h3");
        
        e2.appendChild(e4);
        
        this.setPrimitiveValue(e4, "style", "padding:0; margin:5px" );
        
        
        const e5 = document.createTextNode("Web Atoms");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e6);

        const e7 = document.createElement("div");
        
        e2.appendChild(e7);
        
        this.setPrimitiveValue(e7, "style", "font-size: smaller" );
        
        
        const e8 = document.createTextNode("MVVM JavaScript Framework for Desktop/Mobile - ");
        
        e7.appendChild(e8);

        const e9 = document.createElement("span");
        
        e7.appendChild(e9);
        
        this.setPrimitiveValue(e9, "style", "font-weight: bold" );
        
        
        const e10 = document.createTextNode("Made in India");
        
        e9.appendChild(e10);

        const e11 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e11);

        const e12 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e12);

        const e13 = document.createElement("section");
        
        this.append(e13);
        
        this.setPrimitiveValue(e13, "row", "1" );
        

        this.setPrimitiveValue(e13, "style", "margin: auto; position: absolute; left:0; top:0; bottom: 0; right:0; width: 200px; height: 50px; text-align: center" );
        
        
        const e14 = document.createTextNode("\r\n        ");
        
        e13.appendChild(e14);

        const e15 = document.createElement("a");
        
        e13.appendChild(e15);
        
        this.setPrimitiveValue(e15, "href", "/uiv/web-atoms-samples/dist/web/views/AppHost" );
        

        this.setPrimitiveValue(e15, "target", "_tab" );
        
        
        const e16 = document.createElement("button");
        
        e15.appendChild(e16);
        
        
        const e17 = document.createTextNode("Samples");
        
        e16.appendChild(e17);

        const e18 = document.createTextNode("\r\n        ");
        
        e13.appendChild(e18);

        const e19 = document.createElement("a");
        
        e13.appendChild(e19);
        
        this.setPrimitiveValue(e19, "href", "https://github.com/neurospeech/web-atoms-core" );
        
        
        const e20 = document.createElement("button");
        
        e19.appendChild(e20);
        
        
        const e21 = document.createTextNode("Source Code");
        
        e20.appendChild(e21);

        const e22 = document.createTextNode("\r\n    ");
        
        e13.appendChild(e22);

        const e23 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e23);

        const e24 = document.createElement("footer");
        
        this.append(e24);
        
        this.setPrimitiveValue(e24, "row", "2" );
        

        this.setPrimitiveValue(e24, "style", "text-align: right" );
        
        
        const e25 = document.createTextNode("\r\n        © NeuroSpeech Technologies Pvt Ltd\r\n    ");
        
        e24.appendChild(e25);

        const e26 = document.createTextNode("\r\n");
        
        this.element.appendChild(e26);
                }
            }

            

            