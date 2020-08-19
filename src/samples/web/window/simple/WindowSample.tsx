import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomComboBox} from "@web-atoms/core/dist/web/controls/AtomComboBox";
import {AtomWindow} from "@web-atoms/core/dist/web/controls/AtomWindow";
import { WindowSampleViewModel } from "./WindowSampleViewModel";

export default class WindowSample extends AtomWindow {

	public viewModel: WindowSampleViewModel;

	public create(): void {
		this.viewModel =  this.resolve(WindowSampleViewModel) ;

		this.render(
		<div
			title="Add New Movie"
			width="500px"
			height="350px">
			<AtomWindow.windowTemplate>
				<div>
					<table>
						<tr>
							<td>Name:</td>
							<td>
								<input
									style="height: 30px;
                        padding-left: 4px;
                        width: 200px;"
									type="text"
									placeholder="Enter Movie Name"
									value={Bind.twoWays(() => this.viewModel.movie.name, ["change", "keyup", "keydown", "blur"])}
									autofocus="autofocus">
								</input>
							</td>
							<td
								style="color:red; font-size:13px"
								text={Bind.oneWay(() => this.viewModel.errorName)}>
							</td>
						</tr>
						<tr>
							<td>Type:</td>
							<td>
								<AtomComboBox
									style="height: 30px;
                            margin: 10px 0px;"
									labelPath="label"
									valuePath="value"
									items={Bind.oneTime(() => this.viewModel.types)}
									value={Bind.twoWays(() => this.viewModel.movie.genre, ["change", "keyup", "keydown", "blur"])}
									for="select">
								</AtomComboBox>
							</td>
							<td
								style="color:red; font-size:13px"
								text={Bind.oneWay(() => this.viewModel.errorType)}>
							</td>
						</tr>
						<tr>
							<td>Description:</td>
							<td
								colspan="2">
								<textarea
									cols="30"
									rows="10"
									placeholder="Enter Movie Description"
									value={Bind.twoWays(() => this.viewModel.movie.description)}>
								</textarea>
							</td>
						</tr>
					</table>
				</div>
			</AtomWindow.windowTemplate>
			<AtomWindow.commandTemplate>
				<div>
					<button
						eventClick={Bind.event(() => this.viewModel.save())}>
						Save
					</button>
					<button
						eventClick={Bind.event(() => this.viewModel.cancel())}>
						Cancel
					</button>
				</div>
			</AtomWindow.commandTemplate>
		</div>
		);
	}
}
