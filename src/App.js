import { Route, Routes } from 'react-router-dom';
import './App.css';
import NavBar from './Components/NavBar';
import Project01 from './Components/Projects/Project01';
import Project02 from './Components/Projects/Project01';
import Project03 from './Components/Projects/Project01';
import Project04 from './Components/Projects/Project01';
import Home from './Components/Home';
// import About from './Components/About';

function App() {
  return (
    <div className='App'>
      <div className=''>
        <NavBar/>

        <div className='flex justify-center'>
          <Routes>
              <Route path='/cv-react' element={<Home/>} />
              <Route path="/project01" element={<Project01/>} />
              <Route path="/project02" element={<Project02/>} />
              <Route path="/project03" element={<Project03/>} />
              <Route path="/project04" element={<Project04/>} />
          </Routes>
        </div>

        {/* <Routes>
          <Route path="/about" element={<About/>}/>
        </Routes> */}
      </div>
    </div>
    
  );
}

export default App;
