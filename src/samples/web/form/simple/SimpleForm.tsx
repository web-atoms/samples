import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {AtomComboBox} from "@web-atoms/core/dist/web/controls/AtomComboBox";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import SimpleViewModel from "./SimpleViewModel";

export default class SimpleForm extends AtomControl {

	public create(): void {
		this.viewModel =  this.resolve(SimpleViewModel) ;

		this.render(
		<div>
			<AtomForm>
				<AtomField
					label="First name:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorFirstName)}>
					<input
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.firstName)}>
					</input>
				</AtomField>
				<AtomField
					label="Last name:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorLastName)}>
					<input
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.lastName)}>
					</input>
				</AtomField>
				<AtomField
					label="Email Address:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorEmailAddress)}
					helpText="We will send you email to verify your account.">
					<input
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.emailAddress)}>
					</input>
				</AtomField>
				<AtomField
					label="Country:">
					<AtomComboBox
						items={Bind.oneWay((x) => x.viewModel.countryList)}
						value={Bind.twoWays((x) => x.viewModel.model.country)}>
					</AtomComboBox>
				</AtomField>
				<AtomField
					label="State:">
					<AtomComboBox
						items={Bind.oneWay((x) => x.viewModel.stateList)}
						value={Bind.twoWays((x) => x.viewModel.model.state)}>
					</AtomComboBox>
				</AtomField>
				<AtomField
					label="Password:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorPassword)}>
					<input
						type="password"
						value={Bind.twoWays((x) => x.viewModel.model.password)}>
					</input>
				</AtomField>
				<AtomField
					label="Password (Again):"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorPasswordAgain)}>
					<input
						type="password"
						value={Bind.twoWays((x) => x.viewModel.model.passwordAgain)}>
					</input>
				</AtomField>
			</AtomForm>
			<button
				eventClick={Bind.event((x) => this.viewModel.signup())}>
				Signup
			</button>
		</div>
		);
	}
}
