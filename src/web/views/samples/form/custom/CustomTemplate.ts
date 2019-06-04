// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";

        import AtomFieldTemplate from "@web-atoms/web-controls/dist/form/AtomFieldTemplate";
    
export default  class CustomTemplate extends AtomFieldTemplate {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    this.element = document.createElement("div");
                    
                    
            this.bind(this.element, "class",  [["this","field","fieldClass"],["this","field","fieldClass"],["this","field","hasError"],["this","field","visible"]], false , (v1,v2,v3,v4) =>  ({
            'form-field': 1,
            [(v1)] : (v2),
            'has-error': (v3),
            'field-hidden': !(v4)
        })  , __creator);
                    
            const e1 = document.createElement("span");
            
            this.append(e1);
            
        this.setPrimitiveValue(e1, "class", "help" );
        

                this.setPrimitiveValue(e1, "eventClick",  () => this.field.openHelp() );

            this.bind(e1, "styleDisplay",  [["this","field","hasHelp"]], false , (v1) => (v1) ? '' : 'none' , __creator);
            
        const e2 = document.createTextNode("?");
        
        e1.appendChild(e2);

            const e3 = document.createElement("label");
            
        this.labelPresenter = e3;
            this.append(e3);
            
        this.setPrimitiveValue(e3, "class", "label" );
        

            this.bind(e3, "styleColor",  [["this","field","required"]], false , (v1) => (v1) ? 'red' : 'black' , __creator);

            this.bind(e3, "text",  [["this","field","label"]], false , (v1) => (v1) , __creator);
            

            const e4 = document.createElement("span");
            
            this.append(e4);
            
        this.setPrimitiveValue(e4, "class", "error" );
        

            this.bind(e4, "styleDisplay",  [["this","field","hasError"]], false , (v1) =>  (v1) ? '' : 'none'  , __creator);

            this.bind(e4, "text",  [["this","field","error"]], false , (v1) => (v1) , __creator);
            

            const e5 = document.createElement("div");
            
        this.contentPresenter = e5;
            this.append(e5);
            
        this.setPrimitiveValue(e5, "class", "presenter" );
        
            
                }
            }

            

            