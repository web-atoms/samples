// tslint:disable
	import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
	import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
	import * as XF from "@web-atoms/xf-controls/dist/controls/XF";
	import * as WA from "@web-atoms/xf-controls/dist/controls/WA";
	import XNode from "@web-atoms/core/dist/core/XNode";
	import Bind from "@web-atoms/core/dist/core/Bind";
	declare var bridge: any;
	import AppHostViewModel from "../view-models/AppHostViewModel";
	import MenuPage from "./MenuPage";
	import GithubIcon from "../../images/github/GitHubMark32px";
	export default class Root extends AtomXFControl {
		
		public viewModel: AppHostViewModel;

		constructor(app: any, e?: any) {
			super(app, e || bridge.create(XF.MasterDetailPage));
		}
		protected create(): void  {
			
			super.create();

			this.viewModel = this.resolve(AppHostViewModel);

			this.render(	<XF.MasterDetailPage>

				  <XF.MasterDetailPage.ToolbarItems>

					<WA.AtomToolbarItem iconUrl={Bind.oneTime(() => ({GithubIcon}))} 
					command={Bind.oneTime(() => { () => this.viewModel.openGithub()})}/>

				  </XF.MasterDetailPage.ToolbarItems>

				  <XF.MasterDetailPage.Master>

				    <MenuPage></MenuPage>

				  </XF.MasterDetailPage.Master>

				  <XF.MasterDetailPage.Detail>

				    <XF.ContentPage title="Web Atoms Demo">

				      <XF.Label text="Click on hamburger icon on left to get started..."/>

				    </XF.ContentPage>

				  </XF.MasterDetailPage.Detail>

				</XF.MasterDetailPage>);
		}
	}
