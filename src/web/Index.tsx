// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"
import {BindableProperty} from "@web-atoms/core/dist/core/BindableProperty";
import {AtomGridView} from "@web-atoms/core/dist/web/controls/AtomGridView";

    import IndexStyle from "./styles/IndexStyle";

    import IndiaFlag32DataUrl from "../images/IndiaFlagIcon32DataUrl";

    import FormDemo from "../samples/web/form/FromDemo";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import logo from "@web-atoms/samples/src/web/images/logo.png";




export default class Index extends AtomControl {
	
	public create(): void {
		this.defaultControlStyle = IndexStyle;

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.root)}>
			<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
				<div class="container">
			
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

			<header class="masthead">
				<div class="container h-100">
				<div class="row h-100 align-items-center justify-content-center text-center">
					<div class="col-lg-10 align-self-end">
					<h1 class="text-uppercase text-white font-weight-bold">Your Favorite Source of web atom controls</h1>
					<hr class="divider my-4"></hr>
					</div>
					<div class="col-lg-8 align-self-baseline">
					<p class="text-white-75 font-weight-light mb-5">"Web Atoms" is an advanced MVVM framework to write cross platform applications in HTML5 and Xamarin.Forms.</p>
					<a class="btn btn-primary btn-xl js-scroll-trigger" href="#about">Find Out More</a>
					</div>
				</div>
				</div>
			</header>

			<section class="page-section bg-primary" id="about">
				<div class="container">
				<div class="row justify-content-center">
					<div class="col-lg-8 text-center">
					<h2 class="text-white mt-0">Web Atoms</h2>
					<hr class="divider light my-4"></hr>
					<p class="text-white-50 mb-4"> Each html file under src folder is transpiled to a TypeScript file that can contains a class derived from AtomControl. This class is a view that can be loaded with UMD.loadView method and it can be nested inside any other view.</p>
					<a class="btn btn-light btn-xl js-scroll-trigger" 
						href="/samples.html"
						target="samples">Get Started!</a>
					</div>
				</div>
				</div>
			</section>
			<section class="page-section" id="services">
				<div class="container">
				<h2 class="text-center mt-0">At Your Service</h2>
				<hr class="divider my-4"></hr>
				<div class="row">
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-gem text-primary mb-4"></i>
						<h3 class="h4 mb-2">Web Controls</h3>
						<p class="text-muted mb-0">"Web Atoms" is an advanced MVVM framework to write cross platform applications</p>
					</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
						<h3 class="h4 mb-2">Up to Date</h3>
						<p class="text-muted mb-0">All dependencies are kept current to keep things fresh.</p>
					</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-globe text-primary mb-4"></i>
						<h3 class="h4 mb-2">Ready to Publish</h3>
						<p class="text-muted mb-0">You can use this design as is, or you can make changes!</p>
					</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-sun text-primary mb-4"></i>
						<h3 class="h4 mb-2">Generator</h3>
						<p class="text-muted mb-0">Each html file under src folder is transpiled to a TypeScript file that can contains a class derived from AtomControl.</p>
					</div>
					</div>
				</div>
				</div>
			</section>
			<section class="page-section bg-primary" id="Price">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 text-center">
							<h2 class="text-white mt-0">Price Table</h2>
							<hr class="divider light my-4"></hr>
						</div>
					</div>
				</div>
				<section class="pricing py-5">
					<div class="container">
						<div class="row">
							<div class="col-lg-4">
								<div class="card mb-5 mb-lg-0">
								<div class="card-body">
									<h5 class="card-title text-muted text-uppercase text-center">Android</h5>
									<h6 class="card-price text-center">$699<span class="period">/Year</span></h6>
									<hr></hr>
									<ul class="fa-ul">
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Single User</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>5GB Storage</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
									<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Unlimited Private Projects</li>
									<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Dedicated Phone Support</li>
									<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Free Subdomain</li>
									<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
									</ul>
									<a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
								</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="card mb-5 mb-lg-0">
								<div class="card-body">
									<h5 class="card-title text-muted text-uppercase text-center">IOS</h5>
									<h6 class="card-price text-center">$699<span class="period">/Year</span></h6>
									<hr></hr>
									<ul class="fa-ul">
									<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>5 Users</strong></li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>50GB Storage</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Free Subdomain</li>
									<li class="text-muted"><span class="fa-li"><i class="fas fa-times"></i></span>Monthly Status Reports</li>
									</ul>
									<a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
								</div>
								</div>
							</div>
							<div class="col-lg-4">
								<div class="card">
								<div class="card-body">
									<h5 class="card-title text-muted text-uppercase text-center">Pro (BOTH)</h5>
									<h6 class="card-price text-center">$999<span class="period">/Year</span></h6>
									<hr></hr>
									<ul class="fa-ul">
									<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited Users</strong></li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>150GB Storage</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Public Projects</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Community Access</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Unlimited Private Projects</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Dedicated Phone Support</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span><strong>Unlimited</strong> Free Subdomains</li>
									<li><span class="fa-li"><i class="fas fa-check"></i></span>Monthly Status Reports</li>
									</ul>
									<a href="#" class="btn btn-block btn-primary text-uppercase">Button</a>
								</div>
								</div>
							</div>
							</div>
					</div>
				</section>
			</section>
			<section class="page-section" id="contact">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 text-center">
							<h2 class="mt-0">Let's Get In Touch!</h2>
							<hr class="divider my-4"></hr>
							<p class="text-muted mb-5">Ready to start your next project with us? Give us a call or send us an email and we will get back to you as soon as possible!</p>
						</div>
					</div>
					<div class="row justify-content-center">
						<div class="col-lg-8 text-center">
						</div>
					</div>
				</div>
			</section>
			<footer class="pt-5 pb-4" id="contact">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4 font-weight-bold">ABOUT US</h5>
						<p class="mb-4">Etiam laoreet in ex quis efficitur.</p>
						<ul class="f-address">
							<li>
								<div class="row">
									<div class="col-1"><i class="fas fa-map-marker"></i></div>
									<div class="col-10">
										<h6 class="font-weight-bold mb-0">Address:</h6>
										<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-1"><i class="far fa-envelope"></i></div>
									<div class="col-10">
										<h6 class="font-weight-bold mb-0">Have any questions?</h6>
										<p><a href="#">Support@userthemes.com</a></p>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-1"><i class="fas fa-phone-volume"></i></div>
									<div class="col-10">
										<h6 class="font-weight-bold mb-0">Address:</h6>
										<p><a href="#">+XX (0) XX XX-XXXX-XXXX</a></p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4 font-weight-bold">FRESH TWEETS</h5>
						<ul class="f-address">
							<li>
								<div class="row">
									<div class="col-1"><i class="fab fa-twitter"></i></div>
									<div class="col-10">
										<p class="mb-0"><a href="#">@userthemesrel </a> HTML Version Out Now</p>
										<label>10 Mins Ago</label>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-1"><i class="fab fa-twitter"></i></div>
									<div class="col-10">
										<p class="mb-0"><a href="#">@userthemesrel </a> HTML Version Out Now</p>
										<label>10 Mins Ago</label>
									</div>
								</div>
							</li>
							<li>
								<div class="row">
									<div class="col-1"><i class="fab fa-twitter"></i></div>
									<div class="col-10">
										<p class="mb-0"><a href="#">@userthemesrel </a> HTML Version Out Now</p>
										<label>10 Mins Ago</label>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4 font-weight-bold">LATEST UPDATES</h5>
						<ul class="recent-post">
							<li>
								<label class="mr-3">28 <br/><span>APR</span></label>
								<span>Rendomised words which dont look eveable.</span>
							</li>
							<li>
								<label class="mr-3">29 <br/><span>APR</span></label>
								<span>Rendomised words which dont look eveable.</span>
							</li>
							<li>
								<label class="mr-3">30 <br/><span>APR</span></label>
								<span>Rendomised words which dont look eveable.</span>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4 font-weight-bold">CONNECT WITH US</h5>
						<div class="input-group">
						  	 
						  	 
						</div>
						<ul class="social-pet mt-4">
							<li><a href="#" title="facebook"><i class="fab fa-facebook-f"></i></a></li>
							<li><a href="#" title="twitter"><i class="fab fa-twitter"></i></a></li>
							<li><a href="#" title="google-plus"><i class="fab fa-google-plus-g"></i></a></li>
							<li><a href="#" title="instagram"><i class="fab fa-instagram"></i></a></li>
						</ul>
					</div>
				</div>
			</div>
		</footer>
		<section class="copyright">
			<div class="container">
				<div class="row">
					<div class="col-md-12 ">
						<div class="text-center text-white">
							&copy; 2018 Your Company. All Rights Reserved.
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
		);
	}
}
