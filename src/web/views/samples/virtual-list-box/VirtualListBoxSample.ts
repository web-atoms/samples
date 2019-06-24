// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import VirtualListViewModel from "./view-model/VirtualListViewModel";

export default  class VirtualListBoxSample extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(VirtualListViewModel) ;
                    
            const e1 = new AtomItemsControl(this.app);
            
            
                e1.setPrimitiveValue(e1.element, "uiVirtualize",  true );

        e1.setPrimitiveValue(e1.element, "style", "width: 800px; height: 800px;" );
        

            e1.runAfterInit( () =>
            e1.setLocalValue(e1.element, "items",  ((this.viewModel) ? this.viewModel.items : undefined) ) );

        e1.itemTemplate = VirtualListBoxSample_itemTemplate_1_14Creator(this);
            
            
            const e2 = document.createElement("div");
            
        e1.itemsPresenter = e2;
            e1.append(e2);
            
            
            this.append(e1);

                }
            }

            function VirtualListBoxSample_itemTemplate_1_14Creator(__creator){
                return  class VirtualListBoxSample_itemTemplate_1_14 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
        this.setPrimitiveValue(this.element, "style", "display: inline-block; width: 200px; height: 200px; vertical-align: middle; text-align: center;" );
        
                    
            const e1 = document.createElement("span");
            
            this.append(e1);
            
            this.runAfterInit( () =>
            this.setLocalValue(e1, "text",  ((this.data) ? this.data.label : undefined) ) );
            
                }
            }

            

            
            }

            