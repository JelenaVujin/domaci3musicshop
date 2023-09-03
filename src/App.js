
import './App.css';
import Cds from './Components/Cds';
import Navbar from './Components/Navbar';
import { useState } from 'react';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Orders from './Components/Orders';

function App() {
  const[cdAmount,setCdAmount]=useState(0);
  const[cdPrice,setCdPrice]=useState(0);
  const [orderCd, setOrderCd] = useState([]);
  const [cd,setCd] = useState([
    {
      id: 1,
      img:"https://www.metropolismusic.rs/cover/6232177.jpg",
      author: "Khruangbin",
      title:"Con Todo El Mundo",
      price:1300 ,
      amount: 0,
    },
    {
      id: 2,
      img:"https://www.metropolismusic.rs/cover/6232256.jpg",
      author: "The National",
      title:"Trouble Will Find Me",
      price:1500,
      amount: 0,
    },
    {
      id: 3,
      img:"https://www.metropolismusic.rs/cover/6211344.jpg",
      author: "Sixto Rodriguez",
      title:"Coming From Reality",
      price:2000,
      amount: 0,
    },
    {
      id: 4,
      img:"https://www.metropolismusic.rs/cover/6228418.jpg",
      author: "Khruangbin",
      title:"Texas Moon",
      price:1400,  
      amount: 0,
    },
  ]);
  function refreshCart() {
    let show = cd.filter((oneCd) => oneCd.amount > 0);
    setOrderCd (show);
  }
  
  function addToOrder( id) {
    setCdAmount(cdAmount + 1);
    cd.forEach((cd) => {
      if (cd.id === id) {
        cd.amount++;
       
      }
    });
    refreshCart();
  }
   function removeFromOrder( id) {
      setCdAmount(cdAmount - 1);
      cd.forEach((cd) => {
        if (cd.id === id) {
          cd.amount--;
        }
      });
  }
 
  
  


  return (
    <BrowserRouter className="App">
      <Navbar/>
      <Routes>
      <Route path="/" element={<Cds cds={cd} onAdd={addToOrder} onRemove={removeFromOrder} />}/>
      <Route path="/orders" element={<Orders cds={orderCd}  />}/>
      </Routes>
      
    </BrowserRouter>
  );
}

export default App;
