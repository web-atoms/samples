// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import SimpleValidationViewModel from "./SimpleValidationViewModel";



export default class SimpleValidation extends AtomControl {
	
	constructor(app: any, e?: any) {
		super(app, e || document.createElement("div"));
	}

	public create(): void {
		this.viewModel =  this.resolve(SimpleValidationViewModel) ;

		this.render(
		<div>
			<div>
				<input
					placeholder="Name"
					value={Bind.twoWays((x) => x.viewModel.model.name)}>
				</input>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorName)}>
				</span>
			</div>
			<div>
				<input
					placeholder="Email"
					value={Bind.twoWays((x) => x.viewModel.model.email)}>
				</input>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorEmail)}>
				</span>
			</div>
			<button
				eventClick={Bind.event((x) => (x.viewModel).signup())}>
				Signup
			</button>
			<button
				eventClick={Bind.event((x) => (x.viewModel).cancel())}>
				Cancel
			</button>
		</div>
		);
	}
}
