// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomTabbedPage} from "web-atoms-core/dist/web/controls/AtomTabbedPage";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";
	
	    import AppHostViewModel from "../../view-models/AppHostViewModel";
	    import MenuList from "./MenuList";
	    import GitHubMark32px from "../../images/github/GitHubMark32px";
	    import AppTabStyle from "../styles/AppTabStyle";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class AppHost extends AtomGridView {
		public static readonly _$_url = __moduleName ;
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.setPrimitiveValue(this.element, "styleFontFamily", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" );
			
			this.viewModel =  this.resolve(AppHostViewModel) ;
			
			this.setPrimitiveValue(this.element, "columns", "200, *" );
			
			this.setPrimitiveValue(this.element, "rows", "30, *, 30" );
			
			const e1 = document.createElement("header");
			
			this.append(e1);
			
			const e2 = document.createElement("h3");
			
			e1.appendChild(e2);
			
			this.setPrimitiveValue(e2, "style", "position: absolute; margin: 0; padding: 0; top: 5px; left: 5px;" );
			
			this.setPrimitiveValue(e2, "text", "<W/> Web Atoms" );
			
			const e3 = new MenuList(this.app);
			
			e3.setPrimitiveValue(e3.element, "row", "1" );
			
			this.append(e3);
			
			const e4 = new AtomTabbedPage(this.app);
			
			e4.defaultControlStyle =  AppTabStyle ;
			
			e4.setPrimitiveValue(e4.element, "row", "0:2" );
			
			e4.setPrimitiveValue(e4.element, "column", "1" );
			
			this.append(e4);
			
			const e5 = document.createElement("footer");
			
			this.append(e5);
			
			this.setPrimitiveValue(e5, "row", "2" );
			
			this.setPrimitiveValue(e5, "column", "0:2" );
			
			this.setPrimitiveValue(e5, "style", "padding:5px;" );
			
			const e6 = document.createElement("span");
			
			e5.appendChild(e6);
			
			const e7 = document.createTextNode("© NeuroSpeech Technologies Pvt Ltd");
			e6.appendChild(e7);
			
			const e8 = document.createElement("div");
			
			e5.appendChild(e8);
			
			this.setPrimitiveValue(e8, "style", "position: absolute; right: 5px; top: 5px" );
			
			const e9 = document.createElement("a");
			
			e8.appendChild(e9);
			
			this.setPrimitiveValue(e9, "href", "/docs" );
			
			this.setPrimitiveValue(e9, "target", "_blank" );
			
			this.setPrimitiveValue(e9, "style", "margin-right: 16px" );
			
			const e10 = document.createTextNode("API");
			e9.appendChild(e10);
			// e11
			//  Comment 1 
			
			const e12 = document.createElement("img");
			
			e8.appendChild(e12);
			
			this.setPrimitiveValue(e12, "style", "max-height: 16px; margin-right: 5px;" );
			
			this.setPrimitiveValue(e12, "src",  GitHubMark32px );
			
			const e13 = document.createElement("a");
			
			e8.appendChild(e13);
			
			this.setPrimitiveValue(e13, "href", "https://github.com/neurospeech/web-atoms-core" );
			
			this.setPrimitiveValue(e13, "target", "_blank" );
			
			const e14 = document.createTextNode("Source Code");
			e13.appendChild(e14);
			
			const e15 = document.createElement("span");
			
			e8.appendChild(e15);
			
			this.setPrimitiveValue(e15, "text", " " );
			
			const e16 = document.createElement("img");
			
			e8.appendChild(e16);
			
			this.setPrimitiveValue(e16, "style", "max-height: 16px; margin-right: 5px;" );
			
			this.setPrimitiveValue(e16, "src",  GitHubMark32px );
			
			const e17 = document.createElement("a");
			
			e8.appendChild(e17);
			
			this.setPrimitiveValue(e17, "href", "https://github.com/web-atoms/samples" );
			
			this.setPrimitiveValue(e17, "target", "_blank" );
			
			const e18 = document.createTextNode("Samples");
			e17.appendChild(e18);
		}
	}