import React from "react";

function Team() {
  return (
    <div className="container">
      <div className="row text-center mt-5 mb-5 border-top">
        <h1 className="text-muted">People</h1>
      </div>
      <div className="row">
        <div className="col-6">
          <img
            style={{ borderRadius: "50%", height: "65%", marginLeft: "8em" }}
            src="./media/images/nithinKamath.jpg"
            alt="nitin kamath"
          ></img>
          <h3 className="mt-4 text-muted" style={{ marginLeft: "7.5em" }}>
            Nithin Kamath
          </h3>
          <p
            className="mt-4 text-muted"
            style={{ marginLeft: "12em", fontSize: "125%" }}
          >
            Founder, CEO
          </p>
        </div>
        <div className="col-6 fs-4 text-muted">
          <p>
            {" "}
            Nithin bootstrapped and founded Zerodha in 2010 to overcome the
            hurdles he faced during his decade long stint as a trader. Today,
            Zerodha has changed the landscape of the Indian broking industry.
          </p>

          <p>
            He is a member of the SEBI Secondary Market Advisory Committee
            (SMAC) and the Market Data Advisory Committee (MDAC).
          </p>

          <p>Playing basketball is his zen.</p>
          <p>
            Connect on{" "}
            <a
              className="no-underline fs-4"
              style={{ textDecoration: "none" }}
              href="/"
            >
              Homepage
            </a>{" "}
            /{" "}
            <a
              fs-5
              className="no-underline fs-5"
              style={{ textDecoration: "none" }}
              href="/"
            >
              TradingQnA
            </a>{" "}
            /{" "}
            <a
              className="no-underline fs-5"
              style={{ textDecoration: "none" }}
              href="/"
            >
              Twitter
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Team;
