// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomViewStack} from "web-atoms-core/dist/web/controls/AtomViewStack";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";

    import { ViewStackViewModel } from "./ViewStackViewModel";

export default  class ViewStack extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
                this.viewModel =  this.resolve(ViewStackViewModel) ;

        this.setPrimitiveValue(this.element, "columns", "*" );
        

        this.setPrimitiveValue(this.element, "rows", "50, *" );
        
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e3);

            const e4 = new AtomToggleButtonBar(this.app);
            
            
            
            e4.runAfterInit( () =>
            e4.setLocalValue(e4.element, "items", (this.viewModel.items)) );

            e4.bind(e4.element, "value",  [["viewModel","index"]], true  );
            this.append(e4);


        const e5 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e5);

        const e6 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e6);

            const e7 = new AtomViewStack(this.app);
            
            
        const e8 = document.createTextNode("\r\n        ");
        
        e7.element.appendChild(e8);

        const e9 = document.createElement("div");
        
        e7.append(e9);
        
        
        const e10 = document.createTextNode("View 1");
        
        e9.appendChild(e10);

        const e11 = document.createTextNode("\r\n        ");
        
        e7.element.appendChild(e11);

        const e12 = document.createElement("div");
        
        e7.append(e12);
        
        
        const e13 = document.createTextNode("View 2");
        
        e12.appendChild(e13);

        const e14 = document.createTextNode("  \r\n        ");
        
        e7.element.appendChild(e14);

        const e15 = document.createElement("div");
        
        e7.append(e15);
        
        
        const e16 = document.createTextNode("View 3");
        
        e15.appendChild(e16);

        const e17 = document.createTextNode("        \r\n    ");
        
        e7.element.appendChild(e17);
            
        e7.setPrimitiveValue(e7.element, "row", "1" );
        

            e7.bind(e7.element, "selectedIndex",  [["viewModel","index"]], false , (v1) => (v1) );
            this.append(e7);


        const e18 = document.createTextNode("\r\n");
        
        this.element.appendChild(e18);
                }
            }

            

            