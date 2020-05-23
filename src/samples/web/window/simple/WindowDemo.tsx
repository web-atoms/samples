import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import WindowSample from "./WindowSample";

export default class WindowDemo extends AtomControl {

	protected navigationService: NavigationService;

	public create(): void {

		this.navigationService = this.app.resolve(NavigationService);

		this.render(
		<div>
			<button
				eventClick={Bind.event((x) => this.navigationService.openPage(WindowSample))}>
				Open Window
			</button>
		</div>
		);
	}
}
