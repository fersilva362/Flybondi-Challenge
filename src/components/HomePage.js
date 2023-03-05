import {Stack,Text,Link } from '@chakra-ui/react'
import {useContext} from 'react'
import { FlyContext } from './Context'
/* import ChoiceOrigin from './ChoiceOrigin' */
import GridDestination from './GridDestination'


export default function HomePage(){
const {origen,airportToCity}=useContext(FlyContext)
  return(
    <Stack marginTop='80px'  padding='50px'>
      <Stack >
        <Text color='gray.700' fontSize='32px' fontWeight='600' fontFamily='sans-serif'>Where do you go?</Text>
        <Stack direction='row' alignItems='center'>
          <Text color='gray.700' fontSize='20px' fontWeight='normal' fontFamily='sans-serif' >Departure from {airportToCity}, you can visit {Object.keys(origen).length} cities.</Text>
          <Link color='orange'  href='/'  > <Text  fontSize='20px' textTransform='uppercase' fontWeight='400' >Change my departure city.</Text></Link>
        </Stack >
        
        <GridDestination/>
        
      </Stack>

    </Stack>

  )
}