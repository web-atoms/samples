// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "web-atoms-core/dist/web/controls/AtomToggleButtonBar";
import {AtomGridSplitter} from "web-atoms-core/dist/web/controls/AtomGridSplitter";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
	
	    import FileViewerStyle from "./FileViewerStyle";
	    import CodeView from "./CodeView";
	
	    function fromPath(e, files) {
	
	        if (!files || !files.length) {
	            return null;
	        }
	        const owner = e.atomControl;
	        owner.file = files[0];
	        return files.map((p) => {
	            var t = p.split("/");
	            var n = t[t.length - 1];
	            return {
	                label: n,
	                value: p
	            };
	        });
	    }
	
	    function setView(e, d) {
	        if (!e || !d) {
	            return;
	        }
	        const c = new (d)(e.atomControl.app);
	        e.atomControl.demoPresenter.appendChild(c.element);
	    }
	
	
	
	export default class FileViewer extends AtomGridView {
		
		@BindableProperty
		public  files:  string[]  ;
		
		@BindableProperty
		public  file:  string  ;
		
		@BindableProperty
		public  require:  any  ;
		
		@BindableProperty
		public  demo:  any  ;
		
		@BindableProperty
		public  demoPresenter:  any  ;
		
		public create(): void {
			
			super.create();
			
			this. files =  null ;
			
			this. file =  null;
			
			this. require =  null;
			
			this. demo =  null;
			
			this. demoPresenter =  null ;
			
			const __creator = this;
			
			this.defaultControlStyle =  FileViewerStyle ;
			
			this.setPrimitiveValue(this.element, "rows", "34, *" );
			
			this.setPrimitiveValue(this.element, "columns", "*, 5, 50%" );
			
			this.runAfterInit(() => this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root ));
			
			this.bind(this.element, "none",  [["this","element"],["this","demo"]], false , (v1,v2) =>  setView((v1), (v2) )  , __creator);
			
			const e1 = new AtomToggleButtonBar(this.app);
			
			e1.bind(e1.element, "items",  [["this","element"],["this","files"]], false , (v1,v2) =>  fromPath((v1), (v2))  , __creator);
			
			e1.bind(e1.element, "value",  [["this","file"]], true  ,null, __creator);
			
			this.append(e1);
			
			const e2 = document.createElement("div");
			
			this.append(e2);
			
			this.setPrimitiveValue(e2, "row", "1" );
			
			this.setPrimitiveValue(e2, "class", "code" );
			
			const e3 = new CodeView(this.app);
			
			e3.bind(e3.element, "require",  [["this","require"]], false , null , __creator);
			
			e3.setPrimitiveValue(e3.element, "style", "overflow: auto" );
			
			e3.bind(e3.element, "src",  [["this","file"]], false , null , __creator);
			
			e2.appendChild(e3.element);
			
			const e4 = new AtomGridSplitter(this.app);
			
			e4.setPrimitiveValue(e4.element, "row", "1" );
			
			e4.setPrimitiveValue(e4.element, "column", "1" );
			
			this.append(e4);
			
			const e5 = document.createElement("div");
			
			this.demoPresenter = e5;
			
			this.append(e5);
			
			this.setPrimitiveValue(e5, "row", "1" );
			
			this.setPrimitiveValue(e5, "column", "2" );
		}
	}