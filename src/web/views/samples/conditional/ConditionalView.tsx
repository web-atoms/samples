// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import DesktopView from "./DesktopView";
    import MobileView from "./MobileView";


export default class ConditionalView extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		
		this.render(
		<div>

			    Following view will load conditionally based on screen type


			<MobileView
				$if={Bind.oneTime(() => this.app.screen.screenType == 'mobile')}>			</MobileView>
			<DesktopView
				$if={Bind.oneTime(() => this.app.screen.screenType !== 'mobile')}>			</DesktopView>		</div>
		);	}}
