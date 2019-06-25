// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
	
	    import IndexStyle from "./styles/IndexStyle";
	    import IndiaFlag32DataUrl from "../images/IndiaFlagIcon32DataUrl";
	
	
	export default class Index extends AtomGridView {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  IndexStyle ;
			
			this.runAfterInit(() => this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root ));
			
			this.setPrimitiveValue(this.element, "rows", "50,*,30" );
			
			const e1 = document.createElement("header");
			
			this.append(e1);
			
			const e2 = document.createElement("h3");
			
			e1.appendChild(e2);
			
			this.setPrimitiveValue(e2, "style", "padding:0; margin:5px" );
			
			const e3 = document.createTextNode("Web Atoms");
			e2.appendChild(e3);
			
			const e4 = document.createElement("div");
			
			e1.appendChild(e4);
			
			this.setPrimitiveValue(e4, "style", "font-size: smaller" );
			
			const e5 = document.createTextNode("MVVM JavaScript Framework for Desktop/Mobile - ");
			e4.appendChild(e5);
			
			const e6 = document.createElement("span");
			
			e4.appendChild(e6);
			
			this.setPrimitiveValue(e6, "style", "font-weight: bold" );
			
			const e7 = document.createTextNode("Made in India");
			e6.appendChild(e7);
			
			const e8 = document.createElement("section");
			
			this.append(e8);
			
			this.setPrimitiveValue(e8, "row", "1" );
			
			this.setPrimitiveValue(e8, "style", "margin: auto; position: absolute; left:0; top:0; bottom: 0; right:0; width: 200px; height: 50px; text-align: center" );
			
			const e9 = document.createElement("a");
			
			e8.appendChild(e9);
			
			this.setPrimitiveValue(e9, "href", "/samples.html" );
			
			this.setPrimitiveValue(e9, "target", "_tab" );
			
			const e10 = document.createElement("button");
			
			e9.appendChild(e10);
			
			const e11 = document.createTextNode("Samples");
			e10.appendChild(e11);
			
			const e12 = document.createElement("a");
			
			e8.appendChild(e12);
			
			this.setPrimitiveValue(e12, "href", "https://github.com/neurospeech/web-atoms-core" );
			
			const e13 = document.createElement("button");
			
			e12.appendChild(e13);
			
			const e14 = document.createTextNode("Source Code");
			e13.appendChild(e14);
			
			const e15 = document.createElement("footer");
			
			this.append(e15);
			
			this.setPrimitiveValue(e15, "row", "2" );
			
			const e16 = document.createTextNode("\r\n        © NeuroSpeech Technologies Pvt Ltd, ");
			e15.appendChild(e16);
			
			const e17 = document.createElement("img");
			
			e15.appendChild(e17);
			
			this.setPrimitiveValue(e17, "src",  IndiaFlag32DataUrl );
			
			const e18 = document.createTextNode("Made in India\r\n    ");
			e15.appendChild(e18);
		}
	}