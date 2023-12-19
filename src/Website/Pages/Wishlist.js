import React, { useEffect, useState } from 'react'
import Authuser from '../Authentication/Authuser'

const Wishlist = () => {
    const { http, user, token} = Authuser();
    //wishlist code
    const [Wishlist, setWishlist]= useState([]);
    const [wish, setWish] = useState([]);
    console.log(Wishlist);
    //add to cart

  const addToCart = (product_id) => {
    console.log(product_id);
    http.get(`/add-to-cart/${product_id}`)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);
      }).catch((e) => {
        console.log(e);
      });
  }
  // end add to cart

    const getwItem = () => {
        http.get(`/get-wishlist`)
        .then((res) =>{
            // console.log(res.data);
            setWishlist(res.data.wishlist);
            // alert(res.data.msg);
            // setWish(res.data.wishlist.length);
        }).catch((e) => {
            console.log(e);
        });
    }
   
    const removewishlist=(wish_id)=>{
        // console.log(wish_id);
        http.get(`/remove-from-wishlist/${wish_id}`).then((res)=>{
            // console.log(res.data);
            setWish(wish_id);
       console.log(setWishlist((prevWishlist) => prevWishlist.filter(item => item.wish_id !== wish_id)));
        }).catch((e)=>{console.log(e);});
        
    }
    
    useEffect(() =>{
        getwItem();
    },[token, wish])

    return (
        <>
            <div className="container-fluid">
                <div className=" shop text-white pt-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>WISHLIST</h1>
                    <h5 className='text-center mt-3'><a href="" style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ Wishlist</h5>
                </div>
                <div className="container">
                    <div class="table-responsive my-5  table-bordered success">
                        <table class="table text-center">
                            <thead >
                                <tr className=''>
                                    <th colSpan={2} className='bg-success text-light'>Serial</th>
                                    <th colSpan={2} className='bg-success text-light'>Product</th>
                                    <th colSpan={2} className='bg-success text-light'>Name</th>
                                    <th colSpan={2} className='bg-success text-light'>Price</th>
                                    <th colSpan={2} className='bg-success text-light'>Stock Status</th>
                                    <th colSpan={2} className='bg-success text-light'>Add to cart</th>
                                    <th colSpan={2} className='bg-success text-light'>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Wishlist.map((item) =>(

                                
                                <tr >
                                    <td colSpan={2} className='text-center pt-5'>1</td>
                                    <td colSpan={2}><img src={'https://vsmart.ajspire.com/uploads/product_image/'+item.product_image} alt="..." style={{height:"100px", width:"100px"}}/></td>
                                    <td colSpan={2} className='text-center pt-5'><h6>{item.english_name}</h6></td>
                                    <td colSpan={2} className='text-center pt-5'><h6>₹ {item.online_price} </h6></td>
                                    <td colSpan={2} className='text-center pt-5'>in stock</td>
                                    <td colSpan={2} className='text-center pt-5'><span className='btn btn-success' onClick={()=> addToCart(item.product_id)}>Add To Cart</span></td>
                                    <td colSpan={2} className='text-center pt-5'>
                                        <div className='d-flex'>
                                            <div ><button className='btn btn-success'><i class="fa-solid fa-eye text-light"></i></button></div>
                                            <div ><button onClick={() => removewishlist(item.wishe_id)} className='btn btn-danger ms-2'><i class="fa-solid fa-trash-can text-light"></i></button></div>

                                            </div> 
                                    </td>
                                </tr>
                                ))}

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Wishlist
