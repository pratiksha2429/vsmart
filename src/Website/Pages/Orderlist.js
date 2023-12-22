import React, { useEffect, useState } from 'react';
import './Orderlist.css';
import Authuser from '../Authentication/Authuser';
const Orderlist = () => {
    const { http, user, token } = Authuser();
    const [Cart, setCart] = useState([]);
    const getCartItem = () => {
        http.get(`/get-cart-list`)
            .then((res) => {
                setCart(res.data.cart);
                console.log(res.data.cart);
            }).catch((e) => {
                console.log(e);
            });
    }

    useEffect(() => {
        getCartItem();
    }, [token]);
    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: "#eee" }}>
                <div className=" shop text-white pt-5 py-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>ORDER HISTORY</h1>
                    <h5 className='text-center mt-3'><a href='/' style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ View Order</h5>
                </div>
                <div className="container-fluid my-3 py-3 border" style={{ backgroundColor: "whitesmoke", borderRadius: "10px" }}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <button type="button" class="btn btn-lg btn-outline-success shadow float-end">Offline Order History</button>
                            </div>
                        </div>
                    </div>
                </div>
                <h1 className='text-center my-3'>Order Tracking:</h1>
                <div>
                    <h5 className="mb-0">INVOICE <span className="text-primary font-weight-bold">#Y34XDHR</span></h5>
                </div>
                <section className="" style={{ backgroundColor: '#8c9eff', height: "100%" }}>
                    <div className="container py-5 h-100">

                        <div className="row d-flex justify-content-center align-items-center h-100">
                            <div className="col-12">
                                <div className="card card-stepper text-black" style={{ borderRadius: 16 }}>

                                    <div className="card-body p-5">
                                        {/* <div className="d-flex justify-content-between align-items-center mb-5">
                                          
                                            <div className="text-end">
                                                <p className="mb-0">Expected Arrival <span>01/12/19</span></p>
                                                <p className="mb-0">USPS <span className="font-weight-bold">234094567242423422898</span></p>
                                            </div>
                                        </div> */}
                                        <ul id="progressbar-2" className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2">
                                            <li className="step0 active text-center" id="step1" />
                                            <li className="step0 active text-muted text-end" id="step2" />
                                            <li className="step0 active text-muted text-end" id="step3" />
                                            <li className="step0 text-muted text-end" id="step4" />
                                            <li className="step0 text-muted text-end" id="step5" />
                                            <li className="step0 text-muted text-end" id="step6" />
                                        </ul>
                                        <div className="d-flex justify-content-between">
                                            <div className="d-lg-flex align-items-center">
                                                <i className="fas fa-clipboard-list fa-3x me-lg-4 mb-3 mb-lg-0" />
                                                <div>
                                                    <p className="fw-bold mb-1">Order</p>
                                                    <p className="fw-bold mb-0">Pending</p>
                                                </div>
                                            </div>
                                            <div className="d-lg-flex align-items-center">
                                                <i className="fas fa-box-open fa-3x me-lg-4 mb-3 mb-lg-0" />
                                                <div>
                                                    <p className="fw-bold mb-1">Order</p>
                                                    <p className="fw-bold mb-0"> Accepted</p>
                                                </div>
                                            </div>
                                            <div className="d-lg-flex align-items-center">
                                                <i className="fas fa-shipping-fast fa-3x me-lg-4 mb-3 mb-lg-0" />
                                                <div>
                                                    <p className="fw-bold mb-1">Order</p>
                                                    <p className="fw-bold mb-0">Shipped</p>
                                                </div>
                                            </div>

                                            <div className="d-lg-flex align-items-center">
                                                <i className="fa-solid fa-truck-pickup fa-3x me-lg-4 mb-3 mb-lg-0" />
                                                <div>
                                                    <p className="fw-bold mb-1">Order</p>
                                                    <p className="fw-bold mb-0">Transporting</p>
                                                </div>
                                            </div>
                                            <div className="d-lg-flex align-items-center">
                                                <i className="fas fa-home fa-3x me-lg-4 mb-3 mb-lg-0" />
                                                <div>
                                                    <p className="fw-bold mb-1">Order</p>
                                                    <p className="fw-bold mb-0"> Delivered</p>
                                                </div>
                                            </div>
                                            <div className="d-lg-flex align-items-center">
                                                <i className="fa-solid fa-rectangle-xmark fa-3x me-lg-4 mb-3 mb-lg-0" />
                                                <div>
                                                    <p className="fw-bold mb-1">Order</p>
                                                    <p className="fw-bold mb-0">Rejected</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-5">
                                    <div className="col-lg-5 col-md-5 col-sm-12">
                                        <div className="container bg-light " style={{ borderRadius: "10px" }}>
                                            <table className="table">

                                                <tbody>
                                                    <tr>
                                                        <th>Order Id</th>
                                                        <td>5261</td>

                                                    </tr>
                                                    <tr>
                                                        <th>Total Item</th>
                                                        <td>4 Items</td>

                                                    </tr>
                                                    <tr>
                                                        <th>Order Time</th>
                                                        <td>2023-11-29 15:20:02</td>

                                                    </tr>
                                                    <tr>
                                                        <th>Delivery Time</th>
                                                        <td>After Accepted Order Required Minimum <br /> 2 Days To Place Order</td>

                                                    </tr>

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-lg-4 col-md-5 col-sm-12">
                                        <div className="container bg-light" style={{ borderRadius: "10px" }}>
                                            <table className="table">

                                                <tbody>
                                                    <tr>
                                                        <th>Cash Transaction Mode</th>
                                                        <td>Cash on Delivery</td>

                                                    </tr>
                                                    <tr>
                                                        <th>Delivery Fee</th>
                                                        <td>Free Of Cost Delivery</td>

                                                    </tr>
                                                    <tr>
                                                        <th>Total(Incl.TAX)</th>
                                                        <td>₹31</td>

                                                    </tr>


                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-lg-3">
                                        <div className="container bg-light" style={{ borderRadius: "10px" }}>
                                            <table className="table text-center">
                                                <thead>
                                                    <th>Delivery Location</th>
                                                </thead>
                                                <tbody>
                                                    <td>Baramati</td>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>

                                </div>
                                {/* hi */}
                                <div className="container">
                                    <div className="table-responsive my-2  table-bordered success">
                                        <table className="table text-center" >
                                            <thead >
                                                <tr className=''>
                                                    <th className='bg-success text-light border-end'>Sr.No</th>
                                                    <th className='bg-success text-light border-end'>Product</th>
                                                    <th className='bg-success text-light border-end'>Product Name</th>
                                                    <th className='bg-success text-light border-end'>Price</th>
                                                    <th className='bg-success text-light border-end'>Brand</th>
                                                    <th className='bg-success text-light border-end'>Quantity</th>
                                                    <th className='bg-success text-light border-end'>Returns</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {Cart.map((item) => (
                                                    <tr className='border-bottom'>
                                                        <td className="pt-4 border-end"></td>
                                                        <td className=" border-end"><img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} alt="..." style={{ height: "120px", width: "120px" }} /></td>
                                                        <td className="pt-4 border-end">{item.english_name}</td>
                                                        <td className="pt-4 border-end">&#8377; {item.sale_price}</td>
                                                        <td className="pt-4 border-end">{item.brand_name}</td>
                                                        <td className="pt-4 border-end">{item.cart_product_qty}</td>
                                                        <td className='pt-4 border-end'><button type="button" class="btn btn-danger"><i class="fa-solid fa-arrow-left"></i></button></td>

                                                    </tr>
                                                ))}

                                            </tbody>

                                        </table>

                                    </div>

                                </div>
                            </div>
                        </div>


                    </div>

                </section>

            </div>
        </>
    )
}

export default Orderlist
