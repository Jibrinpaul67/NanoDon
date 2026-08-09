import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Request from "./pages/Request";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;