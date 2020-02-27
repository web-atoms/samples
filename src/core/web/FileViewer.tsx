// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomToggleButtonBar} from "@web-atoms/core/dist/web/controls/AtomToggleButtonBar";
import {AtomGridSplitter} from "@web-atoms/core/dist/web/controls/AtomGridSplitter";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import FileViewerStyle, { MobileFileViewerStyle, FileBarStyle } from "./FileViewerStyle";

    import CodeView from "./CodeView";


    declare var UMD: any;


    function fromPath(e, files) {


        if (!e || !files || !files.length) {

            return null;

        }

        const owner = e.atomControl;

        owner.file = files[0];

        return files.map((p) => {

            var t = p.split("/");

            var n = t[t.length - 1];

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
	
	@BindableProperty
	public files: string[] ;

	@BindableProperty
	public file: string ;

	@BindableProperty
	public require: any ;

	@BindableProperty
	public demo: any ;

	@BindableProperty
	public designMode: boolean ;

	@BindableProperty
	public demoPresenter: any ;

	public create(): void {
		this.defaultControlStyle = this.app.screen.screenType === "mobile" ? MobileFileViewerStyle : FileViewerStyle;

		this.files = null;
		this.file = null;
		this.require = null;
		this.demo = null;
		this.designMode = true;
		this.demoPresenter = null;
		this.render(
		<div
			rows= {Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "120, 400, 5, 590" : "40, 5, *, 5")}
			columns= {Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "100%" : "5, *, 5, 5, 5, 50%")}
			styleClass={Bind.oneTime(() => this.controlStyle.root)}
			none={Bind.oneWay(() => setView(this.element, this.demo ))}>
			<AtomToggleButtonBar
				column= {Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "0" : "0: 6")}
				items={Bind.oneWay(() => fromPath(this.element, this.files))}
				value={Bind.twoWays(() => this.file)}
				controlStyle = {FileBarStyle}
				style = "padding: 0; background: #222">
			</AtomToggleButtonBar>
			<div
				column={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "0" : "1")}
				row={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "1" : "2")}
				class="code">
				<CodeView
					require={Bind.oneWay(() => this.require)}
					style="overflow: auto"
					src={Bind.oneWay(() => this.file)}>
				</CodeView>
			</div>
			<AtomGridSplitter
				row="2"
				column={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "0" : "3")}>
			</AtomGridSplitter>
			<div
				row={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "3" : "2")}
				column={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "0" : "5")}
				style="padding: 0.5rem; overflow: auto"
				presenter={Bind.presenter("demoPresenter")}>
			</div>
		</div>
		);
	}
}
