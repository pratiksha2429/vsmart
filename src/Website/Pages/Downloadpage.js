import React from 'react'

const Downloadpage = () => {
    return (
        <>
            <div className="container-fluid">
                <div className=" shop text-white pt-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>DOWNLOAD</h1>
                    <h5 className='text-center mt-3'><a href="" style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ Download</h5>
                </div>
                <div className="container">
                    <div class="table-responsive my-5  table-bordered success">
                        <table class="table text-center">
                            <thead >
                                <tr className=''>
                                    <th colSpan={2} className='bg-success text-light'>Sr. No</th>
                                    <th colSpan={4} className='bg-success text-light'>File Name</th>
                                    <th colSpan={6} className='bg-success text-light'>Link</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td colSpan={2}>1</td>
                                    <td colSpan={4}>Business Plan</td>
                                    <td colSpan={6}><button className='btn btn-lg bg-danger btn-outline-success  h-50' ><a href="" style={{ textDecoration: "none" }} className='text-light'> <i class="fa-solid fa-file"></i> DOWNLOAD PDF HERE</a></button></td>
                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Downloadpage;
