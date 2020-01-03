// tslint:disable
	import { AtomXFControl } from "@web-atoms/core/dist/xf/controls/AtomXFControl";
	import { AtomBridge } from "@web-atoms/core/dist/core/AtomBridge";
	import AppHostViewModel from "../view-models/AppHostViewModel";
	import MenuPage from "./MenuPage";
	import GithubIcon from "../../images/github/GitHubMark32px";
	import AtomMasterDetailPage from "@web-atoms/xf-controls/dist/controls/atom/AtomMasterDetailPage";
	import { MasterDetailPage, ToolbarItem, ContentPage, Label } from "@web-atoms/xf-controls/dist/controls/XF";
	import XNode from "@web-atoms/core/dist/core/XNode";
import Bind from "@web-atoms/core/dist/core/Bind";

export default class Root extends AtomMasterDetailPage {


	protected create(): void  {
		
		this.render(
		<MasterDetailPage>

			<MasterDetailPage.ToolbarItems>
				<ToolbarItem 
					iconImageSource={GithubIcon}
					command={Bind.event((s,e) => this.viewModel.openGithub())}/>
			</MasterDetailPage.ToolbarItems>

			<MasterDetailPage.Master>
				<MenuPage></MenuPage>
			</MasterDetailPage.Master>

			<MasterDetailPage.Detail>
				<ContentPage Title="Web Atoms Demo">
					<Label Text="Click on hamburger icon on left to get started..."/>
				</ContentPage>
			</MasterDetailPage.Detail>

		</MasterDetailPage>);

	}
}

