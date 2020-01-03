// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomFrame} from "@web-atoms/core/dist/web/controls/AtomFrame";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import FrameViewModel from "./FrameViewModel";
    import Start from "./Start";


export default class FrameSample extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(FrameViewModel) ;

		this.render(
		<div>
			<button
				eventClick={Bind.event((x) => this.viewModel.back())}>
				Back			</button>
			<div
				style="position: relative; width: 200px; height: 200px; margin: 20px; border: solid 1px gray; border-radius: 5px;">
				<AtomFrame
					name="sample">				</AtomFrame>			</div>		</div>
		);	}}
