// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import AppListBoxStyle from "../../../styles/AppListBoxStyle";
    import MovieViewModel from "../../../../view-models/http/MovieViewModel";

export default  class ListBox extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(MovieViewModel) ;
                    
            const e1 = new AtomListBox(this.app);
            
            
            
            e1.defaultControlStyle =  AppListBoxStyle ;
            

            e1.bind(e1.element, "items",  [["viewModel","movies","value"]], false , (v1) => (v1) );

        e1.itemTemplate = ListBox_itemTemplate_1_9Creator(this);
            
            this.append(e1);

                }
            }

            function ListBox_itemTemplate_1_9Creator(__creator){
                return  class ListBox_itemTemplate_1_9 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
                    
        const e1 = document.createElement("span");
        
        this.append(e1);
        
            this.runAfterInit( () =>
            this.setLocalValue(e1, "text",  ((this.data) ? this.data.name : undefined) ) );
        
                }
            }

            

            
            }

            