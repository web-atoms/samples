import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import SimpleValidationViewModel from "./SimpleValidationViewModel";

export default class SimpleValidation extends AtomControl {

	public viewModel: SimpleValidationViewModel;

	public create(): void {
		this.viewModel =  this.resolve(SimpleValidationViewModel) ;

		this.render(
		<div>
			<div>
				<input
					placeholder="Name"
					value={Bind.twoWays(() => this.viewModel.model.name)}>
				</input>
				<span
					style="color: red"
					text={Bind.oneWay(() => this.viewModel.errorName)}>
				</span>
			</div>
			<div>
				<input
					placeholder="Email"
					value={Bind.twoWays(() => this.viewModel.model.email)}>
				</input>
				<span
					style="color: red"
					text={Bind.oneWay(() => this.viewModel.errorEmail)}>
				</span>
			</div>
			<button
				eventClick={Bind.event(() => this.viewModel.signup())}>
				Signup
			</button>
			<button
				eventClick={Bind.event(() => this.viewModel.cancel())}>
				Cancel
			</button>
		</div>
		);
	}
}
