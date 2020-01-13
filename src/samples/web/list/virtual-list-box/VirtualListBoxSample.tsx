// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomItemsControl} from "@web-atoms/core/dist/web/controls/AtomItemsControl";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import VirtualListViewModel from "./view-model/VirtualListViewModel";


export default class VirtualListBoxSample extends AtomControl {
	constructor(app: any, e?: any) {

	public viewModel: VirtualListViewModel;

	public create(): void {

		this.render(
		<div>
			<AtomItemsControl
				uiVirtualize={Bind.oneTime(() => true)}
				style="width: 800px; height: 800px;"
				items={Bind.oneTime((x) => x.viewModel.items)}>
				<AtomItemsControl.itemTemplate>
					<div
						style="display: inline-block; width: 200px; height: 200px; vertical-align: middle; text-align: center;">
						<span
							text={Bind.oneTime((x) => x.data.label)}>
				<div
					presenter={Bind.presenter("itemsPresenter")}>
		);