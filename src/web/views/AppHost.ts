// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomTabbedPage} from "web-atoms-core/dist/web/controls/AtomTabbedPage";
import {AtomGridView} from "web-atoms-core/dist/web/controls/AtomGridView";

    import AppHostViewModel from "../../view-models/AppHostViewModel";
    import MenuList from "./MenuList";
    import GitHubMark32px from "../../images/github/GitHubMark32px";

export default  class AppHost extends AtomGridView {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
        this.setPrimitiveValue(this.element, "styleFontFamily", "'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif" );
        

                this.viewModel =  this.resolve(AppHostViewModel) ;

        this.setPrimitiveValue(this.element, "columns", "200, *" );
        

        this.setPrimitiveValue(this.element, "rows", "30, *, 30" );
        
                    
        const e1 = document.createTextNode("\n\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("header");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\n        ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("h3");
        
        e2.appendChild(e4);
        
        this.setPrimitiveValue(e4, "style", "position: absolute; margin: 0; padding: 0; top: 5px; left: 5px;" );
        

        this.setPrimitiveValue(e4, "text", "<W/> Web Atoms" );
        
        

        const e5 = document.createTextNode("\n    ");
        
        e2.appendChild(e5);

        const e6 = document.createTextNode("\n\n    ");
        
        this.element.appendChild(e6);

            const e7 = new MenuList(this.app);
            
            
            
        e7.setPrimitiveValue(e7.element, "row", "1" );
        
            this.append(e7);


        const e8 = document.createTextNode("\n\n    ");
        
        this.element.appendChild(e8);

            const e9 = new AtomTabbedPage(this.app);
            
            
            
        e9.setPrimitiveValue(e9.element, "row", "0:2" );
        

        e9.setPrimitiveValue(e9.element, "column", "1" );
        
            this.append(e9);


        const e10 = document.createTextNode("\n\n    ");
        
        this.element.appendChild(e10);

        const e11 = document.createElement("footer");
        
        this.append(e11);
        
        this.setPrimitiveValue(e11, "row", "2" );
        

        this.setPrimitiveValue(e11, "column", "0:2" );
        

        this.setPrimitiveValue(e11, "style", "padding:5px;" );
        
        
        const e12 = document.createTextNode("\n        ");
        
        e11.appendChild(e12);

        const e13 = document.createElement("span");
        
        e11.appendChild(e13);
        
        
        const e14 = document.createTextNode("© NeuroSpeech Technologies Pvt Ltd");
        
        e13.appendChild(e14);

        const e15 = document.createTextNode("\n        ");
        
        e11.appendChild(e15);

        const e16 = document.createElement("div");
        
        e11.appendChild(e16);
        
        this.setPrimitiveValue(e16, "style", "position: absolute; right: 5px; top: 5px" );
        
        
        const e17 = document.createTextNode("\n\n            ");
        
        e16.appendChild(e17);
// e18
//  Comment 1 

        const e19 = document.createTextNode("\n\n            ");
        
        e16.appendChild(e19);

        const e20 = document.createElement("img");
        
        e16.appendChild(e20);
        
        this.setPrimitiveValue(e20, "style", "max-height: 16px" );
        

                this.setPrimitiveValue(e20, "src",  GitHubMark32px );
        

        const e21 = document.createTextNode("\n            ");
        
        e16.appendChild(e21);

        const e22 = document.createElement("a");
        
        e16.appendChild(e22);
        
        this.setPrimitiveValue(e22, "href", "https://github.com/neurospeech/web-atoms-core" );
        

        this.setPrimitiveValue(e22, "target", "_blank" );
        
        
        const e23 = document.createTextNode("Source Code");
        
        e22.appendChild(e23);

        const e24 = document.createTextNode("\n\n            ");
        
        e16.appendChild(e24);

        const e25 = document.createElement("img");
        
        e16.appendChild(e25);
        
        this.setPrimitiveValue(e25, "style", "max-height: 16px" );
        

                this.setPrimitiveValue(e25, "src",  GitHubMark32px );
        

        const e26 = document.createTextNode("\n            ");
        
        e16.appendChild(e26);

        const e27 = document.createElement("a");
        
        e16.appendChild(e27);
        
        this.setPrimitiveValue(e27, "href", "https://github.com/neurospeech/web-atoms-samples" );
        

        this.setPrimitiveValue(e27, "target", "_blank" );
        
        
        const e28 = document.createTextNode("Samples");
        
        e27.appendChild(e28);

        const e29 = document.createTextNode("\n\n        ");
        
        e16.appendChild(e29);

        const e30 = document.createTextNode("\n    ");
        
        e11.appendChild(e30);

        const e31 = document.createTextNode("\n\n");
        
        this.element.appendChild(e31);
                }
            }

            

            