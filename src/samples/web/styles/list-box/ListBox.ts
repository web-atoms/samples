// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AppListBoxStyle from "./AppListBoxStyle";
	    import MovieViewModel from "./MovieViewModel";
	
	
	export default class ListBox extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(MovieViewModel) ;
			
			const e1 = new AtomListBox(this.app);
			
			e1.defaultControlStyle =  AppListBoxStyle ;
			
			e1.bind(e1.element, "items",  [["viewModel","movies","value"]], false , null );
			
			e1.itemTemplate = ListBox_itemTemplate_1_8Creator(this);
			
			this.append(e1);
		}
	}
	
	function ListBox_itemTemplate_1_8Creator(__creator) {
		return class ListBox_itemTemplate_1_8 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("span");
				
				this.append(e1);
				
				this.runAfterInit( () => this.setLocalValue(e1, "text",  ((this.data) ? this.data.name : undefined) ) );
			}
		}
	}