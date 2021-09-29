import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import Pack from "@web-atoms/core/dist/Pack";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
import {AtomTabbedPage} from "@web-atoms/core/dist/web/controls/AtomTabbedPage";
import logo from "@web-atoms/samples/src/web/images/logo.png";
import GitHubMark32px from "../../images/github/GitHubMark32px";
import AppHostViewModel from "../../view-models/AppHostViewModel";
import OldIndexStyle from "../styles/OldIndexStyle";
import { SampleTabbedStyle } from "../styles/SampleTabbedStyle";
import MenuList from "./MenuList";

// @web-atoms-pack: true
/** Web Samples */
@Pack
export default class AppHost extends AtomGridView {

	public viewModel: AppHostViewModel;

	public createViewModel() {
		this.viewModel =  this.resolve(AppHostViewModel);
	}

	public create(): void {
		this.defaultControlStyle = OldIndexStyle;
		this.createViewModel();
		this.render(
		<div
			styleFontFamily="'Segoe UI',Arial,sans-serif"
			columns="210, *"
			rows="90, *, 30"
			styleClass={Bind.oneTime(() => this.controlStyle.name)}>
			<header
				column="0:2"
				row="0">

			<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
				<div class="container" style="max-width: 2000px">

				<a class="navbar-brand js-scroll-trigger" href="#page-top">
					<img src={Bind.oneTime(() => logo)}/> &nbsp;WEB ATOMS</a>
				<button class="navbar-toggler navbar-toggler-right"
					type="button"
					data-toggle="collapse"
					data-target="#navbarResponsive"
					aria-controls="navbarResponsive"
					aria-expanded="false"
					aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto my-2 my-lg-0">
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href="https://www.webatoms.in/" target="_blank">Home</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href="https://www.webatoms.in/play" target="_blank">Play</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"  href="https://www.webatoms.in/blog" target="_blank">Blog</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"  href="https://www.webatoms.in/" target="_blank">Buy</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"
							title="Youtube Tutorials"
							href="https://youtube.com/playlist?list=PLfSbJGKhBwn45pNMNUHcGDuzfwABoH3OF"
							target="_blank">Tutorials</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"  href="https://github.com/web-atoms/core/issues" target="_blank">Support</a>
					</li>
					</ul>
				</div>
				</div>
			</nav>
			</header>
			<MenuList
				column="0"
				row="1">
			</MenuList>

			<AtomTabbedPage
				controlStyle={SampleTabbedStyle}
				row="1"
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
