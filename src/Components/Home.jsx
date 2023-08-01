import {  Flex, Image,Text} from '@chakra-ui/react'
import React from 'react'

export const Home = () => {
  return (
    <div className='home'>
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
         <div className='left-container'> 
            <div className='text-1'>
              SO, YOU WANT TO TRAVEL TO
            </div>
            <div className='text-2'>
              SPACE
            </div>
            <div className='text-3'>
              Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!
            </div>
         </div>
         <div className='right-container'>
            <img src='Images/Home/Group.png' alt='group'></img>
         </div>
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



