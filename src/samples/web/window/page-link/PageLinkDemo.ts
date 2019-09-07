// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomPageLink} from "web-atoms-core/dist/web/controls/AtomPageLink";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import PageLinkViewModel from "./PageLinkViewModel";
	    import WindowSample from "../simple/WindowSample";
	
	
	export default class PageLinkDemo extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(PageLinkViewModel) ;
			// e1
			//  Clicking this button will open the window 
			// e2
			//  And result will be sent in the event 
			
			const e3 = new AtomPageLink(this.app, document.createElement("button"));
			
			e3.setPrimitiveValue(e3.element, "page",  WindowSample );
			
			e3.setPrimitiveValue(e3.element, "parameters",  {  } );
			
			e3.setPrimitiveValue(e3.element, "eventResult",  (e) => this.viewModel.onResult(e.detail) );
			
			e3.setPrimitiveValue(e3.element, "eventError",  (e) => this.viewModel.onError(e.detail) );
			
			const e4 = document.createTextNode("Open");
			e3.element.appendChild(e4);
			
			this.append(e3);
			
			const e5 = document.createElement("div");
			
			this.append(e5);
			
			this.bind(e5, "text",  [["viewModel","result"]], false , null );
			
			const e6 = document.createElement("div");
			
			this.append(e6);
			
			this.bind(e6, "text",  [["viewModel","error"]], false , null );
			
			this.setPrimitiveValue(e6, "style", "color: red" );
		}
	}