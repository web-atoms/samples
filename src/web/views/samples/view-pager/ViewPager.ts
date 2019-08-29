// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomListBox} from "web-atoms-core/dist/web/controls/AtomListBox";
import {AtomViewPager} from "web-atoms-core/dist/web/controls/AtomViewPager";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import { ViewPagerViewModel } from "./ViewPagerViewModel";
	
	
	export default class ViewPager extends AtomGridView {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "columns", "*" );
			
			this.setPrimitiveValue(this.element, "rows", "50, *" );
			
			this.viewModel =  this.resolve(ViewPagerViewModel) ;
			
			const e1 = new AtomListBox(this.app, document.createElement("div"));
			
			e1.bind(e1.element, "items",  [["viewModel","pages"]], false , null );
			
			e1.bind(e1.element, "value",  [["viewModel","currentPage"]], true  );
			
			e1.itemTemplate = ViewPager_itemTemplate_1_14Creator(this);
			
			this.append(e1);
			
			const e2 = new AtomViewPager(this.app);
			
			e2.setPrimitiveValue(e2.element, "row", "1" );
			
			e2.bind(e2.element, "items",  [["viewModel","pages"]], false , null );
			
			e2.bind(e2.element, "value",  [["viewModel","currentPage"]], false , null );
			
			this.append(e2);
		}
	}
	
	function ViewPager_itemTemplate_1_14Creator(__creator) {
		return class ViewPager_itemTemplate_1_14 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("span"));
			}
			
			public create(): void {
				
				super.create();
				
				this.runAfterInit( () => this.setLocalValue(this.element, "text", ((this.data) ? this.data.label : undefined)) );
			}
		}
	}