// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import DesktopView from "./DesktopView";
	    import MobileView from "./MobileView";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class ConditionalView extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			const e1 = document.createTextNode("\n    Following view will load conditionally based on screen type\n\n    ");
			this.element.appendChild(e1);
			if ( this.app.screen.screenType == 'mobile' ) {
				
				const e2 = new MobileView(this.app);
				
				this.append(e2);
				}
			if ( this.app.screen.screenType !== 'mobile' ) {
				
				const e3 = new DesktopView(this.app);
				
				this.append(e3);
				}
		}
	}