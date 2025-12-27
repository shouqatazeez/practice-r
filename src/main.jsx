// This is how we create the customcomponents and also this is the challange =2
import React from "react";
function MainContent() {
  return (
    <div>
      <h1>React is great! </h1>
    </div>
  );
}

// This is an example of the basics code of the how we create the react page from the scratch
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>This is how we create the page</h1>
    <MainContent />
  </div>
);

// Challange -1 we have to print the lists in the ulordered list
// import { createRoot } from "react-dom/client";
// const root = createRoot(document.querySelector("#root"));
// root.render(
//   <div>
//     <ul>
//       <li>Hello</li>
//       <li>Guys</li>
//     </ul>
//   </div>
// );
