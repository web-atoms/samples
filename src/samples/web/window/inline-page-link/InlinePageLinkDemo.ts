// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomPageLink} from "web-atoms-core/dist/web/controls/AtomPageLink";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import InlinePageLinkViewModel from "./InlinePageLinkViewModel";
	    import WindowSample from "../simple/WindowSample";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class InlinePageLinkDemo extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(InlinePageLinkViewModel) ;
			// e1
			//  Clicking this button will open the page template as popup 
			// e2
			//  And result will be sent in the event 
			
			const e3 = new AtomPageLink(this.app, document.createElement("button"));
			
			e3.setPrimitiveValue(e3.element, "parameters",  {  } );
			
			e3.setPrimitiveValue(e3.element, "eventResult",  (e) => this.viewModel.onResult(e.detail) );
			
			e3.setPrimitiveValue(e3.element, "eventError",  (e) => this.viewModel.onError(e.detail) );
			
			e3.setPrimitiveValue(e3.element, "text", "Open" );
			
			e3.page = InlinePageLinkDemo_page_1_11Creator(this);
			
			this.append(e3);
			
			const e4 = document.createElement("div");
			
			this.append(e4);
			
			this.bind(e4, "text",  [["viewModel","result"]], false , null );
			
			const e5 = document.createElement("div");
			
			this.append(e5);
			
			this.bind(e5, "text",  [["viewModel","error"]], false , null );
			
			this.setPrimitiveValue(e5, "style", "color: red" );
		}
	}
	
	function InlinePageLinkDemo_page_1_11Creator(__creator) {
		return class InlinePageLinkDemo_page_1_11 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("div");
				
				this.append(e1);
				
				const e2 = document.createTextNode("This is the popup window");
				e1.appendChild(e2);
				
				const e3 = document.createElement("div");
				
				this.append(e3);
				
				const e4 = document.createTextNode("This will close as soon as you click outside of it");
				e3.appendChild(e4);
				
				const e5 = document.createElement("div");
				
				this.append(e5);
				
				const e6 = document.createTextNode("You can access parent viewModel by referring $viewModel.parent");
				e5.appendChild(e6);
				
				const e7 = document.createElement("button");
				
				this.append(e7);
				
				this.runAfterInit( () => this.setLocalValue(e7, "eventClick",  () => (this.viewModel).close('success') ) );
				
				const e8 = document.createTextNode("Ok");
				e7.appendChild(e8);
			}
		}
	}