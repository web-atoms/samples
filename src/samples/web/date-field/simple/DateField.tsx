// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import AtomDateField from "@web-atoms/web-controls/dist/date-field/AtomDateField"
    import DateFieldViewModel from "./DateFieldViewModel";


export default class DateField extends AtomControl {
	constructor(app: any, e?: any) {

	public viewModel: DateFieldViewModel;

	public create(): void {

		this.render(
		<div>
			<AtomDateField
				styleWidth="700px"
				eventResult={Bind.event((s, e) => this.viewModel.dateClicked(e.detail))}>
			<pre
				text={Bind.oneWay((x) => x.viewModel.log)}>
		);