// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import AtomPageFrame from "@web-atoms/web-controls/dist/mobile/pages/AtomPageFrame";
import MenuView from "./MenuView";
import Logo from "@web-atoms/samples/src/web/images/logo.png";
import { AppAtomFramePageStyle } from "../styles/AppAtomFramePageStyle";
import MobileAppHostViewModel from "../view-models/MobileAppHostViewModel";

// @web-atoms-pack: true

export default class MobileAppHost extends AtomPageFrame {
	
	public viewModel: MobileAppHostViewModel;
	public create(): void {
		this.defaultControlStyle = AppAtomFramePageStyle;
		this.viewModel =  this.resolve(MobileAppHostViewModel);

		this.render(
		<div
			
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			menuUrl={MenuView}>
				<AtomPageFrame.titleTemplate>
					<div
						style="display: inline-block; padding: 0; height: 55px; position: absolute; left: 40px; top: 0; color: black"
						><h1 class="text-light"><a href="index.html"><span>
						<img src={Logo}></img>WebAtoms</span></a></h1>
					</div>
				</AtomPageFrame.titleTemplate>
		</div>
		);
	}
}
