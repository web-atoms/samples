// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AtomDateField from "@web-atoms/web-controls/dist/date-field/AtomDateField"
	    import DateFieldViewModel from "./DateFieldViewModel";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class DateField extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(DateFieldViewModel) ;
			
			const e1 = new AtomDateField(this.app);
			
			e1.setPrimitiveValue(e1.element, "styleWidth", "700px" );
			
			e1.setPrimitiveValue(e1.element, "eventResult",  (e) => this.viewModel.dateClicked(e.detail) );
			
			this.append(e1);
			
			const e2 = document.createElement("pre");
			
			this.append(e2);
			
			this.bind(e2, "text",  [["viewModel","log"]], false , null );
		}
	}