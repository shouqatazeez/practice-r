import { createRoot } from "react-dom/client";
import "./index.css";
import Header from "./Header";
import Maincontent from "./Maincontent";
import Footer from "./Footer";

const root = createRoot(document.getElementById("root"));
root.render(
  <>
    <Header />
    <Maincontent />
    <Footer />
  </>
);
