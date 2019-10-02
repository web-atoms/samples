// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AtomCalendar from "@web-atoms/web-controls/dist/calendar/AtomCalendar"
	    import CalendarViewModel from "./CalendarViewModel";
	
	
	declare var UMD: any;
	const __moduleName = this.filename;
	export default class Calendar extends AtomControl {
		public static readonly _$_url = __moduleName ;
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(CalendarViewModel) ;
			
			const e1 = new AtomCalendar(this.app);
			
			e1.setPrimitiveValue(e1.element, "eventDateClicked",  (e) => this.viewModel.dateClicked(e.detail) );
			
			this.append(e1);
			
			const e2 = document.createElement("pre");
			
			this.append(e2);
			
			this.bind(e2, "text",  [["viewModel","log"]], false , null );
		}
	}