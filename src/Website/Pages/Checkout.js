import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser';
import { Link } from 'react-router-dom';

const Checkout = () => {
  const { http, user, token } = Authuser();
  const [Cart, setCart] = useState([]);
  //   const [Cart, setCart] = useState([]);
  const [subtotal, setSubtotal] = useState(0);
  // const [subto, setSubto] = useState(0);
  const [gst, setGst] = useState(0);
  const [pv, setPv] = useState(0);
  const [disc, setDisc] = useState(0);

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
  useEffect(() => {
    //caluclate total in cart
    const newtotal = Cart.reduce(
      (accumulator, item) => accumulator + item.online_price * item.cart_product_qty,
      0
    );
    setSubtotal(newtotal);
    // calculate gst in cart
    const gst = Cart.reduce(
      (accumulator, item) => accumulator + (item.online_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per),
      0
    );
    setGst(gst);
    //calculate pv in cart
    const pv = Cart.reduce(
      (accumulator, item) => accumulator + item.point_value,
      0
    );
    setPv(pv);
    //calculate discount 
    const disc = Cart.reduce(
      (accumulator, item) => {
        console.log('Total discount: ', item.total_discount);
        const totalDisc = parseFloat(item.total_discount);
        return accumulator + totalDisc;
      },
      0
    );
    setDisc(disc);
    console.log(disc);

  }, [Cart]);




  return (
    <>
      <div className="container-fluid my-5 py-5" style={{ backgroundColor: "#eee" }}>
        <div className=" shop text-white pt-5">

          <h1 className='mt-5' style={{ paddingTop: "60px" }}>CHECKOUT</h1>

        </div>
        <div className="container">
          <div className="container shadow my-5 mx-5" style={{ borderRadius: "10px" }}>
            <h4 className='pt-3 text-success ms-4'>YOUR CART</h4>
            <hr className='py-1 text-success bold' />
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
                      <th className='bg-success text-light border-end'>Tax</th>
                      <th className='bg-success text-light border-end'>P V</th>
                      <th className='bg-success text-light border-end'>Total</th>
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
                        <td className="pt-4 border-end">&#8377; {((item.sale_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per)).toFixed(2)}</td>
                        <td className="pt-4 border-end">&#8377; {item.point_value}</td>
                        <td className="pt-4 border-end">&#8377; {item.sale_price * item.cart_product_qty}</td>

                      </tr>
                    ))}

                  </tbody>

                </table>

              </div>
            </div>
            <div className="container">
              <hr className='text-success text-center' />
              <table class="table table-condensed text-center  shadow">

                <thead>
                  <tr>
                    <th>SubTotal:</th>
                    <th>&#8377; {subtotal.toFixed(2)}</th>
                  </tr>
                  <tr>
                    <th>PV Total:</th>
                    <th>&#8377; {pv.toFixed(2)}</th>
                  </tr>
                  <tr>
                    <th>Tax Total:</th>
                    <th>&#8377; {gst.toFixed(2)} </th>
                  </tr>
                  <tr>
                    <th>Discount Total:</th>
                    <th>&#8377; {disc.toFixed(2)} </th>
                  </tr>
                  <tr className='text-success'>
                    <th className='text-success'>Total:&#40; Incl. TAX &#41;</th>
                    <th className='text-success'>&#8377; {subtotal.toFixed(2)} </th>
                  </tr>

                </thead>

              </table>
            </div>
            <div className="container my-3 shadow" style={{ backgroundColor: "#eee" }}>
              <h2>Delivery Address:</h2>
              <hr className='text-bold text-success' />
              <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 my-1">
                  <div className="container text-white py-1" style={{ backgroundColor: "gray", borderRadius: '20px' }}>
                    <h4 className='text-center'>Home:</h4>
                    <p className='text-center'>shirasane, baramati, pune</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-1">
                  <div className="container text-white py-1" style={{ backgroundColor: "gray", borderRadius: '20px' }}>
                    <h4 className='text-center'>Contact Number:</h4>
                    <p className='text-center'>+91 7768846617</p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
      <div className="container-fluid my-3 shadow" style={{ backgroundColor: "#eee" }}>
        <h2>Payment Option :</h2>
        <hr className='text-bold text-success' />
        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="container text-white text-center py-1" style={{ backgroundColor: "green", borderRadius: '20px' }}>

              <input type="radio" name="payment" id="cash" />
              <label htmlFor="cash">Cash on Delivery</label>


              <h3>&#8377;1565</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="container text-white text-center py-1" style={{ backgroundColor: "green", borderRadius: '20px' }}>

              <input type="radio" name="payment" id="online" />
              <label htmlFor="online"> Online Transfer</label>


              <h3>&#8377; 1563</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container shadow my-5" style={{background:"white"}}>
        <input type="checkbox" name="" id="" />
        <label htmlFor=""> By making this purchase you agree to our <a href="">Terms and Conditions</a> </label>
      </div>
      <div class="d-grid my-5">
  <button type="button" class="btn btn-secondary btn-block py-3 h4"> <Link to="/orderlist">CONFIRM ORDER</Link> </button>
</div>
    </>
  )
}

export default Checkout;
