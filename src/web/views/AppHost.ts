// tslint:disable
import {BindableProperty} from "web-atoms-core/bin/core/BindableProperty";
import {AtomTabbedPage} from "web-atoms-core/bin/web/controls/AtomTabbedPage";
import {AtomGridView} from "web-atoms-core/bin/web/controls/AtomGridView";

    import { AppHostViewModel } from "../../view-models/AppHostViewModel";
    import MenuList from "./MenuList";

export default  class AppHost extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
                this.setPrimitiveValue(this.element, "viewModel",  this.resolve(AppHostViewModel) );

        this.setPrimitiveValue(this.element, "columns", "200, *" );
        

        this.setPrimitiveValue(this.element, "rows", "*" );
        
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

            const e2 = new MenuList(this.app);
            
            
            
            this.append(e2);


        const e3 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e3);

            const e4 = new AtomTabbedPage(this.app);
            
            
            
        e4.setPrimitiveValue(e4.element, "row", "0" );
        

        e4.setPrimitiveValue(e4.element, "column", "1" );
        
            this.append(e4);


        const e5 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e5);
                }
            }

            

            