import React, {useState} from "react";

const DesignerTool = () => {
  const [headerSize, setHeaderSize] = useState(32);
  const [textSize, setTextSize] = useState(24);

  const increaseSize = (type) => {
    if (type === "header") {
      setHeaderSize((headerSize) => headerSize + 8);
    } else {
      setTextSize((textSize) => textSize + 8);
    }
  };
  const decreaseSize = (type) => {
    if (type === "header") {
      if (headerSize > 8) setHeaderSize((headerSize) => headerSize - 8);
    } else {
      if (headerSize > 8) setTextSize((textSize) => textSize - 8);
    }
  };
  return (
    <div>
      <h2>Designer Tool</h2>
      <span> Heading Size</span>{" "}
      <button onClick={() => increaseSize("header")}>+</button>{" "}
      <span>{headerSize}</span>
      <button onClick={() => decreaseSize("header")}>-</button>
      <br />
      <span> Text Size</span>{" "}
      <button onClick={() => increaseSize("text")}>+</button>{" "}
      <span>{textSize}</span>
      <button onClick={() => decreaseSize("text")}>-</button>
      <h3 style={{ fontSize: `${headerSize}px` }}>This is a header</h3>
      <p style={{ fontSize: `${textSize}px` }}>This is a text value</p>
    </div>
  );
};

export default DesignerTool;
