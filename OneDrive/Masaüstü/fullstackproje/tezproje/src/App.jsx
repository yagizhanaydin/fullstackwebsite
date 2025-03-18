import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './client/Login';
import Register from './client/Register';
import HomePage from './HomePage';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register/>}/>
      </Routes>
    </Router>
  );
}

export default App;
