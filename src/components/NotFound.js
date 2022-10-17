import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div>
      <h1 style={{ textAlign: "center", marginTop: "20%" }}>Not Found</h1>
      <Link to="/">
        <h3 style={{ textAlign: "center" }}>Go Home</h3>
      </Link>
    </div>
  );
};

export default NotFound;
