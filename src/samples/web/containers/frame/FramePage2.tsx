import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

export default class FramePage2 extends AtomControl {

	public create(): void {

		this.render(
		<div
			style="padding: 5px;">Frame Page 2</div>
		);
	}
}
