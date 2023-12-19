import React from 'react'
import Authuser from '../Authentication/Authuser';
import { useState } from 'react';
import { useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';

const SubBrand = () => {

  const { http, user, token } = Authuser();
  let { brand_id } = useParams();

  const [activeindex, setActiveIndex] = useState(null);
  const handleItemClick = (index) => {
    if (index === activeindex) {
      //close currently open submenu
      setActiveIndex(null);
    } else {
      setActiveIndex(index);
    }
  }

  //product
  const [MainBrand, setMainBrand] = useState([]);
  // console.log(MainBrand);
  //brand name
  const [brands, setbrands] = useState([]);
  //console.log(brands);
  //subcategoryname  for banner
  const [subBrand_, setsubBrand_] = useState([]);
  // console.log(subBrand_);

  //scroll menu
  const [Cat, setCat] = useState([]);

  const [Brand, setBrand] = useState([]);



  //count for brand and categorywise 
  const [Count, setCount] = useState([]);
  //console.log(Count);
  const [Count1, setCount1] = useState([]);
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


  //pagination
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 6;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;
  const records = MainBrand.slice(firstIndex, lastIndex);
  const npage = Math.ceil(MainBrand.length / recordsPerPage);
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
  const getBrandData = () => {
    // console.log();
    try {
      http.get(`/product-shop/${brand_id}`)
        .then((res) => {
          console.log(res.data);
          setMainBrand(res.data.brand);
          // console.log(res.data.brand);


          setbrands(res.data.brands_);
          // console.log(res.data.brands_);

          setsubBrand_(res.data.subBrand_);


          setCat(res.data.cat);
          // console.log(res.data.cat)


          setBrand(res.data.brandss);
          // console.log(res.data.brandss);  

          setCount(res.data.count['']);
          setCount1(res.data.count1['']);
        }).catch((e) => {
          console.log(e);
        });


    } catch (error) {

    }


  }
  useEffect(() => {
    getBrandData();
  }, [brand_id]);











  return (
    <>
      <div className="container-fluid my-5">


        {/* backgroundImage: `url(${Category_.category_banner})`  {subcategory_.subcategory_name} backgroundImage: `url(${Brand_.brand_banner}) */}
        <div style={{ backgroundColor: "#eee", backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "500px", position: "relative" }}>
          <div className="ice text-dark pt-5" style={{ position: "absolute", top: "0", left: "0", width: "100%" }}>
            <h1 className='mt-5 text-center' style={{ paddingTop: "30px" }}>{brands.brand_name}</h1>
            <h5 className='text-center mt-3'><a href="#" style={{ textDecoration: "none", color: "black" }}><i class="fa-solid fa-house"></i> Home</a>/ {brands.brand_name} </h5>
          </div>
        </div>
        <div className="row my-5">
          <div className="col-lg-3 col-md-4 col-sm-12">
            <div className="row text-center">
              <div className="col-lg-12">
                {/* {/ filter-by-category /} */}
                <div className="shopCategory shadow bg-light ">
                  <h5 className='py-3'>FILTER BY CATEGORY</h5>
                  <hr className='py-2' />
                  <div className="Shcat" style={{ width: "100%", height: "300px", overflow: "scroll" }}>
                    <form action="" className='ms-5'>
                      <ul type='none'>
                        {Cat.slice(0, 18).map((cat, index) => (
                          <li key={index} className={activeindex === index ? 'open' : ''}>
                            <a onClick={() => handleItemClick(index)} href="#" className='text-decoration-none text-dark'>
                              {cat.category_name}   / {Count.filter((count) => count.product_category_id == cat.category_id)
                                .map((count) => (
                                  (count.cat_count)
                                ))}
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
                        {Brand.slice(0, 16).map((brand, index) => (


                          <li key={index} className={activeindex === index ? 'open' : ''}><a href="# " className='text-decoration-none text-black'>{brand.brand_name} </a>
                            {Count1.filter((count1) => count1.brand_id == brand.brand_count).map((count1) => (
                              (count1.brand_count)
                            ))}

                          </li>
                        ))}

                      </ul>

                    </form>
                  </div>

                </div>
              </div>
            </div>
          </div>
          {/* {/ product-card /} */}
          <div className="col-lg-9 col-md-8 col-sm-12">
            <div className="container-fluid">
              <div className="container">
                <div className="row bg-light shadow">

                  {/* {features.map((data) => (  ={data.product_image} key={data.product_id}*/}
                  {records.map((pro1, data) => (

                    <div className="col-lg-3 col-md-4 col-sm-12 ">
                      <div className="card text-center card-bord mx-1 my-2" >
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
                          <p className="card-text text-primary fw-bold">PV:{pro1.point_value} </p>
                          <p>
                            <strong className="card-text">MRP: <strike className="text-danger">{pro1.mrp_price}</strike> <span className="text-success"></span></strong>
                            <span className="text-success">{pro1.sale_price}/only</span>
                          </p>
                          {token ? (<Link onClick={() => addToCart(pro1.product_id)}>
                            <button className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>
                              <i className="fa-solid fa-basket-shopping"></i> Add
                            </button></Link>
                          ) : (<Link to='/login'>
                            <button className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>
                              <i className="fa-solid fa-basket-shopping"></i> Add
                            </button></Link>
                          )}

                        </div>
                      </div>

                    </div>
                  ))}

                  {/* ))} */}

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

export default SubBrand;