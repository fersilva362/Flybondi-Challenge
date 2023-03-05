import mendoza from './assets/mendoza.webp'
import bariloche from './assets/barilo.webp'
import baires from './assets/buenos-aires.webp'
import cba from './assets/cordoba.webp' 

import { Stack, Text} from '@chakra-ui/react'
import { useContext, useEffect } from 'react'
import { FlyContext } from './Context'
export default function Card({city, number,handle}){
  const {setNameCity, nameCity, airportToCity}=useContext(FlyContext)
  //console.log(number,'number')
 let obj={}
   /* switch(city){
    case 'MDZ': obj.name='MENDOZA'; obj.img=mendoza;break
    case 'BRC':obj.name='BARILOCHE'; obj.img=bariloche;break
    case 'EPA':obj.name='BUENOS AIRES'; obj.img=baires;break
    case 'COR':obj.name='CORDOBA'; obj.img=cba;break
    default: obj.name=city; obj.img=baires; break
  } */

  switch(city){
    case 'MDZ': obj.name='MENDOZA'; obj.img=mendoza;break
    case 'BRC':obj.name='BARILOCHE'; obj.img=bariloche;break
    case 'EPA':obj.name='BUENOS AIRES'; obj.img=baires;break
    case 'COR':obj.name='CORDOBA'; obj.img=cba;break
    default: obj.name=city; obj.img=baires; break
  }
  
 

  return(
    <Stack  onClick={()=>handle(city)}  justifyContent='flex-end'  _hover={{transform:'scale(1.01)'}} borderRadius='8px' cursor='pointer' boxShadow='md' backgroundImage={obj.img} backgroundRepeat='no-repeat'
     backgroundSize='cover' backgroundPosition='center' minH='300px'>
      <Stack color='white' spacing={1} paddingX='30px' paddingY='40px'>
        <Text   fontWeight='400' letterSpacing='2px'   fontSize='32px'>{obj.name}</Text> 
        {number && <Text borderWidth='3px' width='fit-content' paddingY='5px' paddingX='15px' borderRadius='6px' borderColor='white' fontSize='22px'>{number} destinations</Text>}
      </Stack>
    </Stack>
    
  )
}