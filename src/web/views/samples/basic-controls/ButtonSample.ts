// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	        import ButtonSampleViewModel from "../../../../view-models/basic-controls/ButtonSampleViewModel";
	        import { ButtonSampleStyle } from "../../../styles/ButtonSampleStyle";
	
	
	export default class ButtonSample extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  ButtonSampleStyle ;
			
			this.viewModel =  this.resolve(ButtonSampleViewModel) ;
			
			const e1 = document.createElement("button");
			
			this.append(e1);
			
			this.bind(e1, "styleClass",  [["this","controlStyle","addButton"]], false , null , __creator);
			
			this.runAfterInit( () => this.setLocalValue(e1, "eventClick",  ()=> (this.viewModel).addMovie() ) );
			
			const e2 = document.createTextNode("\n        Add New Movie\n    ");
			e1.appendChild(e2);
			
			const e3 = new AtomItemsControl(this.app, document.createElement("table"));
			
			e3.setPrimitiveValue(e3.element, "style", "border-collapse: collapse; margin-left: 10px; " );
			
			e3.bind(e3.element, "items",  [["viewModel","movies","value"]], false , null );
			
			e3.itemTemplate = ButtonSample_itemTemplate_1_7Creator(this);
			
			const e4 = document.createElement("thead");
			
			e3.append(e4);
			
			const e5 = document.createElement("tr");
			
			e4.appendChild(e5);
			
			const e6 = document.createElement("th");
			
			e5.appendChild(e6);
			
			e3.setPrimitiveValue(e6, "style", "border:1px solid gray; padding: 10px; text-align: start;" );
			
			const e7 = document.createTextNode("\n                    Movie Name\n                ");
			e6.appendChild(e7);
			
			const e8 = document.createElement("th");
			
			e5.appendChild(e8);
			
			e3.setPrimitiveValue(e8, "style", "border:1px solid gray; padding: 10px; text-align: start;" );
			
			const e9 = document.createTextNode("\n                    Movie Type\n                ");
			e8.appendChild(e9);
			
			const e10 = document.createElement("tbody");
			
			e3.itemsPresenter = e10;
			
			e3.append(e10);
			
			this.append(e3);
		}
	}
	
	function ButtonSample_itemTemplate_1_7Creator(__creator) {
		return class ButtonSample_itemTemplate_1_7 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("tr"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("td");
				
				this.append(e1);
				
				this.setPrimitiveValue(e1, "style", "border:1px solid gray; padding: 10px;" );
				
				const e2 = document.createElement("span");
				
				e1.appendChild(e2);
				
				this.setPrimitiveValue(e2, "style", "font-size: 15px;\n                                font-weight: 400" );
				
				this.runAfterInit( () => this.setLocalValue(e2, "text", ((this.data) ? this.data.name : undefined)) );
				
				const e3 = document.createElement("td");
				
				this.append(e3);
				
				this.setPrimitiveValue(e3, "style", "border:1px solid gray; padding: 10px;" );
				
				const e4 = document.createElement("span");
				
				e3.appendChild(e4);
				
				this.setPrimitiveValue(e4, "style", "font-size: 15px;\n                                font-weight: 400" );
				
				this.runAfterInit( () => this.setLocalValue(e4, "text", ((this.data) ? this.data.genre : undefined)) );
				
				const e5 = document.createTextNode(".\n                    ");
				e4.appendChild(e5);
			}
		}
	}