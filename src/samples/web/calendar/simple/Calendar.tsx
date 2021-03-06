import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import AtomCalendar from "@web-atoms/web-controls/dist/calendar/AtomCalendar";
import CalendarViewModel from "./CalendarViewModel";

export default class Calendar extends AtomControl {

	public viewModel: CalendarViewModel;

	public create(): void {
		this.viewModel =  this.resolve(CalendarViewModel) ;

		this.render(
		<div>
			<AtomCalendar
				eventDateClicked={Bind.event((s, e) => this.viewModel.dateClicked(e.detail))}>
			</AtomCalendar>
			<pre
				text={Bind.oneWay(() => this.viewModel.log)}>
			</pre>
		</div>
		);
	}
}
