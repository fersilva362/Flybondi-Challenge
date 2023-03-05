import { TbPlaneInflight as avion } from "react-icons/tb";
import { Icon } from '@chakra-ui/react'
import { useContext, useEffect, useState } from "react"
import { FlyContext } from "./Context"
import{Stack, Text, Divider} from '@chakra-ui/react'
import CardFlight from './CardFlight'
import IconsPers from './Icons'
import { AddIcon, MinusIcon,CheckIcon,ArrowForwardIcon } from '@chakra-ui/icons'

export default function Flights({trips}){
  const [selected, setSelected]=useState(trips[0])
  const [hideFlight, setHideFlight]=useState(false)
  
  const {setPrice, transformName,passengers, desde, hasta,airportToCity} = useContext(FlyContext)
  function handleSelected(data){
    setSelected(data)
    setHideFlight(true)
  }
  /* if(trips.length===0 && (passengers!==1 || desde!=='COR') ) alert ('There are not available flights') */

  const dateDeparture= `${selected?.dateSalida || '2023-11-15'}`
  const formatDeparture= new Intl.DateTimeFormat('en-US').format(new Date(dateDeparture))

  const dateArrive= `${selected?.dateLlegada || '2023-11-15'}`
  const formatArrive= new Intl.DateTimeFormat('en-US').format(new Date(dateArrive))
  const formatPrice=new Intl.NumberFormat('us-US', { style: 'currency', currency: 'USD' })
  .format(selected?.TotalPrice * passengers || 600)
  useEffect(()=>{
    setPrice(formatPrice)
  },[formatPrice, passengers])
  
  return(
    <>
      <Stack direction='row' marginTop='80px' >
        <Stack >
          <Stack direction='row'  alignItems='center' padding='20px'>
            <Icon color='gray.500' as={avion} boxSize='60px' />
            <Stack padding='20px' spacing='0'>
              <Text fontSize='22px' fontWeight='500' fontFamily='sans-serif'  >Choose your trip's round travel </Text>
              <Text  fontSize='26px' fontWeight='bold' fontFamily='sans-serif' > 
              {airportToCity} <span style={{fontWeight:'normal', fontSize:'22px'}} >({desde})</span> 
              <span>   </span><ArrowForwardIcon/><span>   </span>
              {transformName(hasta) } <span style={{fontWeight:'normal', fontSize:'22px'}} >({hasta})</span>
               </Text>
            </Stack>
          </Stack>
          {trips.filter(ele=> {return ele.id} ).sort((a,b)=>a.TotalPrice-b.TotalPrice).slice(0,21)
          .map(trip=><CardFlight  key={trip.id} trip={trip} handleSelected={handleSelected}/>)}
        </Stack>

        {/* resume of fligth on mouseover */}

        <Stack onClick={()=>setHideFlight(false)} color='white' width='430px' 
        bg='#4f4c4d' padding='20px' opacity='0.8' top='10px' zIndex='3' position='fixed' borderRadius='md' 
        right='20px'>
          <Text color='white' fontWeight='600' fontFamily='sans-serif' fontSize='24px' letterSpacing='1px' >Your flight</Text>
          <Divider width='100%' borderColor='orange' borderWidth='2px'/>
          <Stack alignItems='center' padding='0px'  direction='row'>
            <Icon color='white' as={avion} boxSize='40px' />
            <Text  fontSize='22px' fontWeight='600' fontFamily='sans-serif' > 
            {airportToCity} 
            - {transformName(hasta)} 
            
            </Text>
          </Stack>
            <Text  fontSize='22px' fontWeight='600' fontFamily='sans-serif' >
              Departure date: <span style={{fontWeight:'normal', fontSize:'18px'}}>{formatDeparture||'2021/15/11'}</span>   
            </Text>
            <Text  fontSize='22px' fontWeight='600' fontFamily='sans-serif' > 
            Arrival date:  <span style={{fontWeight:'normal', fontSize:'18px'}}>{formatArrive||'2021/15/11'} </span>   
            </Text>
            <Text  fontSize='18px' fontWeight='600' fontFamily='sans-serif' > 
            Flight: <span style={{fontWeight:'normal', fontSize:'18px'}}>FO{selected.id.toString().slice(-4)} </span>     
            </Text>
            <Stack justifyContent='space-between' direction='row'>
              <Stack direction='row'>
              <IconsPers customColor='white' />
                <Text  fontSize='18px' fontWeight='600' fontFamily='sans-serif' > 
              {passengers} passengers     
              </Text>

            </Stack>
            <Divider orientation='vertical' height='20px' borderColor='orange' borderWidth='2px'/>
              <Stack direction='row' alignItems='center'>
                <Text  fontSize='18px' fontWeight='500' fontFamily='sans-serif' > 
                {formatPrice} 
                </Text>  
              </Stack>
              
            </Stack>
        </Stack>
      </Stack> 
    
    
    </>
  )
}