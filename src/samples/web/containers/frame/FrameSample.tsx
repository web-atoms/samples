import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomFrame} from "@web-atoms/core/dist/web/controls/AtomFrame";
import FrameViewModel from "./FrameViewModel";
import Start from "./Start";

export default class FrameSample extends AtomControl {

	public viewModel: FrameViewModel;

	public create(): void {
		this.viewModel =  this.resolve(FrameViewModel) ;

		this.render(
		<div>
			<button
				eventClick={Bind.event(() => this.viewModel.back())}>
				Back
			</button>
			<div
				style="position: relative; width: 200px; height: 200px; margin: 20px; border: solid 1px gray; border-radius: 5px;">
				<AtomFrame
					name="sample">
				</AtomFrame>
			</div>
		</div>
		);
	}
}
