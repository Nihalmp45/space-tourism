import React from 'react'
import {  Flex, Image,Text} from '@chakra-ui/react'
import './technology.css'
import { useDetailsStore } from '../Data/data'

const Technology = () => {
    const details = useDetailsStore((state)=>state)
  return (
    <>
    <div className='technology' id='launch-vehicle'>
       
        <div id='technology'>
        <Image src='Images/Home/Group2.png' p={'3.5rem'}  />
         <Flex sx={flexStyles}>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'thick'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#home'>00</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
                <a className='dim-names' href='#home'>HOME</a>
              </Text>
            </Text>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#destination'>01</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
                <a className='dim-names' href='#destination'>Destination</a>
              </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#crew'>02</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              <a className='dim-names' href='#crew'>CREW</a>
              </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#technology'>03</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              <a className='dim-names' href='#technology'>TECHNOLOGY</a>
              </Text>
            </Text>
         </Flex>
        </div>
        <div className='crew-left'>
            <span className='crew-number'>
                03
            </span>
            <span className='crew-name'>
                SPACE LAUNCH 101
            </span>
            <div className='technology-terminology'>
                Terminology
            </div>
            <div className='technology-name'>
            {details?.technology[0]?.name}
            </div>
            <div className='technology-description'>
            {details?.technology[0]?.description}      
            </div>
            <div className='navigator'>
                <a href='#launch-vehicle'><img className='navigating-circle-active' alt='circle' src='Images/Technology/Group 3.png'></img></a>
                <a href='#port'><img className='navigating-circle-inactive' alt='circle' src='Images/Technology/Group2notselected.png'></img></a>
                <a href='#capsule'><img className='navigating-circle-inactive' alt='circle' src='Images/Technology/Group3notselected.png'></img></a>
            </div>
        </div>
        <div className='technology-right'>
            <img className='technology-image' alt='tech-img' src={details?.technology[0]?.images?.portrait}></img>
        </div>
    </div>


{/* spaceport */}


    <div className='technology'>
       
       <div id='port'>
       <Image src='Images/Home/Group2.png' p={'3.5rem'} />
         <Flex sx={flexStyles}>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'thick'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#home'>00</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
                <a className='dim-names' href='#home'>HOME</a>
              </Text>
            </Text>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#destination'>01</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
                <a className='dim-names' href='#destination'>Destination</a>
              </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#crew'>02</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              <a className='dim-names' href='#crew'>CREW</a>
              </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#technology'>03</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              <a className='dim-names' href='#technology'>TECHNOLOGY</a>
              </Text>
            </Text>
         </Flex>
       </div>
       <div className='crew-left'>
           <span className='crew-number'>
               03
           </span>
           <span className='crew-name'>
               SPACE LAUNCH 101
           </span>
           <div className='technology-terminology'>
               Terminology
           </div>
           <div className='technology-name'>
           {details?.technology[1]?.name}
           </div>
           <div className='technology-description'>
           {details?.technology[1]?.description}      
           </div>
           <div className='navigator'>
                <a href='#launch-vehicle'><img className='navigating-circle-inactive' alt='circle' src='Images/Technology/Group1notselected.png'></img></a>
                <a href='#port'><img className='navigating-circle-active' alt='circle' src='Images/Technology/Group2selected.png'></img></a>
                <a href='#capsule'><img className='navigating-circle-inactive' alt='circle' src='Images/Technology/Group3notselected.png'></img></a>
           </div>
       </div>
       <div className='technology-right'>
           <img className='technology-image' alt='tech-img' src={details?.technology[1]?.images?.portrait}></img>
       </div>
   </div>


{/* spaceport */}


   <div className='technology'>
       
       <div id='capsule'>
       <Image src='Images/Home/Group2.png' p={'3.5rem'} />
         <Flex sx={flexStyles}>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'thick'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#home'>00</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
                <a className='dim-names' href='#home'>HOME</a>
              </Text>
            </Text>
            <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#destination'>01</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
                <a className='dim-names' href='#destination'>Destination</a>
              </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#crew'>02</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              <a className='dim-names' href='#crew'>CREW</a>
              </Text>
            </Text> <Text cursor={'pointer'} p={'1rem'} letterSpacing={'2px'} >
              <Text as='span' fontWeight={'bold'} fontFamily={'fantasy'}>
              <a className='bright-number' href='#technology'>03</a>
              </Text>
              <Text as='span' fontWeight={'thin'} opacity={'0.7'} paddingLeft={'12px'} fontFamily={'fantasy'}>
              <a className='dim-names' href='#technology'>TECHNOLOGY</a>
              </Text>
            </Text>
         </Flex>
       </div>
       <div className='crew-left'>
           <span className='crew-number'>
               03
           </span>
           <span className='crew-name'>
               SPACE LAUNCH 101
           </span>
           <div className='technology-terminology'>
               Terminology
           </div>
           <div className='technology-name'>
           {details?.technology[2]?.name}
           </div>
           <div className='technology-description'>
           {details?.technology[2]?.description}      
           </div>
           <div className='navigator'>
                <a href='#launch-vehicle'><img className='navigating-circle-inactive' alt='circle' src='Images/Technology/Group1notselected.png'></img></a>
                <a href='#port'><img className='navigating-circle-inactive' alt='circle' src='Images/Technology/Group2notselected.png'></img></a>
                <a href='#capsule'><img className='navigating-circle-active' alt='circle' src='Images/Technology/Group3selected.png'></img></a>
           </div>
       </div>
       <div className='technology-right'>
           <img className='technology-image' alt='tech-img' src={details?.technology[2]?.images?.portrait}></img>
       </div>
   </div>
    </>
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

export default Technology