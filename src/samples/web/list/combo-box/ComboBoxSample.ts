// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomComboBox} from "web-atoms-core/dist/web/controls/AtomComboBox";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import ComboBoxViewModel from "./ComboBoxViewModel";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class ComboBoxSample extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(ComboBoxViewModel) ;
			
			this.setPrimitiveValue(this.element, "style", "padding: 10px;" );
			
			const e1 = new AtomComboBox(this.app, document.createElement("select"));
			
			e1.setPrimitiveValue(e1.element, "labelPath", "name" );
			
			e1.setPrimitiveValue(e1.element, "valuePath", "name" );
			
			e1.bind(e1.element, "items",  [["viewModel","movies","value"]], false , null );
			
			e1.bind(e1.element, "value",  [["viewModel","name"]], ["change", "keyup", "keydown", "blur"]  );
			
			e1.setPrimitiveValue(e1.element, "style", "width:200px;height:33px;margin-bottom:10px;" );
			
			this.append(e1);
			
			const e2 = document.createElement("div");
			
			this.append(e2);
			
			this.bind(e2, "text",  [["viewModel","name"]], false , (v1) => 'Selected Movie: ' + (v1) );
		}
	}