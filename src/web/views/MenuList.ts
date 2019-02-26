// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import MenuStyle from "../styles/MenuStyle";

export default  class MenuList extends AtomItemsControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.defaultControlStyle =  MenuStyle ;
            

                    this.runAfterInit(() => {
                        this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root );
                    });
                    

            this.bind(this.element, "items",  [["viewModel","menuService","menus"]], false , (v1) =>  (v1)  );

        this.setPrimitiveValue(this.element, "style", "padding:5px" );
        

        this.itemTemplate = MenuList_itemTemplate_1_2Creator(this);
            
                    
                }
            }

            function MenuList_itemTemplate_1_2Creator(__creator){
                return  class MenuList_itemTemplate_1_2 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
                this.setPrimitiveValue(this.element, "eventClick",  () => this.data.click() );
                    
            const e1 = document.createElement("span");
            
            this.append(e1);
            
            this.bind(e1, "text",  [["data","label"]], false , (v1) => (v1) );
            

            const e2 = new AtomItemsControl(this.app, document.createElement("div"));
            
            
            e2.bind(e2.element, "styleDisplay",  [["data","children"]], false , (v1) => (v1) ? '' : 'none' );

            e2.bind(e2.element, "items",  [["data","children"]], false , (v1) => (v1) );

                e2.setPrimitiveValue(e2.element, "itemTemplate",  __creator.itemTemplate );
            
            this.append(e2);

                }
            }

            

            
            }

            