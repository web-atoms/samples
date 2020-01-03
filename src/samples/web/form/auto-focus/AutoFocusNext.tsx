// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
    import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
    import SimpleFormViewModel from "../SimpleFormViewModel";
    import SideBySideFormStyle from "../side-by-side/SideBySideFormStyle"; 


export default class AutoFocusNext extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(SimpleFormViewModel) ;

		this.render(
		<div>
			<h3>
				The focus will move to next input as you press enter			</h3>
			{/* e3
			//  event-submit and focus-next-on-enter must be set  */}
			<AtomForm
				focusNextOnEnter={Bind.oneTime(() => true)}
				eventSubmit={Bind.event((x) => this.viewModel.signup())}>
				<AtomField
					label="First name:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorFirstName)}>
					<input
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.firstName)}>					</input>				</AtomField>
				<AtomField
					label="Last name:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorLastName)}>
					<input
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.lastName)}>					</input>				</AtomField>
				<AtomField
					label="Email Address:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorEmailAddress)}
					helpText="We will send you email to verify your account.">
					<input
						style="width: 500px"
						type="text"
						value={Bind.twoWays((x) => x.viewModel.model.emailAddress)}>					</input>				</AtomField>
				<AtomField
					label="Password:"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorPassword)}>
					<input
						type="password"
						value={Bind.twoWays((x) => x.viewModel.model.password)}>					</input>				</AtomField>
				<AtomField
					label="Password (Again):"
					required="true"
					error={Bind.oneWay((x) => x.viewModel.errorPasswordAgain)}>
					{/* e14
					//  last input must have submit class  */}
					<input
						class="submit"
						type="password"
						value={Bind.twoWays((x) => x.viewModel.model.passwordAgain)}>					</input>				</AtomField>			</AtomForm>
			<button
				eventClick={Bind.event((x) => this.viewModel.signup())}>
				Signup			</button>		</div>
		);	}}
