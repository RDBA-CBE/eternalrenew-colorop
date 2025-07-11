'use client';

import Typewriter from 'typewriter-effect';
// CUSTOM UTILS
import { fadeInAnimate, slideInDownAnimate } from 'utils/animation';

export default function ProjectBanner() {
  return (
    <section className='wrapper bg-gradient-primary'>
      <div className='container pt-10 pt-md-14'>
        <div className='row gx-2 gy-10 align-items-center'>
          <div className='col-md-10 offset-md-1 offset-lg-0 col-lg-5 text-center text-lg-start order-2 order-lg-0'>
            <h1
              className='display-1 ls-xs fs-45 mb-4'
              data-cue='slideInDown'
              data-group='page-title'
              data-show='true'
              style={slideInDownAnimate('0ms')}
            >
              Where <span className='underline-3 style-2 yellow'>We Lead</span>
            </h1>

            <p
              className='lead fs-22 mb-7 text-white'
              style={slideInDownAnimate('900ms')}
            >
              Explore our diverse portfolio of both turnkey and bespoke
              sustainable energy solutions that are meticulously engineered with
              precision to help our clients achieve their business objectives
              and requirements and realize their dream of cutting down carbon
              emissions and protecting the ecosystems.
            </p>

            {/* <div
              className="d-flex justify-content-center justify-content-lg-start mb-4"
              style={slideInDownAnimate("1200ms")}>
              <a className="btn btn-lg btn-primary rounded-pill me-2 scroll" href="#demos">
                Check Demos
              </a>
            </div> */}
          </div>

          <div className='col-lg-6 ms-auto position-relative'>
            <div className='row g-4 rounded'>
              <img
                className='img-fluid rounded p-0'
                src='/img/photos/project-banner.jpg'
                alt=''
              />
              {/* <div className="col-4 d-flex flex-column ms-auto">
                <div className="ms-auto mt-6" style={fadeInAnimate("900ms")}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/demos/vc1.jpg"
                    srcSet="/img/demos/vc1@2x.jpg 2x"
                    alt=""
                  />
                </div>

                <div className="ms-auto mt-4" style={fadeInAnimate("1200ms")}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/demos/vc2.jpg"
                    srcSet="/img/demos/vc2@2x.jpg 2x"
                    alt=""
                  />
                </div>

                <div className="ms-auto mt-4" style={fadeInAnimate("1500ms")}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/demos/vc3.jpg"
                    srcSet="/img/demos/vc3@2x.jpg 2x"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-4">
                <div style={fadeInAnimate("0ms")}>
                  <img
                    className="w-100 img-fluid rounded shadow-lg"
                    src="/img/demos/vc4.jpg"
                    srcSet="/img/demos/vc4@2x.jpg 2x"
                    alt=""
                  />
                </div>

                <div style={fadeInAnimate("300ms")}>
                  <img
                    className="w-100 img-fluid rounded shadow-lg mt-4"
                    src="/img/demos/vc5.jpg"
                    srcSet="/img/demos/vc5@2x.jpg 2x"
                    alt=""
                  />
                </div>

                <div style={fadeInAnimate("600ms")}>
                  <img
                    className="w-100 img-fluid rounded shadow-lg mt-4"
                    src="/img/demos/vc6.jpg"
                    srcSet="/img/demos/vc6@2x.jpg 2x"
                    alt=""
                  />
                </div>
              </div>

              <div className="col-4 d-flex flex-column">
                <div className="mt-8" style={fadeInAnimate("900ms")}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/demos/vc7.jpg"
                    srcSet="/img/demos/vc7@2x.jpg 2x"
                    alt=""
                  />
                </div>

                <div className="mt-4 mb-10" style={fadeInAnimate("1200ms")}>
                  <img
                    className="img-fluid rounded shadow-lg"
                    src="/img/demos/vc8.jpg"
                    srcSet="/img/demos/vc8@2x.jpg 2x"
                    alt=""
                  />
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
