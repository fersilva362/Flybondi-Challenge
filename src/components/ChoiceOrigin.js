import {Grid,Stack,Text} from '@chakra-ui/react'
import { useContext } from 'react'
import {FlyContext} from './Context'
import Card from './Card'
import { Link } from "react-router-dom";

export default function ChoiceOrigin(){
  const {nameCity,setNameCity,airportToCity,desde ,flightIndexOrigin,setOrigen,setDesde}=useContext(FlyContext)
  //console.log(flightIndexOrigin, 'flightIndexOrigin')
  function handleOrigin(ToFrom){
    setDesde(ToFrom);
    const fligthIndexDestination=flightIndexOrigin[ToFrom].reduce((acc,curr)=>{
      if(!acc[curr['destination']]) acc[curr['destination']]=[curr]
      else acc[curr['destination']].push(curr)
      return acc
    },[]) 
    setOrigen(fligthIndexDestination)
    //console.log(fligthIndexDestination,'>> destinos')
    
   } 

   

  return(
    <>
    <Stack marginTop='80px' padding='20px'>
    <Text paddingY='20px' color='gray.700' fontSize='32px' fontWeight='600' fontFamily='sans-serif'>Where do you leave from?</Text>
      <Grid gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' gap={3}>
      {Object.keys(flightIndexOrigin).map(ele=><Link to='/choose-destination'><Card key={Math.random()*2} handle={handleOrigin} city={ele} /></Link>)}
      </Grid>
    </Stack>
  </ >
  )
}