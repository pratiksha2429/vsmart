import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Authuser from './Authuser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
const Login = () => {

    

    const { http, setToken, setUser,token } = Authuser();

    // Now you can use `http` with the Authorization header included.

    const [login, setlogin] = useState({
        email: "",
        password: "",
    });
    console.log("login", login);
    // https://vsmart.ajspire.com/api/user/login

    const navigate = useNavigate();
     
    useEffect(() => {
        if(token != null)
        {
            navigate("");
        }
       
        window.scrollTo({
            top:0,
            behavior:"smooth",
        },[navigate,token]);
    })


    const Onlogin = (e) => {
        e.preventDefault();
        http.post(`/user/login`, login)
            .then((res) => {
                console.log(res.data.user_data);
                
                if(res.data.token) 
                {
                    //setUser();
                    setToken(res.data.user_data,res.data.token);
                    navigate("/");
                    toast.success('login successful!');
                }
                
                
                // setDisable(0);
            })
            .catch((error) => {
                toast.error('login failed. Please try again.');
                // setDisable(0);
            });
    }
    const handleInputChange = (e) => {
        // const { name, value } = e.target;
        setlogin({ ...login, [e.target.name]: e.target.value });
    };
   
    return (
        <>
            <div className="container-fluid " style={{height:"100%", width:"100%"}}>


                <section className="" style={{ backgroundColor: '#eee' }}>
                    <div className="container h-100">
                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-lg-12 col-xl-11">
                                <div className="card text-black" style={{ borderRadius: 25 }}>
                                    <div className="card-body p-md-5">
                                        <div className="row justify-content-center">
                                            <div className="col-md-10 col-lg-6 col-xl-5 order-2 order-lg-1">
                                                <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4 text-success">Welcome To VS Mart</p>
                                                <form className="mx-1 mx-md-4">
                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-user fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="text" id="form3Example1c" className="form-control" placeholder='Enter Your user Id/email' name="email" value={login.email} onChange={(e) => handleInputChange(e)} />

                                                        </div>
                                                    </div>

                                                    <div className="d-flex flex-row align-items-center mb-4">
                                                        <i className="fas fa-lock fa-lg me-3 fa-fw" />
                                                        <div className="form-outline flex-fill mb-0">
                                                            <input type="password" id="form3Example4c" className="form-control" name="password" value={login.password} onChange={(e) => handleInputChange(e)} placeholder='Enter Password' />
                                                        </div>
                                                    </div>

                                                    <div className="form-check d-flex justify-content-center mb-5">
                                                        <input className="form-check-input me-2" type="checkbox" defaultValue id="form2Example3c" />
                                                        <label className="form-check-label" htmlFor="form2Example3">
                                                            <a href="#!" style={{ textDecoration: "none" }} className='text-dark'>Remember me</a>
                                                        </label>
                                                    </div>
                                                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                                                        <button type="button" className="btn btn-success btn-lg" onClick={(e) => Onlogin(e)}>Login</button>
                                                    </div>
                                                    <div className='text-center'>
                                                        <p>Forgot Your Password?<a href="#">Reset Here</a></p>
                                                    </div>
                                                    <hr />
                                                    <div className='text-center'>
                                                        <p>Don't Have Any Account?<Link to='/register' >Register Here</Link></p>
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

export default Login;
