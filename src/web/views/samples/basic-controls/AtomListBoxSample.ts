// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import AtomListBoxSampleViewModel from "../../../../view-models/basic-controls/AtomListBoxSampleViewModel";    
import ListBoxStyle from "../../../styles/ListBoxStyle";
import { ListBoxSampleStyle } from "../../../styles/ListBoxSampleStyle";

export default  class AtomListBoxSample extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.defaultControlStyle =  ListBoxSampleStyle ;
            

                this.viewModel =  this.resolve(AtomListBoxSampleViewModel) ;

        this.setPrimitiveValue(this.element, "style", "padding: 10px;" );
        
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

            const e2 = new AtomListBox(this.app, document.createElement("div"));
            
            
        const e3 = document.createTextNode("\r\n            ");
        
        e2.element.appendChild(e3);

        const e4 = document.createTextNode("\r\n    ");
        
        e2.element.appendChild(e4);
            
        e2.setPrimitiveValue(e2.element, "allowSelectFirst", "true" );
        

            e2.bind(e2.element, "items",  [["viewModel","movies","value"]], false , (v1) => (v1) );

                e2.controlStyle =  ListBoxStyle ;

            e2.bind(e2.element, "selectedItem",  [["viewModel","movie"]], true  );

        e2.setPrimitiveValue(e2.element, "style", " color:#7e7e7e;\r\n                width: 610px;\r\n                margin-top: 10px;\r\n                border: 1px solid #ccc; " );
        

        e2.itemTemplate = AtomListBoxSample_itemTemplate_1_3Creator(this);
            
            this.append(e2);


        const e5 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e5);

        const e6 = document.createElement("div");
        
        this.append(e6);
        
        this.setPrimitiveValue(e6, "style", "font-size: 15px;\r\n                margin-top: 20px;\r\n                font-weight: 600" );
        

            this.bind(e6, "text",  [["viewModel","movie","name"]], false , (v1) => 'Selected Item: ' + (v1) );
        

        const e7 = document.createTextNode("\r\n");
        
        this.element.appendChild(e7);
                }
            }

            function AtomListBoxSample_itemTemplate_1_3Creator(__creator){
                return  class AtomListBoxSample_itemTemplate_1_3 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
        this.setPrimitiveValue(this.element, "style", " border-bottom: 1px solid #ccc; \r\n                         border-radius: 0px;\r\n                         padding: 10px" );
        
                    
        const e1 = document.createTextNode("\r\n                ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n                    ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("span");
        
        e2.appendChild(e4);
        
        this.setPrimitiveValue(e4, "style", "font-size: 15px;\r\n                                font-weight: 600" );
        

            this.runAfterInit( () =>
            this.setLocalValue(e4, "text", (this.data.name) + ' ( '+ (this.data.genre) +' )') );
        
        const e5 = document.createTextNode("\r\n                    ");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n                ");
        
        e2.appendChild(e6);

        const e7 = document.createTextNode("\r\n                ");
        
        this.element.appendChild(e7);

        const e8 = document.createElement("div");
        
        this.append(e8);
        
        this.setPrimitiveValue(e8, "style", "font-size: 15px; \r\n                            font-weight: 400; \r\n                            padding-left: 15px;\r\n                            padding-top: 5px" );
        

            this.runAfterInit( () =>
            this.setLocalValue(e8, "text", (this.data.description)) );
        
        const e9 = document.createTextNode("\r\n                ");
        
        e8.appendChild(e9);

        const e10 = document.createTextNode("\r\n            ");
        
        this.element.appendChild(e10);
                }
            }

            

            
            }

            