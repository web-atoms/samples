import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomComboBox} from "@web-atoms/core/dist/web/controls/AtomComboBox";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

import ComboBoxViewModel from "./ComboBoxViewModel";

export default class ComboBoxSample extends AtomControl {

	public viewModel: ComboBoxViewModel;

	public create(): void {
		this.viewModel =  this.resolve(ComboBoxViewModel) ;

		this.render(
		<div
			style="padding: 10px;">
			<AtomComboBox
				labelPath="name"
				valuePath="name"
				items={Bind.oneWay(() => this.viewModel.movies.value)}
				value={Bind.twoWays(() => this.viewModel.name, ["change", "keyup", "keydown", "blur"])}
				style="width:200px;height:33px;margin-bottom:10px;"
				for="select">
			</AtomComboBox>
			<div
				text={Bind.oneWay(() => "Selected Movie: " + this.viewModel.name)}>
			</div>
		</div>
		);
	}
}
