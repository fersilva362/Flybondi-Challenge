
import { TbPlaneInflight as avion } from "react-icons/tb";
import { Icon } from '@chakra-ui/react'
import { useContext } from "react"
import { FlyContext } from "./Context"
import{Stack, Text, Divider, Center} from '@chakra-ui/react'
import IconsPers from './Icons'
import { CheckIcon,ArrowForwardIcon } from '@chakra-ui/icons'

export default function Purchase (){
  const {passengers, active,transformName, price}=useContext(FlyContext)
  return (
    <Center padding='100px'>
       <Stack  color='white' width='600px' bg='#4f4c4d' padding='20px'  borderRadius='md' 
    right='40px'>
          <Text color='white'  fontFamily='sans-serif' fontSize='22px'
           letterSpacing='1px' >Congratulations! <br/> Your flight info is: </Text>
          <Divider width='100%' borderColor='orange' borderWidth='2px'/>
          <Stack alignItems='center' padding='0px'  direction='row'>
            <Icon color='white' as={avion} boxSize='40px' /> 

            <Text  fontSize='22px' fontWeight='600' fontFamily='sans-serif' > 
             {transformName(active.origin)} (<span style={{fontWeight:'normal'}}>{active.origin}</span>)
            - {transformName(active.destination)} (<span style={{fontWeight:'normal'}}>{active.destination}</span>)
            
            </Text>
            <CheckIcon boxSize={6} color='orange' />
          </Stack>
          {/* Salida data */}
          <Stack direction='row' alignItems='center' justifyContent='space-between'>
            <Text  fontSize='22px'  fontFamily='sans-serif' >
              Departure date: <span style={{fontWeight:'normal', fontSize:'18px'}}>
                {active.dateSalida}</span> 
            </Text>
            <Text  fontSize='18px'  > From: <span>{active.origin}</span>
              
             <ArrowForwardIcon/> {active.destination}             
            </Text>
          </Stack>
            

            {/* Llegada data */}
            <Stack direction='row' alignItems='center' justifyContent='space-between'>
              <Text  fontSize='22px'  fontFamily='sans-serif' > 
            Arrival date:  <span style={{fontWeight:'normal', fontSize:'18px'}}>
            {active.dateLlegada}</span>   
            </Text>
            <Text  fontSize='18px'  > From: <span>{active.destination}</span>
             <ArrowForwardIcon/>{active.origin}
                            
            </Text>

            </Stack>
            
            <Text  fontSize='18px'  fontFamily='sans-serif' > 
            Flight: <span style={{fontWeight:'normal', fontSize:'18px'}}>FO{active.id.toString().slice(-4)}</span>     
            </Text>
            {/* passengers */}
            <Stack justifyContent='space-between' direction='row'>
              <Stack direction='row'>
              <IconsPers customColor='white' />
                <Text  fontSize='18px'  fontFamily='sans-serif' > 
              {passengers} passengers     
              </Text>

            </Stack>
            <Divider orientation='vertical' height='20px' borderColor='orange' borderWidth='2px'/>
              <Stack direction='row' alignItems='center'>
                <Text  fontSize='18px'  fontFamily='sans-serif' > 
                Final price: {price }
                </Text>  
              </Stack>
              
            </Stack>
        </Stack>


    </Center>
   
  )
}