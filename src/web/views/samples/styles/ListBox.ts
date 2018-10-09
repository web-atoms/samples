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
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

            const e2 = new AtomListBox(this.app);
            
            
        const e3 = document.createTextNode("\r\n        ");
        
        e2.element.appendChild(e3);

        const e4 = document.createTextNode("\r\n    ");
        
        e2.element.appendChild(e4);
            
            e2.defaultControlStyle =  AppListBoxStyle ;
            

            e2.bind(e2.element, "items",  [["viewModel","movies","value"]], false , (v1) => (v1) );

        e2.itemTemplate = ListBox_itemTemplate_1_8Creator(this);
            
            this.append(e2);


        const e5 = document.createTextNode("\r\n");
        
        this.element.appendChild(e5);
                }
            }

            function ListBox_itemTemplate_1_8Creator(__creator){
                return  class ListBox_itemTemplate_1_8 extends AtomControl {

                

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

            