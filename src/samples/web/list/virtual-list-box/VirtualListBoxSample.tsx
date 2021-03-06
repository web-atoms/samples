import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import VirtualListViewModel from "./view-model/VirtualListViewModel";

export default class VirtualListBoxSample extends AtomControl {

	public viewModel: VirtualListViewModel;

	public create(): void {
		this.viewModel =  this.resolve(VirtualListViewModel) ;

		this.render(
		<div>
			<AtomItemsControl
				uiVirtualize={true}
				style="width: 800px; height: 800px;"
				items={Bind.oneTime((x) => x.viewModel.items)}>
				<AtomItemsControl.itemTemplate>
					<div
						style="display: inline-block; width: 200px; height: 200px; vertical-align: middle; text-align: center;">
						<span
							text={Bind.oneTime((x) => x.data.label)}>
						</span>
					</div>
				</AtomItemsControl.itemTemplate>
				<div
					presenter={Bind.presenter("itemsPresenter")}>
				</div>
			</AtomItemsControl>
		</div>
		);
	}
}
