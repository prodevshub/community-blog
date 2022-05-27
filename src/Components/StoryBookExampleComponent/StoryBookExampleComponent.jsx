import React from "react";
import logo from "../../logo.svg";
import "../../App.css";

//cia priimam propsus i komponenta is stories
function StoryBookExampleComponent({name, footer, padding, bgColor, handleOnChange, color, backgroundColor, fontSize, fontWeight, textAlign, primary, value, label}) {

  return (
    <>
      <h1 style={{padding, backgroundColor, color, fontSize, fontWeight, textAlign}}>Sample component in community blog</h1>
      <img src={logo} className="App-logo" alt="logo" />
      <button style={{ backgroundColor, color}}  >{name}</button>
      <img src={logo} className="App-logo" alt="logo" />
      <footer >{footer}</footer>
    </>
  );
}

export default StoryBookExampleComponent;