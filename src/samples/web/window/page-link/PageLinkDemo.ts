// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomPageLink} from "web-atoms-core/dist/web/controls/AtomPageLink";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import PageLinkViewModel from "./PageLinkViewModel";
	    import WindowSample from "../simple/WindowSample";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class PageLinkDemo extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
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
			// e3
			//  Event get-parameters will be executed before
			//         opening window/popup, parameters set on this event
			//         will override bound parameters. It is recommended
			//         to use event-get-parameters over parameters binding
			//         as it will reduce binding memory  
			
			const e4 = new AtomPageLink(this.app, document.createElement("button"));
			
			e4.setPrimitiveValue(e4.element, "page",  WindowSample );
			
			e4.setPrimitiveValue(e4.element, "eventGetParameters",  (e) => e.detail.parameters = { name: 'demo' } );
			
			e4.setPrimitiveValue(e4.element, "eventResult",  (e) => this.viewModel.onResult(e.detail) );
			
			e4.setPrimitiveValue(e4.element, "eventError",  (e) => this.viewModel.onError(e.detail) );
			
			const e5 = document.createTextNode("Open");
			e4.element.appendChild(e5);
			
			this.append(e4);
			
			const e6 = document.createElement("div");
			
			this.append(e6);
			
			this.bind(e6, "text",  [["viewModel","result"]], false , null );
			
			const e7 = document.createElement("div");
			
			this.append(e7);
			
			this.bind(e7, "text",  [["viewModel","error"]], false , null );
			
			this.setPrimitiveValue(e7, "style", "color: red" );
		}
	}