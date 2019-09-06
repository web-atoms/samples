// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomGridSplitter} from "web-atoms-core/dist/web/controls/AtomGridSplitter";
import {AtomItemsControl} from "web-atoms-core/dist/web/controls/AtomItemsControl";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import MDViewModel from "../../view-models/MDViewModel";
	
	
	export default class MDHost extends AtomGridView {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "columns", "*, 5, 200" );
			
			this.viewModel =  this.resolve(MDViewModel, 'owner') ;
			
			const e1 = document.createElement("div");
			
			this.append(e1);
			
			this.setPrimitiveValue(e1, "class", "md-host" );
			
			this.setPrimitiveValue(e1, "style", "width: 100%; height: 100%;" );
			
			const e2 = new AtomGridSplitter(this.app);
			
			e2.setPrimitiveValue(e2.element, "column", "1" );
			
			this.append(e2);
			
			const e3 = new AtomItemsControl(this.app);
			
			e3.setPrimitiveValue(e3.element, "column", "2" );
			
			e3.runAfterInit( () => e3.setLocalValue(e3.element, "items",  ((e3.viewModel) ? e3.viewModel.headers : undefined) ) );
			
			e3.itemTemplate = MDHost_itemTemplate_1_8Creator(this);
			
			this.append(e3);
		}
	}
	
	function MDHost_itemTemplate_1_8Creator(__creator) {
		return class MDHost_itemTemplate_1_8 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				this.setPrimitiveValue(this.element, "style", "font-size: 14px; margin: 5px;" );
				
				this.runAfterInit( () => this.setLocalValue(this.element, "stylePaddingLeft",  ((this.data) ? this.data.pad : undefined) + 'px' ) );
				
				this.runAfterInit( () => this.setLocalValue(this.element, "text",  ((this.data) ? this.data.label : undefined) ) );
				
				this.runAfterInit( () => this.setLocalValue(this.element, "eventClick",  () => (this.viewModel).show((this.data)) ) );
			}
		}
	}