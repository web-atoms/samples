// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import CustomValidationViewModel from "./CustomValidationViewModel";


export default class CustomValidation extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(CustomValidationViewModel) ;

		this.render(
		<div>
			<div>
				<input
					placeholder="Name"
					value={Bind.twoWays((x) => x.viewModel.model.name)}>				</input>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorName)}>				</span>			</div>
			<AtomItemsControl
				items={Bind.oneTime((x) => x.viewModel.model.emails)}>
				<AtomItemsControl.itemTemplate>
					<div>
						<input
							placeholder="Email"
							value={Bind.twoWays((x) => x.data.email)}>						</input>
						<span
							style="color: red"
							text={Bind.oneWay((x) => x.data.error)}>						</span>					</div>				</AtomItemsControl.itemTemplate>			</AtomItemsControl>
			<button
				eventClick={Bind.event((x) => (x.viewModel).addEmail())}>
				Add Email			</button>
			<div>

				        Other fields...
				    			</div>
			<button
				eventClick={Bind.event((x) => (x.viewModel).signup())}>
				Signup			</button>		</div>
		);	}}
