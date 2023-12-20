import React from 'react'

const Orderlist = () => {
    // Simulate order tracking progress
let currentStage = 1; // Track the current stage of the order

function updateOrderProgress() {
  const progressBar = document.querySelector('.progress-bar');
  const cards = document.querySelectorAll('.card');

  // Increase the current stage
  currentStage = (currentStage % 4) + 1;

  // Update progress bar
  const percentage = currentStage * 25;
  progressBar.style.width = percentage + '%';
  progressBar.setAttribute('aria-valuenow', percentage);

  // Update status cards
  cards.forEach((card, index) => {
    if (index + 1 === currentStage) {
      card.classList.add('active');
    } else {
      card.classList.remove('active');
    }
  });
}

// Simulate progress every 2 seconds (for demonstration purposes)
setInterval(updateOrderProgress, 2000);
    return (
        <>
            <div className="container-fluid my-5" style={{ backgroundColor: "#eee" }}>
                <div className=" shop text-white pt-5 py-5">

                    <h1 className='mt-5' style={{ paddingTop: "60px" }}>ORDER HISTORY</h1>
                    <h5 className='text-center mt-3'><a href='/' style={{ textDecoration: "none", color: "white" }}><i class="fa-solid fa-house"></i> Home</a>/ View Order</h5>
                </div>
                <div className="container-fluid my-3 py-3 border" style={{ backgroundColor: "whitesmoke", borderRadius: "10px" }}>
                    <div class="container-fluid">
                        <div class="row">
                            <div class="col-12">
                                <button type="button" class="btn btn-lg btn-outline-success shadow float-end">Offline Order History</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container my-3 py-3 border" style={{ backgroundColor: "whitesmoke", borderRadius: "10px" }}>
                    <h6>Order</h6>
                    <div class="container mt-5">
                        <h2>Order Tracking</h2>

                        <div>
                            <div className="progress mt-4">
                                <div className="progress-bar bg-success" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>Order Placed</div>
                                <div className="progress-bar bg-warning" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>Processing</div>
                                <div className="progress-bar bg-info" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>Shipped</div>
                                <div className="progress-bar bg-secondary" role="progressbar" style={{ width: '25%' }} aria-valuenow={25} aria-valuemin={0} aria-valuemax={100}>Delivered</div>
                            </div>
                            <div className="row mt-4">
                                <div className="col-md-3">
                                    <div className="card" style={{marginBottom:"20px"}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Order Placed</h5>
                                            <p className="card-text">Your order has been placed.</p>
                                       
                                       <br /> </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card" style={{marginBottom:"20px"}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Processing</h5>
                                            <p className="card-text">We are processing your order.</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card" style={{marginBottom:"20px"}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Shipped</h5>
                                            <p className="card-text">Your order has been shipped.</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-3">
                                    <div className="card" style={{marginBottom:"20px"}}>
                                        <div className="card-body">
                                            <h5 className="card-title">Delivered</h5>
                                            <p className="card-text">Your order has been delivered.</p>
                                            <br />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
                </div>
            </>
            )
}

            export default Orderlist
