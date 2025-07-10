'use client';
import NextLink from 'components/reuseable/links/NextLink';
export default function ThiruvannamalaiProjectDetailMain({ banner }) {
  return (
    <section className='pro-detail p-0 mt-10'>
      <div className='container-fluid'>
        <div className='row'>
          <div className='col-md-6'>
            <div className='img-con'>
              <img
                src='/img/home/Projects/thiruvannamali-solar-park/down-img.jpg'
                alt=''
              />
            </div>
          </div>
          <div className='col-md-6 pt-5'>
            <div className='content-con' style={{ width: '100%' }}>
              <p className='text-white fs-16'>
                Tiruvannamalai Solar Park is located in Athipattu &
                Kalathampattu Villages of Melmalayanur Taluk, Villupuram
                District, Tamilnadu near Thiruvannamalai , India. The solar farm
                is connected with 110/33 KV Gingee Substation via 33/11 KV
                Sathyamangalam Substation through the 33 KV dedicated single
                circuit transmission overhead line by using ACSR Dog conductor
                under section 10(1) of Electricity act 2003. Bi-Facial
                photovoltaic (PV) modules with each capacity of 550 wp * 35454
                Nos. are installed, creating a DC capacity of 19.5 Mwp.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className='container battery-info-section py-5 pt-10'>
        <div className='row text-center justify-content-center'>
          {/* Stat 1 */}
          <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <span
              className='text-orange1 fs-45 fw-bold d-block battery-detail-item'
              style={{ borderBottom: '1px solid #fbbc05' }}
            >
              3,00,00,000
            </span>
            <p className='text-white battery-detail-item mt-4'>
              The approximate amount of renewable energy generated from Karur
              solar park I annually (in KWhrs)
            </p>
          </div>

          {/* Stat 2 */}
          <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <span
              className='text-orange1 fs-45 fw-bold d-block battery-detail-item'
              style={{ borderBottom: '1px solid #fbbc05' }}
            >
              21,330
            </span>
            <p className='text-white battery-detail-item mt-4'>
              Tonnes CO2 emissions avoided per Annum
            </p>
          </div>

          {/* Stat 3 */}
          <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <span
              className='text-orange1 fs-45 fw-bold d-block battery-detail-item'
              style={{ borderBottom: '1px solid #fbbc05' }}
            >
              21,505
            </span>
            <p className='text-white battery-detail-item mt-4'>
              Avg. domestic households served each year
            </p>
          </div>

          {/* Stat 4 */}
          <div className='col-12 col-md-6 col-lg-3 mb-4'>
            <span
              className='text-orange1 fs-45 fw-bold d-block battery-detail-item'
              style={{ borderBottom: '1px solid #fbbc05' }}
            >
              48
            </span>
            <p className='text-white battery-detail-item mt-4'>
              Approx. Acres of land protected by the solar park
            </p>
          </div>
        </div>

        <div className='row justify-content-center text-center'>
          <div className='col-lg-12'>
            <h2 className='mb-3 display-3-n text-white '>Project Summary</h2>
            <p className='text-white'>
              Tiruvannamalai Solar Park utilises highly accurate forecasting to
              predict the plant’s variation in output due to changes in
              irradiance to provide clean electricity while maintaining system
              security. The solar farm has a variety of weather sensors
              installed throughout the park to accurately capture weather
              conditions to ensure the plant’s export is maximised without
              impacting grid stability.
            </p>
          </div>
        </div>
        <div className='row justify-content-center py-10'>
          <div className='col-11 col-md-10 col-lg-9 col-xl-6'>
            <div className='battery-details '>
              <h2 className='mb-3 display-3-n text-white text-center'>
                Technical Solution
              </h2>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0 '>DC Capacity:</strong>
                <span className=' text-orange1 col-7 px-0'>19.5 Mwp</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>AC Capacity:</strong>
                <span className='text-orange1 col-7 px-0'>15MW</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>Land Area:</strong>
                <span className='text-orange1 col-7 px-0'> 48 Acres</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0 '>
                  No. of Panels Installed:
                </strong>
                <span className=' text-orange1 col-7 px-0'>35454</span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Panel Type & Make :
                </strong>
                <span className='text-orange1 col-7 px-0'>
                  550Wp Bi-facial, Goldi Solar & Waaree Solar
                </span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between border-bottom py-2 row'>
                <strong className='text-white col-5 px-0'>Inverters:</strong>
                <span className='text-orange1 col-7 px-0'>
                  {' '}
                  Sungrow ( String Inverter)
                </span>
              </div>
              <div className='battery-detail-row d-flex justify-content-between py-2 row'>
                <strong className='text-white col-5 px-0'>
                  Tilting System:
                </strong>
                <span className='text-orange1 col-7 px-0'>Fixed Tilt</span>
              </div>
            </div>
          </div>
        </div>

        {/* <div className='row justify-content-center'>
          <div className='col-lg-6'>
            <div className='img-con h-100'>
              <img
                src='img/what-we-do/what-we-do.jpg'
                alt=''
                className='img-fluid w-100 h-100 object-fit-cover'
              />
            </div>
          </div>

          <div className='col-lg-6'>
            <h2 className='mb-3 display-3-n text-white '>
              Community & Culture
            </h2>
            <p className='text-white'>
              Eternal Renewables actively commits to engaging with each local
              community it works within. Landowners, neighbours, community
              groups, environmental groups and local businesses are consulted
              with to ensure the Karur Solar Park is a valued project that
              operates responsibly and sustainably. The Karur Solar Park has
              created local job opportunities and developed industry skills that
              support small business and the regional economy. Eternal
              Renewables supports local businesses and suppliers wherever
              possible. The cultural heritage of the Karur Solar Park is of
              utmost importance and has continued to be a respected priority in
              minimising environmental impacts from construction through to
              operations. This clean energy development with no air emissions,
              no waste and minimal carbon footprint .
            </p>
          </div>
        </div> */}

        <div className='row justify-content-center pb-0'>
          <div className='col-md-8 col-lg-10 col-xl-8 text-center'>
            <img
              src='/img/home/Projects/project-f4.jpg'
              alt=''
              className='img-fluid battery-info-image'
            />
          </div>
        </div>
        <div className='mt-10 text-end'>
          <NextLink
            title='Back'
            href='/completed-projects'
            className='btn btn-lg btn-soft-primary rounded-pill'
          />
        </div>
      </div>
    </section>
  );
}
