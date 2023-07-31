import React from 'react'
import {  Flex, Image,Text} from '@chakra-ui/react'
import { detailsStore } from '../Data/data'

export const Destination = () => {
  const details = detailsStore(state =>console.log(state))
  return (
    <div className='destination'>
        <div >
            <Image src='Images/Home/Group2.png' p={'3.5rem'} />
            <Flex sx={flexStyles}>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
            <Text as='span' fontWeight={'thick'} fontFamily={'fantasy'}>
              00
            </Text>
            <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              HOME
            </Text>
            </Text>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
            <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              01
            </Text>
            <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              Destination
            </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
            <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              02
            </Text>
            <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              CREW
            </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
            <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              03
            </Text>
            <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              TECHNOLOGY
            </Text>
            </Text>
            </Flex>
        </div>
        <div className='destination-left'>
            <span className='heading-number'>
                01
            </span>
            <span className='heading-name'>
                PICK YOUR DESTINATION
            </span>

        </div>
            
       </div>
  )
}

const flexStyles = {
    color:'white',
    position:"relative",
    left:'68rem' ,
    bottom:'8rem' ,
    justifyContent:'space-around',
    width:'700px',
    background: 'rgba(255, 255, 255, 0.04)'
  }