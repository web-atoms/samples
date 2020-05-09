import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import CustomValidationViewModel from "./CustomValidationViewModel";

export default class CustomValidation extends AtomControl {

	public viewModel: CustomValidationViewModel;

	public create(): void {
		this.viewModel =  this.resolve(CustomValidationViewModel) ;

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
			<AtomItemsControl
				items={Bind.oneTime(() => this.viewModel.model.emails)}>
				<AtomItemsControl.itemTemplate>
					<div>
						<input
							placeholder="Email"
							value={Bind.twoWays((x) => x.data.email)}>
						</input>
						<span
							style="color: red"
							text={Bind.oneWay((x) => x.data.error)}>
						</span>
					</div>
				</AtomItemsControl.itemTemplate>
			</AtomItemsControl>
			<button
				eventClick={Bind.event(() => this.viewModel.addEmail())}>
				Add Email
			</button>
			<div>

				        Other fields...

			</div>
			<button
				eventClick={Bind.event(() => this.viewModel.signup())}>
				Signup
			</button>
		</div>
		);
	}
}
