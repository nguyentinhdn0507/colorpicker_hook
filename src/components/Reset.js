import React from "react";

const Reset = (props) => {
  const resetDefault = () => {
    console.log("run");
    if (!props.onResetDefault) return;
    props.onResetDefault(true);
  };
  return (
    <div className="col-xs-12 col-sm-6 col-md-12 col-lg-6">
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => resetDefault()}
      >
        Reset
      </button>
    </div>
  );
};

export default Reset;
