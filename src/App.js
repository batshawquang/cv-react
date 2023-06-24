import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Project01 from './Components/Projects/Project01';
import Home from './Components/Home';

function App() {
  return (
    <div className='App'>
      <div>
        <NavBar/>
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/project01" element={<Project01/>} />
        </Routes>
      </div>
    </div>
    
  );
}

export default App;
