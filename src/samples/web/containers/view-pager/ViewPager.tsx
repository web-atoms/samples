import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
import {AtomListBox} from "@web-atoms/core/dist/web/controls/AtomListBox";
import {AtomViewPager} from "@web-atoms/core/dist/web/controls/AtomViewPager";
import { ViewPagerViewModel } from "./ViewPagerViewModel";

export default class ViewPager extends AtomGridView {

	public viewModel: ViewPagerViewModel;

	public create(): void {
		this.viewModel =  this.resolve(ViewPagerViewModel) ;

		this.render(
		<div
			columns="*"
			rows="50, *">
			<AtomListBox
				items={Bind.oneWay(() => this.viewModel.pages)}
				value={Bind.twoWays(() => this.viewModel.currentPage)}
				for="div">
				<AtomListBox.itemTemplate>
					<span
						text={Bind.oneTime((x) => x.data.label)}>
					</span>
				</AtomListBox.itemTemplate>
			</AtomListBox>
			<AtomViewPager
				row="1"
				items={Bind.oneWay(() => this.viewModel.pages)}
				value={Bind.oneWay(() => this.viewModel.currentPage)}>
			</AtomViewPager>
		</div>
		);
	}
}
