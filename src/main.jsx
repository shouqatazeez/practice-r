// This is an example of the basics code of the how we create the react page from the scratch
import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <h1>This is how we create the page</h1>
  </div>
);

// Challange -1
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
