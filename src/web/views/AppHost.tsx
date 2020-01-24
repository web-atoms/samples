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
	import logo from "@web-atoms/samples/src/web/images/logo.png";
import IndexStyle from "../styles/IndexStyle";



export default class AppHost extends AtomGridView {
	
	public viewModel: AppHostViewModel;

	

	public create(): void {
		this.defaultControlStyle = IndexStyle;
		this.viewModel =  this.resolve(AppHostViewModel) ;

		this.render(
		<div
			styleFontFamily="'Segoe UI',Arial,sans-serif"
			columns="210, *"
			rows="90, *, 30"
			styleClass={Bind.oneTime(() => this.controlStyle.root)}>
			<header 
				column="0:2"
				row="0">
				
			<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
				<div class="container" style="max-width: 2000px">
			
				<a class="navbar-brand js-scroll-trigger" href="#page-top"> <img src={Bind.oneTime(() => logo)}/> &nbsp;WEB ATOMS</a>
				<button class="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse" id="navbarResponsive">
					<ul class="navbar-nav ml-auto my-2 my-lg-0">
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href="#about">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href="#services">Services</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href="#Price">Buy</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" href="#contact">Contact</a>
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
