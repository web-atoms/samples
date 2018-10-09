// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
export default  class MenuList extends AtomListBox {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.bind(this.element, "items",  [["viewModel","menuService","menus"]], false , (v1) => (v1) );

        this.itemTemplate = MenuList_itemTemplate_1_1Creator(this);
            
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createTextNode("\r\n");
        
        this.element.appendChild(e2);
                }
            }

            function MenuList_itemTemplate_1_1Creator(__creator){
                return  class MenuList_itemTemplate_1_1 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
                this.setPrimitiveValue(this.element, "eventClick",  () => this.data.click() );
                    
        const e1 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("span");
        
        this.append(e2);
        
            this.bind(e2, "text",  [["data","label"]], false , (v1) => (v1) );
        

        const e3 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e3);

            const e4 = new AtomItemsControl(this.app);
            
            
            
            e4.bind(e4.element, "styleDisplay",  [["data","expand"]], false , (v1) => (v1) ? '' : 'none' );

            e4.bind(e4.element, "items",  [["data","expand"],["data","children"]], false , (v1,v2) => (v1) ? (v2) : [] );

                e4.setPrimitiveValue(e4.element, "itemTemplate",  __creator.itemTemplate );
            this.append(e4);


        const e5 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e5);
                }
            }

            

            
            }

            