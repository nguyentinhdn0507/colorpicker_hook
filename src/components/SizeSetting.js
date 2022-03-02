import React from "react";
const SizeSetting = (props) => {
  console.log(props);
  // const {onChangeFontSize,defaultSettingSize} = props

  const handleClickSize = (value) => {
    // kiểm tra có onchangefontsize không
    if (!props.onChangeFontSize) return;
    props.onChangeFontSize(value);
    console.log("run");
  };
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-2">
      <div className="panel panel-info">
        <p className="panel-title">Size : {props.defaultSettingSize}</p>
      </div>
      <div className="panel-body ">
        <button className="btn btn-success" 
        onClick={() => handleClickSize(2)}>
          Tăng
        </button>
        &nbsp;
        <button className="btn btn-danger" onClick={() => handleClickSize(-2)}>
          Giảm
        </button>
      </div>
    </div>
  );
};

export default SizeSetting;
