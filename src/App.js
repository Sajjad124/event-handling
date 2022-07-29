import { useState } from "react";
import "./App.css";

function App() {
  const colors = ["#8e90ad", "#a032a8", "#8e23ad", "#32a852"];
  let id = colors.length;

  const [bg, setBg] = useState(colors[0]);
  const [name, setName] = useState("Click Me");

  const myFunction = () => {
    id = id === 0 ? colors.length : id - 1;
    setBg(colors[id]);
  };
  const valueChange = () => {
    setName("Hello 🔆 ");
  };
  return (
    <div className="main" style={{ backgroundColor: bg }}>
      <div>
        <button
          onClick={() => myFunction()}
          onDoubleClick={() => valueChange()}
        >
          {name}
        </button>
      </div>
    </div>
  );
}

export default App;
