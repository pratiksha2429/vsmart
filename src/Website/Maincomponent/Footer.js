import React from 'react'

const Footer = () => {
  return (
    <>
      <div className="container-fluid " style={{ background: "#eee" }}>
        <div className="container py-3" >
          <div className="row">
            <div className="col-lg-4">
              <div className="inlirow-footne">
                <img src="https://vsmart.ajspire.com/images/logo1.png" alt=".." style={{ height: "110px", width: "180px" }} className='mb-3 mt-2' />
                <p>Vishwakarma Super Mart Private Limited, is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life.</p>
                <div className="row-foot d-flex text-center ">
                  <div><i class="fa-brands fa-facebook"></i></div>
                  <div><i class="fa-brands fa-twitter"></i></div>
                  <div><i class="fa-brands fa-linkedin"></i></div>
                  <div><i class="fa-brands fa-instagram"></i></div>
                  <div><i class="fa-brands fa-pinterest"></i></div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <ul type='none' >
                <h4 className='my-4'>Contact us</h4>
                <li className='my-'><i className="fa-solid fa-at mt-1 ms-2 " style={{ fontSize: '20px', color: 'green' }}></i> <a href="mailto:vsmart0932@gmail.com" style={{ textDecoration: 'none' }} className=' text-dark ms-2'><b>vsmart0932@gmail.com</b></a></li>
                <li className='my-3'> <i className="fa-solid fa-mobile-screen-button mt-1 ms-2" style={{ fontSize: '20px', color: 'green' }}></i> <a href="tel:(+91)8446092500" style={{ textDecoration: 'none' }} className=' text-dark ms-2'><b>(+91) 8446092500</b></a></li>
                <li className='my-3 ms-1 font-weight-bold' ><i class="fa-solid fa-location-dot ms-1" style={{ fontSize: '20px', color: 'green' }}></i>  A/P Koregaon, 2978 Jalgaon Road, Tal - Koregaon, <span className='ms-4'> Dist. Satara Pin 415501 </span></li>
              </ul>
            </div>
            <div className="col-lg-4 ">
              <h4 className='my-4'>Quick links</h4>
              <ul l type='none' className=''>
                <li className='my-2'>Download</li>
                <li className='my-2'>Legal</li>
                <li className='my-2'>Login</li>
                <li className='my-2'>Term And Condition</li>
                <li className='my-2'>Privacy Policy</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="container bg-success text-light my-4 footer-text" style={{ borderRadius: "20px" }}>
          <div className="row pt-3">
            <div className="col-lg-8 ">
              <p>V S Mart | <small> © Copyright 2022 by <span className='border-bottom'> V S Mart </span>  All Rights Reserved </small></p>
            </div>
            <div className="col-lg-4 text-center">
              <p>Designed by <span className='border-bottom'> Ajspire Technologies Pvt.Ltd </span> </p>
            </div>
          </div>
        </div>
      </div>


    </>
  )
}

export default Footer;
