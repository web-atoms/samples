// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import AtomCalendar from "@web-atoms/web-controls/dist/calendar/AtomCalendar"

    import CustomCalendarViewModel from "./CustomCalendarViewModel";



export default class CustomCalendar extends AtomControl {
	
	constructor(app: any, e?: any) {
		super(app, e || document.createElement("div"));
	}

	public create(): void {
		this.viewModel =  this.resolve(CustomCalendarViewModel) ;

		this.render(
		<div>
			<AtomCalendar
				styleWidth="700px"
				eventDateClicked={Bind.event((s, e) => this.viewModel.dateClicked(e.detail))}>
				<AtomCalendar.itemTemplate>
					<div
						eventClick={Bind.event((x)=> (x.localViewModel).dateClicked((x.data)))}>
						<div
							style="min-width: 100px; height: 100px"
							text={Bind.oneTime((x) => x.data.label)}
							styleBackgroundColor={Bind.oneWay((x) => x.viewModel.isOdd(x.data) ? 'lightgray' : '')}
							class={Bind.oneWay((x) => ({
                    'date-css': 1,
                    'is-other-month': x.data.isOtherMonth,
                    'is-today': x.data.isToday,
                    'is-weekend': x.data.isWeekend,
                    'is-selected': x.localViewModel.selectedDate == x.data.value,
                    'is-disabled': x.localViewModel.enableFunc ? x.localViewModel.enableFunc(x.data) : 0
                }))}>
						</div>
					</div>
				</AtomCalendar.itemTemplate>
			</AtomCalendar>
			<pre
				text={Bind.oneWay((x) => x.viewModel.log)}>
			</pre>
		</div>
		);
	}
}
