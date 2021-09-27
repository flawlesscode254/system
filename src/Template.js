import React from "react";
import './App.css'

function Template({ title, subTitle }) {
  return (
    <div>
      <div className="details">
        <div>
          <h5
            style={{
              backgroundColor: "white",
              color: "orangered",
            }}
          >
            {title}
          </h5>
          <h3
            style={{
              backgroundColor: "white",
            }}
          >
            {subTitle}
          </h3>
        </div>

        <h5
          style={{
            backgroundColor: "white",
            color: "blue",
            cursor: "pointer",
            textDecoration: "underline",
          }}
        >
          update
        </h5>
      </div>
    </div>
  );
}

export default Template;
