// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"

import IndexStyle from "./styles/IndexStyle";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import logo from "@web-atoms/samples/src/web/images/logo.png";
import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
import IndexViewModel from "../view-models/IndexViewModel";
import IndexFormStyle from "./styles/IndexFormStyle";
import FormDemo from "../samples/web/form/FromDemo";
import MastheadIcon from "@web-atoms/samples/src/web/images/masthead-icon.jpg";
import Logo from "@web-atoms/samples/src/web/images/logo.png";
import HeroImg from "@web-atoms/samples/src/web/images/hero-img.svg";
import AboutImg from "@web-atoms/samples/src/web/images/about-img.svg";
import WebApp from "@web-atoms/core/dist/web/WebApp";

// @web-atoms-pack: true
/** XF Home Page */
export default class Index extends AtomControl {
	
	public create(): void {
		this.defaultControlStyle = IndexStyle;
		this.viewModel = this.resolve(IndexViewModel);
		const wa = this.app as WebApp;
        wa.installStyleSheet("@web-atoms/samples/src/web/styles/style.css");
        
		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.root)}>
			<header id="header" class="fixed-top">
				<div class="container-fluid d-flex">

				<div class="logo mr-auto">
					<h1 class="text-light"><a href="index.html"><span><img src={Logo} width="50" height="50"></img>WebAtoms</span></a></h1>
				</div>

				<nav class="nav-menu d-none d-lg-block">
					<ul>
					<li class="active"><a href="#header">Home</a></li>
					<li><a href="#about">About Us</a></li>
					<li><a href="#services">Features</a></li>
					<li><a href="https://www.webatoms.in/xf/samples.html" target="_blank">XF Docs</a></li>
					<li><a href="https://www.webatoms.in/samples.html" target="_blank">Web Docs</a></li>
						<li><a href="#portfolio">Buy</a></li>
					<li><a href="#team">Team</a></li>
				
					<li><a href="#contact">Contact Us</a></li>

					<li class="get-started"><a href="#about">Get Started</a></li>
					</ul>
				</nav>

				</div>
			</header>
			<section id="hero" class="d-flex align-items-center">
				<div class="container">
					<div class="row">
						<div class="col-lg-6 pt-5 pt-lg-0 order-2 order-lg-1">
						<h1>ADVANCED MVVM FRAMEWORK FOR TYPESCRIPT(JAVASCRIPT)<br></br>
						</h1>
						<h2>MVVM Framework for Web and Xamarin.Forms, Hot Reload Xamarin.Forms Apps in Live Environment</h2>
						<a href="#about" class="btn-get-started scrollto">Get Started</a>
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
						<p data-aos="fade-up" data-aos-delay="100">MVVM Pattern - ViewModel and Services in TypeScript for Web and Xamarin.Forms<br></br>
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
						<p class="description">MIT License for Web, Single Commercial License for Single Xamarin.Forms App, with unlimited users.</p>
						</div>
					</div>

					</div>

				</div>
				</section>
				<section id="contact" class="contact">
					<div class="container">

						<div class="section-title" data-aos="fade-up">
						<h2>Contact Us</h2>
						<p>Contact us the get started</p>
						</div>

						<div class="row">

						<div class="col-lg-5 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="100">
							<div class="info">
							<div class="address">
								<i class="icofont-google-map"></i>
								<h4>Location:</h4>
								<p>A108 Adam Street, New York, NY 535022</p>
							</div>

							<div class="email">
								<i class="icofont-envelope"></i>
								<h4>Email:</h4>
								<p>info@example.com</p>
							</div>

							<div class="phone">
								<i class="icofont-phone"></i>
								<h4>Call:</h4>
								<p>+1 5589 55488 55s</p>
							</div>

							<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d12097.433213460943!2d-74.0062269!3d40.7101282!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xb89d1fe6bc499443!2sDowntown+Conference+Center!5e0!3m2!1smk!2sbg!4v1539943755621" frameborder="0" style="border:0; width: 100%; height: 290px;" allowfullscreen></iframe>
							</div>

						</div>

						<div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch" data-aos="fade-up" data-aos-delay="200">
							<form action="forms/contact.php" method="post" role="form" class="php-email-form">
							<div class="form-row">
								<div class="form-group col-md-6">
								<label for="name">Your Name</label>
								<input type="text" name="name" class="form-control" id="name" data-rule="minlen:4" data-msg="Please enter at least 4 chars" />
								<div class="validate"></div>
								</div>
								<div class="form-group col-md-6">
								<label for="name">Your Email</label>
								<input type="email" class="form-control" name="email" id="email" data-rule="email" data-msg="Please enter a valid email" />
								<div class="validate"></div>
								</div>
							</div>
							<div class="form-group">
								<label for="name">Subject</label>
								<input type="text" class="form-control" name="subject" id="subject" data-rule="minlen:4" data-msg="Please enter at least 8 chars of subject" />
								<div class="validate"></div>
							</div>
							<div class="form-group">
								<label for="name">Message</label>
								<textarea class="form-control" name="message" rows="10" data-rule="required" data-msg="Please write something for us"></textarea>
								<div class="validate"></div>
							</div>
							<div class="mb-3">
								<div class="loading">Loading</div>
								<div class="error-message"></div>
								<div class="sent-message">Your message has been sent. Thank you!</div>
							</div>
							<div class="text-center"><button type="submit">Send Message</button></div>
							</form>
						</div>

						</div>

					</div>
					</section>

				</main>

				
				<footer id="footer">

					<div class="footer-newsletter" data-aos="fade-up">
					<div class="container">
						<div class="row justify-content-center">
						<div class="col-lg-6">
							<h4>Join Our Newsletter</h4>
							<p>Stay up-to-date on the latest news and expert insights</p>
							<form action="" method="post">
							<input type="email" name="email"></input><input type="submit" value="Subscribe"></input>
							</form>
						</div>
						</div>
					</div>
					</div>

					<div class="footer-top">
					<div class="container">
						<div class="row">

						<div class="col-lg-3 col-md-6 footer-contact" data-aos="fade-up" data-aos-delay="100">
							<h3>WebAtoms</h3>
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
							<li><i class="bx bx-chevron-right"></i> <a href="#">Home</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">About us</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Services</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Terms of service</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Privacy policy</a></li>
							</ul>
						</div>

						<div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="300">
							<h4>Our Services</h4>
							<ul>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Web Design</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Web Development</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Product Management</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Marketing</a></li>
							<li><i class="bx bx-chevron-right"></i> <a href="#">Graphic Design</a></li>
							</ul>
						</div>

						<div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
							<h4>Our Social Networks</h4>
							<div class="social-links mt-3">
							<a href="#" class="twitter"><i class="fab fa-twitter"></i></a>
							<a href="#" class="facebook"><i class="fab fa-facebook-f"></i></a>
							<a href="#" class="instagram"><i class="fab fa-instagram"></i></a>
							<a href="#" class="google-plus"><i class="fab fa-pinterest"></i></a>
							<a href="#" class="linkedin"><i class="fab fa-linkedin"></i></a>
							</div>
						</div>

						</div>
					</div>
					</div>

					<div class="container py-4">
					<div class="copyright">
					© 2018 NeuroSpeech Technologies Pvt Ltd (India). All Rights Reserved.
					</div>
				
					</div>
				</footer>

				<a href="#" class="back-to-top"><i class="icofont-simple-up"></i></a>

		</div>
		);

		// breaks seo waiting
		(window as any).appReady = true;
	}
}
