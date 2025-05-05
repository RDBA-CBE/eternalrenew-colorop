import Link from "next/link";
import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";
import { Hero34 } from "components/blocks/hero";
import { Footer12 } from "components/blocks/footer";
import { Pricing12 } from "components/blocks/pricing";
import { Process21 } from "components/blocks/process";
import { Services37 } from "components/blocks/services";
import { About35, About36 } from "components/blocks/about";
import { Testimonial28 } from "components/blocks/testimonial";
import CTA from "components/whyChooseus/CTA"
import ServiceList from "components/WhatWeDo/ServiceList"
import WhatWeDoBanner from "components/WhatWeDo/WhatWeDoBanner"

export default function Demo34() {
  return (
    <Fragment>
      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-blue pb-2">
        <Navbar
          language
          button={
            <Link href="#" className="btn btn-sm btn-primary rounded">
              Contact
            </Link>
          }
        />
      </header>

      <main className="content-wrapper">
   
        <WhatWeDoBanner />

      
        <ServiceList />

   
       {/* <CTA/> */}
      </main>

      {/* ========== footer section ========== */}
       <div className="page-frame bg-pale-primary">
              {/* ========== footer section ========== */}
              <Footer12 />
            </div>
    </Fragment>
  );
}
