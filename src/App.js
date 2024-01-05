import { useState } from "react";
import "./App.css";

import ParallaxComponent from "./component/ParallaxComponent";

function App() {
  const [strength, setStrength] = useState(400);
  const handleChange = (event) => {
    setStrength(event.target.value);
  };
  return (
    <>
      <div className="transparent">
        <h3>Choose a strength for the parallax effect</h3>
        <select value={strength} onChange={handleChange}>
          <option value={-600}>-600</option>
          <option value={-500}>-500</option>
          <option value={-400}>-400</option>
          <option value={-300}>-300</option>
          <option value={-200}>-200</option>
          <option value={-100}>-100</option>
          <option value={100}>100</option>
          <option value={200}>200</option>
          <option value={300}>300</option>
          <option value={400}>400</option>
          <option value={500}>500</option>
          <option value={600}>600</option>
          <option value={700}>700</option>
        </select>
      </div>
      <ParallaxComponent strength={strength} />
    </>
  );
}

export default App;
