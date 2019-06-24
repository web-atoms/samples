// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomFrame} from "web-atoms-core/dist/web/controls/AtomFrame";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
	
	    import FrameViewModel from "./FrameViewModel";
	
	
	export default class FrameSample extends AtomGridView {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "rows", "100, *" );
			
			this.viewModel =  this.resolve(FrameViewModel) ;
			
			const e1 = document.createElement("div");
			
			this.append(e1);
			
			const e2 = document.createElement("button");
			
			e1.appendChild(e2);
			
			this.setPrimitiveValue(e2, "eventClick",  () => this.viewModel.openPage1() );
			
			const e3 = document.createTextNode("Open Page 1");
			e2.appendChild(e3);
			
			const e4 = document.createElement("br");
			
			e1.appendChild(e4);
			
			const e5 = document.createElement("button");
			
			e1.appendChild(e5);
			
			this.setPrimitiveValue(e5, "eventClick",  () => this.viewModel.openPage2() );
			
			const e6 = document.createTextNode("Open Page 2");
			e5.appendChild(e6);
			
			const e7 = new AtomFrame(this.app);
			
			e7.setPrimitiveValue(e7.element, "row", "1" );
			
			e7.bind(e7.element, "url",  [["viewModel","url"]], false , null );
			
			this.append(e7);
		}
	}