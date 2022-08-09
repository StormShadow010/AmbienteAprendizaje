import { Routes,Route} from 'react-router-dom';
import { NavegationWeb } from './components/Navbar/navbar.js';
import {Home} from './pages/Home.js'
import {Actividades} from './pages/Actividades.js'

export const App = () => {
  return (
    <>
    <NavegationWeb />
    <Routes>
      <Route exact path='/' element={<Home/>} />
      <Route exact path='/actividades' element={<Actividades/>} />
    </Routes>
    </>
);
}

