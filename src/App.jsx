import { useState } from "react";
import "./index.css";
import "./fonts.css"
import Header from "./components/Header";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <div>
        <p className="text-3xl text-red-500 underline text-center">
          Hello world!
        </p>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
    </>
  );
}

export default App;
