// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	import MovieViewModel from "../../../../view-models/http/MovieViewModel";
	
	
	export default class Movies extends AtomGridView {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "rows", "5, *, 5" );
			
			this.setPrimitiveValue(this.element, "columns", "5, *, 5" );
			
			this.viewModel =  this.resolve(MovieViewModel) ;
			
			const e1 = new AtomListBox(this.app, document.createElement("div"));
			
			e1.setPrimitiveValue(e1.element, "row", "1" );
			
			e1.setPrimitiveValue(e1.element, "column", "1" );
			
			e1.bind(e1.element, "items",  [["viewModel","movies","value"]], false , null );
			
			e1.itemTemplate = Movies_itemTemplate_1_12Creator(this);
			
			this.append(e1);
		}
	}
	
	function Movies_itemTemplate_1_12Creator(__creator) {
		return class Movies_itemTemplate_1_12 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("span");
				
				this.append(e1);
				
				this.runAfterInit( () => this.setLocalValue(e1, "text", ((this.data) ? this.data.name : undefined)) );
			}
		}
	}