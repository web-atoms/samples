import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import Logo from "@web-atoms/samples/src/web/images/logo.png";

export default class Header extends AtomControl {

    public collapsed: boolean;

    public create() {

        this.collapsed = false;

        this.render(
			<header id="header" class="fixed-top">
				<div class="container-fluid d-flex">

				<div class="logo mr-auto">
					<h1 class="text-light"><a href="/index.html"><span>
					<img src={Logo} width="50" height="50"></img>WebAtoms</span></a></h1>
				</div>
				<button type="button"
				class="mobile-nav-toggle d-lg-none"
				eventClick={Bind.event(() => this.collapsed = !this.collapsed)}><i class="fas fa-bars"
				styleClass={Bind.oneWay(() => this.collapsed ? "fas fa-times" : "fas fa-bars")}
				styleColor={Bind.oneWay(() => this.collapsed ? "White" : "#7a6960")}></i></button>
				<nav styleClass={Bind.oneWay(() =>
					this.collapsed ? "mobile-nav d-lg-none" : "nav-menu d-none d-lg-block")}>
					<ul>
					<li class="active">
						<a href="#page-top"
							eventClick={Bind.event(() => this.collapsed = !this.collapsed)}>Home
						</a>
					</li>
					{/* <li>
						<a href="#main"
							eventClick={Bind.event(() => this.collapsed = !this.collapsed)}>About Us
						</a>
					</li> */}
					<li>
						<a href="#services"
							eventClick={Bind.event(() => this.collapsed = !this.collapsed)}>Features
						</a>
					</li>
					<li>
						<a href="/xf/samples.html"
							eventClick={Bind.event(() => this.collapsed = !this.collapsed)}
							target="_blank">XF Docs
						</a>
					</li>
					<li>
						<a href="/samples.html"
							eventClick={Bind.event(() => this.collapsed = !this.collapsed)}
							target="_blank">Web Docs
						</a>
					</li>
					<li>
						<a href="#team"
							eventClick={Bind.event(() => this.collapsed = !this.collapsed)}>Buy
						</a>
					</li>

					<li>
						<a href="/FAQ.html">FAQ</a>
					</li>
					<li>
						<a href="/blog">Blog</a>
					</li>

					<li class="get-started">
						<a href="/play">Play</a>
					</li>
					<li class="get-started">
						<a href="/account/licenses.html" target="_tab">Login
						</a>
					</li>

					</ul>
				</nav>
				<div class="mobile-nav-overly"
				styleDisplay={Bind.oneWay(() => this.collapsed ? "block" : "none")}></div>
				</div>
			</header>
        );
    }

}
