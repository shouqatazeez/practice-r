import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(
  <div>
    <TemproryName />
    <Page />
  </div>
);

function TemproryName() {
  return (
    <div>
      <h1>This is the my first function component</h1>
      <p>Hello every one</p>
    </div>
  );
}

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
