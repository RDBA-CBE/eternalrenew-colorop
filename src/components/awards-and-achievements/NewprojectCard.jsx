import React from 'react';

const completedprojects = [
  {
    // location: 'Ayyermalai',
    title: 'Completed Projects',
    subtitle: 'Read more',
    image: '/img/home/Projects/trichy-solar-park.jpg',
    class: 'project-border',
    slug: 'completed-projects',
  },

];

const projects2 = [
  {
    location: 'Erumapatty',
    title: 'Namakkal Solar Park I',
    subtitle: 'Read more',
    image: '/img/home/Projects/namakkal-solar-park-I.jpg',
    class: 'border-radius',
    slug: 'namakkal-solar-park-1',
  },
  {
    location: 'Paruthipally',
    title: 'Namakkal Solar Park II',
    subtitle: 'Read more',
    image: '/img/home/Projects/namakkal-solar-park-II.jpg',
    class: 'card-padding',
    slug: 'namakkal-solar-park-2',
  },
  {
    location: 'Gingee',
    title: 'Thiruvannamalai Solar Park',
    subtitle: 'Read more',
    image: '/img/home/Projects/thiruvannamalai-solar-park.jpg',
    class: 'border-radius-left',
    slug: 'thiruvannamalai-solar-park',
  },
];
const projects3 = [
  {
    location: 'Chatrapatty',
    title: 'Pazhani Solar Park',
    subtitle: 'Read more',
    image: '/img/home/Projects/pazhani-solar-park.jpg',
    class: 'border-radius',
    slug: 'pazhani-solar-park',
  },
  // {
  //   location: "consectetur",
  //   title: "consectetur",
  //   subtitle: "Read more",
  //   image: "/img/home/banner-1.jpg",
  //   class:"card-padding"
  // },
  // {
  //   location: "consectetur",
  //   title:  "Consectetur <br/>  amettur",
  //   subtitle: "Read more",

  //   image:"/img/home/banner-1.jpg",
  //   class:"border-radius-left"
  // },
];
const projects4 = [
  {
    location: 'consectetur',
    title: 'Amet <br/>  consectetur',
    subtitle: 'Read more',
    image: '/img/home/banner-1.jpg',
    class: 'border-radius',
  },
  {
    location: 'consectetur',
    title: 'consectetur',
    subtitle: 'Read more',
    image: '/img/home/banner-1.jpg',
    class: ' border-radius-left',
  },
];
const upcomingprojects = [
  {
    location: 'Thiruvannamalai',
    title: 'Upcoming Projects',
    subtitle: 'Read more',
    image: '/img/home/Projects/karur-solar-park-II.jpg',
    class: 'project-border',
    slug: 'upcoming-projects',
  },
];

const ongoingprojects = [
  {
    location: 'Villupuram',
    title: 'Ongoing Projects',
    subtitle: 'Read more',
    image: '/img/home/Projects/pazhani-solar-park.jpg',
    class: 'project-border',
    slug: 'ongoing-projects',
  },
];

const NewProjectCard = () => {
  return (
    <>
      <div className='container solar-projects-container pb-10 pb-md-0'>
        {/* <div className='row px-3 px-md-0 mt-10 mt-md-10'>
          <h2 style={{ color: 'white' }}>Ongoing Projects</h2>
          {ongoingprojects.map((project, index) => (
            <div
              className={`col-12  col-md-4 bg-white  p-0 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card ${
                  project.class !== 'card-padding' ? project.class : ' '
                }    `}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className='solar-project-overlay'>
                  <div>
                    <p
                      className='solar-project-location  w-100'
                      dangerouslySetInnerHTML={{ __html: project.location }}
                    ></p>
                    <h3
                      className='solar-project-title text-white'
                      dangerouslySetInnerHTML={{ __html: project.title }}
                    ></h3>
                    <p className='solar-project-subtitle text-white w-100'>
                      <a href={`/${project.slug}`} className='text-white'>
                        {project.subtitle}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='row px-3 px-md-0 mt-10 mt-md-10'>
          <h2 style={{ color: 'white' }}>Upcoming Projects</h2>
          {upcomingprojects.map((project, index) => (
            <div
              className={`col-12  col-md-4 bg-white  p-0 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card ${
                  project.class !== 'card-padding' ? project.class : ' '
                }    `}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className='solar-project-overlay'>
                  <div>
                    <p
                      className='solar-project-location  w-100'
                      dangerouslySetInnerHTML={{ __html: project.location }}
                    ></p>
                    <h3
                      className='solar-project-title text-white'
                      dangerouslySetInnerHTML={{ __html: project.title }}
                    ></h3>
                    <p className='solar-project-subtitle text-white w-100'>
                      <a href={`/${project.slug}`} className='text-white'>
                        {project.subtitle}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
        <div className='row px-3 px-md-0 mt-10 mt-md-10'>
          {/* Ongoing Projects */}
          <div className='col-12 col-md-4'>
            {ongoingprojects.map((project, index) => (
              <div
                className={`bg-white p-0 ${project.class ? project.class : ''}`}
                key={index}
              >
                <div
                  className={`solar-project-card ${
                    project.class !== 'card-padding' ? project.class : ' '
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className='solar-project-overlay'>
                    <div>
                      {/* <p
                        className='solar-project-location w-100'
                        dangerouslySetInnerHTML={{ __html: project.location }}
                      ></p> */}
                      <h3
                        className='solar-project-title text-white'
                        dangerouslySetInnerHTML={{ __html: project.title }}
                      ></h3>
                      <p className='solar-project-subtitle text-white w-100'>
                        <a href={`/${project.slug}`} className='text-white text-center d-block'>
                          {project.subtitle}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Upcoming Projects */}
          <div className='col-12 col-md-4'>
            {upcomingprojects.map((project, index) => (
              <div
                className={`bg-white p-0 ${project.class ? project.class : ''}`}
                key={index}
              >
                <div
                  className={`solar-project-card ${
                    project.class !== 'card-padding' ? project.class : ' '
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className='solar-project-overlay'>
                    <div>
                      {/* <p
                        className='solar-project-location w-100'
                        dangerouslySetInnerHTML={{ __html: project.location }}
                      ></p> */}
                      <h3
                        className='solar-project-title text-white'
                        dangerouslySetInnerHTML={{ __html: project.title }}
                      ></h3>
                      <p className='solar-project-subtitle text-white w-100'>
                        <a href={`/${project.slug}`} className='text-white text-center d-block'>
                          {project.subtitle}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className='col-12 col-md-4'>
            {completedprojects.map((project, index) => (
              <div
                className={`bg-white p-0 ${project.class ? project.class : ''}`}
                key={index}
              >
                <div
                  className={`solar-project-card ${
                    project.class !== 'card-padding' ? project.class : ' '
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className='solar-project-overlay'>
                    <div>
                      {/* <p
                        className='solar-project-location w-100'
                        dangerouslySetInnerHTML={{ __html: project.location }}
                      ></p> */}
                      <h3
                        className='solar-project-title text-white'
                        dangerouslySetInnerHTML={{ __html: project.title }}
                      ></h3>
                      <p className='solar-project-subtitle text-white w-100'>
                        <a href={`/${project.slug}`} className='text-white text-center d-block '>
                          {project.subtitle}
                        </a>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
        </div>

        {/* <div className='row px-3 px-md-0 mt-10 mt-md-10'>
          <h2 style={{ color: 'white' }}>Completed Projects</h2>
          {projects.map((project, index) => (
            <div
              className={`col-12  col-md-4 bg-white  p-0 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card ${
                  project.class !== 'card-padding' ? project.class : ' '
                }    `}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className='solar-project-overlay'>
                  <div>
                    <p
                      className='solar-project-location  w-100'
                      dangerouslySetInnerHTML={{ __html: project.location }}
                    ></p>
                    <h3
                      className='solar-project-title text-white'
                      dangerouslySetInnerHTML={{ __html: project.title }}
                    ></h3>
                    <p className='solar-project-subtitle text-white w-100'>
                      <a href={`/${project.slug}`} className='text-white'>
                        {project.subtitle}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='row px-3 px-md-0 mt-10 mt-md-10'>
          {projects2.map((project, index) => (
            <div
              className={`col-12  col-md-4 bg-white  p-0 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card ${
                  project.class !== 'card-padding' ? project.class : ' '
                }    `}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className='solar-project-overlay'>
                  <div>
                    <p className='solar-project-location w-100'>
                      {project.location}
                    </p>
                    <h3
                      className='solar-project-title text-white'
                      dangerouslySetInnerHTML={{ __html: project.title }}
                    ></h3>
                    <p className='solar-project-subtitle text-white w-100'>
                      <a href={`/${project.slug}`} className='text-white'>
                        {project.subtitle}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className='row px-3 px-md-0 mt-10 mt-md-10'>
          {projects3.map((project, index) => (
            <div
              className={`col-12  col-md-4 bg-white  p-0 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card ${
                  project.class !== 'card-padding' ? project.class : ' '
                }    `}
                style={{ backgroundImage: `url(${project.image})` }}
              >
                <div className='solar-project-overlay'>
                  <div>
                    <p className='solar-project-location  w-100'>
                      {project.location}
                    </p>
                    <h3
                      className='solar-project-title text-white'
                      dangerouslySetInnerHTML={{ __html: project.title }}
                    ></h3>
                    <p className='solar-project-subtitle text-white w-100'>
                      <a href={`/${project.slug}`} className='text-white'>
                        {project.subtitle}
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div> */}
      </div>
    </>
  );
};

export default NewProjectCard;
