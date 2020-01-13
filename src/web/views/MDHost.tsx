// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomGridSplitter} from "@web-atoms/core/dist/web/controls/AtomGridSplitter";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import MDViewModel from "../../view-models/MDViewModel";


export default class MDHost extends AtomGridView {	
	public viewModel: MDViewModel;

	public create(): void {		this.viewModel =  this.resolve(MDViewModel, 'owner') ;

		this.render(
		<div
			columns="*, 5, 200">
			<div
				class="md-host"
				style="width: 100%; height: 100%;">			</div>
			<AtomGridSplitter
				column="1">			</AtomGridSplitter>
			<AtomItemsControl
				column="2"
				items={Bind.oneTime((x) => x.viewModel.headers)}>
				<AtomItemsControl.itemTemplate>
					<div
						style="font-size: 14px; margin: 5px;"
						stylePaddingLeft={Bind.oneTime((x) => x.data.pad + 'px')}
						text={Bind.oneTime((x) => x.data.label)}
						eventClick={Bind.event((x) => (x.viewModel).show((x.data)))}>					</div>				</AtomItemsControl.itemTemplate>			</AtomItemsControl>		</div>
		);	}}
