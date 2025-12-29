import { createRoot } from "react-dom/client";
import reactlogo from "./assets/react.svg";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <img src={reactlogo} alt="reactlogo" />
    <h1>Fun Facts about React</h1>
    <ul>
      <li>Was released in the 2013</li>
      <li>Was orginally created by Jordan Walke</li>
      <li>Has well over 100k stars on Github</li>
      <li>It maintained by meta</li>
      <li>power of thousands of enterprise app, including mobile apps</li>
    </ul>
  </div>
);
