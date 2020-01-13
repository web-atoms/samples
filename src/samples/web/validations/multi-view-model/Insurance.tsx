// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import InsuranceViewModel from "./InsuranceViewModel";
    import Applicant from "./Applicant";


export default class Insurance extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public viewModel: InsuranceViewModel;

	public create(): void {		this.viewModel =  this.resolve(InsuranceViewModel) ;

		this.render(
		<div>
			<div>
				<input
					placeholder="Name"
					value={Bind.twoWays((x) => x.viewModel.model.broker)}>				</input>
				<span
					style="color: red"
					text={Bind.oneWay((x) => x.viewModel.errorBroker)}>				</span>			</div>
			<AtomItemsControl
				items={Bind.oneTime((x) => x.viewModel.model.applicants)}>
				<AtomItemsControl.itemTemplate>
					<Applicant>					</Applicant>				</AtomItemsControl.itemTemplate>			</AtomItemsControl>
			<button
				eventClick={Bind.event((x) => (x.viewModel).addApplicant())}>
				Add Applicant			</button>
			<div>

				        Other fields...
				    			</div>
			<button
				eventClick={Bind.event((x) => (x.viewModel).save())}>
				Save			</button>		</div>
		);	}}
