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
			
			this.setPrimitiveValue(this.element, "rows", "60,*,30" );
			
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
			
			this.append(e5);
			
			this.setPrimitiveValue(e5, "row", "1" );
			
			const e6 = document.createElement("ul");
			
			e5.appendChild(e6);
			
			const e7 = document.createElement("li");
			
			e6.appendChild(e7);
			
			const e8 = document.createTextNode("Advanced MVVM Framework for JavaScript");
			e7.appendChild(e8);
			
			const e9 = document.createElement("li");
			
			e6.appendChild(e9);
			
			const e10 = document.createTextNode("Support for Browser as well as Xamarin.Forms");
			e9.appendChild(e10);
			
			const e11 = document.createElement("li");
			
			e6.appendChild(e11);
			
			const e12 = document.createTextNode("Simple Dependency Injection with Runtime Dependency Injection");
			e11.appendChild(e12);
			
			const e13 = document.createElement("li");
			
			e6.appendChild(e13);
			
			const e14 = document.createTextNode("Inbuilt Styling Support (no need for less/sass)");
			e13.appendChild(e14);
			
			const e15 = document.createElement("li");
			
			e6.appendChild(e15);
			
			const e16 = document.createTextNode("Programmable Styles");
			e15.appendChild(e16);
			
			const e17 = document.createElement("li");
			
			e6.appendChild(e17);
			
			const e18 = document.createTextNode("Simple Unit testing");
			e17.appendChild(e18);
			
			const e19 = document.createElement("li");
			
			e6.appendChild(e19);
			
			const e20 = document.createTextNode("Simple REST Interface inspired from RetroFit");
			e19.appendChild(e20);
			
			const e21 = document.createElement("section");
			
			e5.appendChild(e21);
			
			this.setPrimitiveValue(e21, "style", "margin: auto; position: absolute; left:0; top:0; bottom: 0; right:0; width: 300px; height: 50px; text-align: center" );
			
			const e22 = document.createElement("a");
			
			e21.appendChild(e22);
			
			this.setPrimitiveValue(e22, "href", "/samples.html" );
			
			this.setPrimitiveValue(e22, "target", "_tab" );
			
			const e23 = document.createElement("button");
			
			e22.appendChild(e23);
			
			const e24 = document.createTextNode("Samples");
			e23.appendChild(e24);
			
			const e25 = document.createElement("a");
			
			e21.appendChild(e25);
			
			this.setPrimitiveValue(e25, "href", "/docs" );
			
			this.setPrimitiveValue(e25, "target", "_tab" );
			
			const e26 = document.createElement("button");
			
			e25.appendChild(e26);
			
			const e27 = document.createTextNode("API");
			e26.appendChild(e27);
			
			const e28 = document.createElement("a");
			
			e21.appendChild(e28);
			
			this.setPrimitiveValue(e28, "href", "https://github.com/neurospeech/web-atoms-core" );
			
			const e29 = document.createElement("button");
			
			e28.appendChild(e29);
			
			const e30 = document.createTextNode("Source Code");
			e29.appendChild(e30);
			
			const e31 = document.createElement("footer");
			
			this.append(e31);
			
			this.setPrimitiveValue(e31, "row", "2" );
			
			const e32 = document.createTextNode("\r\n        © NeuroSpeech Technologies Pvt Ltd, ");
			e31.appendChild(e32);
			
			const e33 = document.createElement("img");
			
			e31.appendChild(e33);
			
			this.setPrimitiveValue(e33, "class", "flag" );
			
			this.setPrimitiveValue(e33, "src",  IndiaFlag32DataUrl );
			
			const e34 = document.createTextNode("Made in India\r\n    ");
			e31.appendChild(e34);
		}
	}