import { useState } from "react";
import { data } from "./data";
import logo from "./logo.svg";

const UseStateBasics = () => {
  const [count, setCount] = useState(data);

  return (
    <nav>
      <div className="logo">
        <img src={logo} alt="logo" />
      </div>
      <div>
        {count.map((item) => {
          const { id, img } = item;
          return <span key={id}>{img}</span>;
        })}
        <button type="button">click me</button>
      </div>
    </nav>
  );
};

export default UseStateBasics;
