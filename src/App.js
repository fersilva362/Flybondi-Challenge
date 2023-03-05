import Navbar from './components/Navbar'
import HomePage from './components/HomePage'
import { useEffect,useState, useContext,useId } from 'react';
import './App.css';
import { FlyContext} from './components/Context'
import ChoiceOrigin from './components/ChoiceOrigin'
import Purchase from './components/Purchase'
import Flights from './components/Flights'
import { Routes, Route } from "react-router-dom"
import { v4 as uuidv4 } from 'uuid';

function App() {
  const {passengers,price,origen,hasta,destination}=useContext(FlyContext)
  const [trips, setTrips]=useState([])

  useEffect(()=>{
    let array=[]
    if(!origen[hasta]||origen[hasta].length===0) { console.log(origen,'origen',hasta,'hasta')}
    else if (!destination||destination.length===0) {console.log(destination,'destination')}
    else { for(let x of origen[hasta]){let obj={};
        for(let y of destination){
          if(x.price+y.price<=800 && +new Date(x.data)< +new Date(y.data)&&Math.min(x.availability,y.availability)>=passengers) {obj.id=uuidv4(); 
            obj.origin=x.origin;obj.dateSalida=x.data; obj.destination=x.destination;obj.dateLlegada=y.data;obj.returnTo=y.destination; obj.TotalPrice=Math.ceil(x.price+y.price);
              obj.seat=Math.min(x.availability,y.availability); }
        }  array.push(obj)
      };
    }
    setTrips(array)
  },[destination,origen,hasta,price,passengers])

  return (
    <>
     <Navbar/> 
      <Routes>
      <Route path="/" element={ <ChoiceOrigin/> } />       
      <Route path="/choose-destination" element={ <HomePage/> } />  
      <Route path="/flights" element={<Flights trips={trips}/> } /> 
      <Route path="/purchase" element={<Purchase/> } />
    </Routes> 
    </>
   );
}

export default App;
