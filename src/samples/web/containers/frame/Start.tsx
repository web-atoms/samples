// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomPageLink} from "@web-atoms/core/dist/web/controls/AtomPageLink";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import FramePage2 from "./FramePage2";


export default class Start extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		
		this.render(
		<div
			style="padding: 5px;">

			    Start Page.


			{/* e2
			//  Frame's view model has parent set to Frame Host's View Model  */}
			<button
				eventClick={Bind.event((x) => this.parent.viewModel.openPage1())}>
				Open Page 1			</button>
			<AtomPageLink
				page={Bind.oneTime(() => FramePage2)}
				options={Bind.oneTime(() => ({ target: 'sample' }))}
				for="button">
				Open Page 2			</AtomPageLink>		</div>
		);	}}
