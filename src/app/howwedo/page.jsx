// GLOBAL CUSTOM COMPONENTS
import Navbar from "components/blocks/navbar/navbar-1";

import { Footer12 } from "components/blocks/footer";

import Banner from "components/whyChooseus/Banner"
import Service from "components/whyChooseus/Service"
import HowItWorks from "components/whyChooseus/HowItWorks"
import WhyChooseUs from "components/whyChooseus/WhyChooseUs"
import Testimonials from "components/whyChooseus/Testimonials";
import CTA from "components/whyChooseus/CTA";
import { Team8 } from "components/blocks/team";
import HowWeDoBanner from "components/howWeDo/HowWeDoBanner"
import EternalEnergy from "components/howWeDo/EternalEnergy"
import EternalEPC from "components/howWeDo/EternalEPC"
import RiskManagement from "components/howWeDo/RiskManagement"
import ProjectDevelopment from "components/howWeDo/ProjectDevelopment"
import EternalOM from "components/howWeDo/EternalOM"
import LongTerm from "components/howWeDo/LongTerm"
import OperationMaintainance from "components/howWeDo/OperationMaintainance"
import SmartEnergy from "components/howWeDo/SmartEnergy"




export default function HowWeDo() {
  return (
    <>
      <div className="page-frame bg-soft-primary">
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

    <HowWeDoBanner/>

    <EternalEnergy/>

    <EternalEPC/>

    <RiskManagement/>

    <ProjectDevelopment/>

    <EternalOM/>

    <LongTerm/>

    <OperationMaintainance/>

    <SmartEnergy/>

   

      {/* </main> */}
      <div className="page-frame bg-pale-primary">
        {/* ========== footer section ========== */}
        <Footer12 />
      </div>
    </>
  );
}
