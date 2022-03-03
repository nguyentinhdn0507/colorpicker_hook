import React from "react";

const Result = (props) => {
  console.log(props);
  function setStyle() {
    return {
      color: props.color,
      fontSize: props.fontSize,
      borderColor: props.color,
      fontWeight: props.fontWeight,
    };
  }
  function fontStyle() {
    return {
      fontWeight: props.fontWeight,
    };
  }
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p style={fontStyle()}>
        Color : {props.color} - Font Size :{props.fontSize}
      </p>
      <div id="content" style={setStyle()}>
        Nội Dung Setting
      </div>
    </div>
  );
};

export default Result;
