import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";

import {  Footer12 } from "components/blocks/footer";

import WhyChooseBanner from "components/whyChooseus/WhyChooseBanner"
import Vision from "components/whyChooseus/Vision"
import ExpertTeam from "components/whyChooseus/ExpertTeam"
import OurCapabilities from "components/whyChooseus/OurCapabilities"
import StrongRelationship from "components/whyChooseus/StrongRelationship"
import EternalEPC from "components/whyChooseus/EternalEPC"
import OurApproach from "components/whyChooseus/OurApproach"
import NextLink from "components/reuseable/links/NextLink";
import Sustainability from "components/whyChooseus/Sustainability";
import Safety from "components/whyChooseus/Safety";

export default function Demo14() {
  return (
    <Fragment>
      {/* ========== header ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          // language
          // button={<NextLink title="Contact" href="#" className="btn btn-sm btn-primary rounded-pill" />}
        />
      </header>

      {/* ========== main content ========== */}
      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        
        <WhyChooseBanner/>
        
        <StrongRelationship/>
        
       
        <Vision />

        <ExpertTeam />

        <OurCapabilities/>

        <EternalEPC/>

        <OurApproach/>

        <Sustainability/>

        <Safety/>

      

        
      </main>

      {/* ========== footer section ========== */}
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </Fragment>
  );
}
