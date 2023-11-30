import './App.css'
import Login from "./components/login/login"
import Register from "./components/register/register"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from 'react';
import Store from './components/homepage/pages/Store';

function App() {

  const [ user, setLoginUser] = useState({})

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={user && user._id ? <Store setLoginUser={setLoginUser} /> : <Login setLoginUser={setLoginUser} />} />
          <Route path='/register' element= {<Register/>}/>
          <Route path='/login' element = {<Login setLoginUser={setLoginUser}/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
