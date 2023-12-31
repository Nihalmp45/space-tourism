import React from 'react'
import {  Flex, Image,Text} from '@chakra-ui/react'
import './crew.css'
import { useDetailsStore } from '../Data/data'

const Crew = () => {
    const details = useDetailsStore(state => state)

  return (
    <>
    <div className='crew' id='crew'>
       
        <div id='hurley'>
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
            <a href='#hurley'><img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#mark'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#victor'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#ansari'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            </div>
        </div>
        <div className='crew-right'>
            <img className='commander-image' alt='commander' src={details?.crew[0]?.images?.png}></img>
        </div>
    </div>


{/* Crew Mark */}


    <div className='crew'>
       
       <div id='mark'>
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
            <a href='#hurley'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#mark'><img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#victor'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#ansari'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
           </div>
       </div>
       <div className='crew-right'>
           <img className='commander-image' alt='commander' src={details?.crew[1]?.images?.png}></img>
       </div>
   </div>


   {/* Crew Victor */}


   <div className='crew'>
       
       <div id='victor'>
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
            <a href='#hurley'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#mark'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#victor'><img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#ansari'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
           </div>
       </div>
       <div className='crew-right'>
           <img className='commander-image' alt='commander' src={details?.crew[2]?.images?.png}></img>
       </div>
   </div>


   {/* Crew Ansari */}



   <div className='crew'>
       
       <div id='ansari'>
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
            <a href='#hurley'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#mark'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#victor'><img className='oval-blank' src='Images/Crew/Oval.png' alt='oval'></img></a>
            <a href='#ansari'><img className='oval-selected' src='Images/Crew/Oval.png' alt='oval'></img></a>
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