// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	        import AtomItemsControlSampleViewModel from "../../../../view-models/basic-controls/AtomItemsControlSampleViewModel";
	
	
	export default class AtomItemsControlSample extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(AtomItemsControlSampleViewModel) ;
			
			this.setPrimitiveValue(this.element, "style", "padding-left: 25px; padding-top: 5px" );
			
			const e1 = document.createElement("div");
			
			this.append(e1);
			
			this.setPrimitiveValue(e1, "style", "font-size: 15px;\n                 color: maroon;\n                 font-weight: 600" );
			
			const e2 = document.createTextNode("\n                 Upcoming Movies:\n    ");
			e1.appendChild(e2);
			
			const e3 = new AtomItemsControl(this.app, document.createElement("ol"));
			
			e3.bind(e3.element, "items",  [["viewModel","movies","value"]], false , null );
			
			e3.itemTemplate = AtomItemsControlSample_itemTemplate_1_3Creator(this);
			
			this.append(e3);
		}
	}
	
	function AtomItemsControlSample_itemTemplate_1_3Creator(__creator) {
		return class AtomItemsControlSample_itemTemplate_1_3 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("li"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("span");
				
				this.append(e1);
				
				this.setPrimitiveValue(e1, "style", "font-size: 15px;\n                                font-weight: 600" );
				
				this.runAfterInit( () => this.setLocalValue(e1, "text", ((this.data) ? this.data.name : undefined)) );
				
				const e2 = document.createElement("span");
				
				this.append(e2);
				
				this.setPrimitiveValue(e2, "style", "font-size: 15px; \n                                font-weight: 400; \n                                padding-left: 15px" );
				
				this.runAfterInit( () => this.setLocalValue(e2, "text", '( '+((this.data) ? this.data.genre : undefined)+' )') );
			}
		}
	}