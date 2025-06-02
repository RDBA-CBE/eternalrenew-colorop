import React from "react";

const projects = [
  {
    location: "consectetur",
    title: "Amet  consect",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
     class:"border-radius"
, 
  },
  {
    location: "consectetur",
    title: "consectetur",
    subtitle: "Read more",
    image: "/img/home/banner-1.jpg",
    class:"card-padding"
  },
  {
    location: "consectetur",
    title: "Amet <br/>  consect",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
    class:"border-radius-left"
  },
];

const projects2 = [
  {
    location: "consectetur",
    title: "Amet consect",
    subtitle: "Read more",
    image:"/img/home/banner-1.jpg",
    class:"border-radius"
, 
  },
  {
    location: "consectetur",
    title: "consectetur",
    subtitle: "Read more",
    image: "/img/home/banner-1.jpg",
    class:"card-padding"
  },
  {
    location: "consectetur",
    title: "Amet <br/>  consect",
    subtitle: "Read more",
    
    image:"/img/home/banner-1.jpg",
    class:"border-radius-left"
  },
];

const NewProjectCard = () => {
  return (
    <div className="container solar-projects-container py-5">
      <div className="row px-3 px-md-0 mt-13 mt-md-15">
        {projects.map((project, index) => (
          <div className={`col-12  col-md-4 bg-white  p-0 ${project.class ? project.class : ""} `} key={index}>
            <div
              className={`solar-project-card ${project.class !== "card-padding" ? project.class : " "  }    `}
              style={{ backgroundImage: `url(${project.image})`, }}
            >
              <div className="solar-project-overlay">
                <div>
                    <p className="solar-project-location text-orange1 w-100">{project.location}</p>
                <h3 className="solar-project-title text-white" dangerouslySetInnerHTML={{__html:project.title}}></h3>
                <p className="solar-project-subtitle text-white w-100">{project.subtitle}</p>
                </div> 
                
              </div>
            </div>
          </div>
        ))}
      </div>

       <div className="row px-3 px-md-0 mt-13 mt-md-15">
        {projects2.map((project, index) => (
          <div className={`col-12  col-md-4 bg-white  p-0 ${project.class ? project.class : ""} `} key={index}>
           <div
              className={`solar-project-card ${project.class !== "card-padding" ? project.class : " "  }    `}
              style={{ backgroundImage: `url(${project.image})`, }}
            >
              <div className="solar-project-overlay">
                <div>
                    <p className="solar-project-location text-orange1 w-100">{project.location}</p>
                <h3 className="solar-project-title text-white" dangerouslySetInnerHTML={{__html:project.title}}></h3>
                <p className="solar-project-subtitle text-white w-100">{project.subtitle}</p>
                </div>
                
              </div>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default NewProjectCard;
