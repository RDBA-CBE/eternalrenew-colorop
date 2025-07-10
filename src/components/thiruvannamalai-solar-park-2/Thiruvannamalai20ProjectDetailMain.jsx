'use client';
import NextLink from 'components/reuseable/links/NextLink';
export default function Thiruvannamalai20ProjectDetailMain({ banner }) {
  return (
    <section className='pro-detail p-0 '>
      <div className='container battery-info-section py-5 '>
        <div className='row justify-content-center py-10'>
          <div className='col-11 col-md-10 col-lg-9 col-xl-6'>
            <div className='battery-details '>
              <h2 className='mb-3 display-3-n text-white text-start'>
                Technical Solution
              </h2>

              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0 '>
                  Proposed DC Capacity:
                </strong>
                <span className=' text-orange1 col-7 px-0'>32.5 MWp</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>AC Capacity:</strong>
                <span className='text-orange1 col-7 px-0'>25 MW</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>Land Area:</strong>
                <span className='text-orange1 col-7 px-0'>81 Acres</span>
              </div>
              {/* <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0 '>
                  No. of Panels Installed:
                </strong>
                <span className=' text-orange1 col-7 px-0'>22034</span>
              </div> */}
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Panel Type & Make :
                </strong>
                <span className='text-orange1 col-7 px-0'>
                  Bi Facial - N type TOPCON
                </span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>Inverters:</strong>
                <span className='text-orange1 col-7 px-0'>
                  {' '}
                  Fimer ( Central Inverter) &amp; Sungrow ( String Inverter)
                </span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Tilting System:
                </strong>
                <span className='text-orange1 col-7 px-0'>Fixed Tilt</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>Substation:</strong>
                <span className='text-orange1 col-7 px-0'>
                  110/33 KV Substation.
                </span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0 '>Bay Space:</strong>
                <span className=' text-orange1 col-7 px-0'>Available</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Transmission Line Length:
                </strong>
                <span className='text-orange1 col-7 px-0'>5 Kms (Aprox)</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Nearest Airport:
                </strong>
                <span className='text-orange1 col-7 px-0'>Chennai</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>Nearest City:</strong>
                <span className='text-orange1 col-7 px-0'>Thiruvannmalai</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Approach Road :
                </strong>
                <span className='text-orange1 col-7 px-0'>30 feet</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between  py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Proposed Date of commissioning:
                </strong>
                <span className='text-orange1 col-7 px-0'>January 2026</span>
              </div>
            </div>
          </div>
        </div>
        <div className='row justify-content-center pb-0'>
          <div className='col-md-8 col-lg-10 col-xl-8 text-center'>
            <img
              src='/img/home/Projects/project-f2.jpg'
              alt=''
              className='img-fluid battery-info-image'
            />
          </div>
        </div>
        <div className='mt-10 text-end'>
          <NextLink
            title='Back'
            href='/upcoming-projects'
            className='btn btn-lg btn-soft-primary rounded-pill'
          />
        </div>
      </div>
    </section>
  );
}
