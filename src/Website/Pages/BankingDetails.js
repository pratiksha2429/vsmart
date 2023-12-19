import React from 'react'

const BankingDetails = () => {
    return (
        <>
            <div className="container-fluid">
                <div className=" shop text-white pt-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>BANKING DETAILS</h1>
                    <h5 className='text-center mt-3'><a href="" style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ Banking details</h5>
                </div>
                <div className="contaienr">
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 my-5">
                            <h1 className='text-center'>Banking Details</h1>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 col-md-12 col-sm-12 text-center">
                            <img src="https://vsmart.ajspire.com/images/icici.png" alt="..." />
                        </div>
                    </div>

                </div>
                <div className="container">
                    <div class="table-responsive my-5  table-bordered success">
                        <table class="table text-center">
                            <thead >
                                <tr className=''>
                                    <th colSpan={4} className='bg-success text-light'>Bank Name</th>
                                    <th colSpan={8} className='bg-success text-light'>ICICI Bank</th>

                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={4}>Name:</td>
                                    <td colSpan={8}>Vishwakarma Super Mart Private Limited</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>A/c No :</td>
                                    <td colSpan={8}>646005004085</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>Branch :</td>
                                    <td colSpan={8}>Raviwar Peth Satara</td>
                                </tr>
                                <tr>
                                    <td colSpan={4}>IFSC Code :</td>
                                    <td colSpan={8}>ICIC0006460</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default BankingDetails;
