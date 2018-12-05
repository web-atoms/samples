// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomGridSplitter} from "web-atoms-core/dist/web/controls/AtomGridSplitter";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";

    import MDViewModel from "../../view-models/MDViewModel";

export default  class MDHost extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        this.setPrimitiveValue(this.element, "columns", "*, 5, 200" );
        

                this.viewModel =  this.resolve(MDViewModel, 'owner') ;
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "class", "md-host" );
        

        this.setPrimitiveValue(e2, "style", "width: 100%; height: 100%;" );
        
        
        const e3 = document.createTextNode("\r\n    ");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e4);

            const e5 = new AtomGridSplitter(this.app);
            
            
            
        e5.setPrimitiveValue(e5.element, "column", "1" );
        
            this.append(e5);


        const e6 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e6);

            const e7 = new AtomItemsControl(this.app);
            
            
        const e8 = document.createTextNode("\r\n        ");
        
        e7.element.appendChild(e8);

        const e9 = document.createTextNode("\r\n    ");
        
        e7.element.appendChild(e9);
            
        e7.setPrimitiveValue(e7.element, "column", "2" );
        

            e7.runAfterInit( () =>
            e7.setLocalValue(e7.element, "items", ((this.viewModel) ? this.viewModel.headers : undefined)) );

        e7.itemTemplate = MDHost_itemTemplate_1_31Creator(this);
            
            this.append(e7);


        const e10 = document.createTextNode("\r\n\r\n\r\n\r\n");
        
        this.element.appendChild(e10);
                }
            }

            function MDHost_itemTemplate_1_31Creator(__creator){
                return  class MDHost_itemTemplate_1_31 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
        this.setPrimitiveValue(this.element, "style", "font-size: 14px; margin: 5px;" );
        

            this.runAfterInit( () =>
            this.setLocalValue(this.element, "stylePaddingLeft", ((this.data) ? this.data.pad : undefined) + 'px') );

            this.runAfterInit( () =>
            this.setLocalValue(this.element, "text", ((this.data) ? this.data.label : undefined)) );

            this.runAfterInit( () =>
            this.setLocalValue(this.element, "eventClick", () => (this.viewModel).show((this.data))) );
                    
                }
            }

            

            
            }

            