import React from 'react';

const projects = [
  {
    location: 'Ayyermalai',
    title: 'Karur Solar Park I - 19.5 Mwp',
    subtitle: 'Read more',
    image: '/img/home/Projects/karur-solar-park-I.jpg',
    class: 'border-side',
    slug: 'karur-solar-park-1',
  },
  {
    location: 'Aravakurichi',
    title: 'Karur Solar Park II - 19.5 MWp',
    subtitle: 'Read more',
    image: '/img/home/Projects/karur-solar-park-II.jpg',
    class: '',
    slug: 'karur-solar-park-2',
  },
  {
    location: 'Vengaimandalam',
    title: ' Trichy Solar Park - 13 MWp',
    subtitle: 'Read more',
    image: '/img/home/Projects/trichy-solar-park.jpg',
    class: 'border-side-left',
    slug: 'trichy-solar-park',
  },
];

const projects2 = [
  {
    location: 'Erumapatty',
    title: 'Namakkal Solar Park I - 42.3 Mwp',
    subtitle: 'Read more',
    image: '/img/home/Projects/namakkal-solar-park-I.jpg',
    class: 'border-side',
    slug: 'namakkal-solar-park-1',
  },
  {
    location: 'Paruthipally',
    title: 'Namakkal Solar Park II - 5.6 Mwp',
    subtitle: 'Read more',
    image: '/img/home/Projects/namakkal-solar-park-II.jpg',
    class: '',
    slug: 'namakkal-solar-park-2',
  },
  {
    location: 'Gingee',
    title: 'Thiruvannamalai Solar Park - 19.5 Mwp',
    subtitle: 'Read more',
    image: '/img/home/Projects/thiruvannamalai-solar-park.jpg',
    class: 'border-side-left',
    slug: 'thiruvannamalai-solar-park',
  },
];
const projects3 = [
  {
    location: 'Chatrapatty',
    title: 'Pazhani Solar Park - 41.9 Mwp',
    subtitle: 'Read more',
    image: '/img/home/Projects/pazhani-solar-park.jpg',
    class: 'border-side',
    slug: 'pazhani-solar-park',
  },
  // {
  //   location: "consectetur",
  //   title: "consectetur",
  //   subtitle: "Read more",
  //   image: "/img/home/banner-1.jpg",
  //   class:""
  // },
  // {
  //   location: "consectetur",
  //   title:  "Consectetur <br/>  amettur",
  //   subtitle: "Read more",

  //   image:"/img/home/banner-1.jpg",
  //   class:"border-side-left"
  // },
];
const projects4 = [
  {
    location: 'consectetur',
    title: 'Amet <br/>  consectetur',
    subtitle: 'Read more',
    image: '/img/home/banner-1.jpg',
    class: 'border-side',
  },
  {
    location: 'consectetur',
    title: 'consectetur',
    subtitle: 'Read more',
    image: '/img/home/banner-1.jpg',
    class: ' border-side-left',
  },
];
const upcomingprojects = [
  {
    location: 'Thiruvannamalai',
    title: 'Thiruvannamalai Solar Park 2.0',
    subtitle: 'Read more',
    image: '/img/home/Projects/karur-solar-park-I.jpg',
    class: 'border-side',
    slug: 'upcoming-projects',
  },
];

const ongoingprojects = [
  {
    location: 'Villupuram',
    title: 'Villupuram Solar Park',
    subtitle: 'Read more',
    image: '/img/home/Projects/karur-solar-park-I.jpg',
    class: 'border-side',
    slug: 'ongoing-projects',
  },
];

const CompletedProjectCard = () => {
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
                className={`solar-project-card project-border ${
                  project.class !== '' ? project.class : ' '
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
                className={`solar-project-card project-border ${
                  project.class !== '' ? project.class : ' '
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
        {/* <div className='row px-3 px-md-0 mt-10 mt-md-10'>
          
          <div className='col-12 col-md-4'>
            <h2 style={{ color: 'white' }}>Ongoing Projects</h2>
            {ongoingprojects.map((project, index) => (
              <div
                className={`bg-white p-0 ${project.class ? project.class : ''}`}
                key={index}
              >
                <div
                  className={`solar-project-card project-border ${
                    project.class !== '' ? project.class : ' '
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className='solar-project-overlay'>
                    <div>
                      <p
                        className='solar-project-location w-100'
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


          <div className='col-12 col-md-4'>
            <h2 style={{ color: 'white' }}>Upcoming Projects</h2>
            {upcomingprojects.map((project, index) => (
              <div
                className={`bg-white p-0 ${project.class ? project.class : ''}`}
                key={index}
              >
                <div
                  className={`solar-project-card project-border ${
                    project.class !== '' ? project.class : ' '
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className='solar-project-overlay'>
                    <div>
                      <p
                        className='solar-project-location w-100'
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
          <div className='col-12 col-md-4'>
            <h2 style={{ color: 'white' }}>Completed Projects</h2>
            {upcomingprojects.map((project, index) => (
              <div
                className={`bg-white p-0 ${project.class ? project.class : ''}`}
                key={index}
              >
                <div
                  className={`solar-project-card project-border ${
                    project.class !== '' ? project.class : ' '
                  }`}
                  style={{ backgroundImage: `url(${project.image})` }}
                >
                  <div className='solar-project-overlay'>
                    <div>
                      <p
                        className='solar-project-location w-100'
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
          
        </div> */}

        <div className='row px-3 px-md-0 mt-15 '>
          {projects.map((project, index) => (
            <div
              className={`col-12 col-md-4 mt-5 mt-sm-5 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card project-border ${
                  project.class !== '' ? project.class : ' '
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

        <div className='row px-3 px-md-0 mt-7 mt-md-7'>
          {projects2.map((project, index) => (
            <div
              className={`col-12 col-md-4 mt-5 mt-sm-5 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card project-border ${
                  project.class !== '' ? project.class : ' '
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

        <div className='row px-3 px-md-0 mt-7 mb-10'>
          {projects3.map((project, index) => (
            <div
              className={`col-12 col-md-4 mt-5 mt-sm-5 ${
                project.class ? project.class : ''
              } `}
              key={index}
            >
              <div
                className={`solar-project-card project-border ${
                  project.class !== '' ? project.class : ' '
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
        </div>
      </div>
    </>
  );
};

export default CompletedProjectCard;
