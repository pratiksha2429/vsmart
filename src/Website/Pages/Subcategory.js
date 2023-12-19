import React, { useEffect, useState } from 'react';
import { Carousel } from 'react-bootstrap';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Authuser from '../Authentication/Authuser';
import { Link, useParams } from 'react-router-dom';


const Subcategory = () => {


    let { cat_id, sub_id } = useParams();
    const { http, user, token } = Authuser();
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

    //click on category this show or unshow
    const [activeIndex, setActiveIndex] = useState(null);
    const handleItemClick = (index) => {
        if (index === activeIndex) {
            setActiveIndex(null);
        }
        else {
            setActiveIndex(index);
        }
    };


    //product
    let [Category, setCategory] = useState([]);
    //console.log("hello", Category);

    //category name for banners
    const [Category_, setCategory_] = useState([]);
    // console.log("cat", Category_);

    //subcategory name for banners
    const [subcategory_, subCategory_] = useState([]);
    console.log("sub", subcategory_);

    //scroll menu
    const [cat, setCate] = useState([]);
    //console.log(cat);

    const [Brand, setBrand] = useState([]);
    // console.log("bb",Brand);

    //slider after banner
    const [Sub, setSub] = useState([]);
    //console.log(Sub);

    //count for brand & category wise
    const [Count, setCount] = useState([]);
    //console.log("c",Count);

    const [Count1, setCount1] = useState([]);
    //console.log("c1",Count1);

    const getCategoryData = () => {
        try {
            http.get(`/product-shop/${cat_id}/${sub_id}`).
                then((res) => {
                    console.log(res.data);

                    setCategory(res.data.category.data);
                    setCategory_(res.data.category_);
                    subCategory_(res.data.subcategory_);
                    setCate(res.data.cat);
                    setBrand(res.data.brand);
                    setSub(res.data.sub);
                    setCount(res.data.count['']);
                    setCount1(res.data.count1['']);
                }).catch((e) => {
                    console.log(e);
                });
        } catch (error) {

        }

    }
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
    useEffect(() => {
        getCategoryData();

    }, [cat_id, sub_id])

    //pagination
    const [currentPage, setCurrentPage] = useState(1);
    const recordsPerPage = 6;
    const lastIndex = currentPage * recordsPerPage;
    const firstIndex = lastIndex - recordsPerPage;
    const records = Category.slice(firstIndex, lastIndex);
    const npage = Math.ceil(Category.length / recordsPerPage);
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

            <div className="container-fluid my-5" >
                <div style={{ backgroundColor: "#eee", backgroundImage: `url(${Category_.category_banner})`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat", height: "500px", position: "relative" }}>
                    <div className="ice text-dark pt-5" style={{ position: "absolute", top: "0", left: "0", width: "100%" }}>
                        <h1 className='mt-5 text-center' style={{ paddingTop: "30px" }}>{Category_.category_name}</h1>
                        <h5 className='text-center mt-3'><a href="#" style={{ textDecoration: "none", color: "black" }}><i class="fa-solid fa-house"></i> Home</a>/ {subcategory_.subcategory_name}</h5>
                    </div>
                </div>


                <div className="container">
                    {/*/ slick slider*/}
                    <div className="container my-5" >


                        <Slider {...settings} interval={2000}>
                            {Sub.map((subslider) => (
                                <div style={{ width: "100%" }} className='Myimg' key={subslider.subcategory_image}>
                                    <img src={subslider.subcategory_image} style={{ height: "140px", width: "100%" }} alt={subslider.Iceream} />
                                    <div className="cont">
                                        <h4 className='text-center'>{subslider.subcategory_name}<br /> </h4>
                                    </div>
                                </div>
                            ))}

                        </Slider>
                    </div>
                    {/*// slick slider*/}
                </div>
                <div className="row my-5">
                    <div className="col-lg-3 col-md-12 col-sm-12">
                        <div className="row text-center">
                            <div className="col-lg-12 ">
                                { /* <div className="shopfilter shadow px-2" style={{ backgroundColor: "white" }}>
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
                                </div>*/}
                                <div className="shopCategory shadow bg-light ">
                                    <h5 className='py-3'>FILTER BY CATEGORY</h5>
                                    <hr className='py-2' />
                                    <div className="Shcat" style={{ width: "100%", height: "400px", overflow: "scroll" }}>
                                        <form action="" className='ms-5'>

                                            {cat.map((cat, index) => (
                                                <ul className='ms-5' type='none' >
                                                    {/* <td> <input type="checkbox" id="vehicle1" name="vehicle1" className='me-3' /></td> */}
                                                    <li><label htmlFor="vehicle1" key={index} className={activeIndex === index ? 'open' : ''} >
                                                        <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: "none" }}>{cat.category_name} / {Count.filter((count) => count.product_category_id == cat.category_id).map((count) => (
                                                            (count.cat_count)
                                                        ))}</a></label>
                                                        <ul type='none'>
                                                            <li style={{ display: activeIndex === index ? 'block' : 'none', }}>
                                                                {/* submenu item here */}
                                                                {Sub.filter((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (
                                                                    <li className='text-dark'><Link to={`/product-shop/${cat.category_id}/${sub.subcategory_id}`} style={{ textDecoration: "none" }}>{sub.subcategory_name}</Link> </li>
                                                                ))}

                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            ))}
                                        </form>
                                    </div>

                                </div>
                                <div className="shopBrand shadow bg-light mt-4">
                                    <h5 className='py-3'>FILTER BY BRAND</h5>
                                    <hr className='py-2' />
                                    <div className="ShBr" style={{ width: "100%", height: "400px", overflow: "scroll" }}>
                                        <form action="" className='ms-5'>
                                            {Brand.map((brand, index) => (
                                                <ul className='ms-5 text-center' type='none' >
                                                    {/* <li> <input type="checkbox" id="vehicle1" name="vehicle1" className='me-3' /></li> */}
                                                    <li><label htmlFor="vehicle1" key={index} className={activeIndex === index ? 'open' : ''} > <a onClick={() => handleItemClick(index)} href='#' className='font-weight-bold text-dark' style={{ textDecoration: "none" }}>{brand.brand_name} / {Count1.filter((count1) => count1.brand_id == brand.brand_id).map((count1) => (
                                                        (count1.brand_count)
                                                    ))}</a></label>

                                                    </li>
                                                </ul>
                                                //      <ul style={{ display: activeIndex === index ? 'block' : 'none', justifyContent:"center" }} type='none' >
                                                //      {/* submenu item here */}
                                                //      {Sub.filter((sub) => sub.subcategory_category_id === cat.category_id).map((sub) => (
                                                //          <li className='text-dark'><Link to={`/product-shop/${cat.category_id}/${sub.subcategory_id}`} style={{ textDecoration: "none" }}>{sub.subcategory_name}</Link> <br /></li>
                                                //      ))}

                                                //  </ul>
                                            ))}
                                        </form>
                                    </div>


                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-9 col-md-12 col-sm-12">
                        <div className="container-fluid">
                            <div className="container">
                                <div className="row bg-light shadow">

                                    {records.map((data) => (
                                        <div className="col-lg-4 col-md-6 col-sm-12 ">
                                            <div className="card text-center card-bord mx-1 my-2 shadow" key={data.product_id}>
                                                <div className="feat">
                                                    <div className="featureCard text-light px-2 my-1 ms-1 text-center" style={{ width: "75px" }}>feature</div>
                                                    <div className="d-flex">
                                                        <div className="offer text-light ms-1 text-center" style={{ width: "75px" }}>&#x20B9; 30 Off</div>
                                                        <i className="fa-solid fa-heart heart heart-img" onClick={() => addTowish(data.product_id)} style={{ marginLeft: "130px", fontSize: "20px" }}></i>
                                                    </div>
                                                </div>
                                                <div className="team-area">
                                                    <div className="single-team">
                                                        <div className="img-container" style={{ marginLeft: "20px" }}  >
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
                                                    {token ? (
                                                        <button onClick={() => addToCart(data.product_id)} className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>

                                                            <i className="fa-solid fa-basket-shopping"></i> cart
                                                        </button>
                                                    ) : (
                                                        <Link to='/login'>
                                                            <button className="col-lg-12 btn my-3" style={{ backgroundColor: "green", color: "white" }}>

                                                                <i className="fa-solid fa-basket-shopping"></i> cart
                                                            </button>
                                                        </Link>
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

export default Subcategory;
