import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomPageLink} from "@web-atoms/core/dist/web/controls/AtomPageLink";
import WindowSample from "../simple/WindowSample";
import InlinePageLinkViewModel from "./InlinePageLinkViewModel";

export default class InlinePageLinkDemo extends AtomControl {

	public viewModel: InlinePageLinkViewModel;

	public create(): void {
		this.viewModel =  this.resolve(InlinePageLinkViewModel) ;

		this.render(
		<div>
			{/* e1

			//  Clicking this button will open the page template as popup  */}
			{/* e2

			//  And result will be sent in the event  */}
			<AtomPageLink
				eventGetParameters={Bind.event((s, e) => e.detail.parameters = { message: "Demo" })}
				eventResult={Bind.event((s, e) => this.viewModel.onResult(e.detail))}
				eventError={Bind.event((s, e) => this.viewModel.onError(e.detail))}
				text="Open"
				for="button">
				<AtomPageLink.page>
					{/* Since this is inside template, you have to
						access view model of Page, not `this`*/}
					<div>
						<div>
							This is the popup window
						</div>
						<div
							text={Bind.oneTime((x) => x.viewModel.message)}>
						</div>
						<div>
							This will close as soon as you click outside of it
						</div>
						<div>
							You can access parent viewModel by referring $viewModel.parent
						</div>
						<button
							eventClick={Bind.event((x) => x.viewModel.close("success"))}>
							Ok
						</button>
					</div>
				</AtomPageLink.page>
			</AtomPageLink>
			<div
				text={Bind.oneWay(() => this.viewModel.result)}>
			</div>
			<div
				text={Bind.oneWay(() => this.viewModel.error)}
				style="color: red">
			</div>
		</div>
		);
	}
}
