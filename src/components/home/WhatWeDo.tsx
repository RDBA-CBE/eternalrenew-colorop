import { Banner4 } from "components/blocks/banner";
import NextLink from "components/reuseable/links/NextLink";
import { ServiceCard3 } from "components/reuseable/service-cards";
// CUSTOM DATA
import { aboutList4 } from "data/about";

export default function WhatWeDo() {
    return (
        <section className="wrapper bg-light">
            <div className="container py-10 py-md-12">
                <div className="row gy-10 gy-sm-13 gx-md-8 gx-xl-12 align-items-center">


                    <div className="col-lg-6">
                        <h2 className="fs-16 text-uppercase  mb-3">Clean energy for homes, businesses and beyond</h2>
                        <h3 className="display-3 mb-8">What We Do</h3>
                        <div className="row gy-6">
                            {aboutList4.map(({ id, Icon, ...item }) => (
                                <div className="col-md-6" key={id}>
                                    <ServiceCard3 {...item} Icon={<img src={Icon} className=" me-4" width={45} alt="What We Do" />} />
                                </div>
                            ))}
                        </div>
                        <NextLink title="know More" href="/whatwedo" className="btn btn-soft-primary rounded-pill mt-2 mb-0" />
                    </div>
                    <div className="col-lg-6 position-relative">
                        {/* <Banner4 hideShape btnColor="white" /> */}
                        <figure className="rounded">
                            <img src={`/img/what-we-do/what-we-do-img.jpg`} srcSet={`/img/home/what-we-do.jpg 2x`} alt="what we do "  />
                        </figure>
                    </div>
                </div>
            </div>
        </section>
    );
}
