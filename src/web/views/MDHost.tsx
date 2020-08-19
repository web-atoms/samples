import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomGridSplitter} from "@web-atoms/core/dist/web/controls/AtomGridSplitter";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";

import MDViewModel, { IMDHeader } from "../../view-models/MDViewModel";

const BindHeader = Bind.forData<IMDHeader>();

export default class MDHost extends AtomGridView {

	public viewModel: MDViewModel;

	public create(): void {
		this.viewModel =  this.resolve(MDViewModel, "owner") ;

		this.render(
		<div
			columns="*, 0, 200">
			<div
				class="md-host"
				style="width: 100%; height: 100%; overflow: auto; padding: 16px 50px;">
			</div>
			<AtomGridSplitter
				column="1">
			</AtomGridSplitter>
			<div
				column="2">
				<h3 style="font-size: 22px;
					font-weight: 500;
					color: #0e0e0e;
					margin: 10px 10px 15px;">Quick Links</h3>
				<AtomItemsControl
					items={Bind.oneTime(() => this.viewModel.headers)}>
					<AtomItemsControl.itemTemplate>
						<div
							style="font-size: 14px; margin: 5px; cursor: pointer"
							stylePaddingLeft={BindHeader.oneTime((x) => x.data.pad + "px")}
							text={BindHeader.oneTime((x) => x.data.label)}
							eventClick={BindHeader.event((x) => this.viewModel.show((x.data)))}>
						</div>
					</AtomItemsControl.itemTemplate>
				</AtomItemsControl>
			</div>

		</div>
		);
	}
}
