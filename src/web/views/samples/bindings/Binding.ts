// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

    import BindingViewModel from "../../../../view-models/samples/bindings/BindingViewModel";

export default  class Binding extends AtomControl {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
                this.viewModel =  this.resolve(BindingViewModel) ;
                    
        const e1 = document.createTextNode("\r\n    \r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("div");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("One Time Binding");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("div");
        
        this.append(e5);
        
            this.runAfterInit( () =>
            this.setLocalValue(e5, "text", (this.viewModel.title)) );
        

        const e6 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e6);

        const e7 = document.createElement("div");
        
        this.append(e7);
        
        
        const e8 = document.createTextNode("One Way Binding - if you modify anything in following box, \r\n        it will not update anywhere");
        
        e7.appendChild(e8);

        const e9 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e9);

        const e10 = document.createElement("input");
        
        this.append(e10);
        
            this.bind(e10, "value",  [["viewModel","title"]], false , (v1) => (v1) );
        

        const e11 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e11);

        const e12 = document.createElement("div");
        
        this.append(e12);
        
        
        const e13 = document.createTextNode("Two Way Binding - if you modify anything here, it will \r\n        also update on one way binding but not one time binding");
        
        e12.appendChild(e13);

        const e14 = document.createTextNode("\r\n\r\n    ");
        
        this.element.appendChild(e14);

        const e15 = document.createElement("input");
        
        this.append(e15);
        
            this.bind(e15, "value",  [["viewModel","title"]], true  );
        

        const e16 = document.createTextNode("\r\n\r\n");
        
        this.element.appendChild(e16);
                }
            }

            

            