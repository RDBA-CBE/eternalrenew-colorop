import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import Navbar from "components/blocks/navbar/navbar-1";
import ProjectBanner from "components/projects/ProjectBanner"
import NewProjectBanner from "components/projects/NewProjectBanner"
import NewProjectCard from "components/projects/NewprojectCard"
import ProjectCard1 from "components/projects/ProjectCard1"
import PazhaniProjectBanner from "components/pazhani-solar-park/pazhaniprojectbanner"
import PazhaniProjectDetailMain from "components/pazhani-solar-park/pazhaniprojectdetails"


import { Footer12 } from "components/blocks/footer";

// CUSTOM DATA
import { demos } from "data/demo-34";

export default function Demo34() {

  const banner ={
    title:"PAZHANI SOLAR PARK ",
    description:"Pazhani Solar Park-41.9 Mwp<br/>Location: Chatrapatty, Oddenchatram Taluk, Dindigul District, Tamilnadu",
    img:"/img/home/Projects/pazhani-solar-park/banner-img.jpg"
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
       <PazhaniProjectBanner banner={banner}/>

       <PazhaniProjectDetailMain/>
       
        
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
