// tslint:disable
import Bind from "@web-atoms/core/dist/core/Bind"
import XNode from "@web-atoms/core/dist/core/XNode"

import OldIndexStyle from "./styles/OldIndexStyle";
import { AtomControl } from "@web-atoms/core/dist/web/controls/AtomControl";
import logo from "@web-atoms/samples/src/web/images/logo.png";
import AtomForm from "@web-atoms/web-controls/dist/form/AtomForm";
import AtomField from "@web-atoms/web-controls/dist/form/AtomField";
import IndexViewModel from "../view-models/IndexViewModel";
import IndexFormStyle from "./styles/IndexFormStyle";
import FormDemo from "../samples/web/form/FromDemo";
import MastheadIcon from "@web-atoms/samples/src/web/images/masthead-icon.jpg";

// @web-atoms-pack: true
/** XF Home Page */
export default class OldIndex extends AtomControl {
	
	public create(): void {
		this.defaultControlStyle = OldIndexStyle;
		this.viewModel = this.resolve(IndexViewModel);

		this.render(
		<div
			styleClass={Bind.oneTime(() => this.controlStyle.name)}>
			<nav class="navbar navbar-expand-lg navbar-light fixed-top py-3" id="mainNav">
				<div class="container">
			
				<a class="navbar-brand js-scroll-trigger" href="https://www.webatoms.in/index.html"> <img src={Bind.oneTime(() => logo)}/> &nbsp;WEB ATOMS</a>
				<button class="navbar-toggler navbar-toggler-right" 
						type="button" 
						data-toggle="collapse" 
						data-target="#navbarResponsive" 
						aria-controls="navbarResponsive" 
						aria-expanded="false" 
						aria-label="Toggle navigation"
						eventClick={Bind.event((x) => (x.viewModel).menuClick())}>
					<span class="navbar-toggler-icon"></span>
				</button>
				<div class="collapse navbar-collapse"
					styleClass={Bind.oneWay(() => this.viewModel.collapsed ? 'collapse navbar-collapse show' : 'collapse navbar-collapse')} id="navbarResponsive">
					<ul class="navbar-nav ml-auto my-2 my-lg-0">
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger" 
						eventClick={Bind.event((x) => (x.viewModel).menuClick())} href="#about">About</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"
						href="#services">Features</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"
						href="/xf/samples.html" target="_blank">XF Docs</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"
						href="/samples.html" target="_blank">Web Docs</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"
						eventClick={Bind.event((x) => (x.viewModel).menuClick())} href="#Price">Buy</a>
					</li>
					<li class="nav-item">
						<a class="nav-link js-scroll-trigger"
						eventClick={Bind.event((x) => (x.viewModel).menuClick())} href="#contact">Contact</a>
					</li>
					</ul>
				</div>
				</div>
			</nav>

			<header class="masthead" id="about">
				<div class="container h-100">
				<div class="row h-100 align-items-center justify-content-center text-center">
					<div class="col-lg-10 align-self-end" style="padding:0">
					<h1 class="text-white font-weight-bold">Advanced MVVM Framework for TypeScript(JavaScript)</h1>
					<hr class="divider my-4"></hr>
					</div>
					<div class="col-lg-12 align-self-baseline">
					<p class="text-white-75 font-weight-light mb-5">MVVM Framework for Web and Xamarin.Forms, Hot Reload Xamarin.Forms Apps in Live Environment</p>
					<p class="text-white-75 mb-4 text-left">
						<ul style="display:inline-block">
							<li>MVVM Pattern - ViewModel and Services in TypeScript for Web and Xamarin.Forms</li>
							<li>View in TSX (JSX) - for Web and Xamarin.Forms</li>
							<li>One time, One way, Two way Binding</li>
							<li>Simple Dependency Injection</li>
							<li>Simple Internationalization using Dependency Injection</li>
							<li>Simple Unit Tests</li>
							<li>Easy HTTP Rest API</li>
							<li>Design time mocks</li>
							<li>Use VS Code to Build Xamarin.Forms Apps</li>
						</ul>
						<img styleWidth={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "100%" : "390px")}  
							styleFloat={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "none" : "right")} 
							style=" display: inline-block; 
									vertical-align: top;
									box-shadow: 0 4px 10px 0 rgba(0,0,0,0.2), 0 4px 20px 0 rgba(0,0,0,0.19);" 
							src={MastheadIcon}></img>
					</p>					
					<a class="btn btn-primary btn-xl js-scroll-trigger"
						styleMarginLeft={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "0" : "40px")}  
						styleFloat={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "none" : "left")}
						href="#about">Find Out More</a>
					</div>
				</div>
				</div>
			</header>
			<section class="page-section">
				<div class="container">
					<div class="row text-left" style="position: relative; min-height: 600px; width: 100%; margin: 0; overflow: auto"
					styleMinHeight={Bind.oneTime(() => this.app.screen.screenType === "mobile" ? "1120px" : "600px")}>
						<FormDemo></FormDemo>
					</div>					
				</div>
			</section>
			<section class="page-section" id="services">
				<div class="container">
				<h2 class="text-center mt-0">Xamarin.Forms with TypeScript</h2>
				<hr class="divider my-4"></hr>
				<div class="row">
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-gem text-primary mb-4"></i>
						<h3 class="h4 mb-2">Controls</h3>
						<p class="text-muted mb-0">Line of Business Controls for Web and Xamarin.Forms</p>
					</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-laptop-code text-primary mb-4"></i>
						<h3 class="h4 mb-2">Leverage TSX</h3>
						<p class="text-muted mb-0">All Views (for Web and Xamarin.Forms) can be written in TSX.</p>
					</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-globe text-primary mb-4"></i>
						<h3 class="h4 mb-2">Live Hot Reload</h3>
						<p class="text-muted mb-0">Hot Reload Xamarin.Forms Applications from web server!</p>
					</div>
					</div>
					<div class="col-lg-3 col-md-6 text-center">
					<div class="mt-5">
						<i class="fas fa-4x fa-sun text-primary mb-4"></i>
						<h3 class="h4 mb-2">Simple License</h3>
						<p class="text-muted mb-0">
							MIT License for Web, Single Commercial License for Single Xamarin.Forms App, with unlimited users.
						</p>
					</div>
					</div>
				</div>
				</div>
			</section>
			{/* <section class="page-section bg-primary" id="Price">
				<div class="container">
					<div class="row justify-content-center">
						<div class="col-lg-8 text-center">
							<h2 class="text-white mt-0">Simple Licensing</h2>
							<hr class="divider light my-4"></hr>
						</div>
					</div>
				</div>
				<section class="pricing py-5">
					<div class="container">
						<div class="row text-white" style="margin: auto;width: 52%;">
							<ul>
								<li>MIT License for Web, for all types of web application</li>
								<li>Single commercial license for single Xamarin.Forms App</li>
								<li>License key is unique for product ID and Xamarin.Forms Assembly Version</li>
								<li>Xamarin.Forms Android, $699 with One Year Upgrades</li>
								<li>Xamarin.Forms iOS, $699 with One Year Upgrades</li>
								<li>Xamarin.Forms Mobile (iOS + Android), $999 with One Year Upgrades</li>
								<li>For open source discount, please contact us</li>
							</ul>						
						</div>
					</div>
				</section>
			</section> */}

		<section  class="page-section bg-primary" id="Price">
		<div class="container">
			<div class="row justify-content-center">
				<div class="col-lg-8 text-center">
				<h2 class="text-white mt-0">Price Table			</h2>
				<hr class="divider light my-4"/>
				</div>
			</div>
			</div>
			<section class="pricing py-5">
					<div class="container">
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
					 
						<tr></tr>
						<tr>
              
						<td>WEB</td>
						<td>MIT</td>
						<td><p align="center" style="margin-bottom: 0">  Free </p></td>
						<td><p align="center" style="margin-bottom: 0">  <a href="https://www.webatoms.in/samples.html" target="_blank" class="btn btn-block btn-primary text-uppercase"> Download</a></p></td>
						</tr>
						<tr>
					
					<td>XF DROID</td>
					<td>COMMERCIAL</td>
					<td><p align="center" style="margin-bottom: 0">  $699 </p></td>
					<td><p align="center" style="margin-bottom: 0"> <a href="/ui/Purchase?id=webatoms.xf.droid" class="btn btn-block btn-primary text-uppercase"> BUYNOW</a></p></td>
					</tr>
					<tr>
					
					<td>XF iOS</td>
					<td>COMMERCIAL</td>
					<td><p align="center" style="margin-bottom: 0">  $699 </p></td>
					<td><p align="center" style="margin-bottom: 0"> <a href="/ui/Purchase?id=webatoms.xf.ios" class="btn btn-block btn-primary text-uppercase"> BUYNOW</a> </p></td>
					</tr>
					<tr>
					
					<td>XF MOBILE <br/>
						(ios + Droid)</td>
					<td>COMMERCIAL</td>

					<td><p align="center" style="margin-bottom: 0">  $999 </p></td>
					<td><p align="center" style="margin-bottom: 0"> <a href="/ui/Purchase?id=webatoms.xf.mobile" class="btn btn-block btn-primary text-uppercase"> BUYNOW</a> </p></td>
					</tr>
					<tr>
					
					<td>XF MOBILE SOURCE <br/>
						(ios + Droid)</td>
					<td>COMMERCIAL</td>
					<td><p align="center" style="margin-bottom: 0">  $9,999 </p></td>
					<td><p align="center" style="margin-bottom: 0"> <a href="/ui/Purchase?id=webatoms.xf.source" class="btn btn-block btn-primary text-uppercase"> BUYNOW</a> </p></td>
					</tr>
          </tbody>
        </table>
					</div>
				</section>
			 
			<div class="component">
			 

					 
				</div>
		 
		</section>
 
			<footer class="pt-5 pb-4" id="contact">
			<div class="container">
				<div class="row">
					<div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4">ADDRESS</h5>
						<ul class="f-address">
							<li>
								<div class="row">
									<div class="col-1"><i class="fas fa-map-marker"></i></div>
									<div class="col-10">
										<p>Unit 103, Building 3, Sector 3, Millennium Business Park, Mahape, Navi Mumbai</p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4">HAVE ANY QUESTIONS?</h5>
						<ul class="f-address">
							<li>
								<div class="row">
									<div class="col-1"><i class="far fa-envelope"></i></div>
									<div class="col-10">
										<p><a href="#">Support@neurospeech.com</a></p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-2 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4">CONTACT </h5>
						<ul class="f-address">
							<li>
								<div class="row">
									<div class="col-1"><i class="fas fa-phone-volume"></i></div>
									<div class="col-10">
										<p><a href="#">+91 22 27781459</a></p>
									</div>
								</div>
							</li>
						</ul>
					</div>
					<div class="col-lg-3 col-md-6 col-sm-6 mt-2 mb-4">
						<h5 class="mb-4">CONNECT WITH US</h5>
						<ul class="social-pet mt-4" style="padding-left: 0px">
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
							&copy; 2018 NeuroSpeech Technologies Pvt Ltd (India). All Rights Reserved.
						</div>
					</div>
				</div>
			</div>
		</section>
		</div>
		);

		// breaks seo waiting
		(window as any).appReady = true;
	}
}
