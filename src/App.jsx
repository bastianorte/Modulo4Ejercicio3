

import NavBar from './components/Navbar';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Inicio from './pages/Inicio';
import Equipo from './pages/Equipo';
import Cita from './pages/Cita';
import Footer from './components/Footer';

export default function App() {

return (
  <div>
  <NavBar />
      <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/Equipo' element={<Equipo/>}></Route>   
        <Route path='/Cita' element={<Cita/>}></Route>             
      </Routes>
  <Footer/> 
  </div>
  );
  }

  