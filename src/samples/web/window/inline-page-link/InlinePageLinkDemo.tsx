// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomPageLink} from "@web-atoms/core/dist/web/controls/AtomPageLink";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";

    import InlinePageLinkViewModel from "./InlinePageLinkViewModel";
    import WindowSample from "../simple/WindowSample";


export default class InlinePageLinkDemo extends AtomControl {	
	constructor(app: any, e?: any) {		super(app, e || document.createElement("div"));	}

	public create(): void {		this.viewModel =  this.resolve(InlinePageLinkViewModel) ;

		this.render(
		<div>
			{/* e1
			//  Clicking this button will open the page template as popup  */}
			{/* e2
			//  And result will be sent in the event  */}
			<AtomPageLink
				eventGetParameters={Bind.event((s, e) => e.detail.parameters = { message: 'Demo' })}
				eventResult={Bind.event((s, e) => this.viewModel.onResult(e.detail))}
				eventError={Bind.event((s, e) => this.viewModel.onError(e.detail))}
				text="Open"
				for="button">
				<AtomPageLink.page>
					<div>
						<div>
							This is the popup window						</div>
						<div
							text={Bind.oneTime((x) => x.viewModel.message)}>						</div>
						<div>
							This will close as soon as you click outside of it						</div>
						<div>
							You can access parent viewModel by referring $viewModel.parent						</div>
						<button
							eventClick={Bind.event((x) => (x.viewModel).close('success'))}>
							Ok						</button>					</div>				</AtomPageLink.page>			</AtomPageLink>
			<div
				text={Bind.oneWay((x) => x.viewModel.result)}>			</div>
			<div
				text={Bind.oneWay((x) => x.viewModel.error)}
				style="color: red">			</div>		</div>
		);	}}
