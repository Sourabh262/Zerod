import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div className="container">
      <div
        style={{ marginTop: "100px", marginBottom: "200px" }}
        className="row"
      >
        <div className="col-4">
          <h2 className="text-muted">{productName}</h2>
          <p style={{ fontSize: "110%" }}>{productDescription}</p>
          <p>
            <a href={learnMore}>Learn more →</a>
          </p>
        </div>
        <div className="col-8" style={{ width: "60%" }}>
          <img
            style={{ height: "110%", width: "85%", marginTop: "-40px" }}
            src={imageURL}
          ></img>
        </div>
      </div>
    </div>
  );
}

export default RightSection;
