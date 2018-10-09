// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

        import AtomItemsControlSampleViewModel from "../../../../view-models/basic-controls/AtomItemsControlSampleViewModel";

export default  class AtomItemsControlSample extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(AtomItemsControlSampleViewModel) ;

        this.setPrimitiveValue(this.element, "style", "padding-left: 25px; padding-top: 5px" );
        
                    
        const e1 = document.createTextNode("     \r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "style", "font-size: 15px;\r\n                 color: maroon;\r\n                 font-weight: 600" );
        
        
        const e3 = document.createTextNode("\r\n                 Upcoming Movies:\r\n    ");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e4);

            const e5 = new AtomItemsControl(this.app, document.createElement("ol"));
            
            
        const e6 = document.createTextNode("\r\n            ");
        
        e5.element.appendChild(e6);

        const e7 = document.createTextNode("\r\n    ");
        
        e5.element.appendChild(e7);
            
            e5.bind(e5.element, "items",  [["viewModel","movies","value"]], false , (v1) => (v1) );

        e5.itemTemplate = AtomItemsControlSample_itemTemplate_1_2Creator(this);
            
            this.append(e5);


        const e8 = document.createTextNode("\r\n");
        
        this.element.appendChild(e8);
                }
            }

            function AtomItemsControlSample_itemTemplate_1_2Creator(__creator){
                return  class AtomItemsControlSample_itemTemplate_1_2 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("li");
                    
                    
                    
        const e1 = document.createTextNode("\r\n                    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("span");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "style", "font-size: 15px;\r\n                                font-weight: 600" );
        

            this.runAfterInit( () =>
            this.setLocalValue(e2, "text", (this.data.name)) );
        
        const e3 = document.createTextNode("\r\n                    ");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n                    ");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("span");
        
        this.append(e5);
        
        this.setPrimitiveValue(e5, "style", "font-size: 15px; \r\n                                font-weight: 400; \r\n                                padding-left: 15px" );
        

            this.runAfterInit( () =>
            this.setLocalValue(e5, "text", '( '+(this.data.genre)+' )') );
        
        const e6 = document.createTextNode("\r\n                    ");
        
        e5.appendChild(e6);

        const e7 = document.createTextNode("\r\n                ");
        
        this.element.appendChild(e7);
                }
            }

            

            
            }

            