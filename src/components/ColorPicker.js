import React from "react";
import { useState } from "react";

const ColorPicker = ({defaultSetting,onChangeColor}) => {
  const [colors, setColors] = useState([
    "#55efc4",
    "#81ecec",
    "#74b9ff",
    "#a29bfe",
    "#0984e3",
  ]);
  const handelClickColor = (color) => {
    // kiểm tra có onchanage color không
    if (!onChangeColor) return
    onChangeColor(color)
    // update color
  }
  const elementColor = colors.map((color, index) => {
    return (
      <span
        key={index}
        style={{ backgroundColor: color }}
        className={defaultSetting.color === color ? "active " : ""}
        onClick={() => handelClickColor(color)}
      ></span>
    );
  });
  return (
    <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
      <div className="panel panel-primary">
        <p className="panel-title">Color Picker</p>
      </div>
      <div className="panel-body">
        {elementColor}
        <hr />
      </div>
    </div>
  );
};

export default ColorPicker;
