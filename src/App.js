import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';

function App() {
  return (
    <div >

      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Login/>} />
          <Route path='/signup' element={<SignUp/>}/>
          <Route path='/home' element={<Home/>} />
          <Route />

        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
