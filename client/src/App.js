import React from "react";
import { BrowserRouter } from "react-router-dom";

import "./App.css";
import MercadoForm from "./components/MercadoForm";

function App() {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);

  return (
    <BrowserRouter>
    <div className="App">
        <h1>quickpayni</h1>
        <p>{!data ? "Loading..." : data}</p>
        <MercadoForm/>
    </div>
    </BrowserRouter>
  );
}

export default App;