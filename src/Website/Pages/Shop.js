import React from 'react'
import Authuser from '../Authentication/Authuser';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const Shop = () => {
    const { http, user, token } = Authuser();
    let { shop } = useParams();
    const [activeindex, SetActiveindex] = useState(null);
    const handleItemClick = (index) => {
        if (index === activeindex) {
            SetActiveindex(null);
        } else {
            SetActiveindex(index);
        }
    }
     // add to wishlist
  const addTowish = (product_id) => {
    console.log(product_id);
    http.get(`/add-to-wishlist/${product_id}`)
      .then((res) => {
        console.log(res.data);
        alert(res.data.msg);
      }).catch((e) => {
        console.log(e);
      });

  }
  //add to wishlist end
    const [Product, SetProduct] = useState([]);
    // scroll menu
    const [Cat, SetCat] = useState([]);
    const [Brand, SetBrand] = useState([]);

    // Count for cat and brand
    const [Count, SetCount] = useState([]);
    const [Count1, SetCount1] = useState([]);
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
    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 8;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Product.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Product.length / recordsPerPage);
    const numbers = [...Array(npage + 1).keys()].slice(1);

    function perPage() {
        if (currentPage !== 1) {
            setCurrentPage(currentPage - 1)
        }
    }
    function changeCPage(id) {
        setCurrentPage(id)
    }
    function nextPage() {
        if (currentPage !== npage) {
            setCurrentPage(currentPage + 1)
        }
    }
    // end add to cart
    const shopProductdata = () => {
        try {
            http.get(`/shop`).then((res) => {
                console.log(res.data);
                SetProduct(res.data.product.data);
                console.log(res.data.brand);
                SetBrand(res.data.brand);
                SetCat(res.data.cat);
                SetCount(res.data.count['']);
                SetCount1(res.data.count1['']);

            }).catch((e) => {
                console.log(e);
            });
        } catch (error) {

        }
    };

    useEffect(() => {
        shopProductdata();
    }, [shop]);



    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: "#eee" }}>
                <div className=" shop text-white pt-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>VIEW ALL PRODUCT</h1>
                    <h5 className='text-center mt-3'><a href='/' style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ View All Product</h5>
                </div>
                <div className="row my-5">
                    {/* {/ filter-by-price /} */}
                    <div className="col-lg-3 col-md-4 col-sm-12">
                        <div className="row text-center">
                            <div className="col-lg-12">
                                <div className="shopfilter shadow px-2" style={{ backgroundColor: "white" }}>
                                    <h4 className='pt-3'>FILTER BY PRICE</h4>
                                    <hr />
                                    <div className="row d-flex mt-4 py-2">
                                        <div className="col-lg-6">
                                            <input type="text" placeholder='Min - 00' className='text-center my-2' style={{ height: "40px", width: "100%" }} />

                                        </div>
                                        <div className="col-lg-6">
                                            <input type="text" placeholder='Max - 5k' className='text-center my-2' style={{ height: "40px", width: "100%" }} />

                                        </div>
                                    </div>
                                    <button type="button" class="btn btn-success px-5 my-4">
                                        <i class="fa-solid fa-magnifying-glass"></i> Search
                                    </button>
                                </div>
                                {/* {/ filter-by-category /} */}
                                <div className="shopCategory shadow bg-light mt-4">
                                    <h5 className='py-3'>FILTER BY CATEGORY</h5>
                                    <hr className='py-2' />
                                    <div className="Shcat" style={{ width: "100%", height: "400px", overflow: "scroll" }}>
                                        <form action="" className='ms-5'>
                                            <ul type='none'>
                                                {Cat.slice(0, 12).map((cat, index) => (
                                                    <li key={index} className={activeindex === index ? 'open' : ''}>
                                                        <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: 'none' }}>
                                                            <div>
                                                                <input type='checkbox' className='shop-card2-input1'></input>&nbsp;&nbsp; {cat.category_name}
                                                                &nbsp;&nbsp;(
                                                                {Count.filter((count) => count.product_category_id == cat.category_id).map((count) => (
                                                                    (count.cat_count)
                                                                ))})

                                                            </div>
                                                        </a>

                                                    </li>

                                                ))}
                                            </ul>
                                        </form>
                                    </div>

                                </div>
                                {/* {/ filter-by-brand /} */}
                                <div className="shopBrand shadow bg-light mt-4">
                                    <h5 className='py-3'>FILTER BY BRAND</h5>
                                    <hr className='py-2' />
                                    <div className="ShBr" style={{ width: "100%", height: "400px", overflow: "scroll" }}>
                                        <form action="" className='ms-5'>
                                            <ul type='none'>
                                                {Brand.slice(0, 12).map((brand, index) => (
                                                    <li key={index} className={activeindex === index ? 'open' : ''}>
                                                        <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: 'none' }}>
                                                            <div>
                                                                <input type='checkbox' className='shop-card2-input1'></input>
                                                                {/* {/ <label className='shop-card2-lable1'>{brand.brand_name}</label> /} */}
                                                                &nbsp;&nbsp; {brand.brand_name}
                                                                {/* &nbsp;&nbsp;(
                                                        {Count1.filter((count1) => count1.brand_id == brand.brand_id).map((count1) => (
                                                            (count1.brand_count)
                                                        ))}) */}

                                                            </div>
                                                        </a>
                                                        {/* <ul style={{ display: activeindex === index ? 'block' : 'none' }}>
                                                    submenu items here
                                                    {SubBrand_.filter((sub) => sub.brand_id === brand.brand_id).map((sub) => (
                                                        <li className='text-dark'><Link to={`/product-shop/${brand.brand_id}/${sub.subcategory_id}`}>{sub.subcategory_name}</Link></li>
                                                    ))}
                                                </ul> */}
                                                    </li>
                                                ))}
                                            </ul>
                                        </form>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                    {/*  {/ product-card /} */}
                    <div className="col-lg-9 col-md-8 col-sm-12">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row bg-light shadow">

                                    {records.map((pro1, data) => (
                                        <div className="col-lg-3 col-md-4 col-sm-12 ">
                                            <div className="card text-center card-bord mx-1 my-2" key={pro1.product_id}>
                                                <div className="feat">
                                                    <div className="featureCard text-light px-2 my-1 ms-1 text-center" style={{ width: "75px" }}>feature</div>
                                                    <div className="d-flex">
                                                        <div className="offer text-light ms-1 text-center" style={{ width: "75px" }}>&#x20B9; 30 Off</div>
                                                        <i className="fa-solid fa-heart heart heart-img" onClick={() => addTowish(pro1.product_id)} style={{ marginLeft: "130px", fontSize: "20px" }}></i>
                                                    </div>
                                                </div>
                                                <div className="team-area">
                                                    <div className="single-team">
                                                        <div className="img-container" style={{ marginLeft: "20px" }}  >
                                                            <img src={pro1.product_image} className="img-fluid rounded-start border-end iimg card-img-top caImg mx-2" alt="..." />
                                                            <div className="img-overlay d-flex">
                                                                <a className="btn btn-success m-2" href="#" role="button"><i className="fa-solid fa-shuffle"></i></a>
                                                                <a className="btn btn-success" href="#" role="button"><i className="fa-solid fa-eye"></i></a>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div class="card-body text-center">
                                                    <h5 class="card-title" style={{ height: "40px" }} >{pro1.english_name}</h5>
                                                    <p className="card-text text-primary fw-bold">PV: {pro1.products_pv_percentages}</p>
                                                    <p>
                                                        <strong className="card-text">MRP: <strike className="text-danger">{pro1.mrp_price}</strike> <span className="text-success">{pro1.sale_price}</span></strong>
                                                        <span className="text-success">/only</span>
                                                    </p>
                                                    {token ? (
                                                        <Link onClick={() => addToCart(pro1.product_id)}>
                                                            <button className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>
                                                                <i className="fa-solid fa-basket-shopping"></i> Add
                                                            </button></Link>
                                                    ) : (
                                                        <Link to='/login'>
                                                            <button className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>
                                                                <i className="fa-solid fa-basket-shopping"></i> Add
                                                            </button></Link>
                                                    )}

                                                </div>
                                            </div>
                                        </div>
                                    ))}

                                    {/* pagination start */}

                                    {/* <p className='text-center my-3'>Showing to 32 of 2788 results</p> */}
                                    <ul class="pagination justify-content-center my-3">
                                        <li className="page-item"><a className="page-link" href="" onClick={perPage}><i className="fa-solid fa-arrow-left" ></i></a></li>
                                        {
                                            numbers.map((n, i) => (
                                                <li className={`page-item ${currentPage === n ? 'active' : ''}`} key={i}><a className="page-link" href="#" onClick={() => changeCPage(n)} >{n}</a></li>
                                            ))
                                        }

                                        <li class="page-item"><a class="page-link" href="#" onClick={nextPage}><i className="fa-solid fa-arrow-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Shop;
