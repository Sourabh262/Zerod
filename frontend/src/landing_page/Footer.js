import React from "react";

function Footer() {
  return (
    <footer  style={{backgroundColor: "rgb(250 , 250 , 250)"}}>
    <div className="container border-top mt-5" >
      <div className="row mt-5">
        <div className="col-4">
          <a class="navbar-brand" href="#">
            <img
              src="media/images/logo.svg"
              style={{ width: "25%" }}
              alt="Logo"
            />
          </a>
          <p className="mt-3">
            {" "}
            <b>
              © 2010 - 2024, Not Zerodha Broking Ltd. <br></br> All rights
              reserved.
            </b>
          </p>
        </div>

        <div className="col-3 " >
          <h3 className="mt-2 " style={{textDecoration:"none"}}>Company</h3>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            About
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Products
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Pricing
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Referral programme
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Careers
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Zerodha.tech
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Press & media
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Zerodha cares (CSR)
          </a>
        </div>

        <div className="col-3">
          <h5 className="mt-3">Support</h5>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Contact
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Support portal
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Z-Connect blog
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            List of charges
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Downloads & resources
          </a>
        </div>
        <div className="col-2">
          <h5 className="mt-3">Account</h5>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Open an account
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            Fund transfer
          </a>
          <br></br>
          <a href="/" className="text-black no-underline hover:text-blue-600" style={{textDecoration:"none"}}>
            60 day challenge
          </a>
        </div>
        <div>
          <p></p>
        </div>
      </div>
    <div className="mt-5 text-muted" style={{fontSize: "14px"}}>
      <p>
        {" "}
        Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI Registration
        no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking
        Ltd. – SEBI Registration no.: IN-DP-431-2019 Registered Address: Zerodha
        Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public
        School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For
        any complaints pertaining to securities broking please write to
        complaints@zerodha.com, for DP related to dp@zerodha.com. Please ensure
        you carefully read the Risk Disclosure Document as prescribed by SEBI |
        ICF{" "}
      </p>

      <p>
        Procedure to file a complaint on SEBI SCORES: Register on SCORES portal.
        Mandatory details for filing complaints on SCORES: Name, PAN, Address,
        Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy
        redressal of the grievances{" "}
      </p>

      <p>Smart Online Dispute Resolution | Grievances Redressal Mechanism </p>

      <p>
        Customers availing insurance advisory services offered by Ditto
        (Tacterial Consulting Private Limited | IRDAI Registered Corporate Agent
        (Composite) License No CA0738) will not have access to the exchange
        investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
        mechanism for such products.{" "}
      </p>

      <p>
        Fixed deposit products offered on this platform are third-party products
        (TPP) and are not Exchange traded products. These are offered through
        Blostem Fintech Private Limited. Zerodha Broking Limited (SEBI
        Registration No.: INZ000031633) is acting solely as a distributor for
        these products. Any disputes arising with respect to such distribution
        activity will not have access to SEBI SCORES/ODR, Exchange Investor
        Grievance Redressal Forum, or Arbitration mechanism. Fixed deposits are
        regulated by the Reserve Bank of India (RBI).{" "}
      </p>
      </div>
      <div className="text-muted" style={{textAlign:"center"}}>
        <a href="/" className="text-black text-muted no-underline hover:text-blue-600" style={{textDecoration:"none"}} >NSE</a>  &nbsp; &nbsp; &nbsp;
        <a href="/" className="text-black text-muted no-underline hover:text-blue-600" style={{textDecoration:"none"}} >BSE</a>  &nbsp; &nbsp; &nbsp;
        <a href="/" className="text-black text-muted no-underline hover:text-blue-600" style={{textDecoration:"none"}} >MCX</a> &nbsp; &nbsp; &nbsp;
        <a href="/" className="text-black text-muted no-underline hover:text-blue-600" style={{textDecoration:"none"}} >MSEI</a>  &nbsp; &nbsp; &nbsp;
        <a href="/" className="text-black text-muted no-underline hover:text-blue-600" style={{textDecoration:"none"}} >Terms & conditions</a>  &nbsp; &nbsp; &nbsp;
        <a href="/" className="text-black text-muted no-underline hover:text-blue-600" style={{textDecoration:"none"}} >Policies & procedures</a> &nbsp; &nbsp; &nbsp; 
        <a href="/" className="text-black text-muted no-underline hover:text-blue-600" style={{textDecoration:"none"}} >Privacy policy Disclosure</a>
      </div>
    </div>
    </footer>
  );
}

export default Footer;
