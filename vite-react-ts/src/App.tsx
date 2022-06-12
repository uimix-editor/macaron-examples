import { useState } from "react";
import "./App.css";
import "./components.macaron";

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ["my-button"]: React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement>,
        HTMLElement
      >;
    }
  }
}

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App">
      <header className="App-header">
        <p>Vite + React + Macaron Example</p>
        <p>
          <my-button onClick={() => setCount((count) => count + 1)}>
            count is: {count}
          </my-button>
        </p>
      </header>
    </div>
  );
}

export default App;
