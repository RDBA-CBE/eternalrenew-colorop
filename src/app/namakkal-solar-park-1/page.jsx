import { Fragment } from "react";
// GLOBAL CUSTOM COMPONENTS

import Navbar from "components/blocks/navbar/navbar-1";
import ProjectBanner from "components/projects/ProjectBanner"
import NewProjectBanner from "components/projects/NewProjectBanner"
import NewProjectCard from "components/projects/NewprojectCard"
import ProjectCard1 from "components/projects/ProjectCard1"
import NamakkalProjectOneBanner from "components/namakkal-solar-park-I/namakkalprojectbannerone"
import NamakkalProjectDetailOneMain from "components/namakkal-solar-park-I/namakkalprojectdetailsone"


import { Footer12 } from "components/blocks/footer";

// CUSTOM DATA
import { demos } from "data/demo-34";


export default function Demo34() {

  const banner ={
    title:"NAMAKKAL SOLAR PARK I",
    description:"Location: Erumapatty, Sendhamangalam, Namakkal District, Tamilnadu",
    img:"/img/home/Projects/namakkal-solar-park-i/banner-img.jpg"
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
       <NamakkalProjectOneBanner banner={banner}/>

       <NamakkalProjectDetailOneMain/>
       
        
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
