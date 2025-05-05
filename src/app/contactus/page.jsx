// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero20 } from "components/blocks/hero";
import { Facts14 } from "components/blocks/facts";
import { About21 } from "components/blocks/about";
import { Footer12 } from "components/blocks/footer";
import { Clients5 } from "components/blocks/clients";
import { Process13 } from "components/blocks/process";
import { Services23 } from "components/blocks/services";
import { Portfolio11 } from "components/blocks/portfolio";
import HeroBanner from "components/home/HeroBanner";
import WhyChooseUs from "components/home/WhyChooseUs";
import WhatWeDo from "components/home/WhatWeDo";
import HowWeDo from "components/home/HowWeDo";
import OurProjects from "components/home/OurProjects";
import Sustainability from "components/home/Sustainability";
import EventsAndMedia from "components/home/Events&Media";
import Breadcrumb from "components/reuseable/Breadcrumb";
import ContactForm from "components/common/ContactForm";

export default function ContactUs() {
  const breadcrumb = [
    { id: 1, title: "Home", url: "/" },
    { id: 2, title: "Contact", url: "#" }
  ];
  return (
    <>
      <div className=" bg-pale-primary">
        {/* ========== header ========== */}
        <header className="wrapper">
          <Navbar
            info
            language
            stickyBox={false}
            logoAlt="logo-light"
            navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
          />
        </header>

      
      </div>

      <main className="content-wrapper contactUs">
        {/* ========== page title section ========== */}
        <section
          className="wrapper image-wrapper bg-image  text-white"
          style={{ backgroundImage: "url(/img/photos/contactus-bg.jpg)" }}
          >
          <div className="container pt-17 pb-20 pt-md-19 pb-md-21 text-center">
            <div className="row">
              <div className="col-lg-8 mx-auto">
                <h1 className="display-1 fs-45 mb-3 text-black">Get in Touch</h1>
                {/* <Breadcrumb className="text-white" data={breadcrumb} /> */}
              </div>
            </div>
          </div>
        </section>

        <div className="wrapper bg-light angled upper-end">
          <div className="container pb-6 ">
            {/* ========== contact info section ========== */}
            <div className="row mb-8 mb-md-12 ">
              <div className="col-xl-10 mx-auto mt-n19">
                <div className="card">
                  <div className="row gx-0">
                    <div className="col-lg-6 align-self-stretch">
                      <div className="map map-full rounded-top rounded-lg-start">
                        <iframe 
                          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3920.854393695361!2d77.01295023006428!3d10.668408012332982!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba837847551d481%3A0xbf64260fa08ceb00!2sState%20Bank%20Colony%2C%20Mahalakshmi%20Nagar%2C%20Pollachi%2C%20Tamil%20Nadu%20642002!5e0!3m2!1sen!2sin!4v1744885380001!5m2!1sen!2sin"
                  
                          style={{ border: 0 ,width:"100%",height:"100%"}}
                          allowFullScreen
                          loading="lazy" 
                          referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                        
                      </div>
                    </div>

                    <div className="col-lg-6">
                      <div className="p-10 p-md-11 p-lg-14">
                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-location-pin-alt" />
                            </div>
                          </div>
                          <div className="align-self-start justify-content-start">
                            <h5 className="mb-1 text-blue">Address</h5>
                            <address className="text-dark fs-17">
                              #25,1st Floor,State Bank Colony,<br className="d-none d-md-block" />Mahalingapuram Post, Pollachi,<br className="d-none d-md-block" />Coimbatore - 642 002.
      
                            </address>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-phone-volume" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1 text-blue">Phone</h5>
                            <p className="text-dark">
                              +91 99761 89999 
                            </p>
                          </div>
                        </div>

                        <div className="d-flex flex-row">
                          <div>
                            <div className="icon text-primary fs-28 me-4 mt-n1">
                              <i className="uil uil-envelope" />
                            </div>
                          </div>
                          <div>
                            <h5 className="mb-1 text-blue">E-mail</h5>
                            <p className="mb-0">
                              <a href="mailto:ceo@eternalrenewables.com" className="link-body text-dark">
                              ceo@eternalrenewables.com
                              </a>
                            </p>
                            {/* <p className="mb-0 text-blue">
                              <a href="mailto:help@sandbox.com" className="link-body  text-dark">
                                help@sandbox.com
                              </a>
                            </p> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* ========== contact form section ========== */}
            <div className="row">
              <div className="col-lg-10 offset-lg-1 col-xl-8 offset-xl-2">
                <h2 className="display-3 mb-3 text-center text-green">Get in Touch</h2>
                <p className="lead text-center mb-10 fs-17">
                  To better serve you and get your questions to the right people,Fill up the Form :
                </p>

                <iframe
                src="https://connect.irepute.in/file/eternal-renewables-contactus/"
                width="100%"
                className="contact-form-iframe"
                // style="border: none;"
                
              scrolling="no"
                ></iframe>
                

                {/* <ContactForm /> */}
              </div>
            </div>
          </div>
        </div>

        <div className="container-card">
      <div
        className="card image-wrapper bg-full bg-image bg-overlay bg-overlay-light-500 mb-12"
        style={{ backgroundImage: "url(/img/photos/bg22.png)" }}>
        <div className="card-body py-14 px-0">
          <div className="container">
            <div className="row text-center">
              <div className="col-xl-11 col-xxl-9 mx-auto">
                <h2 className="display-3  text-green mb-3">Service &amp; Support</h2>
                <p className=" mb-7 px-lg-17">We provide 24/7 to provide expert guidance, technical assistance, and maintenance solutions, ensuring your renewable energy systems perform at their best all through the year.</p>
              </div>
            </div>

            <div className="d-flex justify-content-center">
              <span>
                <a className="btn btn-lg btn-primary rounded-pill py-2">Get Started</a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
      </main>

     
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}
