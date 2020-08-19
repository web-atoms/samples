import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomToggleButtonBar} from "@web-atoms/core/dist/web/controls/AtomToggleButtonBar";
import ToggleBarSampleStyle from "./ToggleBarSampleStyle";
import ViewModel from "./ViewModel";

export default class ToggleButtonBarSample extends AtomControl {

	public viewModel: ViewModel;

	public create(): void {
		this.viewModel =  this.resolve(ViewModel) ;

		this.render(
		<div
			style="padding: 10px;">
			<AtomToggleButtonBar
				controlStyle={Bind.oneTime(() => ToggleBarSampleStyle)}
				labelPath="label"
				valuePath="value"
				items={Bind.oneTime(() => this.viewModel.genderList)}
				value={Bind.twoWays(() => this.viewModel.gender, ["change", "keyup", "keydown", "blur"])}
				style="height:33px;">
			</AtomToggleButtonBar>
			<div
				style="font-size: 15px;
                 margin-top: 20px;
                 font-weight: 600"
				text={Bind.oneWay(() => `Selected Movie: ${this.viewModel.gender}`)}>
			</div>
		</div>
		);
	}
}
