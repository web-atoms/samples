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
import Pack from "@web-atoms/core/dist/Pack";
import cs from "@web-atoms/samples/src/images/cs.png";
import Footer from "./Footer";
import Header from "./Header";

@Pack
export default class FAQ extends AtomControl {

	public viewModel: IndexViewModel;

	public create(): void {
		this.defaultControlStyle = IndexStyle;
		this.viewModel = this.resolve(IndexViewModel);

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.name)}
			id="page-top">
			<Header/>
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
			<Footer/>
			<a href="#" class="back-to-top"><i class="fas fa-angle-up"></i></a>

		</div>
		);

		// breaks seo waiting
		(window as any).appReady = true;
	}
}
