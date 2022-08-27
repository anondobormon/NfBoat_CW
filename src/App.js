import { BrowserRouter } from "react-router-dom";
import "./App.scss";
import Router from "./Components/Routes/Router";

function App() {
  return (
    <div className="">
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </div>
  );
}

export default App;
