import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Stopwatch from "./pages/stopwatch";

function App() {
  return (
   
      <Routes>
        <Route path="/stopwatch" element={<Stopwatch/>} />
      </Routes>
   
  );
}

export default App;
