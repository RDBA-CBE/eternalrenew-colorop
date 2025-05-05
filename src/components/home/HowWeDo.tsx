import { Banner4 } from "components/blocks/banner";
import { ServiceCard3 } from "components/reuseable/service-cards";
import VideoPlyr from "components/reuseable/VideoPlyr";
// CUSTOM DATA
import { aboutList4 } from "data/about";
import { processList5 } from "data/process";
import animation from "utils/animation";

export default function HowWeDo() {
    return (
        <section className="wrapper bg-light mt-0">
            <div className="container py-10 py-md-12">
                <div className="row text-center">
                    <div className="col-lg-9 mx-auto">
                        <h2 className="fs-15 text-uppercase mb-3">Turning Potential into Power</h2>
                        <h3 className="display-4 mb-0 text-center px-xl-10 px-xxl-15 text-green" >
                            How We Do
                        </h3>

                        <div className="row gx-lg-8 gx-xl-12 process-wrapper justify-content-center text-center mt-9">
                            {processList5.map(({ title, subtitle, Icon, color , icon}) => (
                                <div key={title} className="col-md-3 text-center">
                                    {/* {<Icon className={`icon-svg-md text-${color} mb-3`} />} */}
                                    <img src={icon} alt="icon" />
                                    <h4 className="mb-1 pt-2">{title}</h4>
                                    <p className="text-dark fw-normal">{subtitle}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>


            </div>
        </section>
    );
}
