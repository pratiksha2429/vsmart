import React from 'react'

const CompaireList = () => {
    return (
        <>
            <div className="container-fluid">
                <div className=" shop text-white pt-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>COMPAIRE LIST</h1>
                    {/* <h5 className='text-center mt-3'><a href="" style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ Wishlist</h5> */}
                </div>
                <div className="container">
                    <h1 className='my-4'>No Data Found In Compaire......</h1>
                    <div class="table-responsive my-5  table-bordered success">
                        <table class="table text-center">
                            <thead >
                                <tr className=''>
                                    <th colSpan={2} className='bg-success text-light'>Serial</th>
                                    <th colSpan={2} className='bg-success text-light'>Product</th>
                                    <th colSpan={2} className='bg-success text-light'>Name</th>
                                    <th colSpan={2} className='bg-success text-light'>Price</th>
                                    <th colSpan={2} className='bg-success text-light'>Description</th>
                                    <th colSpan={2} className='bg-success text-light'>Shopping</th>
                                    <th colSpan={2} className='bg-success text-light'>Action</th>
                                </tr>
                            </thead>
                            </table>
                            </div>
                </div>
                <div className="container-fluid mt-5">
                    <div className="compaire text-white mt-5 text-center">
                        <div className="row pt-5">
                            <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
                            <h3>Get 20% Discount For Subscriber</h3>
                            <p>Lorem ipsum dolor consectetur adipisicing accusantium</p>
                            </div>
                            <div className="col-lg-6 col-md-6 col-sm-12 pt-5">
                         <form className=''>
  <div className="input-group mb-3">
    <input type="email" className="form-control" placeholder="Enter your email" aria-label="Enter your email" aria-describedby="subscribeBtn" />
    <button className="btn btn-primary" type="submit" id="subscribeBtn">Subscribe</button>
  </div>
</form>

                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default CompaireList;
