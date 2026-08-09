import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Request from "./pages/Request";
import Join from "./pages/Join";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/request" element={<Request />} />
        <Route path="/join" element={<Join />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;