import SocialLinks from "components/reuseable/SocialLinks";
import NextLink from "components/reuseable/links/NextLink";
// CUSTOM DATA
import footerNav, { helps } from "data/footer";
import Link from "next/link";

export default function Footer12() {
  return (
    <footer className=" text-inverse text-white mt-0"  style={{background:"#165ea5"}}>
      <div className="container-fluid py-10 py-md-10">
        <div className="row gy-6 gy-lg-0">
          <div className="col-md-10 mx-auto px-0" >
            <div className="container-fluid">
              <div className="row">
              <div className="col-md-12 col-lg-6 col-xl-3">
            <div className="widget">
              <Link href="/"><img className="mb-4 footer-img" src="/img/sandbox-logo/Footer-logo-white.png" srcSet="/img/sandbox-logo/Footer-logo-white @2x.png 2x" alt="" style={{width:"auto", objectFit:"contain"}}/></Link>
              

              <p className="mb-0  mb-md-4 text-white fw-normal">
                Copyrights 2025 ©  Eternal Renewables. <br className="d-none d-lg-block" />
                Concept by <a href="https://irepute.in/" target="_blank">repute</a>

              </p>

              <SocialLinks className="nav social social-white pt-md-0 pt-0" />
            </div>
          </div>

          <div className="col-md-12 col-lg-3 col-xl-3 text-white pt-md-2 fw-normal pt-5">
            <div className="widget">
              <h4 className="widget-title text-white mb-3 ">Get in Touch</h4>
              <address className="mb-2">#25,1st Floor,State Bank Colony,<br /> Mahalingapuram Post,Pollachi, <br />
              Coimbatore - 642 002.</address>
              <a href="mailto:ceo@eternalrenewables.com">ceo@eternalrenewables.com</a>
              <br /> +91 99761 89999
            </div>
          </div>

          <div className="col-md-6  col-lg-3  col-xl-2 pt-md-2 pt-5">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Information </h4>
              <ul className="list-unstyled text-white mb-0">
                {footerNav.map(({ title, url }) => (
                  <li className="fw-normal" key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="col-md-6 col-lg-3  col-xl-2 pt-md-2 pt-5">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Quick Links</h4>
              <ul className="list-unstyled text-white mb-0">
                {helps.map(({ title, url }) => (
                  <li className="fw-normal" key={title}>
                    <NextLink title={title} href={url} />
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* <div className="col-md-12 col-lg-9 col-xl-3 pt-md-4">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Our Newsletter</h4>
              <p className="mb-5 text-white">Subscribe to our newsletter to get our news &amp; deals delivered to you.</p>

              <div className="newsletter-wrapper text-white">
                <div id="mc_embed_signup2">
                  <form
                    method="post"
                    target="_blank"
                    className="validate dark-fields"
                    id="mc-embedded-subscribe-form2"
                    name="mc-embedded-subscribe-form"
                    action="https://elemisfreebies.us20.list-manage.com/subscribe/post?u=aa4947f70a475ce162057838d&amp;id=b49ef47a9a">
                    <div id="mc_embed_signup_scroll2">
                      <div className="mc-field-group input-group form-floating">
                        <input
                          type="email"
                          name="EMAIL"
                          id="mce-EMAIL2"
                          placeholder="Email Address"
                          className="required email form-control"
                        />

                        <label htmlFor="mce-EMAIL2">Email Address</label>
                        <input
                          value="Join"
                          type="submit"
                          name="subscribe"
                          id="mc-embedded-subscribe2"
                          className="btn btn-primary"
                        />
                      </div>

                      <div id="mce-responses2" className="clear">
                        <div className="response" id="mce-error-response2" style={{ display: "none" }} />
                        <div className="response" id="mce-success-response2" style={{ display: "none" }} />
                      </div>

                      <div style={{ position: "absolute", left: "-5000px" }} aria-hidden="true">
                        <input type="text" tabIndex={-1} name="b_ddc180777a163e0f9f66ee014_4b1bcfa0bc" />
                      </div>

                      <div className="clear" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
             <div className="col-md-12 col-lg-9 col-xl-2 pt-md-2 pt-5">
            <div className="widget">
              <h4 className="widget-title text-white mb-3">Location</h4>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.854393695361!2d77.01295023006428!3d10.668408012332982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba837847551d481%3A0xbf64260fa08ceb00!2sState%20Bank%20Colony%2C%20Mahalakshmi%20Nagar%2C%20Pollachi%2C%20Tamil%20Nadu%20642002!5e0!3m2!1sen!2sin!4v1744885380001!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade">
                </iframe>

                {/* <iframe
                  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68038.69046733317!2d76.9734278547572!3d10.999460165491758!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1741686654377!5m2!1sen!2sin"
                  width="100%"
                  height="200"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Google Map"
                ></iframe> */}
              </div>

            </div>
          </div>
              </div>
            </div>
          </div>
         
        </div>
      </div>
    </footer>
  );
}
