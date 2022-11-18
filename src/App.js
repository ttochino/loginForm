import './App.css';
import Login from './components/Login';
import SignForm from './components/SignForm';
import { Routes, Route } from 'react-router-dom'
import Homepage from './components/Homepage';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/sign-form" element={<SignForm />}></Route>
        <Route path="/home" element={<Homepage />}></Route>
      </Routes>
    </div>
  );
}

export default App;
