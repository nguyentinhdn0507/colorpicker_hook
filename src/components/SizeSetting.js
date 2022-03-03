import React from "react";
const SizeSetting = (props) => {
  console.log(props);
  const handleClickSize = (value) => {
    // kiểm tra có onchangeFontsize không
    if (!props.onChangeFontSize) return;
    props.onChangeFontSize(value);
    // console.log("run");
  };
  function styleFontWeight() {
    return {
      fontWeight: props.fontWeight,
    };
  }
  return (
    <div className="col-xs-12 col-sm-6 col-md-6 col-lg-6 mb-2">
      <div className="panel panel-info">
        <p className="panel-title" style={styleFontWeight()}>
          Size : {props.fontSize}
        </p>
      </div>
      <div className="panel-body ">
        <button className="btn btn-success" onClick={() => handleClickSize(2)}>
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
