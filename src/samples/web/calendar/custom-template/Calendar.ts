// tslint:disable
import {BindableProperty} from "web-atoms-core/dist/core/BindableProperty";
import {AtomControl} from "web-atoms-core/dist/web/controls/AtomControl";
	
	    import AtomCalendar from "@web-atoms/web-controls/dist/calendar/AtomCalendar"
	    import CalendarViewModel from "./CalendarViewModel";
	
	
	export default class Calendar extends AtomControl {
		
		constructor(app: any, e?: any) {
			super(app, e || document.createElement("div"));
		}
		
		public create(): void {
			
			super.create();
			
			const __creator = this;
			
			this.viewModel =  this.resolve(CalendarViewModel) ;
			
			const e1 = new AtomCalendar(this.app);
			
			e1.setPrimitiveValue(e1.element, "styleWidth", "700px" );
			
			e1.setPrimitiveValue(e1.element, "eventDateClicked",  (e) => this.viewModel.dateClicked(e.detail) );
			
			e1.itemTemplate = Calendar_itemTemplate_1_21Creator(this);
			
			this.append(e1);
			
			const e2 = document.createElement("pre");
			
			this.append(e2);
			
			this.bind(e2, "text",  [["viewModel","log"]], false , null );
		}
	}
	
	function Calendar_itemTemplate_1_21Creator(__creator) {
		return class Calendar_itemTemplate_1_21 extends AtomControl {
			
			constructor(app: any, e?: any) {
				super(app, e || document.createElement("div"));
			}
			
			public create(): void {
				
				super.create();
				
				this.runAfterInit( () => this.setLocalValue(this.element, "eventClick",  ()=> (this.localViewModel).dateClicked((this.data))) );
				
				const e1 = document.createElement("div");
				
				this.append(e1);
				
				this.setPrimitiveValue(e1, "style", "min-width: 100px; height: 100px" );
				
				this.runAfterInit( () => this.setLocalValue(e1, "text", ((this.data) ? this.data.label : undefined)) );
				
				this.bind(e1, "styleBackgroundColor",  [["viewModel"],["data"]], false , (v1,v2) =>  (v1).isOdd((v2)) ? 'lightgray' : ''  );
				
				this.bind(e1, "class",  [["data","isOtherMonth"],["data","isToday"],["data","isWeekend"],["localViewModel","selectedDate"],["data","value"],["localViewModel","enableFunc"],["localViewModel"],["data"]], false , (v1,v2,v3,v4,v5,v6,v7,v8) =>  ({
				                    'date-css': 1,
				                    'is-other-month': (v1),
				                    'is-today': (v2),
				                    'is-weekend': (v3),
				                    'is-selected': (v4) == (v5),
				                    'is-disabled': (v6) ? (v7).enableFunc((v8)) : 0
				                })  );
			}
		}
	}