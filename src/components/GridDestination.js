import {Grid,Stack} from '@chakra-ui/react'
import { useContext } from 'react'
import {FlyContext} from './Context'
import Card from './Card'
import { Link } from "react-router-dom";

export default function GridDestination(){
  const {hideInNav,setHideInNav,origen, flight,destination,setDestination, setHasta}=useContext(FlyContext)

  function handleDestination(goTo){
    setHasta(goTo)
   const fligthIndexFromTo=flight.filter(ele=>ele.destination===origen[goTo][0].origin)?.reduce((acc,curr)=>{
     if(!acc[curr['origin']]) acc[curr['origin']]=[curr]
     else acc[curr['origin']].push(curr)
     return acc
   },[])
   if( !destination||destination.length==0 ) console.log('Sorry, There are not trip ')
   setDestination(fligthIndexFromTo[goTo])
   setHideInNav(!hideInNav)

  }

 
  return(
    <>
    <Stack  padding='20px'>
      <Grid gridTemplateColumns='repeat(auto-fit, minmax(300px, 1fr))' gap={3}>
        {Object.keys(origen).map(ele=><Link to='/flights'>
        <Card key={Math.random()*3} number={null} city={ele} handle={handleDestination}/></Link>)}
      </Grid>
      
    </Stack>
  </>
  )
}