// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomViewPager} from "web-atoms-core/dist/web/controls/AtomViewPager";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import { ViewPagerViewModel } from "./ViewPagerViewModel";

export default  class ViewPager extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        this.setPrimitiveValue(this.element, "columns", "*" );
        

        this.setPrimitiveValue(this.element, "rows", "50, *" );
        

                this.viewModel =  this.resolve(ViewPagerViewModel) ;
                    
        const e1 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e1);

            const e2 = new AtomListBox(this.app, document.createElement("div"));
            
            
        const e3 = document.createTextNode("\r\n        ");
        
        e2.element.appendChild(e3);

        const e4 = document.createTextNode("\r\n    ");
        
        e2.element.appendChild(e4);
            
            e2.bind(e2.element, "items",  [["viewModel","pages"]], false , (v1) => (v1) );

            e2.bind(e2.element, "value",  [["viewModel","currentPage"]], true  );

        e2.itemTemplate = ViewPager_itemTemplate_1_3Creator(this);
            
            this.append(e2);


        const e5 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e5);

            const e6 = new AtomViewPager(this.app);
            
            
            
        e6.setPrimitiveValue(e6.element, "row", "1" );
        

            e6.bind(e6.element, "items",  [["viewModel","pages"]], false , (v1) => (v1) );

            e6.bind(e6.element, "value",  [["viewModel","currentPage"]], false , (v1) => (v1) );
            this.append(e6);


        const e7 = document.createTextNode("\r\n");
        
        this.element.appendChild(e7);
                }
            }

            function ViewPager_itemTemplate_1_3Creator(__creator){
                return  class ViewPager_itemTemplate_1_3 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("span");
                    
                    
            this.runAfterInit( () =>
            this.setLocalValue(this.element, "text", ((this.data) ? this.data.label : undefined)) );
                    
                }
            }

            

            
            }

            