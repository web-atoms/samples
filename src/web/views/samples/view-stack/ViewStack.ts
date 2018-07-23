// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomViewStack} from "web-atoms-core/bin/web/controls/AtomViewStack";
import {AtomGridView} from "web-atoms-core/bin/web/controls/AtomGridView";
export default  class ViewStack extends AtomGridView {

                
            @BindableProperty
            public index: any;
            

                public create(): void {
                    super.create();

                    const __creator = this;

                    
                this.index =  0;
            

                    
                    
                    
        this.setPrimitiveValue(this.element, "columns", "*" );
        

        this.setPrimitiveValue(this.element, "rows", "50, *" );
        
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("button");
        
        e2.appendChild(e4);
        
            this.bind(e4, "enabled",  [["this","index"]], false , (v1) => (v1) , __creator);

                this.setPrimitiveValue(e4, "eventClick",  () => this.index = Math.max(0, this.index - 1) );
        
        const e5 = document.createTextNode("Previous");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e6);

        const e7 = document.createElement("button");
        
        e2.appendChild(e7);
        
                this.setPrimitiveValue(e7, "eventClick",  () => this.index = Math.min(1, this.index + 1 ) );
        
        const e8 = document.createTextNode("Next");
        
        e7.appendChild(e8);

        const e9 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e9);

        const e10 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e10);

            const e11 = new AtomViewStack(this.app);
            
            
        const e12 = document.createTextNode("\r\n        ");
        
        e11.element.appendChild(e12);

        const e13 = document.createElement("div");
        
        e11.append(e13);
        
        
        const e14 = document.createTextNode("View 1");
        
        e13.appendChild(e14);

        const e15 = document.createTextNode("\r\n        ");
        
        e11.element.appendChild(e15);

        const e16 = document.createElement("div");
        
        e11.append(e16);
        
        
        const e17 = document.createTextNode("View 2");
        
        e16.appendChild(e17);

        const e18 = document.createTextNode("        \r\n    ");
        
        e11.element.appendChild(e18);
            
        e11.setPrimitiveValue(e11.element, "row", "1" );
        

            e11.bind(e11.element, "selectedIndex",  [["this","index"]], false , (v1) => (v1) , __creator);
            this.append(e11);


        const e19 = document.createTextNode("\r\n");
        
        this.element.appendChild(e19);
                }
            }

            

            