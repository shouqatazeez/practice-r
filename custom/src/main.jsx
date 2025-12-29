import { createRoot } from "react-dom/client";
const root = createRoot(document.getElementById("root"));
root.render(<TemproryName />);

function TemproryName() {
  return (
    <div>
      <h1>This is the my first function component</h1>
      <p>Hello every one</p>
    </div>
  );
}
