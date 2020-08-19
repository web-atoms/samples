import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomControl} from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomPageLink} from "@web-atoms/core/dist/web/controls/AtomPageLink";
import WindowSample from "../simple/WindowSample";
import PageLinkViewModel from "./PageLinkViewModel";

export default class PageLinkDemo extends AtomControl {

	public viewModel: PageLinkViewModel;

	public create(): void {
		this.viewModel =  this.resolve(PageLinkViewModel) ;

		this.render(
		<div>
			{/* e1

			//  Clicking this button will open the window  */}
			{/* e2

			//  And result will be sent in the event  */}
			{/* e3

			//  Event get-parameters will be executed before

			//         opening window/popup, parameters set on this event

			//         will override bound parameters. It is recommended

			//         to use event-get-parameters over parameters binding

			//         as it will reduce binding memory   */}
			<AtomPageLink
				page={Bind.oneTime(() => WindowSample)}
				eventGetParameters={Bind.event((s, e) => e.detail.parameters = { name: "demo" })}
				eventResult={Bind.event((s, e) => this.viewModel.onResult(e.detail))}
				eventError={Bind.event((s, e) => this.viewModel.onError(e.detail))}
				for="button">
				Open
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
