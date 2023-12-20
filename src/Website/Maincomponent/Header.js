import React from 'react';
import { useState } from 'react';
import Authuser from '../Authentication/Authuser';
import { useEffect } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { Link } from 'react-router-dom';
import Cart from '../Pages/Cart';
const Header = (props) => {
  //offcanvas start

  // offcanvas end
  const Mynav = {
    color: '#fff',
    backgroundColor: 'green',
    paddingTop: '10px',
    paddingBottom: '10px',
  };
  const { http, user, token, logout } = Authuser();
  const [Wishlist, setWishlist] = useState([]);
  console.log(Wishlist);
  const [wish, setWish] = useState([]);
   
  const [searchQuery, setSearchQuery] = useState('');
  const [searchParams, setSearchParams] = useState();

  const handleInputChnge = (e) => {
    setSearchQuery(e.target.value);
  }


  const [Cart, setCart] = useState([]);
  const [Cartcount, setCartcount] = useState([]);


  const getCartItem = () => {
    http.get(`/get-cart-list`)
      .then((res) => {
        setCart(res.data.cart);
        setCartcount(res.data.cart.length);
        // console.log(res.data.cart.length);
      }).catch((e) => {
        console.log(e);
      });
  }
  const getwItem = () => {
    http.get(`/get-wishlist`)
      .then((res) => {
        // console.log(res.data);
        setWishlist(res.data.wishlist);
        setWish(res.data.wishlist.length);
      }).catch((e) => {
        console.log(e);
      });
  }
  //add to wishlist
  // const addTowish = (product_id) => {
  //   console.log(product_id);
  //   http.get(`/add-to-wishlist/${product_id}`)
  //     .then((res) => {
  //       console.log(res.data);
  //       alert(res.data.msg);
  //     }).catch((e) => {
  //       console.log(e);
  //     });

  // }
  //add to wishlist end

  const getcatagory = () => {
    http.get("/categories")
      .then((res) => {
        setcatg(res.data.categories);
        res.data.categories.forEach((categories) => {
          getsubcata(categories.category_id);
        });
      }).catch((e) => {
        console.log(e);
      });

  }





  const [category, setcatg] = useState([]);
  const [SubCategory, setsubcategory] = useState([]);

  const getcategory = () => {
    http.get(`/categories`).then((res) => {
      console.log(res.data);
      setcatg(res.data.categories);
      res.data.categories.forEach((categories) => {
        getsubcata(categories.category_id);
      })
    }).catch((e) => {
      console.log(e);
    });
  }
  const getsubcata = ((catagoryid) => {
    http.get(`/subcategories/${catagoryid}`)
      .then((res) => {
        const newsubcategory = res.data.subcategories;
        setsubcategory((previssubcat) => {
          const filtersubcategory = newsubcategory.filter((newsubcat) => !previssubcat.some((previs) => previs.subcategory_id === newsubcat.subcategory_id));
          return [...previssubcat, ...filtersubcategory];
        });
      }).catch((e) => {
        console.log(e);
      });
  })

  const [brand, setbrand] = useState([]);
  const getbrands = () => {
    http.get(`/brands`).then((res) => {
      console.log(res.data);
      setbrand(res.data.brands);
    }).catch((e) => {
      console.log(e);
    });
  }
  useEffect(() => {
    getcategory();
    getbrands();

  }, []);

  useEffect(() => {
    getCartItem();
  }, [token]);
  useEffect(() =>{
    getwItem();
},[token, wish])

  return (
    <>
      <div className="container-fluid" style={Mynav}>
        <div className="row">
          <div className="col-lg-9 col-md-12 col-sm-12">
            <h5 className="ms-3 ms-md-5">Welcome to VS Mart, Your Dream Online Store!</h5>
          </div>
          <div className="col-lg-3 col-md-12 col-sm-12">
            <h5 className="ms-3 ms-md-5">
              <a href="/contact" className="text-white" style={{ textDecoration: 'none' }}>
                Contact Us
              </a>
            </h5>
          </div>
        </div>
      </div>
      <div className='container-fluid' style={{ backgroundColor: "#eee" }}>
        <div className="container border-bottom" >
          <div className="row  ">
            <div className="col-lg-3 col-md-3 col-sm-12">
              <img src="https://vsmart.ajspire.com/images/logo1.png" alt="VS Mart Logo" style={{ marginLeft: '40px' }} />
            </div>
            <div className="col-lg-3 col-md-3 col-sm-6">
              <div className="header-search border border-success mt-3 mt-md-5" style={{ width: '100%', maxWidth: '400px', background: '#eee' }}>
                <form action="#" method="post" className="d-flex">
                  <input type="text" name="Search" className="border-0" value={searchQuery} onChange={handleInputChnge} style={{ width: '100%', background: '#eee' }} placeholder="Search ..." required />

                  <button type="submit" className="btn" aria-label="Search">
                    <Link
                      to={`/search?query=${encodeURIComponent(searchQuery)}`}
                      onChange={() => setSearchParams({ query: searchQuery })}
                    >
                      <i className="fa fa-search text-dark" style={{ fontSize: '20px' }} aria-hidden="true"></i>
                    </Link>
                  </button>

                </form>
              </div>
            </div>
            <div className="col-lg-6 col-md-8 col-sm-12 d-flex ddiv1">
              <div className="ddiv">
                <button className="btn">
                  {token ? (
                    <Link to='/wallet' className='text-dark'>
                      <abbr title="Wallet list">  <i className="fa-solid fa-wallet"></i></abbr>
                    </Link>
                  ) : (
                    <Link to='/login' className='text-dark'>
                      <abbr title="Wallet list">  <i className="fa-solid fa-wallet"></i></abbr>
                    </Link>
                  )}
                </button>
              </div>
              <div className="ddiv">
                {token ? (
                  <Link to='/compaire' className="position-relative text-decoration-none"> <button className="btn">
                    <abbr title="Compare List"><i className="fa-solid fa-shuffle mx-1"></i> </abbr>
                  </button>
                    <span className="position-absolute  end-0 top-0 translate-middle badge rounded-pill bg-success">
                      0 
                    </span></Link>) : (
                  <Link to='/login' className="position-relative"> <button className="btn">
                    <abbr title="Compare List"><i className="fa-solid fa-shuffle mx-1"></i> </abbr>
                  </button>
                    <span className="position-absolute  end-0 top-0 translate-middle badge rounded-pill bg-success">
                      0
                    </span></Link>
                )}



              </div>
              <div className="ddiv">
                {token ? (
                  <Link to='/wishlist' className="position-relative">
                    <button className="btn" >
                      <abbr title="Wish List"> <i className="fa-solid fa-heart"></i></abbr>
                    </button>
                    <span className="position-absolute  end-0 top-0 translate-middle badge rounded-pill bg-success">
                      {wish}
                    </span>
                  </Link>
                ) : (
                  <Link to='/login' className="position-relative">
                    <button className="btn">
                      <abbr title="Wish List"> <i className="fa-solid fa-heart"></i></abbr>
                    </button>
                    <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                      0
                    </span>
                  </Link>
                )}
              </div>


              <div className="ddiv text-center">
                {token ? (
                  <Link className="position-relative">
                    <button className='btn' data-bs-toggle="offcanvas" data-bs-target="#demo">
                      <abbr title="Cart List"> <i className="fa-solid fa-basket-shopping"></i> </abbr>
                      <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                        {Cartcount}
                      </span>
                    </button>
                  </Link>
                ) : (
                  <Link to='/login' className="position-relative">
                    <button className='btn' >
                      <abbr title="Cart List"> <i className="fa-solid fa-basket-shopping text-center"></i> </abbr>
                      <span className="position-absolute end-0 top-0 translate-middle badge rounded-pill bg-success">
                        0
                      </span>
                    </button>
                  </Link>
                )}

              </div>

              {/*offcanvas toggle btn in bootstrap */}
              <div className="offcanvas offcanvas-end" id="demo">
                <div className="offcanvas-header border-bottom ms-5">
                  <h4 className="offcanvas-title text-success ms-5"><i className="fa-solid fa-basket-shopping "></i> Total item {Cartcount}</h4>
                  <button type="button" className="btn-close" data-bs-dismiss="offcanvas" />
                </div>
                <div className="offcanvas-body">
                  {/* <h5 className='text-center'>No product added in cart.</h5> */}
                  <div className="container mt-5">


                    {Cart.map((item) => (
                      <div className="row my-2">
                        <div className="col-lg-12 col-md-12 col-sm-12">
                          <div className="card">
                            <div className="row">
                              <div className="col-lg-4 pt-3">
                                <div className="team-area">
                                  <div className="single-team">
                                    <div className="img-container">

                                      <img src={'https://vsmart.ajspire.com/uploads/product_image/' + item.product_image} alt="product" className="img-fluid" style={{ height: "150px", width: "120px" }} />
                                      <div className="img-overlay">
                                        <i class="fa-solid fa-trash-can fa-beat"></i>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-lg-8">
                                <div className="card-body">
                                  <h6 className="card-title">{item.english_name}</h6>
                                  <p className="card-text">Unit Price: {item.sale_price}</p>
                                  <p className="card-text text-primary">PV Price: {item.point_value}</p>
                                  <div className="d-flex">
                                    <input type="number" className='mx-2' placeholder='1' style={{ width: "60px" }} />
                                    <button >+</button>
                                    <h5 className='text-success ms-5'>{item.sale_price * item.cart_product_qty}</h5>
                                  </div>

                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  {/* <div className="container mt-5">
                  <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                      <div className="card">
                        <div className="row">
                          <div className="col-lg-4 pt-3">
                            <div className="team-area">
                              <div className="single-team">
                                <div className="img-container">

                                  <img src="https://via.placeholder.com/150" alt="Image" className="img-fluid" style={{ height: "150px", width: "150px" }} />
                                  <div className="img-overlay">
                                    <i class="fa-solid fa-trash-can fa-beat"></i>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-lg-8">
                            <div className="card-body">
                              <h6 className="card-title">Anjali Lemon Squeezer Large</h6>
                              <p className="card-text">Unit Price: 80</p>
                              <p className="card-text text-primary">PV Price: 75</p>
                              <div className="d-flex">
                                <input type="number" className='mx-2' placeholder='1' style={{ width: "60px" }} />
                                <button >+</button>
                                <h5 className='text-success ms-5'>80</h5>
                              </div>

                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div> */}
                </div>
                <div className="row">
                  <div className="offcanvas-footer col-lg-12 text-center" >
                    <Link to='/cart'> <button className="btn btn-success btn-lg text-center  ms-2"   >View To Cart</button></Link>




                  </div>
                </div>


              </div>
              <div className="ddivn mx-2" style={{ marginTop: '45px' }}>
                <p>TOTAL PRICE</p>
                <p>0</p>
              </div>
              <div className="ddiv5">
                <button className="btn">
                  <img src="https://vsmart.ajspire.com/images/ee.png" alt="Shopping Cart" />
                </button>
              </div>
              <div className="mt-5">
                {/* <p className="mx-1 border-none"> <Link to='/login' style={{ textDecoration: 'none', color:"black" }}> Login </Link></p> */}
                <nav class="navbar" style={{ backgroundColor: "#eee" }}>
                  {token ? (
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <button className='btn btn-lg-primary'>
                          <Link class="nav-link dropdown-toggle text-center" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            {user && user.name}
                          </Link>
                        </button>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <a class="dropdown-item" href="#">My Account</a>
                          <Link class="dropdown-item" to='/orderlist'>My order</Link>
                          <a class="dropdown-item" onClick={logout} href="#">Logout</a>
                        </div>
                      </li>
                    </ul>
                  ) : (
                    <ul class="navbar-nav">
                      <li class="nav-item dropdown">
                        <Link class="nav-link dropdown-toggle text-center" to='/login' id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                          login
                        </Link>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                          <Link class="dropdown-item" to='/login'>My Account</Link>
                          <Link class="dropdown-item" to='/login'>My Order</Link>
                          <Link class="dropdown-item" to='/login'>Sign In</Link>
                        </div>
                      </li>
                    </ul>)
                  }
                </nav>


              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <nav className="navbar navbar-expand-lg">
              <div className="container-fluid">
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                  <ul className="navbar-nav">
                    <li className="nav-item h5">
                      <Link className="nav-link active" to='/'>
                        Home
                      </Link>
                    </li>

                    <li class="nav-item dropdown h5">
                      <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Category
                      </a>
                      <div class="dropdown-menu h5" aria-labelledby="navbarDropdown">
                        <div className="d-flex back-nav">
                          <div class="row text-center mt-3" style={{ height: "300px", width: "800px", whiteSpace: "nowrap", overflow: "scroll" }}>
                            {category.slice(0, 12).map((data) => (
                              <div class="col-lg-3 col-md-6 col-sm-12" key={data.category_id} style={{ display: "inline-block", whiteSpace: "normal" }}>
                                <ul style={{ listStyleType: "none", }} className="mx-3 text-center">
                                  <li style={{ display: "inline-block", marginRight: "20px", height: "50px", width: "100px" }}>
                                    <a class="dropdown-item text-center" href="#">{data.category_name}</a>
                                  </li>
                                  {SubCategory.filter((subcategory) => subcategory.subcategory_category_id === data.category_id).slice(0, 5).map((subcategory) => (
                                    <li style={{ display: "list-item", textAlign: "center", justifyContent: "center", height: "50px", width: "100px" }} key={subcategory.subcategory_id} className='text-center'>
                                      <Link className="text-center px-4" to={`/product-shop/${data.category_id}/${subcategory.subcategory_id}`}>{subcategory.subcategory_name}</Link>
                                    </li>
                                  ))}



                                </ul>
                              </div>
                            ))}
                            <div class="container my-2">
                              <div class="row text-center my-2">
                                <div class="col-12 ">
                                  <a href="#" class="btn btn-success btn-lg catb border-success my-3" role='button'>
                                    <i class="fa-solid fa-eye"></i>
                                    <span class="ms-2"><a to='/product-shop/:cid/:scid' style={{ textDecoration: "none" }}>View All Categories</a></span>
                                  </a>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                    </li>


                    <li className="nav-item dropdown h5">
                      <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Brand
                      </a>
                      <div class="dropdown-menu h5" aria-labelledby="navbarDropdown">
                        <div className="d-flex back-nav">
                          <div class="row  mt-3" style={{ height: "100%", width: "900px", whiteSpace: "nowrap", overflow: "auto" }}>
                            {brand.slice(0, 16).map((data) => (
                              <div class="col-lg-4 col-md-6 col-sm-12 mx-2" style={{ display: "inline-block", whiteSpace: "normal", height: "40px", width: "400px" }} key={data.brand_id}>
                                <ul style={{ listStyleType: "none" }} className="mx-3 text-center">
                                  <li style={{ display: "inline-block", }}>
                                    <Link class="dropdown-item text-center text-dark h6" to={`/product-shop/${data.brand_id}`}>{data.brand_name}</Link>
                                  </li>

                                </ul>
                              </div>
                            ))}
                            <div class="container my-2">
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
                        </div>
                      </div>

                    </li>

                    <li className="nav-item h5">
                      <Link className="nav-link" to='/shop'>
                        Shop
                      </Link>
                    </li>
                    <li className="nav-item h5">
                      <Link className="nav-link" to='/about'>
                        About
                      </Link>
                    </li>
                    <li className="nav-item h5">
                      <Link className="nav-link" to='/bankDetail'>
                        Bank Details
                      </Link>
                    </li>
                    <li className="nav-item h5">
                      <Link className="nav-link" to='/Download'>
                        Download
                      </Link>
                    </li>
                    <li className="nav-item h5">
                      <a className="nav-link" href="#">
                        Legal
                      </a>
                    </li>
                    <li className="nav-item h5">
                      <Link className="nav-link" to='/blog'>
                        Blogs
                      </Link>
                    </li>
                  </ul>
                  <div className="navbar-collapse collapse justify-content-between">
                    <ul className="navbar-nav">
                      {/* ... Your navigation items ... */}
                    </ul>
                    <div className="navbar-nav">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <i className="fa-solid fa-mobile-screen-button mt-1 ms-2" style={{ fontSize: '30px', color: 'green' }}></i>
                        </div>
                        <div className="col-lg-9 text-center">
                          <p>Call Us</p>
                          <a href="tel:(+91)8446092500" style={{ textDecoration: 'none' }}><b>(+91) 8446092500</b></a>
                        </div>
                      </div>
                    </div>
                    <div className="navbar-nav">
                      <div className="row">
                        <div className="col-lg-3 col-md-6 col-sm-6">
                          <i className="fa-solid fa-at mt-1 ms-2" style={{ fontSize: '30px', color: 'green' }}></i>
                        </div>
                        <div className="col-lg-9 text-center">
                          <p>Email Us</p>
                          <a href="mailto:vsmart0932@gmail.com" style={{ textDecoration: 'none' }}><b>vsmart0932@gmail.com</b></a>
                        </div>
                      </div>
                    </div>
                  </div>

                </div>
              </div>
            </nav>
          </div>
        </div>

      </div>

    </>
  );
}

export default Header;
