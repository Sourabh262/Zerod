import React from "react";

function Hero() {
  return (
    <div className="container">
      <div className="row border-top text-center border-bottom">
        <h2 className="mt-5 ">Zerodha Products</h2>
        <p className="p-2" style={{ fontSize: "150%" }}>
          Sleek, modern, and intuitive trading platforms
        </p>
        <p style={{ fontSize: "125%" , marginBottom:"200px" }} >
          Check out our{" "}
          <a
            style={{ textDecoration: "none" }}
            className="no-underline"
            href="/"
          >
            investment offerings →
          </a>
        </p>
      </div>
    </div>
  );
}

export default Hero;
