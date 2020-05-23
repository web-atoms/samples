import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomFrame} from "@web-atoms/core/dist/web/controls/AtomFrame";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
import FrameViewModel from "./FrameViewModel";

export default class FrameSample extends AtomGridView {

	public viewModel: FrameViewModel;

	public create(): void {
		this.viewModel =  this.resolve(FrameViewModel) ;

		this.render(
		<div
			rows="100, *">
			<div>
				<button
					eventClick={Bind.event((x) => this.viewModel.openPage1())}>
					Open Page 1
				</button>
				<br>
				</br>
				<button
					eventClick={Bind.event((x) => this.viewModel.openPage2())}>
					Open Page 2
				</button>
			</div>
			<AtomFrame
				row="1"
				url={Bind.oneWay(() => this.viewModel.url)}>
			</AtomFrame>
		</div>
		);
	}
}
