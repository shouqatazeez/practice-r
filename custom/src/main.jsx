import { createRoot } from "react-dom/client";
import reactlogo from "./assets/react.svg";
import "./index.css";

const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <Page2 />
    <Page />
  </div>
);

// The below example code is the challange code part-1

function Page() {
  return (
    <div>
      <ol>
        <li>To become the best frontend engineer</li>
        <li>To be very good at the code and desing</li>
        <li>To learn new things</li>
      </ol>
    </div>
  );
}

function Header() {
  return (
    <header className="head">
      <img src={reactlogo} alt="react logo" width="50px" height="50px" />
      <nav>
        <ul className="nav-list">
          <li>Pricing</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
      </nav>
    </header>
  );
}

function MainContent() {
  return (
    <main>
      <h1>Reasons I'm exicted to learn React</h1>
      <ol>
        <li>To become the best frontend engineer</li>
        <li>To be very good at the code and desing</li>
        <li>To learn new things</li>
      </ol>
    </main>
  );
}

function Footer() {
  return (
    <footer>@ 2025 Shouqat Azeez development All rights are reservered</footer>
  );
}

// The below example code is the challange code part-2

function Page2() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
