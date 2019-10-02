// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomFrame} from "web-atoms-core/dist/web/controls/AtomFrame";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import FrameViewModel from "./FrameViewModel";
	    import Start from "./Start";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class FrameSample extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(FrameViewModel) ;
			
			const e1 = document.createElement("button");
			
			this.append(e1);
			
			this.setPrimitiveValue(e1, "eventClick",  () => this.viewModel.back() );
			
			const e2 = document.createTextNode("Back");
			e1.appendChild(e2);
			
			const e3 = document.createElement("div");
			
			this.append(e3);
			
			this.setPrimitiveValue(e3, "style", "position: relative; width: 200px; height: 200px; margin: 20px; border: solid 1px gray; border-radius: 5px;" );
			
			const e4 = new AtomFrame(this.app);
			
			e4.setPrimitiveValue(e4.element, "name", "sample" );
			
			e3.appendChild(e4.element);
		}
	}