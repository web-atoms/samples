// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AtomListBoxSampleViewModel from "../../../../view-models/basic-controls/AtomListBoxSampleViewModel";    
	import ListBoxStyle from "../../../styles/ListBoxStyle";
	import { ListBoxSampleStyle } from "../../../styles/ListBoxSampleStyle";
	
	
	export default class AtomListBoxSample extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  ListBoxSampleStyle ;
			
			this.viewModel =  this.resolve(AtomListBoxSampleViewModel) ;
			
			this.setPrimitiveValue(this.element, "style", "padding: 10px;" );
			
			const e1 = new AtomListBox(this.app, document.createElement("div"));
			
			e1.setPrimitiveValue(e1.element, "allowSelectFirst", "true" );
			
			e1.bind(e1.element, "items",  [["viewModel","movies","value"]], false , null );
			
			e1.controlStyle =  ListBoxStyle ;
			
			e1.bind(e1.element, "selectedItem",  [["viewModel","movie"]], true  );
			
			e1.setPrimitiveValue(e1.element, "style", " color:#7e7e7e;\n                width: 610px;\n                margin-top: 10px;\n                border: 1px solid #ccc; " );
			
			e1.itemTemplate = AtomListBoxSample_itemTemplate_1_5Creator(this);
			
			this.append(e1);
			
			const e2 = document.createElement("div");
			
			this.append(e2);
			
			this.setPrimitiveValue(e2, "style", "font-size: 15px;\n                margin-top: 20px;\n                font-weight: 600" );
			
			this.bind(e2, "text",  [["viewModel","movie","name"]], false , (v1) => 'Selected Item: ' + (v1) );
		}
	}
	
	function AtomListBoxSample_itemTemplate_1_5Creator(__creator) {
		return class AtomListBoxSample_itemTemplate_1_5 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				this.setPrimitiveValue(this.element, "style", " border-bottom: 1px solid #ccc; \n                         border-radius: 0px;\n                         padding: 10px" );
				
				const e1 = document.createElement("div");
				
				this.append(e1);
				
				const e2 = document.createElement("span");
				
				e1.appendChild(e2);
				
				this.setPrimitiveValue(e2, "style", "font-size: 15px;\n                                font-weight: 600" );
				
				this.runAfterInit( () => this.setLocalValue(e2, "text", ((this.data) ? this.data.name : undefined) + ' ( '+ ((this.data) ? this.data.genre : undefined) +' )') );
				
				const e3 = document.createElement("div");
				
				this.append(e3);
				
				this.setPrimitiveValue(e3, "style", "font-size: 15px; \n                            font-weight: 400; \n                            padding-left: 15px;\n                            padding-top: 5px" );
				
				this.runAfterInit( () => this.setLocalValue(e3, "text", ((this.data) ? this.data.description : undefined)) );
			}
		}
	}