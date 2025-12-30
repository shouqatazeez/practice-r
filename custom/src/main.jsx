import { createRoot } from "react-dom/client";
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
    <header>
      <img src={reactlogo} alt="react logo" width="200px" />
      <nav>
        <ul>
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
import reactlogo from "./assets/react.svg";

function Page2() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}
