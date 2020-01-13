// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import { NavigationService } from "@web-atoms/core/dist/services/NavigationService";
    import WindowSample from "./WindowSample";


export default class WindowDemo extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	protected navigationService: NavigationService;

	public create(): void {		
		this.navigationService = this.app.resolve(NavigationService);

		this.render(
		<div>
			<button
				eventClick={Bind.event((x) => this.navigationService.openPage(WindowSample))}>
				Open Window			</button>		</div>
		);	}}
