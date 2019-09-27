// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
	
	    import IndexStyle from "./styles/IndexStyle";
	    import IndiaFlag32DataUrl from "../images/IndiaFlagIcon32DataUrl";
	    import FormDemo from "../samples/web/form/FromDemo";
	    
	
	
	export default class Index extends AtomGridView {
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.defaultControlStyle =  IndexStyle ;
			
			this.runAfterInit(() => this.setPrimitiveValue(this.element, "styleClass",  this.controlStyle.root ));
			
			this.setPrimitiveValue(this.element, "rows", "70,*,30" );
			
			const e1 = document.createElement("header");
			
			this.append(e1);
			
			const e2 = document.createElement("h3");
			
			e1.appendChild(e2);
			
			this.setPrimitiveValue(e2, "text",  '<W/> Web Atoms' );
			
			const e3 = document.createElement("div");
			
			e1.appendChild(e3);
			
			const e4 = document.createTextNode("MVVM JavaScript Framework for Desktop/Mobile");
			e3.appendChild(e4);
			
			const e5 = document.createElement("section");
			
			e1.appendChild(e5);
			
			this.setPrimitiveValue(e5, "style", "margin: auto; margin-right:10px; position: absolute; left:0; top:0; bottom: 0; right:0; width: 300px; height: 50px; text-align: center" );
			
			const e6 = document.createElement("a");
			
			e5.appendChild(e6);
			
			this.setPrimitiveValue(e6, "href", "/samples.html" );
			
			this.setPrimitiveValue(e6, "target", "samples" );
			
			const e7 = document.createElement("button");
			
			e6.appendChild(e7);
			
			const e8 = document.createTextNode("Samples");
			e7.appendChild(e8);
			
			const e9 = document.createElement("a");
			
			e5.appendChild(e9);
			
			this.setPrimitiveValue(e9, "href", "/docs" );
			
			this.setPrimitiveValue(e9, "target", "docs" );
			
			const e10 = document.createElement("button");
			
			e9.appendChild(e10);
			
			const e11 = document.createTextNode("API");
			e10.appendChild(e11);
			
			const e12 = document.createElement("a");
			
			e5.appendChild(e12);
			
			this.setPrimitiveValue(e12, "href", "https://github.com/neurospeech/web-atoms-core" );
			
			this.setPrimitiveValue(e12, "target", "source" );
			
			const e13 = document.createElement("button");
			
			e12.appendChild(e13);
			
			const e14 = document.createTextNode("Source Code");
			e13.appendChild(e14);
			
			const e15 = document.createElement("section");
			
			this.append(e15);
			
			this.setPrimitiveValue(e15, "row", "1" );
			
			this.setPrimitiveValue(e15, "style", "position: absolute; left: 0; top: 0; right: 0; bottom:0; overflow: auto" );
			
			const e16 = document.createElement("ul");
			
			e15.appendChild(e16);
			
			const e17 = document.createElement("li");
			
			e16.appendChild(e17);
			
			const e18 = document.createTextNode("Advanced MVVM Framework for JavaScript");
			e17.appendChild(e18);
			
			const e19 = document.createElement("li");
			
			e16.appendChild(e19);
			
			const e20 = document.createTextNode("Support for Browser as well as Xamarin.Forms");
			e19.appendChild(e20);
			
			const e21 = document.createElement("li");
			
			e16.appendChild(e21);
			
			const e22 = document.createTextNode("Simple Dependency Injection with Runtime Dependency Injection");
			e21.appendChild(e22);
			
			const e23 = document.createElement("li");
			
			e16.appendChild(e23);
			
			const e24 = document.createTextNode("Inbuilt Styling Support (no need for less/sass)");
			e23.appendChild(e24);
			
			const e25 = document.createElement("li");
			
			e16.appendChild(e25);
			
			const e26 = document.createTextNode("Programmable Styles");
			e25.appendChild(e26);
			
			const e27 = document.createElement("li");
			
			e16.appendChild(e27);
			
			const e28 = document.createTextNode("Simple Unit testing");
			e27.appendChild(e28);
			
			const e29 = document.createElement("li");
			
			e16.appendChild(e29);
			
			const e30 = document.createTextNode("Simple REST Interface inspired from RetroFit");
			e29.appendChild(e30);
			
			const e31 = document.createElement("div");
			
			e15.appendChild(e31);
			
			this.setPrimitiveValue(e31, "style", "margin-left: 5%; width: 90%; height: 640px; position: relative;" );
			
			const e32 = new FormDemo(this.app);
			
			e31.appendChild(e32.element);
			
			const e33 = document.createElement("footer");
			
			this.append(e33);
			
			this.setPrimitiveValue(e33, "row", "2" );
			
			const e34 = document.createTextNode("\r\n        © NeuroSpeech Technologies Pvt Ltd, ");
			e33.appendChild(e34);
			
			const e35 = document.createElement("img");
			
			e33.appendChild(e35);
			
			this.setPrimitiveValue(e35, "class", "flag" );
			
			this.setPrimitiveValue(e35, "src",  IndiaFlag32DataUrl );
			
			const e36 = document.createTextNode("Made in India\r\n    ");
			e33.appendChild(e36);
		}
	}