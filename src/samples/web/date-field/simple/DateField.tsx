import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import AtomDateField from "@web-atoms/web-controls/dist/date-field/AtomDateField";
import DateFieldViewModel from "./DateFieldViewModel";

export default class DateField extends AtomControl {

	public viewModel: DateFieldViewModel;

	public create(): void {
		this.viewModel =  this.resolve(DateFieldViewModel) ;

		this.render(
		<div>
			<AtomDateField
				styleWidth="700px"
				eventResult={Bind.event((s, e) => this.viewModel.dateClicked(e.detail))}>
			</AtomDateField>
			<pre
				text={Bind.oneWay(() => this.viewModel.log)}>
			</pre>
		</div>
		);
	}
}
