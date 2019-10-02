// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import { NavigationService } from "web-atoms-core/dist/services/NavigationService";
	    import WindowSample from "./WindowSample";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class WindowDemo extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		protected navigationService:  NavigationService;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			this.navigationService = this.app.resolve( NavigationService);
			
			const __creator = this;
			
			const e1 = document.createElement("button");
			
			this.append(e1);
			
			this.setPrimitiveValue(e1, "eventClick",  () => this.navigationService.openPage(WindowSample) );
			
			const e2 = document.createTextNode("Open Window");
			e1.appendChild(e2);
		}
	}