import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import BankingProject from './Components/BankingProject.js';
import Personal from './Components/Personal.js';
import NRI from './Components/NRI.js';
import SME from './Components/SME.js';
import Wholesale from './Components/Wholesale.js';
import Agri from './Components/Agri.js';
import Blog from './Components/Blog.js';
import Location from './Components/Location.js';

function App() {
     
  return ( 
      <div >
        <BrowserRouter>
        <Routes>
      <Route  path="/" element={<BankingProject/>}></Route>
      <Route  path="/" element={<Personal/>}></Route>
      <Route path="NRI" element={<NRI/>}></Route>
      <Route path="SME" element={<SME/>}></Route>
      <Route path="Wholesale" element={<Wholesale/>}></Route>
      <Route path="Agri" element={<Agri/>}></Route>
      <Route path="Location" element={<Location/>}></Route>
      <Route path="Blog" element={<Blog/>}></Route>
    </Routes>
    </BrowserRouter>
    
    </div>
   
    
   );
    } 

export default App;