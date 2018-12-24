// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomWindow} from "web-atoms-core/dist/web/controls/AtomWindow";
import {AtomComboBox} from "web-atoms-core/dist/web/controls/AtomComboBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";

        import { AtomWindowSampleViewModel } from "../../../../view-models/basic-controls/AtomWindowSampleViewModel";

export default  class AtomWindowSample extends AtomWindow {

                

                public create(): void {
                    super.create();

                    const __creator = this;

                    

                    
                    
                    
                this.viewModel =  this.resolve(AtomWindowSampleViewModel) ;

        this.setPrimitiveValue(this.element, "title", "Add New Movie" );
        

        this.setPrimitiveValue(this.element, "width", "500px" );
        

        this.setPrimitiveValue(this.element, "height", "350px" );
        

        this.windowTemplate = AtomWindowSample_windowTemplate_1_5Creator(this);
            

        this.commandTemplate = AtomWindowSample_commandTemplate_2_6Creator(this);
            
                    
        const e1 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e1);

        const e2 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e2);

        const e3 = document.createTextNode("\r\n");
        
        this.element.appendChild(e3);
                }
            }

            function AtomWindowSample_windowTemplate_1_5Creator(__creator){
                return  class AtomWindowSample_windowTemplate_1_5 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
                    
        const e1 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("table");
        
        this.append(e2);
        
        
        const e3 = document.createTextNode("\r\n            ");
        
        e2.appendChild(e3);

        const e4 = document.createElement("tr");
        
        e2.appendChild(e4);
        
        
        const e5 = document.createTextNode("\r\n                ");
        
        e4.appendChild(e5);

        const e6 = document.createElement("td");
        
        e4.appendChild(e6);
        
        
        const e7 = document.createTextNode("\r\n                    Name:\r\n                ");
        
        e6.appendChild(e7);

        const e8 = document.createTextNode("\r\n                ");
        
        e4.appendChild(e8);

        const e9 = document.createElement("td");
        
        e4.appendChild(e9);
        
        
        const e10 = document.createTextNode("\r\n                    ");
        
        e9.appendChild(e10);

        const e11 = document.createElement("input");
        
        e9.appendChild(e11);
        
        this.setPrimitiveValue(e11, "style", "height: 30px;\r\n                        padding-left: 4px;\r\n                        width: 200px;" );
        

        this.setPrimitiveValue(e11, "type", "text" );
        

        this.setPrimitiveValue(e11, "placeholder", "Enter Movie Name" );
        

            this.bind(e11, "value",  [["viewModel","movie","name"]], ["change", "keyup", "keydown", "blur"]  );

        this.setPrimitiveValue(e11, "autofocus", "autofocus" );
        
        

        const e12 = document.createTextNode("\r\n                ");
        
        e9.appendChild(e12);

        const e13 = document.createTextNode("\r\n                ");
        
        e4.appendChild(e13);

        const e14 = document.createElement("td");
        
        e4.appendChild(e14);
        
        this.setPrimitiveValue(e14, "style", "color:red; font-size:13px" );
        

            this.bind(e14, "text",  [["viewModel","errorName"]], false , (v1) => (v1) );
        
        const e15 = document.createTextNode("\r\n                ");
        
        e14.appendChild(e15);

        const e16 = document.createTextNode("\r\n            ");
        
        e4.appendChild(e16);

        const e17 = document.createTextNode("\r\n            ");
        
        e2.appendChild(e17);

        const e18 = document.createElement("tr");
        
        e2.appendChild(e18);
        
        
        const e19 = document.createTextNode("\r\n                ");
        
        e18.appendChild(e19);

        const e20 = document.createElement("td");
        
        e18.appendChild(e20);
        
        
        const e21 = document.createTextNode("\r\n                    Type:\r\n                ");
        
        e20.appendChild(e21);

        const e22 = document.createTextNode("\r\n                ");
        
        e18.appendChild(e22);

        const e23 = document.createElement("td");
        
        e18.appendChild(e23);
        
        
        const e24 = document.createTextNode("\r\n                        ");
        
        e23.appendChild(e24);

            const e25 = new AtomComboBox(this.app, document.createElement("select"));
            
            
        const e26 = document.createTextNode("\r\n                        ");
        
        e25.element.appendChild(e26);
            
        e25.setPrimitiveValue(e25.element, "style", "height: 30px;\r\n                            margin: 10px 0px;" );
        

        e25.setPrimitiveValue(e25.element, "labelPath", "label" );
        

        e25.setPrimitiveValue(e25.element, "valuePath", "value" );
        

            e25.bind(e25.element, "items",  [], false , () => [{
                                label: 'Select Type',
                                value: ''
                            },{
                                label: 'Action',
                                value: 'Action'
                            },
                            {
                                label: 'Animated',
                                value: 'Animated'
                            },
                            {
                                label: 'Sci-Fi',
                                value: 'Sci-Fi'
                            },
                            {
                                label: 'Thriller',
                                value: 'Thriller'
                            },
                            {
                                label: 'Comedy',
                                value: 'Comedy'
                            },
                            {
                                label: 'Horror',
                                value: 'Horror'
                            }] );

            e25.bind(e25.element, "value",  [["viewModel","movie","genre"]], ["change", "keyup", "keydown", "blur"]  );
            e23.appendChild(e25.element);


        const e27 = document.createTextNode("\r\n                ");
        
        e23.appendChild(e27);

        const e28 = document.createTextNode("\r\n                ");
        
        e18.appendChild(e28);

        const e29 = document.createElement("td");
        
        e18.appendChild(e29);
        
        this.setPrimitiveValue(e29, "style", "color:red; font-size:13px" );
        

            this.bind(e29, "text",  [["viewModel","errorType"]], false , (v1) => (v1) );
        

        const e30 = document.createTextNode("\r\n            ");
        
        e18.appendChild(e30);

        const e31 = document.createTextNode("\r\n            ");
        
        e2.appendChild(e31);

        const e32 = document.createElement("tr");
        
        e2.appendChild(e32);
        
        
        const e33 = document.createTextNode("\r\n                ");
        
        e32.appendChild(e33);

        const e34 = document.createElement("td");
        
        e32.appendChild(e34);
        
        
        const e35 = document.createTextNode("\r\n                    Description:\r\n                ");
        
        e34.appendChild(e35);

        const e36 = document.createTextNode("\r\n                ");
        
        e32.appendChild(e36);

        const e37 = document.createElement("td");
        
        e32.appendChild(e37);
        
        this.setPrimitiveValue(e37, "colspan", "2" );
        
        
        const e38 = document.createTextNode("\r\n                    ");
        
        e37.appendChild(e38);

        const e39 = document.createElement("textarea");
        
        e37.appendChild(e39);
        
        this.setPrimitiveValue(e39, "cols", "30" );
        

        this.setPrimitiveValue(e39, "rows", "10" );
        

        this.setPrimitiveValue(e39, "placeholder", "Enter Movie Description" );
        

            this.bind(e39, "value",  [["viewModel","movie","description"]], true  );
        

        const e40 = document.createTextNode("\r\n                ");
        
        e37.appendChild(e40);

        const e41 = document.createTextNode("\r\n            ");
        
        e32.appendChild(e41);

        const e42 = document.createTextNode("\r\n        ");
        
        e2.appendChild(e42);

        const e43 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e43);
                }
            }

            

            
            }
function AtomWindowSample_commandTemplate_2_6Creator(__creator){
                return  class AtomWindowSample_commandTemplate_2_6 extends AtomControl {

                

                public create(): void {
                    super.create();

                     ;

                    

                    this.element = document.createElement("div");
                    
                    
                    
        const e1 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e1);

        const e2 = document.createElement("button");
        
        this.append(e2);
        
            this.runAfterInit( () =>
            this.setLocalValue(e2, "eventClick",  () => (this.viewModel).save() ) );
        
        const e3 = document.createTextNode("Save");
        
        e2.appendChild(e3);

        const e4 = document.createTextNode("\r\n        ");
        
        this.element.appendChild(e4);

        const e5 = document.createElement("button");
        
        this.append(e5);
        
            this.runAfterInit( () =>
            this.setLocalValue(e5, "eventClick",  () => (this.viewModel).cancel() ) );
        
        const e6 = document.createTextNode("Cancel");
        
        e5.appendChild(e6);

        const e7 = document.createTextNode("\r\n    ");
        
        this.element.appendChild(e7);
                }
            }

            

            
            }

            