// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "@web-atoms/core/dist/web/controls/AtomToggleButtonBar";
import {AtomViewStack} from "@web-atoms/core/dist/web/controls/AtomViewStack";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import { ViewStackViewModel } from "./ViewStackViewModel";


export default class ViewStack extends AtomGridView {	
	public create(): void {		this.viewModel =  this.resolve(ViewStackViewModel) ;

		this.render(
		<div
			columns="*"
			rows="50, *">
			<div>
				<AtomToggleButtonBar
					items={Bind.oneTime((x) => x.viewModel.items)}
					value={Bind.twoWays((x) => x.viewModel.index)}>				</AtomToggleButtonBar>			</div>
			<AtomViewStack
				row="1"
				selectedIndex={Bind.oneWay((x) => x.viewModel.index)}>
				<div>
					View 1				</div>
				<div>
					View 2				</div>
				<div>
					View 3				</div>			</AtomViewStack>		</div>
		);	}}
