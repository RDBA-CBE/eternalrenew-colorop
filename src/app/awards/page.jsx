import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import Navbar from "components/blocks/navbar/navbar-1";
import AwardBanner from "components/awards/AwardBanner"
import AwardCard1 from "components/awards/AwardCard"
import { Footer12 } from "components/blocks/footer";



// CUSTOM DATA
import { demos } from "data/demo-34";

export default function Demo34() {
  return (
    <Fragment>
      {/* ========== topbar alert section ========== */}
     

      {/* ========== header section ========== */}
      <header className="wrapper bg-soft-primary">
        <Navbar
          logoAlt="logo-purple"
          button={
            <a
              href="https://1.envato.market/Ea4VxK"
              className="btn btn-primary rounded-pill"
              target="_blank"
              rel="noreferrer">
              Purchase Now
            </a>
          }
        />
      </header>

      <main className="content-wrapper">
        {/* ========== hero section ========== */}
        <AwardBanner />

      <AwardCard1/>
      </main>

      {/* ========== footer section ========== */}
       <div className="page-frame bg-pale-primary">
              {/* ========== footer section ========== */}
              <Footer12 />
            </div>
    </Fragment>
  );
}