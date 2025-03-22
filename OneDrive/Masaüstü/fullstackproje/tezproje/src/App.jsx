import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ClientRegister from "./client/Register"
import ClientPanel from "./client/ClientPanel";
import Login from "./client/Login";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/clientregister" element={<ClientRegister />}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/clientpanel" element={<ClientPanel/>}/>
      </Routes>
    </Router>
  );
}

export default App;
