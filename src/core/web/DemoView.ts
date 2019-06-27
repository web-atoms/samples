// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
import {AtomFrame} from "web-atoms-core/dist/web/controls/AtomFrame";
	
	    import DemoViewStyle from "./DemoViewStyle";
	    import CodeView from "./CodeView";
	
	    function fromPath(p) {
	        var t = p.split("/");
	        var n = t[t.length - 1];
	        return {
	            label: n,
	            value: p
	        };
	    }
	
	
	
	export default class DemoView extends AtomControl {
		
		@BindableProperty
		public  files:  string[] ;
		
		@BindableProperty
		public  file:  string  ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  DemoViewStyle ;
			
			const e1 = new AtomToggleButtonBar(this.app);
			
			e1.bind(e1.element, "items",  [["this","files"]], false , (v1) =>  fromPath((v1))  , __creator);
			
			e1.bind(e1.element, "value",  [["this","file"]], true  ,null, __creator);
			
			this.append(e1);
			
			const e2 = new CodeView(this.app);
			
			e2.bind(e2.element, "src",  [["this","file"]], false , null , __creator);
			
			this.append(e2);
		}
	}