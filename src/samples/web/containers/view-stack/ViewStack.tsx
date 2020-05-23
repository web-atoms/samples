import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
import {AtomToggleButtonBar} from "@web-atoms/core/dist/web/controls/AtomToggleButtonBar";
import {AtomViewStack} from "@web-atoms/core/dist/web/controls/AtomViewStack";

import { ViewStackViewModel } from "./ViewStackViewModel";

export default class ViewStack extends AtomGridView {

	public viewModel: ViewStackViewModel;

	public create(): void {
		this.viewModel =  this.resolve(ViewStackViewModel) ;

		this.render(
		<div
			columns="*"
			rows="50, *">
			<div>
				<AtomToggleButtonBar
					items={Bind.oneTime(() => this.viewModel.items)}
					value={Bind.twoWays(() => this.viewModel.index)}>
				</AtomToggleButtonBar>
			</div>
			<AtomViewStack
				row="1"
				selectedIndex={Bind.oneWay(() => this.viewModel.index)}>
				<div>
					View 1
				</div>
				<div>
					View 2
				</div>
				<div>
					View 3
				</div>
			</AtomViewStack>
		</div>
		);
	}
}
