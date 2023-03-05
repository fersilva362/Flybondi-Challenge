import {Divider,Text,Stack,Button,Center} from '@chakra-ui/react'
import { TbPlaneInflight as avion } from "react-icons/tb";
import {useContext, useState} from 'react'
import { Icon } from '@chakra-ui/react'
import { FlyContext } from './Context';
import { Link } from "react-router-dom";

export default function CardFlight({trip, handleSelected}){

  const {active,setActive}=useContext(FlyContext)
 if(!trip)  console.log( 'tripInCardIsUndefined')

 else {
  const dateDeparture= `${trip.dateSalida}`
  const formatDeparture= new Intl.DateTimeFormat('en-US').format(new Date(dateDeparture))

  const dateArrive= `${trip.dateLlegada}`
  const formatArrive= new Intl.DateTimeFormat('en-US').format(new Date(dateArrive))

  const formatPrice=new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' }).format(trip.TotalPrice)
  
  
   return(
    <Center width='100%'  paddingX='100px'  >
        <Stack onMouseOver={()=>handleSelected(trip)}    marginBottom='10px' borderWidth='3px' bg='white' justifyContent='space-between' 
         marginLeft='20px' _hover={{borderLeft:'15px solid orange'}}  padding='20px' gap='10px'  
        direction='row' alignItems='center' borderRadius='6px' boxShadow='md' >
          {/* salida */}
          <Stack padding='10px'  spacing='-1'>
            <Text  fontFamily='sans-serif' fontSize='30px' fontWeight='bold'>{formatDeparture}</Text>
            <Text fontFamily='sans-serif' fontSize='16px'>Departure from {trip.origin}</Text>
          </Stack>
          <Stack direction='row' alignItems='center'>            
            <Divider borderColor='orange' borderWidth='2px' orientatin='horizontal' width='100px'/>
            <Stack alignItems='center'>
              <Icon color='gray.500' as={avion} boxSize='60px' />
              <Text fontSize='16px'>FO{trip.id.toString().slice(-4)}</Text>
            </Stack>          
            <Divider borderColor='orange' borderWidth='2px' orientatin='horizontal' width='100px'/>
          </Stack>
          {/* llegada */}
          <Stack padding='10px' spacing='-1'>
            <Text  fontFamily='sans-serif' fontSize='30px' fontWeight='bold'>{formatArrive}</Text>
            <Text fontFamily='sans-serif' fontSize='16px'>Arrive from {trip.destination}</Text>
          </Stack>
          <Stack alignItems='center' padding='10px'>
            <Text color='red.400' fontFamily='sans-serif' fontSize='16px'>Last {trip.seat} seats avilables!</Text>
            <Text fontWeight='700'>Total price</Text>
            <Link to='/purchase'>
            <Button onClick={()=>setActive(trip)}  _hover={{ bg: '#fcdc86' }} borderColor='orange' borderWidth='2px' bg='#fdbe15'   colorScheme='yellow' variant='solid' borderRadius='9999' paddingX='25px' paddingY='22px' 
            fontSize='22px' fontFamily='sans-serif'>{formatPrice}</Button>
            </Link>
          </Stack>
        </Stack>
    </Center>
  )}
}