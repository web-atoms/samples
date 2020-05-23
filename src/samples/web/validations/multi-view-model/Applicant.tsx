import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import ApplicantViewModel from "./ApplicantViewModel";

export default class Applicant extends AtomControl {

	public viewModel: ApplicantViewModel;

	public create(): void {
		this.viewModel =  this.resolve(ApplicantViewModel, () => ({ model: this.data, parent: this.parent.viewModel })) ;

		this.render(
		<div
			style="margin: 5px; padding: 5px; border: solid 1px lightgray; border-radius: 5px">
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
					placeholder="Address"
					value={Bind.twoWays(() => this.viewModel.model.address)}>
				</input>
				<span
					style="color: red"
					text={Bind.oneWay(() => this.viewModel.errorAddress)}>
				</span>
			</div>
			<button
				eventClick={Bind.event(() => this.viewModel.delete())}>
				Delete
			</button>
		</div>
		);
	}
}
