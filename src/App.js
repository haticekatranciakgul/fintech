
import './App.css';
import Dashboard from './pages/Dashboard';
import SignUpSignIn from './pages/SignupSignin';
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
  return (
    <>
     <BrowserRouter basename='/'>
      <Routes>
        <Route path="/" element={<SignUpSignIn />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
    
    </>
   
  );
}

export default App;
