import React from 'react'

const About = () => {
    let mycard = [
        {
            title: "hii",

        },
        {
            title: "hii",
        },
        {
            title: "hii",
        },
        {
            title: "hii",
        },

    ]



    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: "#eee" }}>
                <div className=" shop text-white pt-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>ABOUT OUR COMPANY</h1>
                    <h5 className='text-center mt-3'><a href="#" style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ About</h5>
                </div>
                <div className="container">
                    <div className="row  shadow py-5 px-5 my-5">
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <h1>Vishwakarma Super Mart Private Limited</h1>
                            <p>is a direct selling company that deals with the distribution of a wide range of high quality, lifestyle products for day to day life. Our aim is to deliver the best products directly to our consumers, who form the core of the company. Our networks of registered distributors are trained leaders and representatives who ensure that consumers get the best products, with additional free business opportunity benefits. The profitable opportunities offered have influenced many customers to purchase products from non-retail environments, owing to the expansion of direct selling across the country.</p>
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <img src="https://vsmart.ajspire.com/images/about1.png" alt="..." style={{ height: "300px", width: "300px" }} />
                        </div>
                        <div className="col-lg-3 col-md-12 col-sm-12">
                            <img src="https://vsmart.ajspire.com/images/about2.png" alt="..." style={{ height: "300px", width: "300px" }} />
                        </div>
                    </div>

                </div>
                <hr />
            </div>
            <div className="container">
                <div className="row shadow py-5 px-5 my-5">
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1 className='text-warning mb-3'>Our Vision</h1>
                        <p>Vishwakarama Super Mart Private Limited to strive hard continuously and constantly
                            to make every individual customer financially self-reliant, economically and socially
                            strong through the self-help team concept.</p>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <h1 className='text-warning mb-3'>Our Mission</h1>
                        <p>Vishwakarma Super Mart Private Limited has vision to create wealth that provides personal,
                            professional , social, financial and spiritual growth to everyone. We aim to provide the highest level
                            of quality and service possible with respect to the products and services that we offer and strive to create
                            an environemt and culture that lends itself to our distributor's success.</p>
                    </div>
                </div>
            </div>
            <hr />
            <div className="container">
                <h1>Why People Choose Their Daily Organic Life With Us</h1>
                <div className="row shadow py-5 px-5 my-5">




                    {mycard.map((data) => (
                        <div className="col-lg-6 col-md-12 col-sm-12">
                            <div className="card mb-3" style={{ maxWidth: 540 }}>
                                <div className="row g-0">
                                    <div className="col-md-4 text-center mt-5">
                                        <i class="fa-solid fa-parachute-box mt-4" ></i>
                                    </div>
                                    <div className="col-md-8">
                                        <div className="card-body">
                                            <h5 className="card-title">{data.title}</h5>
                                            <p className="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
                                            <p className="card-text"><small className="text-muted">Last updated 3 mins ago</small></p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}






                    {/* <div className="about-ship d-flex">
                            <div className="about-square">
                                <div className="about-round">
                               
                                </div>
                            </div>
                            <div className="about-info">
                                <h4> Free Shipping</h4>
                                <p>VS Mart, gives product delivery for all customers free that is plus point of order.</p>
                            </div>

                        </div>
                        <div className="about-ship d-flex">
                            <div className="about-square">
                                <div className="about-round">
                                <i class="fa-solid fa-truck-fast"></i>
                                </div>
                            </div>
                            <div className="about-info">
                                <h4>Gift Cards</h4>
                                <p>VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card. Gifts gives to customers reward points</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12">
                        <div className="about-ship d-flex">
                            <div className="about-square">
                                <div className="about-round">
                                <i class="fa-solid fa-right-left"></i>
                                </div>
                            </div>
                            <div className="about-info">


                                <h4>Reward Points</h4>
                                <p>VS Mart, Gives every customer reward points or saving as theire customer type. It's make to happy customer and continue to joined together as like Mart and Card.</p>
                            </div>
                        </div>
                        <div className="about-ship d-flex">
                            <div className="about-square">
                                <div className="about-round">
                                <i class="fa-solid fa-headset"></i>
                                </div>
                            </div>
                            <div className="about-info">
                                <h4>Easy Return</h4>
                                <p>One major factor that dictates where online shoppers make purchases is whether you have a clear and generous eCommerce returns policy. Studies have shown that solid return policies increase sales without increasing the volume of return.</p>
                            </div>
                        </div> */}
                </div>

            </div>
        </>
    )
}

export default About;
