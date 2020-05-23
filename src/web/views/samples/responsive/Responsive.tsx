import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import ResponsiveStyle from "../../../styles/ResponsiveStyle";

export default class Responsive extends AtomControl {

	public create(): void {
		this.defaultControlStyle = ResponsiveStyle;

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.name)}>
		</div>
		);
	}
}
