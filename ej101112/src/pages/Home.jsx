import React, { useState } from "react";

const Home = () => {
  const [color, setColor] = useState("000000");
  const [changeOn, setChangeOn] = useState(true);

  const changeColor = () => {
    if (changeOn) {
      const randomColor = Math.floor(Math.random() * 16777215).toString(16);
      setColor(randomColor);
    }
  };

  return (
    <div>
      <div>{changeOn ? "The change mod is on" : "The change mod is off"}</div>
      <div
        className="container_square"
        style={{ backgroundColor: `#${color}` }}
      >
        <div
          className="square"
          onDoubleClick={() => setChangeOn(!changeOn)}
          onMouseEnter={() => changeColor()}
        >
          {`The color now is #${color}`}
        </div>
      </div>
    </div>
  );
};

export default Home;
