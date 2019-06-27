// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import FileViewerStyle from "./FileViewerStyle";
	    import CodeView from "./CodeView";
	
	    function fromPath(e, files) {
	        e.atomControl.file = files[0];
	        return files.map((p) => {
	            var t = p.split("/");
	            var n = t[t.length - 1];
	            return {
	                label: n,
	                value: p
	            };
	        });
	    }
	
	
	
	export default class FileViewer extends AtomControl {
		
		@BindableProperty
		public  files:  string[]   =  null ;
		
		@BindableProperty
		public  file:  string   =  null ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  FileViewerStyle ;
			
			this.runAfterInit(() => this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root ));
			
			const e1 = new AtomToggleButtonBar(this.app);
			
			e1.bind(e1.element, "items",  [["this","element"],["this","files"]], false , (v1,v2) =>  fromPath((v1), (v2))  , __creator);
			
			e1.bind(e1.element, "value",  [["this","file"]], true  ,null, __creator);
			
			this.append(e1);
			
			const e2 = document.createElement("div");
			
			this.append(e2);
			
			this.setPrimitiveValue(e2, "class", "code" );
			
			const e3 = new CodeView(this.app);
			
			e3.setPrimitiveValue(e3.element, "style", "overflow: auto" );
			
			e3.bind(e3.element, "src",  [["this","file"]], false , null , __creator);
			
			e2.appendChild(e3.element);
		}
	}