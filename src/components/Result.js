import React from "react";

const Result = (props) => {
  console.log(props);
  // const {color,fontSize,fontWeight} = props;
  function style() {
    return {
      color: props.color,
      fontWeight: props.fontWeight,
      fontSize: props.fontSize,
    };
  }
  function fontWeight() {
    return {
      fontWeight: props.fontWeight,
    };
  }
  // const style = () => {
  //   return
  //   props.color,
  //   props.fontSize,
  //   props.fontWeight
  // }
  return (
    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12">
      <p styles={fontWeight()}>
        Color : {props.color} - Fontsize :{props.fontSize}
      </p>
      <div id="content" style={style()}>
        Nội Dung Setting
      </div>
    </div>
  );
};

export default Result;
