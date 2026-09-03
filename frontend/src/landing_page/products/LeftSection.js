import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div className="container">
      <div
        style={{ marginTop: "100px", marginBottom: "200px" }}
        className="row"
      >
        <div className="col-8" style={{ width: "60%" }}>
          <img
            style={{ height: "110%", width: "85%", marginTop: "-40px" }}
            src={imageURL}
          ></img>
        </div>
        <div className="col-4">
          <h2 className="text-muted">{productName}</h2>
          <p style={{ fontSize: "110%" }}>{productDescription}</p>
          <p>
            <a style={{ marginRight: "100px" }} href={tryDemo}>
              Try demo →{" "}
            </a>{" "}
            <a href={learnMore}>Learn more →</a>
          </p>
          <p>
            <img
              className="mt-3"
              style={{ marginRight: "50px" }}
              src={googlePlay}
            ></img>{" "}
            <img className="mt-3" src={appStore}></img>
          </p>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
