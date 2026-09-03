import React from "react";

const Universe = () => {
  return (
    <div className="container" style={{ marginBottom: "-300px" }}>
      <div className="row">
        <h3 className="text-center text-muted">The Zerodha Universe</h3>
        <p className="text-center text-muted">
          Extend your trading and investment experience even further with our
          partner platforms
        </p>
      </div>
      <div className="row mt-5">
        <div className="col-4">
          <a
            className="text-center text-black text-muted no-underline"
            style={{ textDecoration: "none", marginLeft: "20px" }}
            href="/"
          >
            <img
              style={{ height: "28%" }}
              src=".\media\images\zerodhaFundhouse.png"
            ></img>
            <div style={{ marginTop: "2px", marginLeft: "-60px" }}>
              <br></br>
              Our asset management venture <br></br>that is creating simple and
              transparent index<br></br> funds to help you save for your goals.
            </div>
          </a>
        </div>
        <div className="col-4">
          <a
            className="text-center text-black text-muted no-underline"
            style={{ textDecoration: "none", marginLeft: "20px" }}
            href="/"
          >
            <img
              style={{ height: "23%" }}
              src="./media\images\sensibullLogo.svg"
            ></img>
            <div style={{ marginTop: "2px", marginLeft: "-60px" }}>
              <br></br>
              Our asset management venture <br></br>that is creating simple and
              transparent index<br></br> funds to help you save for your goals.
            </div>
          </a>
        </div>
        <div className="col-4">
          <a
            className="text-center text-black text-muted no-underline"
            style={{ textDecoration: "none", marginLeft: "20px" }}
            href="/"
          >
            <img
              style={{ height: "28%" }}
              src=".\media\images\tijori.svg"
            ></img>
            <div style={{ marginTop: "2px", marginLeft: "-60px" }}>
              <br></br>
              Our asset management venture <br></br>that is creating simple and
              transparent index<br></br> funds to help you save for your goals.
            </div>
          </a>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col-4">
          <a
            className="text-center text-black text-muted no-underline"
            style={{ textDecoration: "none", marginLeft: "20px" }}
            href="/"
          >
            <img
              style={{ height: "10%" }}
              src=".\media\images\streakLogo.png"
            ></img>
            <div style={{ marginTop: "2px", marginLeft: "-60px" }}>
              <br></br>
              Our asset management venture <br></br>that is creating simple and
              transparent index<br></br> funds to help you save for your goals.
            </div>
          </a>
        </div>
        <div className="col-4">
          <a
            className="text-center text-black text-muted no-underline"
            style={{ textDecoration: "none", marginLeft: "20px" }}
            href="/"
          >
            <img
              style={{ height: "10%" }}
              src=".\media\images\smallcaseLogo.png"
            ></img>
            <div style={{ marginTop: "2px", marginLeft: "-60px" }}>
              <br></br>
              Our asset management venture <br></br>that is creating simple and
              transparent index<br></br> funds to help you save for your goals.
            </div>
          </a>
        </div>
        <div className="col-4">
          <a
            className="text-center text-black text-muted no-underline"
            style={{ textDecoration: "none", marginLeft: "20px" }}
            href="/"
          >
            <img
              style={{ height: "10%" }}
              src=".\media\images\dittoLogo.png"
            ></img>
            <div style={{ marginTop: "2px", marginLeft: "-60px" }}>
              <br></br>
              Our asset management venture <br></br>that is creating simple and
              transparent index<br></br> funds to help you save for your goals.
            </div>
          </a>
        </div>
        <button
          className="p-2 btn btn-primary fs-5 mb-5"
          style={{
            width: "20%",
            margin: "0 auto",
            height: "10%",
            marginTop: "-370px",
          }}
        >
          Sign up for free
        </button>
      </div>
    </div>
  );
};

export default Universe;
