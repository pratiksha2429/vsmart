import React from 'react'
import { Link } from 'react-router-dom';
import Authuser from './Authuser';
import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Register = () => {
  const { http } = Authuser();
  const [btnDisable, setDisable] = useState(0);
  const [formData, setformData] = useState(
    {
      name: '',
      mob_no: '',
      address: '',
      email: '',
      password: '',
      cpassword: '',
    }
  );
  console.log("register", formData);

  const OninputChange = (e) => {
    setformData({ ...formData, [e.target.name]: e.target.value });
  }
  //registration validation
  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.mob_no || !formData.address || !formData.password || !formData.cpassword) {
      toast.error('All fields are required.');
      return false;
    }

    if (formData.password !== formData.cpassword) {
      toast.error('Password and confirm password do not match.');
      return false;
    }
    return true; 
  };

  const Onsubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      // Perform the HTTP request only if the form is valid
      http.post('/userregister', formData)
        .then((res) => {
          console.log(res.data);
          toast.success('Registration successful!');
          // setDisable(0);
        })
        .catch((error) => {
          toast.error('Registration failed. Please try again.');
          // setDisable(0);
        });
    }
  };


  return (
    <>
      <div className="container-fluid " style={{ height: "100%", width: "100%" }}>

        <section className="mx-5 my-5" style={{ backgroundColor: '#eee' }}>
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-lg-12 col-xl-11">
                <div className="card text-black" style={{ borderRadius: 25 }}>
                  <div className="card-body p-md-5">
                    <div className="row justify-content-center">
                      <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                        <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">Sign up</p>
                        <form className="mx-1 mx-md-4">
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-user fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example1c">Your Name</label>
                              <input type="text" name='name' id="form3Example1c" className="form-control" onChange={(e) => OninputChange(e)} placeholder='enter your name' />

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-envelope fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example3c">Your Email</label>
                              <input type="email" name='email' className="form-control" onChange={(e) => OninputChange(e)} placeholder='enter your email' />

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fa-solid fa-mobile fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example3c">Mobile No.</label>
                              <input type="number" name='mob_no' className="form-control" onChange={(e) => OninputChange(e)} placeholder='enter your mobile number' />

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i class="fa-solid fa-location-dot fa-lg me-3 fa-fw"></i>
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example3c">Address</label>
                              <input type="address" name='address' className="form-control" onChange={(e) => OninputChange(e)} placeholder='enter your address' />

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-lock fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example4c">Password</label>
                              <input type="password" name='password' className="form-control" onChange={(e) => OninputChange(e)} placeholder='enter password' />

                            </div>
                          </div>
                          <div className="d-flex flex-row align-items-center mb-4">
                            <i className="fas fa-key fa-lg me-3 fa-fw" />
                            <div className="form-outline flex-fill mb-0">
                              <label className="form-label" htmlFor="form3Example4cd">Repeat your password</label>
                              <input type="password" name='cpassword' className="form-control" onChange={(e) => OninputChange(e)} placeholder='plz confirm your password' />

                            </div>
                          </div>
                          <div className="form-check d-flex justify-content-center mb-5">
                            <input className="form-check-input me-2" type="checkbox" />
                            <label className="form-check-label" htmlFor="form2Example3">
                              I agree all statements in <a href="#!">Terms of service</a>
                            </label>
                          </div>
                          <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                            <button type="button" className="btn btn-primary btn-lg" onClick={(e) => Onsubmit(e)}>Register</button>
                          </div>
                          <div className="text-center">
                            <p>Already Have An Account? <Link to='/login'>Login Here</Link></p>
                          </div>
                        </form>
                      </div>
                      <div className="col-md-10 col-lg-6 col-xl-7 d-flex align-items-center order-1 order-lg-2">
                        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-registration/draw1.webp" className="img-fluid" alt="Sample image" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <ToastContainer />
      </div>
    </>
  )
}

export default Register;
