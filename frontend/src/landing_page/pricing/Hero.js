import React from "react";

function Hero() {
  return (
    <div className="conatiner">
      <div className="row text-center mt-5 border-bottom">
        <h2>Charges</h2>
        <p className="text-muted mt-3 fs-4 mb-5">List of all charges and taxes</p>
      </div>
      <div className="row text-center">
        <div className="col-4">
            <img src="media\images\pricingEquity.svg" style={{height:"40%" , marginTop:"60px"}}  ></img>
          <h3 >Free equity delivery</h3>
          <p className="text-muted mt-4">
            All equity delivery investments (NSE, BSE),<br></br> are absolutely
            free — ₹ 0 brokerage.
          </p> 
        </div> 
        <div className="col-4"> 
        <img src="media\images\other-trades.svg" style={{height:"40%" , marginTop:"60px"}}  ></img>
          <h3>Intraday and F&O trades</h3>
          <p className="text-muted mt-4">
            Flat ₹ 20 or 0.03% (whichever is lower) per<br></br> executed order
            on intraday trades across<br></br> equity, currency, and commodity
            trades. Flat<br></br> ₹20 on all option trades.
          </p>
        </div>
        <div className="col-4">
        <img src="media\images\pricingEquity.svg" style={{height:"40%" , marginTop:"60px"}}  ></img>
          <h3>Free direct MF</h3>
          <p className="text-muted mt-4" mt-4>
            All direct mutual fund investments are<br></br> absolutely free — ₹
            0 commissions & DP <br></br>charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
