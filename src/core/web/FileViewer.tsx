import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import {AtomGridSplitter} from "@web-atoms/core/dist/web/controls/AtomGridSplitter";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
import {AtomToggleButtonBar} from "@web-atoms/core/dist/web/controls/AtomToggleButtonBar";

import FileViewerStyle, { FileBarStyle, MobileFileViewerStyle } from "./FileViewerStyle";

import CodeView from "./CodeView";

declare var UMD: any;

function fromPath(e, files) {

	if (!e || !files || !files.length) {
		return null;
	}

	const owner = e.atomControl;
	owner.file = files[0];

	return files.map((p) => {

		const t = p.split("/");
		const n = t[t.length - 1];
		return {
			label: n,
			value: p
		};

	});

}

function setView(e, d) {

	if (!e || !d) {
		return;
	}

	const old = UMD.mock;
	UMD.mock = e.atomControl.designMode;

	const c = new (d)(e.atomControl.app);
	e.atomControl.demoPresenter.appendChild(c.element);
	UMD.mock = old;

}

export default class FileViewer extends AtomGridView {

	public files: string[] ;

	public file: string ;

	public require: any ;

	public demo: any ;

	public designMode: boolean ;

	public demoPresenter: any ;

	public create(): void {
		this.defaultControlStyle = this.app.screen.screenType === "mobile" ? MobileFileViewerStyle : FileViewerStyle;

		this.files = null;
		this.file = null;
		this.require = null;
		this.demo = null;
		this.designMode = true;
		this.demoPresenter = null;
		this.render( this.app.screen.screenType !== "mobile"
			? <div
			rows="36, *"
			columns="*, 5, 50%"
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			none={Bind.oneWay(() => setView(this.element, this.demo ))}>
			<AtomToggleButtonBar
				controlStyle = {FileBarStyle}
				column="0: 3"
				items={Bind.oneWay(() => fromPath(this.element, this.files))}
				value={Bind.twoWays(() => this.file)}>
			</AtomToggleButtonBar>
			<div
				row="1"
				class="code">
				<CodeView
					require={Bind.oneWay(() => this.require)}
					style="overflow: auto"
					src={Bind.oneWay(() => this.file)}>
				</CodeView>
			</div>
			<AtomGridSplitter
				row="1"
				column="1">
			</AtomGridSplitter>
			<div
				row="1"
				column="2"
				class="preview"
				style="margin: 5px;  overflow: auto"
				presenter={Bind.presenter("demoPresenter")}>
			</div>
		</div>
		:
		<div
			rows="120, 400, 5, 590"
			columns="100%"
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			none={Bind.oneWay(() => setView(this.element, this.demo ))}>
			<AtomToggleButtonBar
				items={Bind.oneWay(() => fromPath(this.element, this.files))}
				value={Bind.twoWays(() => this.file)}
				controlStyle = {FileBarStyle}
				style = "padding: 0; background: #222">
			</AtomToggleButtonBar>
			<div
				row="1"
				class="code">
				<CodeView
					require={Bind.oneWay(() => this.require)}
					style="overflow: auto"
					src={Bind.oneWay(() => this.file)}>
				</CodeView>
			</div>
			<AtomGridSplitter
				row="2">
			</AtomGridSplitter>
			<div
				row="3"
				style="padding: 0.5rem; overflow: auto"
				class="preview"
				presenter={Bind.presenter("demoPresenter")}>
			</div>
		</div>
		);
	}
}
