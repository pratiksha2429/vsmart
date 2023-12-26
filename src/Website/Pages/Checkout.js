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
  const [Order, setorder] = useState({
    product_id: [],
    product_qty: [], // An array of product quantities
    sale_price: [], // An array of product prices
    discount: [], // An array of discounts
    pv_value: [], // An array of point values
    prototal: [], // An array of subtotals
    gst: [], // An array of GST value

    order_address: user.address, // address of order
    order_mob_no: user.mob_no,
    paymentmode: '', //paymentmode(adjust as needed)
    totalgst: '', // total gst
  })


  const getCartItem = () => {
    http.get(`/get-cart-list`)
      .then((res) => {
        const cartdata = res.data.cart;
        console.log("car", cartdata);
        const productIds = [];
        const productQtys = [];
        const productPrices = [];
        const productDiscounts = [];
        const productPvValues = [];
        const productTotals = [];
        const productGsts = [];



        cartdata.forEach((item) => {
          productIds.push(item.product_id);
          productQtys.push(item.cart_product_qty);
          productPrices.push(item.sale_price);
          productDiscounts.push(item.discount);
          productPvValues.push(item.point_value);
          productTotals.push(item.cart_price);
          productGsts.push(item.tax_per);
        })

        setorder((prevOrder) => ({
          ...prevOrder,
          product_id: productIds,
          product_qty: productQtys,
          sale_price: productPrices,
          discount: productDiscounts,
          pv_value: productPvValues,
          prototal: productTotals,
          gst: productGsts,

        }))
        setCart(cartdata);


        // setCart(res.data.cart);
        // console.log(res.data.cart);

      })
  }

  useEffect(() => {
    getCartItem();
  }, [token]);
  useEffect(() => {
    //caluclate total in cart
    const newtotal = Cart.reduce(
      (accumulator, item) => accumulator + item.sale_price * item.cart_product_qty,
      0
    );
    setSubtotal(newtotal);
    // calculate gst in cart
    const gst = Cart.reduce(
      (accumulator, item) => accumulator + (item.sale_price * item.cart_product_qty * item.tax_per) / (100 + item.tax_per),
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
    // console.log(disc);
    setorder((prevOrder) => ({
      ...prevOrder,
      total: newtotal,
      totalgst: gst,
      total_discount: disc,
      totalpv: pv,
    }));

  }, [Cart]);

  const Onchangeinput = (e) => {
    console.log(e);
    setorder((prevOrder) => ({
      ...prevOrder,
      [e.target.name]: e.target.value
    }));
  }

  const orderPlace = (e) => {
    console.log(Order);

    e.preventDefault();
    // console.log(Order.product_id);
    http.post(`/order_now`, Order)
      .then((res) => {
        console.log(res.data);
        console.log(res.data.msg);
      }).catch(function (er) {
        console.log(er);
      });
  };


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
                    <p className='text-center'>{user.address}</p>
                  </div>
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 my-1">
                  <div className="container text-white py-1" style={{ backgroundColor: "gray", borderRadius: '20px' }}>
                    <h4 className='text-center'>Contact Number:</h4>
                    <p className='text-center'>{user.mob_no}</p>
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

              <input type="radio" name="payment" id="cash" onClick={(e) => Onchangeinput(e)} value={' Cash on Delivery'} />
              <label htmlFor="cash">Cash on Delivery</label>


              <h3>&#8377; {subtotal.toFixed(2)}</h3>
            </div>
          </div>
          <div className="col-lg-6 col-md-6 col-sm-12 my-1">
            <div className="container text-white text-center py-1" style={{ backgroundColor: "green", borderRadius: '20px' }}>

              <input type="radio" name="payment" id="online" />
              <label htmlFor="online"> Online Transfer</label>


              <h3>&#8377; {subtotal.toFixed(2)}</h3>
            </div>
          </div>
        </div>
      </div>
      <div className="container shadow my-5" style={{ background: "white" }}>
        <input type="checkbox" id="termsCheckbox" />
        <label htmlFor="termsCheckbox">
          By making this purchase you agree to our{" "}
          <Link to='/terms'>Terms and Conditions</Link>
        </label>
      </div>

      <div class="d-grid my-5">
        <button type="button" class="btn btn-secondary btn-block py-3 h4" onClick={(e) => orderPlace(e)} > CONFIRM ORDER</button>
      </div>
    </>
  )
}

export default Checkout;
