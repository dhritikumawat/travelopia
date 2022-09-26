import React from "react";
import "./Content.css";

const Content = () => {
  // Alert Function------------
  const alertFunction = () => {
    alert("Hello World");
  };

  return (
    <div className="content__wrapper">
      <div className="image__wrapper">
        <img src="https://images.pexels.com/photos/13292189/pexels-photo-13292189.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" />
        <div className="image__content">
          <h2>Embrace the Detour</h2>
          <button type="button" onClick={alertFunction}>
            Click here
          </button>
        </div>
      </div>
    </div>
  );
};

export default Content;
