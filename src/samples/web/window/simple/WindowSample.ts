// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomWindow} from "web-atoms-core/dist/web/controls/AtomWindow";
import {AtomComboBox} from "web-atoms-core/dist/web/controls/AtomComboBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	        import { WindowSampleViewModel } from "./WindowSampleViewModel";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class WindowSample extends AtomWindow {
		public static readonly _$_url = __moduleName ;
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(WindowSampleViewModel) ;
			
			this.setPrimitiveValue(this.element, "title", "Add New Movie" );
			
			this.setPrimitiveValue(this.element, "width", "500px" );
			
			this.setPrimitiveValue(this.element, "height", "350px" );
			
			this.windowTemplate = WindowSample_windowTemplate_1_12Creator(this);
			
			this.commandTemplate = WindowSample_commandTemplate_2_13Creator(this);
		}
	}
	
	function WindowSample_windowTemplate_1_12Creator(__creator) {
		return class WindowSample_windowTemplate_1_12 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("table");
				
				this.append(e1);
				
				const e2 = document.createElement("tr");
				
				e1.appendChild(e2);
				
				const e3 = document.createElement("td");
				
				e2.appendChild(e3);
				
				const e4 = document.createTextNode("\n                    Name:\n                ");
				e3.appendChild(e4);
				
				const e5 = document.createElement("td");
				
				e2.appendChild(e5);
				
				const e6 = document.createElement("input");
				
				e5.appendChild(e6);
				
				this.setPrimitiveValue(e6, "style", "height: 30px;\n                        padding-left: 4px;\n                        width: 200px;" );
				
				this.setPrimitiveValue(e6, "type", "text" );
				
				this.setPrimitiveValue(e6, "placeholder", "Enter Movie Name" );
				
				this.bind(e6, "value",  [["viewModel","movie","name"]], ["change", "keyup", "keydown", "blur"]  );
				
				this.setPrimitiveValue(e6, "autofocus", "autofocus" );
				
				const e7 = document.createElement("td");
				
				e2.appendChild(e7);
				
				this.setPrimitiveValue(e7, "style", "color:red; font-size:13px" );
				
				this.bind(e7, "text",  [["viewModel","errorName"]], false , null );
				
				const e8 = document.createElement("tr");
				
				e1.appendChild(e8);
				
				const e9 = document.createElement("td");
				
				e8.appendChild(e9);
				
				const e10 = document.createTextNode("\n                    Type:\n                ");
				e9.appendChild(e10);
				
				const e11 = document.createElement("td");
				
				e8.appendChild(e11);
				
				const e12 = new AtomComboBox(this.app, document.createElement("select"));
				
				e12.setPrimitiveValue(e12.element, "style", "height: 30px;\n                            margin: 10px 0px;" );
				
				e12.setPrimitiveValue(e12.element, "labelPath", "label" );
				
				e12.setPrimitiveValue(e12.element, "valuePath", "value" );
				
				e12.runAfterInit( () => e12.setLocalValue(e12.element, "items",  ((e12.viewModel) ? e12.viewModel.types : undefined) ) );
				
				e12.bind(e12.element, "value",  [["viewModel","movie","genre"]], ["change", "keyup", "keydown", "blur"]  );
				
				e11.appendChild(e12.element);
				
				const e13 = document.createElement("td");
				
				e8.appendChild(e13);
				
				this.setPrimitiveValue(e13, "style", "color:red; font-size:13px" );
				
				this.bind(e13, "text",  [["viewModel","errorType"]], false , null );
				
				const e14 = document.createElement("tr");
				
				e1.appendChild(e14);
				
				const e15 = document.createElement("td");
				
				e14.appendChild(e15);
				
				const e16 = document.createTextNode("\n                    Description:\n                ");
				e15.appendChild(e16);
				
				const e17 = document.createElement("td");
				
				e14.appendChild(e17);
				
				this.setPrimitiveValue(e17, "colspan", "2" );
				
				const e18 = document.createElement("textarea");
				
				e17.appendChild(e18);
				
				this.setPrimitiveValue(e18, "cols", "30" );
				
				this.setPrimitiveValue(e18, "rows", "10" );
				
				this.setPrimitiveValue(e18, "placeholder", "Enter Movie Description" );
				
				this.bind(e18, "value",  [["viewModel","movie","description"]], true  );
			}
		}
	}
	
	function WindowSample_commandTemplate_2_13Creator(__creator) {
		return class WindowSample_commandTemplate_2_13 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				const e1 = document.createElement("button");
				
				this.append(e1);
				
				this.runAfterInit( () => this.setLocalValue(e1, "eventClick",  () => (this.viewModel).save() ) );
				
				const e2 = document.createTextNode("Save");
				e1.appendChild(e2);
				
				const e3 = document.createElement("button");
				
				this.append(e3);
				
				this.runAfterInit( () => this.setLocalValue(e3, "eventClick",  () => (this.viewModel).cancel() ) );
				
				const e4 = document.createTextNode("Cancel");
				e3.appendChild(e4);
			}
		}
	}