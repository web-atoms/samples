import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import SimpleFormViewModel from "../SimpleFormViewModel";

export default class AutoFocusNext extends AtomControl {

	public viewModel: SimpleFormViewModel;

	public create(): void {
		this.viewModel =  this.resolve(SimpleFormViewModel) ;

		this.render(
		<div>
			<h3>
				The focus will move to next input as you press enter
			</h3>
			{/* e3

			//  event-submit and focus-next-on-enter must be set  */}
			<AtomForm
				focusNextOnEnter={Bind.oneTime(() => true)}
				eventSubmit={Bind.event((x) => this.viewModel.signup())}>
				<AtomField
					label="First name:"
					required="true"
					error={Bind.oneWay(() => this.viewModel.errorFirstName)}>
					<input
						type="text"
						value={Bind.twoWays(() => this.viewModel.model.firstName)}>
					</input>
				</AtomField>
				<AtomField
					label="Last name:"
					required="true"
					error={Bind.oneWay(() => this.viewModel.errorLastName)}>
					<input
						type="text"
						value={Bind.twoWays(() => this.viewModel.model.lastName)}>
					</input>
				</AtomField>
				<AtomField
					label="Email Address:"
					required="true"
					error={Bind.oneWay(() => this.viewModel.errorEmailAddress)}
					helpText="We will send you email to verify your account.">
					<input
						style="width: 500px"
						type="text"
						value={Bind.twoWays(() => this.viewModel.model.emailAddress)}>
					</input>
				</AtomField>
				<AtomField
					label="Password:"
					required="true"
					error={Bind.oneWay(() => this.viewModel.errorPassword)}>
					<input
						type="password"
						value={Bind.twoWays(() => this.viewModel.model.password)}>
					</input>
				</AtomField>
				<AtomField
					label="Password (Again):"
					required="true"
					error={Bind.oneWay(() => this.viewModel.errorPasswordAgain)}>
					{/* e14

					//  last input must have submit class  */}
					<input
						class="submit"
						type="password"
						value={Bind.twoWays(() => this.viewModel.model.passwordAgain)}>
					</input>
				</AtomField>
			</AtomForm>
			<button
				eventClick={Bind.event(() => this.viewModel.signup())}>
				Signup
			</button>
		</div>
		);
	}
}
