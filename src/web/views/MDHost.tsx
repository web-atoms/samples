// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomGridSplitter} from "@web-atoms/core/dist/web/controls/AtomGridSplitter";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import MDViewModel from "../../view-models/MDViewModel";



export default class MDHost extends AtomGridView {
	
	public create(): void {
		this.viewModel =  this.resolve(MDViewModel, 'owner') ;

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
					items={Bind.oneTime((x) => x.viewModel.headers)}>
					<AtomItemsControl.itemTemplate>
						<div
							style="font-size: 14px; margin: 5px; cursor: pointer"
							stylePaddingLeft={Bind.oneTime((x) => x.data.pad + 'px')}
							text={Bind.oneTime((x) => x.data.label)}
							eventClick={Bind.event((x) => (x.viewModel).show((x.data)))}>
						</div>
					</AtomItemsControl.itemTemplate>
				</AtomItemsControl>
			</div>

		</div>
		);
	}
}
