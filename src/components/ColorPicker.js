import React from "react";

const ColorPicker = (props) => {
  // console.log(props);
  const colors = ["#55efc4", "#81ecec", "#74b9ff", "#a29bfe", "#0984e3"];
  function showColor(color) {
    // console.log(color);
    return {
      backgroundColor: color,
    };
  }
  const handelClickColor = (color) => {
    // kiểm tra có onChanageColor không
    if (!props.onChangeColor) return;
    props.onChangeColor(color);
    // update color
  };
  function setFontWeight() {
    return {
      fontWeight: props.fontWeight,
    };
  }
  const elementColor = colors.map((color, index) => {
    return (
      <span
        key={index}
        style={showColor(color)}
        className={props.color === color ? "active " : ""}
        onClick={() => handelClickColor(color)}
      ></span>
    );
  });
  return (
    <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
      <div className="panel panel-primary">
        <p className="panel-title" style= {setFontWeight()}>Color Picker</p>
      </div>
      <div className="panel-body">
        {elementColor}
        <hr />
      </div>
    </div>
  );
};

export default ColorPicker;
