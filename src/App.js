import Inicio from './routes/Inicio';
import Portafolio from './routes/Portafolio'
import Navbar from './components/navbar/Navbar';
import './App.css';
import { Routes, Route } from "react-router-dom";

function App() {
    return <div className="App">
      <Navbar/>
      <Routes>
        <Route path="/" element={<Inicio/>}/>
        <Route exact path="/portafolio" element={<Portafolio/>}/>
      </Routes>
    </div>
  
}

export default App;
