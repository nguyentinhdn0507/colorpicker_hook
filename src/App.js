// import logo from './logo.svg';
import React, { useState } from "react";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";
import "./App.css";

function App() {
  const [defaultSetting, setDefaultSetting] = useState({
    color: "#55efc4",
    fontSize: 14,
    fontWeight: "bold",
    border: "#55efc4",
  });
  const onChangeColor = (param) => {
    // console.log(param);
    setDefaultSetting({
      ...defaultSetting,
      color: param,
      // border :param
    });
  };
  const onChangeFontSize = (value) => {
    console.log(value);
    setDefaultSetting({
      ...defaultSetting,
      fontSize:
        defaultSetting.fontSize + value >= 8 &&
        defaultSetting.fontSize + value <= 36
          ? defaultSetting.fontSize + value
          : defaultSetting.fontSize,
    });
  };
  const onResetDefault = (value) => {
    console.log("run");
    console.log(value);
    if (value) {
      setDefaultSetting({
        ...defaultSetting,
        color:"#55efc4",
        fontSize: 14,
      });
    }
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-5">Color Picker</h3>
      <div className="row">
        <ColorPicker
          color={defaultSetting.color}
          onChangeColor={onChangeColor}
          fontWeight={defaultSetting.fontWeight}
        />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting
            fontSize={defaultSetting.fontSize}
            onChangeFontSize={onChangeFontSize}
            fontWeight={defaultSetting.fontWeight}
          />
          <Reset onResetDefault={onResetDefault} />
        </div>
        <Result
          color={defaultSetting.color}
          fontSize={defaultSetting.fontSize}
          fontWeight={defaultSetting.fontWeight}
        />
      </div>
    </div>
  );
}

export default App;
