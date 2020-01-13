// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomListBox} from "@web-atoms/core/dist/web/controls/AtomListBox";
import {AtomViewPager} from "@web-atoms/core/dist/web/controls/AtomViewPager";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import { ViewPagerViewModel } from "./ViewPagerViewModel";


export default class ViewPager extends AtomGridView {	
	public viewModel: ViewPagerViewModel;

	public create(): void {		this.viewModel =  this.resolve(ViewPagerViewModel) ;

		this.render(
		<div
			columns="*"
			rows="50, *">
			<AtomListBox
				items={Bind.oneWay((x) => x.viewModel.pages)}
				value={Bind.twoWays((x) => x.viewModel.currentPage)}
				for="div">
				<AtomListBox.itemTemplate>
					<span
						text={Bind.oneTime((x) => x.data.label)}>					</span>				</AtomListBox.itemTemplate>			</AtomListBox>
			<AtomViewPager
				row="1"
				items={Bind.oneWay((x) => x.viewModel.pages)}
				value={Bind.oneWay((x) => x.viewModel.currentPage)}>			</AtomViewPager>		</div>
		);	}}
