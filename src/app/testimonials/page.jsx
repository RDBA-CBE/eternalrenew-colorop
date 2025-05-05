import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero10 } from "components/blocks/hero";
import { Facts7 } from "components/blocks/facts";
import { About11 } from "components/blocks/about";
import { Footer12 } from "components/blocks/footer";
import { Contact5 } from "components/blocks/contact";
import { Clients1 } from "components/blocks/clients";
import { Tiles8, Tiles9 } from "components/elements/tiles";
import { Services13, Services6 } from "components/blocks/services";
import NextLink from "components/reuseable/links/NextLink";
import { TestimonialCard4 } from "components/reuseable/testimonial-cards";

import Blog from "components/blogs/Blog"
import BlogBanner from "components/blogs/BlogBanner"

import Topbar from "components/elements/Topbar";

export default function Demo10() {
  return (
    <Fragment>
      {/* ========== topbar ========== */}
     
      {/* ========== header ========== */}
      <header className="wrapper bg-light">
        <Navbar language button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded" />} />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
      
        <BlogBanner title="Testimonials"/>


        {/* ========== services section ========== */}
        {/* <MediaList /> */}
        <Facts7 />
        <section className="wrapper bg-light">
        <div className="container pt-16 pt-md-18 pb-8 pb-md-10">
        <TestimonialCard4 className="card shadow-lg mt-n18 mt-md-n23 mb-5 mb-md-6" />
        </div>
        </section>
       


    
      </main>

      {/* ========== footer section ========== */}
      <div className="page-frame bg-pale-primary">
             {/* ========== footer section ========== */}
             <Footer12 />
           </div>
    </Fragment>
  );
}
