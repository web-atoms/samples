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
export default class Index extends AtomControl {

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
						<a href="#page-top"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}>Home
						</a>
					</li>
					{/* <li>
						<a href="#main"
							eventClick={Bind.event((x) => (x.viewModel).menuClick())}>About Us
						</a>
					</li> */}
					<li>
						<a href="#services"
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
						<a href="#team"
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
			<section id="hero" class="d-flex align-items-center">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
						<h1>JavaScript bridge for Xamarin.Forms<br></br>
						</h1>
						<h2>TypeScript + TSX for Xamarin.Forms, Hot Reload Your App in Production Environment</h2>
						<a href="#download" class="btn-get-started scrollto">Get Started</a>
						</div>
						<div class="col-lg-6 order-1 order-lg-2 hero-img">
						<img src={HeroImg} class="img-fluid animated" alt=""></img>
						</div>
					</div>
				</div>
			</section>

			<main id="main">

				<section id="about" class="about">
				<div class="container">

					<div class="row justify-content-between">
					<div class="col-lg-5 d-flex align-items-center justify-content-center about-img">
						<img src={AboutImg} class="img-fluid" alt="" data-aos="zoom-in"></img>
					</div>
					<div class="col-lg-6 pt-5 pt-lg-0">
						<h3 data-aos="fade-up">MVVM Framework for Web and Xamarin.Forms</h3>
						<p data-aos="fade-up" data-aos-delay="100">
							MVVM Pattern - ViewModel and Services in TypeScript for Web and Xamarin.Forms<br></br>
							View in TSX (JSX) - for Web and Xamarin.Forms<br></br>
							One time, One way, Two way Binding<br></br>
							Simple Dependency Injection<br></br>
							Simple Internationalization using Dependency Injection<br></br>
							Simple Unit Tests<br></br>
							Easy HTTP Rest API<br></br>
							Design time mocks<br></br>
							Use VS Code to Build Xamarin.Forms Apps</p>
						<div class="row"></div>
					</div>
					</div>

				</div>
				</section>

				<section id="services" class="services section-bg">
				<div class="container">

					<div class="section-title" data-aos="fade-up">
					<h2>Services</h2>
					<p>Xamarin.Forms with TypeScript</p>
					</div>

					<div class="row">
					<div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="100">
						<div class="icon-box">
							<div class="icon"><i class="fas fa-4x fa-gem"></i></div>
							<h4 class="title"><a href="">Controls</a></h4>
							<p class="description"> Line of Business Controls for Web and Xamarin.Forms</p>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
						<div class="icon-box">
						<div class="icon"><i class="fas fa-4x fa-laptop-code"></i></div>
						<h4 class="title"><a href="">Leverage TSX</a></h4>
						<p class="description">All Views (for Web and Xamarin.Forms) can be written in TSX.</p>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="300">
						<div class="icon-box">
						<div class="icon"><i class="fas fa-4x fa-globe"></i></div>
						<h4 class="title"><a href="">Live Hot Reload</a></h4>
						<p class="description">Hot Reload Xamarin.Forms Applications from web server!</p>
						</div>
					</div>

					<div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="400">
						<div class="icon-box">
						<div class="icon"><i class="fas fa-4x fa-sun"></i></div>
						<h4 class="title"><a href="">Simple License</a></h4>
						<p class="description">MIT License for Web, Single Commercial
						License for Single Xamarin.Forms App, with unlimited users.</p>
						</div>
					</div>

					</div>

				</div>
				</section>
				<section id="portfolio" class="portfolio">
					<div class="container">
						<div class="section-title" data-aos="fade-up">
							<h2>WebAtoms Sample</h2>
							<p>Check out our WebAtoms sample</p>
						</div>
						<div class="row text-left"
							style="position: relative;
							min-height: 600px;
							width: 100%;
							margin: 0;
							overflow: auto"
							styleMinHeight={Bind.oneTime(() => this.app.screen.screenType === "mobile"
									? "1120px" :
									"600px")}>
							<FormDemo></FormDemo>
						</div>
					</div>
				</section>

				<section id="download" class="services section-bg">
				<div class="container">

					<div class="section-title" data-aos="fade-up">
					<h2>Try Now</h2>
					<p>Xamarin.Forms with TypeScript</p>
					</div>

					<div class="row"  style="background-color: black; color: white">
						<pre style="color: white">
							<ol>
								<li>
									Download github repo from
									<a href="https://github.com/web-atoms/xf-samples" target="_tab">https://github.com/web-atoms/xf-samples</a>
								</li>
								<li>Open project in Visual Studio Code</li>
								<li>Run <code>npm install -g @web-atoms/dev-server</code></li>
								<li>Run <code>npm install</code></li>
								<li>In VS Code, run Tasks, run <code>All Tasks</code></li>
								<li>Open <code>XFDemo.sln</code> in Visual Studio (This needs to be done only once)</li>
								<li>Go to file <code>App.xaml.cs</code></li>
								<li>Change root to <code>http://.../</code> displayed in step 4</li>
								<li>If you are unable to run it from there, you can still use CDN to run published samples</li>
							</ol>
						</pre>
					</div>

				</div>
				</section>

				<section id="team" class="team">
					<div class="container">
						<div class="section-title" data-aos="fade-up">
							<h2>Our Plan</h2>
							<p>Choose the plan that's right for you</p>
						</div>
						<div class="price-table">
							<table>
								<thead>
									<tr>
										<th>PRODUCT</th>
										<th>LICENCE</th>
										<th> PRICE </th>
										<th>  </th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<td>WEB</td>
										<td>MIT</td>
										<td>Free</td>
										<td><p align="center" style="margin-bottom: 0">
											<a
												href="https://www.webatoms.in/samples.html"
												target="_blank"
												class="btn btn-block btn-primary text-uppercase">Download</a></p></td>
									</tr>
									<tr>
										<td>XF DROID</td>
										<td>COMMERCIAL</td>
										<td>$699</td>
										<td><p align="center"
											style="margin-bottom: 0">
											<a
												href="https://www.componentsource.com/product/web-atoms/prices"
												target="_blank"
												class="btn btn-block btn-primary text-uppercase"> BUY NOW</a>
											</p>
										</td>
									</tr>
									<tr>
										<td>XF iOS</td>
										<td>COMMERCIAL</td>
										<td>$699</td>
										<td><p align="center"
											style="margin-bottom: 0">
											<a
												href="https://www.componentsource.com/product/web-atoms/prices"
												target="_blank"
											class="btn btn-block btn-primary text-uppercase"> BUY NOW</a>
											</p>
										</td>
									</tr>
									<tr>
										<td>XF MOBILE <br/>
											(ios + Droid)</td>
										<td>COMMERCIAL</td>
										<td>$999</td>
										<td><p align="center"
											style="margin-bottom: 0">
											<a
												href="https://www.componentsource.com/product/web-atoms/prices"
												target="_blank"
												class="btn btn-block btn-primary text-uppercase"> BUY NOW</a>
											</p>
										</td>
									</tr>
									<tr>
										<td>XF MOBILE SOURCE <br/>
											(ios + Droid)</td>
										<td>COMMERCIAL</td>
										<td>$9,999</td>
										<td><p align="center"
											style="margin-bottom: 0">
											<a
												href="https://www.componentsource.com/product/web-atoms/prices"
												target="_blank"
												class="btn btn-block btn-primary text-uppercase"> BUY NOW</a>
											</p>
										</td>
									</tr>
								</tbody>
							</table>

							<div>
								<h3>Authorized Distributor</h3>
								<a
									href="https://www.componentsource.com/product/web-atoms"
									target="_blank"><img src={cs}/></a>
								<a
									style="margin-left:20px; font-size: x-large"
									href="https://www.componentsource.com/help-support/about-us/contact"
									target="_blank">
										<i class="fas fa-phone-square-alt"/>Sales Contact</a>
							</div>

						</div>
					</div>
				</section>
				{/* <section id="contact" class="contact">
					<div class="container">

						<div class="section-title" data-aos="fade-up">
						<h2>Contact Us</h2>
						<p>Contact us for any queries</p>
						</div>

						<div class="row">

						<div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
							<div class="info">
							<div class="address">
								<i class="icofont-google-map"></i>
								<h4>Location:</h4>
								<p>Unit 103, Building 3, <br></br>
									Sector 3, Millennium Business Park,<br></br>
									Mahape, Navi Mumbai</p>
							</div>

							<div class="email">
								<i class="icofont-envelope"></i>
								<h4>Email:</h4>
								<p>support@neurospeech.com</p>
							</div>

							<div class="phone">
								<i class="icofont-phone"></i>
								<h4>Call:</h4>
								<p>+91 22 27781459</p>
							</div>

							</div>

						</div>
						<div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
							<div class="info">
							<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.997827121327!2d73.0170401142132!3d19.107751255940656!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c0e7bb361575%3A0x44c18999c53fed6a!2sNeuroSpeech%20Technologies%20Pvt%20Ltd!5e0!3m2!1sen!2sin!4v1586355911330!5m2!1sen!2sin"
							frameborder="0" style="border:0; width: 100%; height: 290px;"
							allowfullscreen></iframe>
							</div>
						</div>

						<div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
							<form  class="php-email-form">
							<div class="form-row">
								<div class="form-group col-md-6">
								<label for="name">Your Name</label>
								<input
									type="text"
									class="form-control" id="name"
									placeholder="Please enter at least 4 chars"
									value={Bind.twoWays(() => this.viewModel.model.name)} />
								<div class="validate" text={Bind.oneWay(() => this.viewModel.errorName)}/>
								</div>
								<div class="form-group col-md-6">
								<label for="name">Your Email</label>
								<input type="email" class="form-control" name="email" id="email"
									placeholder="Please enter a valid email"
									value={Bind.twoWays(() => this.viewModel.model.emailAddress)} />
								<div class="validate" text={Bind.oneWay(() => this.viewModel.errorEmailAddress)}/>
								</div>
							</div>
							<div class="form-group">
								<label for="name">Subject</label>
								<input type="text"
									class="form-control"
									name="subject" id="subject" placeholder="Please enter at least 8 chars of subject"
									value={Bind.twoWays(() => this.viewModel.model.subject)}
									/>
								<div class="validate"></div>
							</div>
							<div class="form-group">
								<label for="name">Message</label>
								<textarea class="form-control" name="message" rows="10" placeholder="Please write something for us"></textarea>
								<div class="validate"></div>
							</div>
							<div class="text-center"><button
								eventClick={Bind.event(() => this.viewModel.onSubmit())} >Send Message</button></div>
							</form>
						</div>

						 </div>

						</div>
					</section> */}

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
							<li><i class="fas fa-chevron-right"></i> <a href="#">Home</a></li>
							<li><i class="fas fa-chevron-right"></i> <a href="#about">About us</a></li>
							<li><i class="fas fa-chevron-right"></i>
								<a href="https://www.webatoms.in/xf/samples.html">Xamarin.Forms  Docs</a></li>
							<li><i class="fas fa-chevron-right"></i> <a href="https://www.webatoms.in/samples.html">Web Docs</a></li>
							<li><i class="fas fa-chevron-right"></i> <a href="#team">Buy</a></li>
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
