// Declartive code - we just write the code then the jsx will manage it

// import { createRoot } from "react-dom/client";
// const root = createRoot(document.getElementById("root"));
// root.render(<h1>Hello Bhai</h1>);

// Imperative code- we have to create each and every thing from the scratch && challange -3
const createh1 = document.createElement("h1");
createh1.innerText =
  "This is how we create the h1 and connect it to the parent";
createh1.className = "header";
document.getElementById("root").appendChild(createh1);
