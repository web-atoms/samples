// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import ApplicantViewModel from "./ApplicantViewModel";


export default class Applicant extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public viewModel: ApplicantViewModel;

	public create(): void {		this.viewModel =  this.resolve(ApplicantViewModel, () => ({ model: this.data, parent: this.parent.viewModel })) ;

		this.render(
		<div
			style="margin: 5px; padding: 5px; border: solid 1px lightgray; border-radius: 5px">
			<div>
				<input
					placeholder="Name"
					value={Bind.twoWays((x) => x.viewModel.model.name)}>				</input>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorName)}>				</span>			</div>
			<div>
				<input
					placeholder="Address"
					value={Bind.twoWays((x) => x.viewModel.model.address)}>				</input>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorAddress)}>				</span>			</div>
			<button
				eventClick={Bind.event((x) => (x.viewModel).delete())}>
				Delete			</button>		</div>
		);	}}
