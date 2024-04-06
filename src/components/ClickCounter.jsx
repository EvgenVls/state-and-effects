import { useState } from "react";

export const ClickCounter = ({ value, onUpdate }) => {
  return (
    <div>
      <button onClick={() => onUpdate("a")}>a {value.a}</button>
      <button onClick={() => onUpdate("b")}>b {value.b}</button>
    </div>
  );
};
