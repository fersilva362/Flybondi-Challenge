import { Icon } from '@chakra-ui/react'
import {BsFillPersonFill as person } from 'react-icons/bs'
export default function IconsPers ({customColor}){
  return( <Icon  boxSize={6} color={customColor} as={person}/>

  )
} 