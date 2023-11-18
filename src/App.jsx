import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.js';
import './sass/main.scss'
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';


function App() {

  return (
    <>
    <Routes>
      <Route path={"/"} element={<Home/>} />
    </Routes>
    </>
  )
}

export default App
