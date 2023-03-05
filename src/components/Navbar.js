import {Stack,Image,Text,Box,Button} from '@chakra-ui/react'
import { useContext, useState } from 'react'
import logo from './assets/logo0.png'
import { FlyContext } from './Context'
import IconsPers from './Icons'
import { Link } from "react-router-dom";
import { AddIcon, MinusIcon,ArrowForwardIcon } from '@chakra-ui/icons'

export default function Navbar(){
  const {hasta,transformName,hideInNav,setHideInNav,passengers,setPassengers,airportToCity}=useContext(FlyContext)
  const [visPassenger,setVisPassenger]=useState(false)

  function handlePassenger(arg){
    const newPassengers=passengers+arg;
    if(newPassengers<1) return
    setPassengers(newPassengers)
  }
  
  return(
    <Stack width='100vw' bg='white' zIndex='2' position='fixed' top='0' >
      <Stack onClick={()=>setHideInNav(false)} spacing={6}  alignItems='center' direction='row' paddingX='20px'  minHeight='80px'
       boxShadow='md' bg='white'>
        <Link to='/'><Image cursor='pointer 'src={logo} width='170px' objectFit='contain'/></Link>
        <Text fontFamily='sans-serif' color='gray.700' fontSize='18px' >Your search</Text>
        <Stack  paddingTop='10px' paddingBottom='10px' direction='row' flexWrap='wrap'  gap='5px' justifyContent='center'>
        {/* link with origne/destinatin */}
        <Link to='/'>{  !hideInNav?
          (<Button  color='gray.700' fontFamily='sans-serif' letterSpacing='0.5px'size='md' _hover={{ bg: '#fcdc86' }} 
          borderColor='orange' borderWidth='2px' bg='#fdbe15'  fontWeight='normal' fontSize='18px' colorScheme='yellow' 
          variant='solid' borderRadius={9999} paddingX='30px' textTransform='initial'>
          From {airportToCity}
          </Button>):
          /* else */
          (<Button  color='gray.700' fontFamily='sans-serif' letterSpacing='0.5px'size='md' _hover={{ bg: '#fcdc86' }} 
          borderColor='orange' borderWidth='2px' bg='#fdbe15'  fontWeight='normal' fontSize='18px' colorScheme='yellow' 
          variant='solid' borderRadius={9999} paddingX='30px' textTransform='initial' onClick={()=>setHideInNav(false)}>
          {airportToCity}<ArrowForwardIcon />{transformName(hasta) }
          </Button>)    
        }
        </Link>

          <Button onClick={()=>setVisPassenger(!visPassenger)} 
          leftIcon={<IconsPers customColor='gray.500' />} color='gray.700'  
          fontFamily='sans-serif' letterSpacing='0.75px' size='md' _hover={{ bg: '#fcdc86', borderColor:'orange' }}
           borderColor='gray.200' borderWidth='2px' bg='gray.100'  
           fontWeight='normal' fontSize='18px' variant='solid' borderRadius={9999} paddingX='30px'>
             {passengers} Adult</Button>
        </Stack>
      </Stack>
      {visPassenger && 
      (<Stack   width='100%'   alignItems='center'>
        <Box width='100%' height='100vh' bg='gray.600' position='absolute' top='80px' zIndex='1' opacity='0.5' ></Box>
        <Stack width='420px' bg='white' position='absolute'  zIndex='2' borderWidth='2px' borderRadius='10px' boxShadow='md'
          paddingX='20px' paddingTop='30px' paddingBottom='15px'>
          <Stack direction='row' justifyContent='space-between'>
            <Stack spacing='-1' >
              <Text fontSize='22px' fontWeight='600' >Adultos</Text>
              <Text fontSize='19px'>12 años en adelante</Text>
            </Stack>
            <Stack display='flex' alignItems='center' direction='row' spacing='0' >
              <Button onClick={()=>handlePassenger(-1)} _hover={{ bg: '#fcdc86', border:'2px solid orange'  }}   borderRadius={9999} 
              borderColor='gray.700' borderWidth='2px' fontSize='14px' fontWeight='normal'  boxSize='50px' >
                <MinusIcon/>
              </Button>
              <Box fontSize='20px'  boxSize='50px' display='flex' alignItems='center' justifyContent='center'>{passengers}</Box> 
              <Button onClick={()=>handlePassenger(+1)} _hover={{ bg: '#fcdc86' }} borderRadius={9999} borderColor='orange.300'
               borderWidth='2px' fontSize='14px' fontWeight='normal' boxSize='50px'>
                 <AddIcon/>
              </Button>
            </Stack>          
          </Stack>
          <Stack paddingX='20px' paddingTop='10px'>
          <Button onClick={()=>setVisPassenger(!visPassenger)} _hover={{ bg: '#fcdc86' }} padding='25px' 
          fontSize='22px' fontWeight='700' borderWidth='2px' borderColor='orange' borderRadius='9999' 
          variant='outline'>Guardar</Button>
          </Stack>
        </Stack>                        
      </Stack>)  }
    </Stack>

  )
}