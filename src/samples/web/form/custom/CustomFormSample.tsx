import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import SimpleFormViewModel from "../SimpleFormViewModel";
import CustomForm from "./CustomForm";

export default class CustomFormSample extends AtomControl {

	public viewModel: SimpleFormViewModel;

	public create(): void {
		this.viewModel =  this.resolve(SimpleFormViewModel) ;

		this.render(
		<div>
			<CustomForm>
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
					fieldClass="small"
					label="Password:"
					required="true"
					error={Bind.oneWay(() => this.viewModel.errorPassword)}>
					<input
						type="password"
						value={Bind.twoWays(() => this.viewModel.model.password)}>
					</input>
				</AtomField>
				<AtomField
					fieldClass="small"
					label="Password (Again):"
					required="true"
					error={Bind.oneWay(() => this.viewModel.errorPasswordAgain)}>
					<input
						type="password"
						value={Bind.twoWays(() => this.viewModel.model.passwordAgain)}>
					</input>
				</AtomField>
			</CustomForm>
			<button
				eventClick={Bind.event((x) => this.viewModel.signup())}>
				Signup
			</button>
		</div>
		);
	}
}
