// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

import MovieViewModel from "../../../../view-models/http/MovieViewModel";

export default  class Movies extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        this.setPrimitiveValue(this.element, "rows", "5, *, 5" );
        

        this.setPrimitiveValue(this.element, "columns", "5, *, 5" );
        

                this.viewModel =  this.resolve(MovieViewModel) ;
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

            const e2 = new AtomListBox(this.app, document.createElement("div"));
            
            
        const e3 = document.createTextNode("\r\n        ");
        
        e2.element.appendChild(e3);

        const e4 = document.createTextNode("\r\n    ");
        
        e2.element.appendChild(e4);
            
        e2.setPrimitiveValue(e2.element, "row", "1" );
        

        e2.setPrimitiveValue(e2.element, "column", "1" );
        

            e2.bind(e2.element, "items",  [["viewModel","movies","value"]], false , (v1) => (v1) );

        e2.itemTemplate = Movies_itemTemplate_1_7Creator(this);
            
            this.append(e2);


        const e5 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e5);
                }
            }

            function Movies_itemTemplate_1_7Creator(__creator){
                return  class Movies_itemTemplate_1_7 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
                    
        const e1 = document.createTextNode("\r\n            ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("span");
        
        this.append(e2);
        
            this.runAfterInit( () =>
            this.setLocalValue(e2, "text", (this.data.name)) );
        

        const e3 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e3);
                }
            }

            

            
            }

            