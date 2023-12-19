import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Authuser from '../Authentication/Authuser';
import { Link } from 'react-router-dom';

const Index = () => {
  const { http,user,token } = Authuser();
  const [slider1, setslider1] = useState([]);
  const getslider = () => {
    http.get(`/banners`).then((res) => {
      // console.log(res.data);
      setslider1(res.data.banners);
    }).catch((e) => {
      console.log(e);
    });
  }
  const [slider2, setslider2] = useState([]);
  const getslider2 = () => {
    http.get(`/categories`).then((res) => {
      console.log(res.data);
      setslider2(res.data.categories);
    }).catch((e) => {
      console.log(e);
    });
  }
  const [features, setfeatures] = useState([]);
  const getfeatures = () => {
    http.get(`/products`).then((res) => {
      console.log(res.data);
      setfeatures(res.data.products.data);
    }).catch((e) => {
      console.log(e);
    });
  }
  const [brand, setbrand] = useState([]);
  const getbrands = () => {
    http.get(`/brands`).then((res) => {
      console.log(res.data);
      setbrand(res.data.brands);
    }).catch((e) => {
      console.log(e);
    });
  }
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
  // add to cart end
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

  useEffect(() => {
    getslider();
    getslider2();
    getfeatures();
    getbrands();

  }, []);





  function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
  }

  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 2,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,

        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,

        }
      }

    ]
  };
  return (
    <>
      <div className='container-fluid mt-3' style={{ backgroundImage: "url(https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQpSIbtYIlaNKgoETfRFm0LGFminYJtktvPs-SjCHH23EIrt2WY)" }}>
        <div className='container'>
          {/*<div className='row'>
            <div className='col-lg-12 col-md-12 col-sm-12'>*/}
          <Carousel interval={2000}>
            {slider1.map((slider) => (
              <Carousel.Item>
                <img src={slider.slider_image}
                  alt="First slide"
                  style={{ width: "100%", borderRadius: "30px", height: "600px" }} />



              </Carousel.Item>
            ))}

            {/* <Carousel.Item>
              <img
                src='https://vsmart.ajspire.com/uploads/slider/1667996845.jpg'
                alt="Second slide"
                style={{ width: "100%", borderRadius: "30px" }}
              />

          </Carousel.Item>*/}
          </Carousel>
          {/* </div>
          </div>*/}
        </div>
        {/* best deals*/}
        <div className='container mt-3'>
          <h1 className='my-3 text-center text-success' style={{ fontSize: "60px", fontWeight: "40px", }}>Best Deals</h1>
          <img src="https://vsmart.ajspire.com/uploads/slider/1667297122.jpg" alt="img" style={{ width: "100%" }} />
        </div>
        {/*// best deals*/}
      </div>
      {/*/ slick slider*/}
      <div className="container my-5" >


        <Slider {...settings} interval={2000}>
          {slider2.map((data) => (
            <div style={{ width: "100%" }} className='Myimg' key={data.category_id}>
              <img src={data.category_banner} style={{ height: "140px", width: "100%" }} alt="img" />
              <div className="cont">
                <h4 className='text-center'>{data.category_name}<br /> </h4>
              </div>
            </div>
          ))}

        </Slider>
      </div>
      {/*// slick slider*/}
      {/* featured item*/}
      <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
        <div className="container " >
          <h1 className='my-5 mt-5 pt-5 text-center text-success'>Our Featured Item</h1>
          <div className='row'>
            {features.slice(0, 8).filter((pro) => pro.featured === 1).map((data) => (
              <div className='col-lg-6 col-md-12 col-sm-12' key={data.product_id}>
                <div className="card mb-4 shadow mx-2 my-2" style={{ maxWidth: "540px" }}>
                  <div className="row g-0">
                    <div className="col-md-4 col-sm-12"> {/* Use col-sm-12 for small screens */}
                      <div className="feat">
                        <div className="featureCard text-light px-2 my-1 ms-1 text-center" style={{ width: "75px" }}>feature</div>
                        <div className="d-flex">
                          <div className="offer text-light ms-1 text-center" style={{ width: "75px" }}>&#x20B9; 30 Off</div>
                          <i className="fa-solid fa-heart heart heart-img" onClick={() => addTowish(data.product_id)} style={{ marginLeft: "60px", fontSize: "20px" }}></i>
                        </div>
                      </div>
                      <div className="team-area">
                        <div className="single-team">
                          <div className="img-container">
                            <img src={data.product_image} className="img-fluid rounded-start border-end iimg" alt="..." />
                            <div className="img-overlay d-flex">
                              <a className="btn btn-success m-2" href="#" role="button"><i className="fa-solid fa-shuffle"></i></a>
                              <a className="btn btn-success" href="#" role="button"><i className="fa-solid fa-eye"></i></a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-8 col-sm-12"> {/* Use col-sm-12 for small screens */}
                      <div className="card-body">
                        <h5 className="card-title my-4">{data.english_name}</h5>
                        <p className="card-text text-primary fw-bold">PV: {data.point_value}</p>
                        <p>
                          <strong className="card-text">MRP: <strike className="text-danger">{data.mrp_price}</strike> <span className="text-success">{data.sale_price}</span></strong>
                          <span className="text-success">/only</span>
                        </p>
                      
                          {token ? (
                              <button className="col-lg-12 btn monClick={() => addToCart(data.product_id)}y-3" style={{ backgroundColor: "green", color: "white",  }}>
                            <Link  style={{textDecoration:"none",color:"white"}}><i className="fa-solid fa-basket-shopping"></i>Add to cart</Link>
                            </button>
                          ):(
                            <button className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>
                            <Link to='/login' style={{textDecoration:"none", color:"white"}}><i className="fa-solid fa-basket-shopping"></i> cart</Link>
                            </button>
                          )
                          }
                         
                       
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            ))}
          </div>
        </div>

        <div class="container my-4">
          <div class="row text-center my-2">
            <div class="col-12 ">
              <a href="#" class="btn btn-success btn-lg catb border-success my-3" role='button'>
                <i class="fa-solid fa-eye"></i>
                <span class="ms-2">Show more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid" style={{ backgroundColor: "#eee" }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1 className='text-center my-5 text-success'>Collected New Items</h1>
              <Slider {...settings} interval={2000}>
                {features.map((data) => (
                  <div className="card text-center card-bord" key={data.product_id}>
                    <div className="feat">
                      <div className="featureCard text-light px-2 my-1 ms-1 text-center" style={{ width: "75px" }}>feature</div>
                      <div className="d-flex">
                        <div className="offer text-light ms-1 text-center" style={{ width: "75px" }}>&#x20B9; 30 Off</div>
                        <i className="fa-solid fa-heart heart heart-img" onClick={() => addTowish(data.product_id)} style={{ marginLeft: "60px", fontSize: "20px" }}></i>
                      </div>
                    </div>
                    <div className="team-area">
                      <div className="single-team">
                        <div className="img-container" style={{ marginLeft: "20px" }} >
                          <img src={data.product_image} className="img-fluid rounded-start border-end iimg card-img-top caImg mx-2" alt="..." />
                          <div className="img-overlay d-flex">
                            <a className="btn btn-success m-2" href="#" role="button"><i className="fa-solid fa-shuffle"></i></a>
                            <a className="btn btn-success" href="#" role="button"><i className="fa-solid fa-eye"></i></a>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div class="card-body text-center">
                      <h5 class="card-title" style={{ height: "40px" }} >{data.english_name}</h5>
                      <p className="card-text text-primary fw-bold">PV: {data.point_value}</p>
                      <p>
                        <strong className="card-text">MRP: <strike className="text-danger">{data.mrp_price}</strike> <span className="text-success">{data.sale_price}</span></strong>
                        <span className="text-success">/only</span>
                      </p>
                      {token ? (<button onClick={() => addToCart(data.product_id)} className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>
                        <i className="fa-solid fa-basket-shopping"></i>  cart
                      </button>):(
                        <Link to='/login'>
                        <button className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>
                        <i className="fa-solid fa-basket-shopping"></i> cart
                      </button>
                      </Link>
                      )}
                      
                    </div>
                  </div>
                ))}

              </Slider>
            </div>
          </div>
          <div class="container my-4">
            <div class="row text-center my-2">
              <div class="col-12 ">
                <a href="#" class="btn btn-success btn-lg catb border-success my-3" role='button'>
                  <i class="fa-solid fa-eye"></i>
                  <span class="ms-2">Show more</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*shop by brands start */}
        <div className="container my-5 mt-5">
          <h1 className='text-center my-5 text-success'>Shop By Brands</h1>


          <Slider {...settings} interval={2000}>
            {brand.map((data) => (
              <div className="contert mt-4" key={data.brand_id}>
                <div className="spinner-box">
                  <div className="spinner-content">
                    <img src={data.brand_banner} alt="..." />
                    <a href=""> <i class="fa-solid fa-link"></i></a>
                  </div>

                </div>
                <h5 className='text-center my-3'>{data.brand_name}</h5>
              </div>
            ))}

          </Slider>
          <div class="container my-4">
            <div class="row text-center my-2">
              <div class="col-12 ">
                <a href="#" class="btn btn-success btn-lg catb border-success my-3" role='button'>
                  <i class="fa-solid fa-eye"></i>
                  <span class="ms-2">View All Brands</span>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/*shop by brands start */}
      </div>

    </>
  );
};

export default Index;

