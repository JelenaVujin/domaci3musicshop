
import './App.css';
import Cds from './Components/Cds';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Orders from './Components/Orders';

function App() {
  const [cd,setCd] = useState([
    {
      id: 1,
      img:"https://www.metropolismusic.rs/cover/6232177.jpg",
      author: "Khruangbin",
      title:"Con Todo El Mundo",
      price:"1300 rds",
      amount: 0,
    },
    {
      id: 2,
      img:"https://www.metropolismusic.rs/cover/6232256.jpg",
      author: "The National",
      title:"Trouble Will Find Me",
      price:"1500 rsd",
      amount: 0,
    },
    {
      id: 3,
      img:"https://www.metropolismusic.rs/cover/6211344.jpg",
      author: "Sixto Rodriguez",
      title:"Coming From Reality",
      price:"2000 rsd",
      amount: 0,
    },
    {
      id: 4,
      img:"https://www.metropolismusic.rs/cover/6228418.jpg",
      author: "Khruangbin",
      title:"Texas Moon",
      price:"1400 rsd",  
      amount: 0,
    },
  ]);
  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Cds cds={cd} />}/>
      <Route path="/orders" element={<Orders cds={cd} />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
