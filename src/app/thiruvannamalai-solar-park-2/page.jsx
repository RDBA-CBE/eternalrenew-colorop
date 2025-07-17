import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import Navbar from "components/blocks/navbar/navbar-1";
import Thiruvannamalai20ProjectBanner from "components/thiruvannamalai-solar-park-2/Thiruvannamalai20ProjectBanner"
import Thiruvannamalai20ProjectDetailMain from "components/thiruvannamalai-solar-park-2/Thiruvannamalai20ProjectDetailMain"


import { Footer12 } from "components/blocks/footer";

// CUSTOM DATA
import { demos } from "data/demo-34";

export default function Demo34() {

  const banner ={
    title:"THIRUVANNAMALAI SOLAR PARK 2.0",
    // description:"Tiruvannamalai Solar Park- 19.5 Mwp<br/>Location: Gingee, Melmalayanur Taluk, Villupuram District, Tamilnadu",
    img:"/img/home/Projects/thiruvannamalai-2-banner.jpg"
  }
  return (
    <Fragment>
      {/* ========== topbar alert section ========== */}
     

      
       <div className="page-frame bg-pale-primary">

       <header className="wrapper">
                <Navbar 
                  info
                  language
                  stickyBox={false}
                  logoAlt="logo-light"
                  // navClassName="navbar navbar-expand-lg classic transparent position-absolute navbar-dark"
                  navClassName=" navbar navbar-expand-lg center-nav classic position-absolute transparent navbar-dark"
                />
              </header>

      <main className="content-wrapper bg-green1">
        {/* ========== hero section ========== */}
       <Thiruvannamalai20ProjectBanner banner={banner}/>

       <Thiruvannamalai20ProjectDetailMain/>
       
        
      {/* <ProjectCard1/> */}
      </main>
      </div>

      {/* ========== footer section ========== */}
       <div className="page-frame bg-pale-primary">
              {/* ========== footer section ========== */}
              <Footer12 />
            </div>
    </Fragment>
  );
}
