// import logo from './logo.svg';
import { useState } from "react";
import "./App.css";
import ColorPicker from "./components/ColorPicker";
import Reset from "./components/Reset";
import Result from "./components/Result";
import SizeSetting from "./components/SizeSetting";

function App() {
  const [defaultSetting, setDefaultSetting] = useState({
    color: "#55efc4",
    fontSize: 14,
    fontWeight: "bold",
    // border : "#55efc4"
  });
  const onChangeColor = (param) => {
    console.log(param);
    setDefaultSetting({
      color: param,
      // border :param
    });
  };
  const onChangeFontSize = (value) => {
    console.log(value);
    setDefaultSetting({
      fontSize:
        defaultSetting.fontSize + value >= 8 &&
        defaultSetting.fontSize + value <= 36
          ? defaultSetting.fontSize + value
          : defaultSetting.fontSize,
    });
  };
  return (
    <div className="container mt-5">
      <h3 className="text-center mb-5">Hello ColorPicker</h3>
      <div className="row">
        <ColorPicker
          defaultSetting={defaultSetting}
          onChangeColor={onChangeColor}
          // fontWeight={defaultSetting.fontWeight}
        />
        <div className="col-xs-6 col-sm-6 col-md-6 col-lg-6">
          <SizeSetting
            defaultSettingSize={defaultSetting.fontSize}
            onChangeFontSize={onChangeFontSize}
          />
          <Reset />
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
