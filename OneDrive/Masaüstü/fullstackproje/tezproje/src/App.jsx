import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import HomePage from "./pages/HomePage";
import ClientRegister from "./client/Register"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientregister" element={<ClientRegister />}/>
      </Routes>
    </Router>
  );
}

export default App;
