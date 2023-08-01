import React from 'react'
import {  Flex, Image,Text} from '@chakra-ui/react'
import './crew.css'
import { useDetailsStore } from '../Data/data'

const Crew = () => {
    const details = useDetailsStore(state => state)

  return (
    <>
    <div className='crew'>
       
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
        <div className='crew-left'>
            <span className='crew-number'>
                02
            </span>
            <span className='crew-name'>
                MEET YOUR CREW
            </span>
            <div className='commander'>
                COMMANDER
            </div>
            <div className='commander-name'>
            {details?.crew[0]?.name}
            </div>
            <div className='commander-description'>
            {details?.crew[0]?.bio}      
            </div>
            <div className='oval-group'>
            <img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img>
            <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
            <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
            <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
            </div>
        </div>
        <div className='crew-right'>
            <img className='commander-image' alt='commander' src={details?.crew[0]?.images?.png}></img>
        </div>
    </div>


{/* Crew Mark */}


    <div className='crew'>
       
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
       <div className='crew-left'>
           <span className='crew-number'>
               02
           </span>
           <span className='crew-name'>
               MEET YOUR CREW
           </span>
           <div className='commander'>
               COMMANDER
           </div>
           <div className='commander-name'>
           {details?.crew[1]?.name}
           </div>
           <div className='commander-description'>
           {details?.crew[1]?.bio}      
           </div>
           <div className='oval-group'>
           <img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           </div>
       </div>
       <div className='crew-right'>
           <img className='commander-image' alt='commander' src={details?.crew[1]?.images?.png}></img>
       </div>
   </div>


   {/* Crew Victor */}


   <div className='crew'>
       
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
       <div className='crew-left'>
           <span className='crew-number'>
               02
           </span>
           <span className='crew-name'>
               MEET YOUR CREW
           </span>
           <div className='commander'>
               COMMANDER
           </div>
           <div className='commander-name'>
           {details?.crew[2]?.name}
           </div>
           <div className='commander-description'>
           {details?.crew[2]?.bio}      
           </div>
           <div className='oval-group'>
           <img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           </div>
       </div>
       <div className='crew-right'>
           <img className='commander-image' alt='commander' src={details?.crew[2]?.images?.png}></img>
       </div>
   </div>


   {/* Crew Ansari */}



   <div className='crew'>
       
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
       <div className='crew-left'>
           <span className='crew-number'>
               02
           </span>
           <span className='crew-name'>
               MEET YOUR CREW
           </span>
           <div className='commander'>
               COMMANDER
           </div>
           <div className='commander-name'>
           {details?.crew[3]?.name}
           </div>
           <div className='commander-description'>
           {details?.crew[3]?.bio}      
           </div>
           <div className='oval-group'>
           <img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           <img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img>
           </div>
       </div>
       <div className='crew-right'>
           <img className='commander-image' alt='commander' src={details?.crew[3]?.images?.png}></img>
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


export default Crew