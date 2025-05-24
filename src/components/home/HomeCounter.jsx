import { Counter1 } from "components/reuseable/counter";
// CUSTOM DATA
import { factList5 } from "data/facts";

export default function HomeCounter() {
  return (
    <section className="wrapper bg-green1">
      <div className="container py-10 pt-md-12 pb-md-10
    
      ">
        {/*  py-10 pt-md10 mt-10 */}
        <div className="row gx-lg-8 gx-xl-12 gy-10 gy-lg-0 mb-2 text-green align-items-center">
          <div className="col-lg-4">
            {/* <h3 className="display-4 text-green mb-3 pe-xxl-15">We are proud of our projects</h3> */}
            <p className="lead fs-lg mb-0 pe-xxl-10 text-white">We bring solutions to make life easier for our customers.</p>
          </div>

          <div className="col-lg-8 mt-lg-2">
            <div className="row align-items-center counter-wrapper gy-6 text-center">
              {factList5.map(({ id, title, amount }) => (
                <Counter1 key={id} title={title} number={amount} titleColor="text-white" />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}