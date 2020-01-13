// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomTabbedPage} from "@web-atoms/core/dist/web/controls/AtomTabbedPage";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import AppHostViewModel from "../../view-models/AppHostViewModel";

    import MenuList from "./MenuList";

    import GitHubMark32px from "../../images/github/GitHubMark32px";

    import AppTabStyle from "../styles/AppTabStyle";



export default class AppHost extends AtomGridView {
	
	public viewModel: AppHostViewModel;

	public create(): void {
		this.viewModel =  this.resolve(AppHostViewModel) ;

		this.render(
		<div
			styleFontFamily="'Lucida Sans', 'Lucida Sans Regular', 'Lucida Grande', 'Lucida Sans Unicode', Geneva, Verdana, sans-serif"
			columns="200, *"
			rows="30, *, 30">
			<header>
				<h3
					style="position: absolute; margin: 0; padding: 0; top: 5px; left: 5px;"
					text="<W/> Web Atoms">
				</h3>
			</header>
			<MenuList
				column="0"
				row="0:2">
			</MenuList>
			
			<AtomTabbedPage
				row="0:2"
				column="1">
			</AtomTabbedPage>
			<footer
				row="2"
				column="0:2"
				style="padding:5px;">
				<span>
					© NeuroSpeech Technologies Pvt Ltd
				</span>
				<div
					style="position: absolute; right: 5px; top: 5px">
					<a
						href="/docs"
						target="_blank"
						style="margin-right: 16px">
						API
					</a>
					{/* e11

					//  Comment 1  */}
					<img
						style="max-height: 16px; margin-right: 5px;"
						src={Bind.oneTime(() => GitHubMark32px)}>
					</img>
					<a
						href="https://github.com/neurospeech/web-atoms-core"
						target="_blank">
						Source Code
					</a>
					<span
						text=" ">
					</span>
					<img
						style="max-height: 16px; margin-right: 5px;"
						src={Bind.oneTime(() => GitHubMark32px)}>
					</img>
					<a
						href="https://github.com/web-atoms/samples"
						target="_blank">
						Samples
					</a>
				</div>
			</footer>
		</div>
		);
	}
}
