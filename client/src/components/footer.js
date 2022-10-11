import React from 'react'
import {
    MDBFooter,
    MDBContainer,
    MDBIcon,
    MDBInput,
    MDBCol,
    MDBRow,
    MDBBtn
  } from 'mdb-react-ui-kit';

const Footer = () => {

      return (
        
    <MDBFooter bgColor='#B4CDE6' className='text-center text-lg-start text-muted'>
      <section className='d-flex justify-content-center justify-content-lg-between p-4 border-bottom'>
        <div className='me-5 d-none d-lg-block'>
          <span>Get connected with us on social networks:</span>
        </div>

        <div>
          <a href='https://www.facebook.com/bahri.essid' className='me-4 text-reset'>
            <MDBIcon fab icon="facebook-f" />
          </a>    
          <a href='https://www.instagram.com/essidbahri/' className='me-4 text-reset'>
            <MDBIcon fab icon="instagram" />
          </a>
          <a href='https://github.com/bahriessid' className='me-4 text-reset'>
            <MDBIcon fab icon="github" />
          </a>
        </div>
      </section>

      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md="3" lg="4" xl="3" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon icon="gem" className="me-3" />
                tunitrav
              </h6>
              <p>
                you can Publish your passions your way. Whether you'd like to share your experiences or the latest travels
              </p>
            </MDBCol>

           

            <MDBCol md="3" lg="2" xl="2" className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
             
              <p>
                <a href='http://localhost:3000/dashboard' className='text-reset'>
                  Settings
                </a>
              </p>
             
              <p>
                <a href='http://localhost:3000/addTour' className='text-reset'>
                 Start making your own tour
                </a>
              </p>
            </MDBCol>

            <MDBCol md="4" lg="3" xl="3" className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon icon="home" className="me-2" />
                Tunisia
              </p>
              <p>
                <MDBIcon icon="envelope" className="me-3" />
                tunitrav@gmail.com
              </p>
              <p>
                <MDBIcon icon="phone" className="me-3" /> + 216 21 129 785
              </p>
              <p>
                <MDBIcon icon="print" className="me-3" /> + 216 21 129 785
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © 2022 Copyright:
        <a className='text-reset fw-bold' href='https://tunitrav.com/'>
        tunitrav.com
        </a>
      </div>
    </MDBFooter>
      );
    }
 

export default Footer