import Bind from "@web-atoms/core/dist/core/Bind";
import XNode from "@web-atoms/core/dist/core/XNode";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import AboutImg from "@web-atoms/samples/src/web/images/about-img.svg";
import HeroImg from "@web-atoms/samples/src/web/images/hero-img.svg";
import logo from "@web-atoms/samples/src/web/images/logo.png";
import Logo from "@web-atoms/samples/src/web/images/logo.png";
import MastheadIcon from "@web-atoms/samples/src/web/images/masthead-icon.jpg";
import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import FormDemo from "../samples/web/form/FromDemo";
import IndexViewModel from "../view-models/IndexViewModel";
import IndexFormStyle from "./styles/IndexFormStyle";
import IndexStyle from "./styles/IndexStyle";
export { default as WebApp } from "@web-atoms/core/dist/web/WebApp";
export { WindowService as W } from "@web-atoms/core/dist/web/services/WindowService";
import cs from "@web-atoms/samples/src/images/cs.png";

// @web-atoms-pack: true
/** XF Home Page */
export default class FAQ extends AtomControl {

	public viewModel: IndexViewModel;

	public create(): void {
		this.defaultControlStyle = IndexStyle;
		this.viewModel = this.resolve(IndexViewModel);

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			id="page-top">
			<header id="header" class="fixed-top">
				<div class="container-fluid d-flex">

				<div class="logo mr-auto">
					<h1 class="text-light"><a href="/index.html"><span>
					<img src={Logo} width="50" height="50"></img>WebAtoms</span></a></h1>
				</div>
				<button type="button"
				class="mobile-nav-toggle d-lg-none"
				eventClick={Bind.event((x) => (x.viewModel).menuClick())}><i class="fas fa-bars"
				styleClass={Bind.oneWay(() => this.viewModel.collapsed ? "fas fa-times" : "fas fa-bars")}
				styleColor={Bind.oneWay(() => this.viewModel.collapsed ? "White" : "#7a6960")}></i></button>
				<nav styleClass={Bind.oneWay(() =>
					this.viewModel.collapsed ? "mobile-nav d-lg-none" : "nav-menu d-none d-lg-block")}>
					<ul>
					<li class="active">
						<a href="/index.html#page-top"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}>Home
						</a>
					</li>
					{/* <li>
						<a href="#main"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}>About Us
						</a>
					</li> */}
					<li>
						<a href="/index.html#services"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}>Features
						</a>
					</li>
					<li>
						<a href="/xf/samples.html"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}
							target="_blank">XF Docs
						</a>
					</li>
					<li>
						<a href="/samples.html"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}
							target="_blank">Web Docs
						</a>
					</li>
					<li>
						<a href="/index.html#team"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}>Buy
						</a>
					</li>

					<li>
						<a href="/FAQ.html">FAQ</a>
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
				styleDisplay={Bind.oneWay(() => this.viewModel.collapsed ? "block" : "none")}></div>
				</div>
			</header>
			<main id="main">
				<div class="container">
					<div class="row">
						<h1>Frequently Asked Questions</h1>
					</div>
					<div class="row">
						<h3>Do I have to buy licenses for each developer?</h3>
						<p>No, Web Atoms for Xamarin Forms is licensed for use in one app, if developers are developing single
							app for two platforms (Droid and iOS), you only need to purchase two app licenses. License is applied
							to the app, not number of developers.
						</p>
						<h3>Do I have to rewrite entire App to enable JSX in existing Xamarin Forms App?</h3>
						<p>
							No, you can continue to use your own app, and you can write new pages in JSX and
							access JSX from your Prism or other navigation framework. AtomBridge instance can create
							a View from JSX which you can embed in existing page or you can push the view as Page 
							inside any Navigation Page such as MasterDetailPage, TabbedPage etc.
						</p>
						<h3>How can enable JSX in my existing Xamarin.Forms app</h3>
						<p>
							All you need to do is add "WebAtoms.XF" NuGet package, and create an instance of AtomBridge class.
							And invoke method `InitAsync` and `CreateAsync` method, which will give you view created from JSX.
							You can host it anywhere you want.
						</p>
						<h3>How can I debug JavaScript?</h3>
						<p>
							Web Atoms for Android comes with custom built V8 engine which supports Chrome Developer Tools. 
							It is recommended to use `@web-atoms/dev-server` node package to enable debugging. As soon as you
							open your JSX view from the dev-server url, Chrome Developer Tool automatically opens.
							<br/>
							<br/>
							On iOS, you will need a mac machine which will open Safari Developer Tools associated with the simulator.
						</p>
						<h3>How to I access and view JSX component in debugger?</h3>
						<p>
							You can type, `bridge.root` in the console to access visual tree. And you can navigate each
							property. Each JSX component also gives you access to `data, viewModel`, `localViewModel` associated
							with the current selected element.
						</p>
						<h3>I wish to use some other framework such as Angular, is it possible?</h3>
						<p>Yes, it is possible, basically AtomBridge creates a Xamarin.Forms component and enables binding
							if you have specified in the JSX. You can use any other JavaScript library along with Web Atoms.
							Web Atoms uses module pattern and it does not pollute global namespace, so chances of conflict is very rare.
						</p>
						<h3>Do I have to host my JSX only on webatoms.in/play ?</h3>
						<p>No, Playground is only for testing, you can host your JSX anywhere. Web Atoms module loader package
							can be configured to load modules from any type of web server.
						</p>
						<h3>Will you help us setup the package distribution?</h3>
						<p>Yes sure, we will help you in creating application architecture including guidance of 
							how to setup your web server.</p>
						<h3>What is an ideal setup looks like?</h3>
						<p>
							<ul>
								<li>Private NPM repository, on windows we use ProGet.</li>
								<li>A Web location redirect as initial page to determine which version of
							application package to fetch from NPM repository.</li>
							</ul>
						</p>
						<h3>Do we have to use Web Atoms Packer?</h3>
						<p>It is recommended, you can use webpack for simpler configuration (you may need to disable minimizer 
							to enable binding),  but for Dynamic Dependency Injection
							Web Atoms Module loader offers node style package naming and can be configured to load packages from different
							package sources.
						</p>
						<h3>What is Dynamic Dependency Injection?</h3>
						<p>
							In Web Atoms, Dependency Injection allows you to inject dependency at runtime, just by specifying node style
							module address without (http/https). Because Web Atoms Module loader is configured to load modules from package
							sources. Unless specified each package is loaded from `node_modules` folder from the root specified
							in `InitAsync` method of AtomBridge.
							<br/>
							Dynamic dependency injection reduces size of initial pay load, packer does not include modules that 
							are referenced as text import.
						</p>
						<h3>How does Web Atoms reduce size of the app?</h3>
						<p>
							Each C# class along with its referenced classes increases the app size heavily. In case of AOT compiled,
							app sizes increase exponentially and loading/referencing modules dynamically are not supported on iOS,
							and on Android it requires additional steps.
							<br/>
							In Web Atoms, a typical Web Atoms shell app (bootstrap point), contains only JavaScript engine and
							Xamarin.Forms classes which is well below 40-50mb.
							<br/>
							All C#/Xaml once converted to JSX, always stays on server, and carefully packed app will only contain
							regularly used Views and can be delivered to the app as soon as app starts.
							<br/>
							Rarely used views can be loaded on demand, reducing startup time and reducing the memory in use.
						</p>
						<h3>How can I enable Multi language support?</h3>
						<p> Dynamic Dependency Injection can also be used to load language resources (JavaScript files that contain
							different string resources per language) sitting in different language folders.
						</p>
						<h3>I have more questions....</h3>
						<p>
							We will be happy to help you, please contact us at support "at" webatoms.in, or you can drop an issue at samples
							repository at <a href="https://github.com/web-atoms/xf-samples/issues"
							target="_blank">https://github.com/web-atoms/xf-samples/issues</a>
						</p>
					</div>
				</div>
			</main>
			<footer id="footer">

				{/* <div class="footer-newsletter" data-aos="fade-up">
				<div class="container">
					<div class="row justify-content-center">
					<div class="col-lg-6">
						<h4>Join Our Newsletter</h4>
						<p>Stay up-to-date on the latest news and expert insights</p>
						<form>
						<input type="email" name="email"></input><button
						eventClick={Bind.event(() => this.viewModel.onSubscribe())}  text="Subscribe"></button>
						</form>
					</div>
					</div>
				</div>
				</div> */}

				<div class="footer-top">
				<div class="container">
					<div class="row">

					<div class="col-lg-3 col-md-6 footer-contact" data-aos="fade-up" data-aos-delay="100">
						<h5>NeuroSpeech Technologies Pvt Ltd</h5>
						<p>

						Unit 103, Building 3, <br></br>
						Sector 3, Millennium Business Park, <br></br>
						Mahape, Navi Mumbai<br></br><br></br>

						<strong>Phone:</strong>+91 22 27781459<br></br>
						<strong>Email:</strong> Support@neurospeech.com<br></br>
						</p>
					</div>

					<div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="200">
						<h4>Useful Links</h4>
						<ul>
						<li><i class="fas fa-chevron-right"></i> <a href="/index.html">Home</a></li>
						<li><i class="fas fa-chevron-right"></i> <a href="/index.html#about">About us</a></li>
						<li><i class="fas fa-chevron-right"></i>
							<a href="https://www.webatoms.in/xf/samples.html">Xamarin.Forms  Docs</a></li>
						<li><i class="fas fa-chevron-right"></i> <a href="https://www.webatoms.in/samples.html">Web Docs</a></li>
						<li><i class="fas fa-chevron-right"></i> <a href="/index.html#team">Buy</a></li>
						</ul>
					</div>

					<div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
						<h4>Our Services</h4>
						<ul>
						{/* <li><i class="fas fa-chevron-right"></i> <a href="#team">Web Development</a></li> */}
						<li><i class="fas fa-chevron-right"></i> <a href="#team">XF Android</a></li>
						<li><i class="fas fa-chevron-right"></i> <a href="#team">XF iOS</a></li>
						<li><i class="fas fa-chevron-right"></i> <a href="#team">XF Mobile</a></li>
						<li><i class="fas fa-chevron-right"></i> <a href="#team">XF Mobile Source</a></li>
						</ul>
					</div>

					<div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
						<h4>Networks</h4>
						<div class="social-links mt-3">
						<a href="https://twitter.com/WebAtoms" target="_blank" class="twitter"><i class="fab fa-twitter"></i></a>
						<a
							eventClick={() => alert("Facebook? Seriously for development?")}
							class="facebook"><i class="fab fa-facebook-f"></i></a>
						<a href="https://github.com/web-atoms" target="_blank" class="github"><i class="fab fa-github"></i></a>
						</div>
					</div>

					</div>
				</div>
				</div>

				<div class="container py-4">
				<div class="copyright">
				© 2018 NeuroSpeech Technologies Pvt Ltd (India). All Rights Reserved.
				</div>

				<a href="/terms.html" target="_blank" style="margin-left: 40px">Terms</a>
				<a href="/eula.html" target="_blank"  style="margin-left: 40px">End User License Agreement</a>

				</div>
			</footer>

			<a href="#" class="back-to-top"><i class="fas fa-angle-up"></i></a>

		</div>
		);

		// breaks seo waiting
		(window as any).appReady = true;
	}
}
