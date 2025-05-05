import NextLink from "components/reuseable/links/NextLink";
import { ProjectCard3 } from "components/reuseable/project-cards";
// CUSTOM DATA
import { portfolioList6 } from "data/portfolio";

export default function OurProjects() {
  return (
    <section className="wrapper bg-light home-project">
      <div className="container py-10 py-md-12">
        <div className="row">
          <div className="col-lg-11 col-xl-10 mx-auto mb-10">
            <h2 className="fs-16 text-uppercase text-center mb-3">Empowering Communities with Renewable Energy</h2>
            <h3 className="display-3 text-center px-lg-5 px-xl-10 px-xxl-16 mb-0">
              Our Projects
            </h3>
          </div>
        </div>

        <div className="grid grid-view projects-masonry">
          <div className="row gx-md-8 gy-10 gy-md-13 isotope">
            {portfolioList6.map((item) => (
              <div className="project item col-md-6 col-xl-4" key={item.id}>
                <ProjectCard3 {...item} />
              </div>
            ))}
          </div>
        </div>

        <div className="text-center mt-10">
          <NextLink title="Start a Project" href="/projects" className="btn btn-lg btn-primary rounded-pill" />
        </div>
      </div>
    </section>
  );
}
