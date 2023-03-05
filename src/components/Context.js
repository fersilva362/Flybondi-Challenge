import { createContext, useMemo, useState, useEffect } from 'react';
import api from '../apiFlights'

export const FlyContext = createContext();

export function FlybondiProvider({children}){
  const [origen, setOrigen]=useState([])
  const [flight,setFlight]=useState([])
  const [desde,setDesde]=useState('COR')
  const [nameCity, setNameCity]=useState('Buenos Aires')
  const [hasta,setHasta]=useState('BRC')
  const [destination, setDestination]=useState([])
  const [seat, setSeat]=useState(2)
  const [price,setPrice]=useState(800)
  const [passengers,setPassengers]=useState(1)
  const [hideInNav,setHideInNav ]=useState(false)
  const [active,setActive]=useState()
  //console.log(active,'act')
  
 
  const airportToCity=useMemo(()=>{
    switch(desde){
      case 'MDZ': return 'Mendoza'
      case 'BRC':return'Bariloche'
      case 'EPA':return 'Buenos Aires'
      case 'COR':return'Cordoba'
      default: return desde; 
    }
  },[desde])

  
 function transformName(codeAirport){
  switch(codeAirport){
    case 'MDZ': return 'Mendoza'
    case 'BRC':return'Bariloche'
    case 'EPA':return 'Buenos Aires'
    case 'COR':return'Cordoba'
    default: return codeAirport; 
  }}

   
  

  useEffect(()=>{
    setNameCity(airportToCity)
  },[desde,airportToCity])

  useEffect(()=>{
    (api.fetch().then(data =>setFlight(data)))
 },[])

 
 
 const flightIndexOrigin=useMemo(()=>{
   return flight.reduce((acc,curr)=>{
    if(!acc[curr['origin']]) acc[curr['origin']]=[curr]
    else acc[curr['origin']].push(curr)
    return acc
  },[])
},[flight.length!==0])



  const value=useMemo(()=>{
    return {active,setActive,hideInNav,setHideInNav, transformName, passengers,setPassengers,price,setPrice,seat, setSeat,destination, setDestination,hasta,setHasta,nameCity, airportToCity,setNameCity,origen, setOrigen,flight,setFlight,desde,setDesde, flightIndexOrigin}
  },[active,hideInNav,transformName,passengers,price,seat,destination,origen,flight, flightIndexOrigin,desde,nameCity,airportToCity, hasta])

  if(!value.flight||flight.length===0) return
  
  if(!value.origen) return
   
  
  return <FlyContext.Provider value={value}>{children}</FlyContext.Provider>
}

