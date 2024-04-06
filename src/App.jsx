import { useState } from "react";
import { ClickCounter } from "./components/ClickCounter";
import "./App.css";

const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

function App() {
  const [isOpen, setIsOpen] = useState(false);
  const [click, setClick] = useState({
    a: 0,
    b: 1,
  });

  function upDate(key) {
    setClick({
      ...click,
      [key]: click[key] + 1,
      // a: click.a + 1,
    });
  }

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <CustomButton message="Playing music">Play</CustomButton>
      <ClickCounter value={click} onUpdate={upDate} />
      <button onClick={handleToggle}>{isOpen ? "Hide" : "Show"}</button>
      {isOpen && <p>Now you can see me!</p>}
    </div>
  );
}

export default App;
