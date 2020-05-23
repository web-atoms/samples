import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import AtomDateField from "@web-atoms/web-controls/dist/date-field/AtomDateField";
import CustomDateFieldViewModel from "./CustomDateFieldViewModel";

export default class CustomDateField extends AtomControl {

	public viewModel: CustomDateFieldViewModel;

	public create(): void {
		this.viewModel =  this.resolve(CustomDateFieldViewModel) ;

		this.render(
		<div>
			<AtomDateField
				styleWidth="700px"
				eventResult={Bind.event((s, e) => this.viewModel.dateClicked(e.detail))}>
				{/** To access localViewModel of AtomDateField, do not use `this` */}
				<AtomDateField.itemTemplate>
					<div
						eventClick={Bind.event((x) => x.localViewModel.dateClicked((x.data)))}>
						<div
							style="min-width: 100px; height: 100px"
							text={Bind.oneTime((x) => x.data.label)}
							styleBackgroundColor={Bind.oneWay((x) => x.viewModel.parent.isOdd(x.data) ? "lightgray" : "")}
							class={Bind.oneWay((x) => ({
                    "date-css": 1,
                    "is-other-month": x.data.isOtherMonth,
                    "is-today": x.data.isToday,
                    "is-weekend": x.data.isWeekend,
                    "is-selected": x.localViewModel.selectedDate === x.data.value,
                    "is-disabled": x.localViewModel.enableFunc ? x.localViewModel.enableFunc(x.data) : 0
                }))}>
						</div>
					</div>
				</AtomDateField.itemTemplate>
			</AtomDateField>
			<pre
				text={Bind.oneWay(() => this.viewModel.log)}>
			</pre>
		</div>
		);
	}
}
