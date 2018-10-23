// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

        import ButtonSampleViewModel from "../../../../view-models/basic-controls/ButtonSampleViewModel";
        import { ButtonSampleStyle } from "../../../styles/ButtonSampleStyle";

export default  class ButtonSample extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.defaultControlStyle =  ButtonSampleStyle ;
            

                this.viewModel =  this.resolve(ButtonSampleViewModel) ;
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("button");
        
        this.append(e2);
        
            this.bind(e2, "styleClass",  [["this","controlStyle","addButton"]], false , (v1) => (v1) , __creator);

            this.runAfterInit( () =>
            this.setLocalValue(e2, "eventClick", ()=> (this.viewModel).addMovie()) );
        
        const e3 = document.createTextNode("\r\n        Add New Movie\r\n    ");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e4);

            const e5 = new AtomItemsControl(this.app, document.createElement("table"));
            
            
        const e6 = document.createTextNode("\r\n        ");
        
        e5.element.appendChild(e6);

        const e7 = document.createElement("thead");
        
        e5.append(e7);
        
        
        const e8 = document.createTextNode("\r\n            ");
        
        e7.appendChild(e8);

        const e9 = document.createElement("tr");
        
        e7.appendChild(e9);
        
        
        const e10 = document.createTextNode("\r\n                ");
        
        e9.appendChild(e10);

        const e11 = document.createElement("th");
        
        e9.appendChild(e11);
        
        e5.setPrimitiveValue(e11, "style", "border:1px solid gray; padding: 10px; text-align: start;" );
        
        
        const e12 = document.createTextNode("\r\n                    Movie Name\r\n                ");
        
        e11.appendChild(e12);

        const e13 = document.createTextNode("\r\n                ");
        
        e9.appendChild(e13);

        const e14 = document.createElement("th");
        
        e9.appendChild(e14);
        
        e5.setPrimitiveValue(e14, "style", "border:1px solid gray; padding: 10px; text-align: start;" );
        
        
        const e15 = document.createTextNode("\r\n                    Movie Type\r\n                ");
        
        e14.appendChild(e15);

        const e16 = document.createTextNode("\r\n            ");
        
        e9.appendChild(e16);

        const e17 = document.createTextNode("\r\n        ");
        
        e7.appendChild(e17);

        const e18 = document.createTextNode("\r\n        ");
        
        e5.element.appendChild(e18);

        const e19 = document.createElement("tbody");
        
        e5.itemsPresenter = e19;
        e5.append(e19);
        
        
        const e20 = document.createTextNode("\r\n            ");
        
        e19.appendChild(e20);

        const e21 = document.createTextNode("\r\n        ");
        
        e19.appendChild(e21);

        const e22 = document.createTextNode("\r\n    ");
        
        e5.element.appendChild(e22);
            
        e5.setPrimitiveValue(e5.element, "style", "border-collapse: collapse; margin-left: 10px; " );
        

            e5.bind(e5.element, "items",  [["viewModel","movies","value"]], false , (v1) => (v1) );

        e5.itemTemplate = ButtonSample_itemTemplate_1_6Creator(this);
            
            this.append(e5);


        const e23 = document.createTextNode("\r\n");
        
        this.element.appendChild(e23);
                }
            }

            function ButtonSample_itemTemplate_1_6Creator(__creator){
                return  class ButtonSample_itemTemplate_1_6 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("tr");
                    
                    
                    
        const e1 = document.createTextNode("\r\n                ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("td");
        
        this.append(e2);
        
        this.setPrimitiveValue(e2, "style", "border:1px solid gray; padding: 10px;" );
        
        
        const e3 = document.createTextNode("\r\n                   ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("span");
        
        e2.appendChild(e4);
        
        this.setPrimitiveValue(e4, "style", "font-size: 15px;\r\n                                font-weight: 400" );
        

            this.runAfterInit( () =>
            this.setLocalValue(e4, "text", ((this.data) ? this.data.name : undefined)) );
        
        const e5 = document.createTextNode("\r\n                    ");
        
        e4.appendChild(e5);

        const e6 = document.createTextNode("\r\n                ");
        
        e2.appendChild(e6);

        const e7 = document.createTextNode("\r\n                ");
        
        this.element.appendChild(e7);

        const e8 = document.createElement("td");
        
        this.append(e8);
        
        this.setPrimitiveValue(e8, "style", "border:1px solid gray; padding: 10px;" );
        
        
        const e9 = document.createTextNode("\r\n                   ");
        
        e8.appendChild(e9);

        const e10 = document.createElement("span");
        
        e8.appendChild(e10);
        
        this.setPrimitiveValue(e10, "style", "font-size: 15px;\r\n                                font-weight: 400" );
        

            this.runAfterInit( () =>
            this.setLocalValue(e10, "text", ((this.data) ? this.data.genre : undefined)) );
        
        const e11 = document.createTextNode(".\r\n                    ");
        
        e10.appendChild(e11);

        const e12 = document.createTextNode("\r\n                ");
        
        e8.appendChild(e12);

        const e13 = document.createTextNode("\r\n            ");
        
        this.element.appendChild(e13);
                }
            }

            

            
            }

            