import { Suspense } from "react";
import "./styles/index.scss";
import { Router } from "./pages/Router";

function App() {
  return (
    <div className="App">
      <Suspense fallback={<span>...</span>}>
        <Router />
      </Suspense>
    </div>
  );
}

export default App;
