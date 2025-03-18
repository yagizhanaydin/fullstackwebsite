import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import RegisterForm from './RegisterForm';
import Login from './Login';
import ForgetPassword from './ForgetPassword';
import AdminPanel from './adminpanel/AdminPanel';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/login" element={<Login />} />
          <Route path="/forgetPassword" element={<ForgetPassword />} />
          <Route path="/Adminpanel" element={<AdminPanel/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
