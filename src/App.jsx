import { useState } from "react";
import "./App.css";

const CustomButton = ({ message, children }) => {
  return <button onClick={() => alert(message)}>{children}</button>;
};

function App() {
  return (
    <div>
      <CustomButton message="Playing music">Play<CustomButton/>
    </div>
  );
}

export default App;
