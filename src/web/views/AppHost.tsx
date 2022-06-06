import Bind from "@web-atoms/core/dist/core/Bind";
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import XNode from "@web-atoms/core/dist/core/XNode";
import Pack from "@web-atoms/core/dist/Pack";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";
import {AtomTabbedPage} from "@web-atoms/core/dist/web/controls/AtomTabbedPage";
import logo from "@web-atoms/samples/src/web/images/logo.png";
import GitHubMark32px from "../../images/github/GitHubMark32px";
import AppHostViewModel from "../../view-models/AppHostViewModel";
import OldIndexStyle from "../styles/OldIndexStyle";
import { SampleTabbedStyle } from "../styles/SampleTabbedStyle";
import MenuList from "./MenuList";
import CSS from "@web-atoms/core/dist/web/styles/CSS";
import StyleRule from "@web-atoms/core/dist/style/StyleRule";

const css = CSS(StyleRule()
	.maximizeAbsolute()
	.overflow("hidden")
	.display("grid")
	.gridTemplateColumns("210px 1fr")
	.gridTemplateRows("90px 1fr 30px")
	.child(StyleRule("[data-element=header]")
		.gridColumnStart("1")
		.gridColumnEnd("span 2")
	)
	.child(StyleRule("[data-element=menu]")
		.gridColumnStart("1")
		.gridRowStart("2")
	)
	.child(StyleRule("[data-element=content]")
		.gridColumnStart("2")
		.gridRowStart("2")
		.alignSelf("stretch")
		.justifySelf("stretch")
		.position("relative")
	)
	.child(StyleRule("[data-element=footer]")
		.gridColumnStart("1")
		.gridColumnEnd("span 2")
		.gridRowStart("3")
	), "div[data-app-host=app-host]"
);

@Pack
export default class AppHost extends AtomControl {

	public viewModel: AppHostViewModel;

	public createViewModel() {
		this.viewModel =  this.resolve(AppHostViewModel);
	}

	public create(): void {
		this.defaultControlStyle = OldIndexStyle;
		this.createViewModel();
		this.render(
		<div
			data-app-host="app-host"
			styleFontFamily="'Segoe UI',Arial,sans-serif"
			styleClass={Bind.oneTime(() => this.controlStyle.name)}>
			<header data-element="header">
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
						{/* <li class="nav-item">
							<a class="nav-link js-scroll-trigger" href="https://www.webatoms.in/play" target="_blank">Play</a>
						</li> */}
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
			<MenuList data-element="menu">
			</MenuList>
			<div
				data-element="content">
				<AtomTabbedPage
					controlStyle={SampleTabbedStyle}>
				</AtomTabbedPage>
			</div>
			<footer
				data-element="footer"
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
