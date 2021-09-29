import XNode from "@web-atoms/core/dist/core/XNode";

export default function Footer() {
    return <footer id="footer">

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
            <li><i class="fas fa-chevron-right"></i> <a href="#team">XF Android</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#team">XF iOS</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#team">XF Mobile</a></li>
            <li><i class="fas fa-chevron-right"></i> <a href="#team">XF Mobile Source</a></li>
            </ul>
        </div>

        <div class="col-lg-3 col-md-6 footer-links" data-aos="fade-up" data-aos-delay="400">
            <h4>Networks</h4>
            <div class="social-links mt-3">
            <a href="https://twitter.com/WebAtoms"
                target="_blank"
                class="twitter"
                title="Web Atoms Twitter"><i class="fab fa-twitter"></i></a>
            <a
                eventClick={() => alert("Facebook? Seriously for development?")}
                class="facebook"><i class="fab fa-facebook-f"></i></a>
            <a href="https://github.com/web-atoms" target="_blank" class="github"
                title="Github Repositories"
                ><i class="fab fa-github"></i></a>
            <a href="https://www.youtube.com/channel/UCewA_Br36iGYmadMfh91YKQ"
                title="Youtube Videos"
                target="_blank" class="youtube"><i class="fab fa-youtube"></i></a>
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
</footer>;

}
