import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import Navbar from "components/blocks/navbar/navbar-1";
import ProjectBanner from "components/projects/ProjectBanner"
import NewProjectBanner from "components/projects/NewProjectBanner"
import NewProjectCard from "components/projects/NewprojectCard"
import ProjectCard1 from "components/projects/ProjectCard1"
import KarurProjectOneBanner from "components/karur-solar-park-i/karurprojectbannerone"
import KarurProjectDetailOneMain from "components/karur-solar-park-i/karurprojectdetailsone"


import { Footer12 } from "components/blocks/footer";

// CUSTOM DATA
import { demos } from "data/demo-34";


export default function Demo34() {

  const banner ={
    title:"KARUR SOLAR PARK I",
    description:"Location: Ayyermalai, Kulithalai Taluk, Karur District, Tamilnadu",
    img:"/img/home/banner-1.jpg"
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
       <KarurProjectOneBanner banner={banner}/>

       <KarurProjectDetailOneMain/>
       
        
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
