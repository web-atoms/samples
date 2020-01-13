// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import AtomCalendar from "@web-atoms/web-controls/dist/calendar/AtomCalendar"
    import CalendarViewModel from "./CalendarViewModel";


export default class Calendar extends AtomControl {
	constructor(app: any, e?: any) {

	public viewModel: CalendarViewModel;

	public create(): void {

		this.render(
		<div>
			<AtomCalendar
				eventDateClicked={Bind.event((s, e) => this.viewModel.dateClicked(e.detail))}>
			<pre
				text={Bind.oneWay((x) => x.viewModel.log)}>
		);