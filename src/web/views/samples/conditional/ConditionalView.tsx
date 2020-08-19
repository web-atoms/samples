import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import DesktopView from "./DesktopView";
import MobileView from "./MobileView";

export default class ConditionalView extends AtomControl {

	public create(): void {

		this.render(
		<div>Following view will load conditionally based on screen type
			{this.app.screen.screenType === "mobile"
				? <MobileView/>
				: <DesktopView/> }
		</div>
		);
	}
}
