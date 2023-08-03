import React from 'react'
import {  Flex, Image,Text} from '@chakra-ui/react'
import { useDetailsStore } from '../Data/data'

export const Destination = () => {
  const details = useDetailsStore(state =>(state))

  
  return (
    <>
    <div className='destination' id='destination'>
        <div id='moon'>
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
        <div className='destination-left'>
            <span className='heading-number'>
                01
            </span>
            <span className='heading-name'>
                PICK YOUR DESTINATION
            </span>
            <img className='moon-image' src={details?.destinations[0]?.images?.png} alt='moon'></img>
        </div>
        <div className='destination-right'>
          <div className='planet-names'>
             <a className='bright-number' href='#moon'>MOON </a>
             <a className='bright-number' href='#mars'>MARS</a>
             <a className='bright-number' href='#europa'>EUROPA</a>
             <a className='bright-number' href='#titan'>TITAN</a>
          </div>
          <div className='right-bottom-container'>
            <div className='planet-styles'>
              <div>{details?.destinations[0]?.name}</div>
            </div>
            <p className='planet-description'>{details?.destinations[0]?.description}</p>
          </div>
          <div className='border-bottom'>
          </div>
          <span>
            <div className='avg-distance'>
            AVG. DISTANCE
            </div>
            <div className='distance-km'>
            {details?.destinations[0]?.distance}
            </div>
          </span>
          <span>
            <div className='avg-time'>
            EST. TRAVEL TIME
            </div>
            <div className='time-days'>
            {details?.destinations[0]?.travel}
            </div>
          </span>
        </div>
            
{/* MARS DESTINATION */}

       </div >
       <div className='destination'>
       <div id='mars'>
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
       <div className='destination-left'>
           <span className='heading-number'>
               01
           </span>
           <span className='heading-name'>
               PICK YOUR DESTINATION
           </span>
           <img className='moon-image' src={details?.destinations[1]?.images?.png} alt='moon'></img>
       </div>
       <div className='destination-right'>
         <div className='planet-names'>
             <a className='bright-number' href='#moon'>MOON </a>
             <a className='bright-number' href='#mars'>MARS</a>
             <a className='bright-number' href='#europa'>EUROPA</a>
             <a className='bright-number' href='#titan'>TITAN</a>
         </div>
         <div className='right-bottom-container'>
           <div className='planet-styles'>
             <div>{details?.destinations[1]?.name}</div>
           </div>
           <p className='planet-description'>{details?.destinations[1]?.description}</p>
         </div>
         <div className='border-bottom'>
         </div>
         <span>
           <div className='avg-distance'>
           AVG. DISTANCE
           </div>
           <div className='distance-km'>
           {details?.destinations[1]?.distance}
           </div>
         </span>
         <span>
           <div className='avg-time'>
           EST. TRAVEL TIME
           </div>
           <div className='time-days'>
           {details?.destinations[1]?.travel}
           </div>
         </span>
       </div>
           
      </div>


{/* Europa destination */}


       <div className='destination'>
       <div id='europa' >
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
       <div className='destination-left'>
           <span className='heading-number'>
               01
           </span>
           <span className='heading-name'>
               PICK YOUR DESTINATION
           </span>
           <img className='moon-image' src={details?.destinations[2]?.images?.png} alt='moon'></img>
       </div>
       <div className='destination-right'>
         <div className='planet-names'>
             <a className='bright-number' href='#moon'>MOON </a>
             <a className='bright-number' href='#mars'>MARS</a>
             <a className='bright-number' href='#europa'>EUROPA</a>
             <a className='bright-number' href='#titan'>TITAN</a>
         </div>
         <div className='right-bottom-container'>
           <div className='planet-styles'>
             <div>{details?.destinations[2]?.name}</div>
           </div>
           <p className='planet-description'>{details?.destinations[2]?.description}</p>
         </div>
         <div className='border-bottom'>
         </div>
         <span>
           <div className='avg-distance'>
           AVG. DISTANCE
           </div>
           <div className='distance-km'>
           {details?.destinations[2]?.distance}
           </div>
         </span>
         <span>
           <div className='avg-time'>
           EST. TRAVEL TIME
           </div>
           <div className='time-days'>
           {details?.destinations[2]?.travel}
           </div>
         </span>
       </div>
           
      </div>

{/* TITAN DESTINATIOn */}
      


      <div className='destination'>
       <div id='titan' >
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
       <div className='destination-left'>
           <span className='heading-number'>
               01
           </span>
           <span className='heading-name'>
               PICK YOUR DESTINATION
           </span>
           <img className='moon-image' src={details?.destinations[3]?.images?.png} alt='moon'></img>
       </div>
       <div className='destination-right'>
         <div className='planet-names'>
             <a className='bright-number' href='#moon'>MOON </a>
             <a className='bright-number' href='#mars'>MARS</a>
             <a className='bright-number' href='#europa'>EUROPA</a>
             <a className='bright-number' href='#titan'>TITAN</a>
         </div>
         <div className='right-bottom-container'>
           <div className='planet-styles'>
             <div>{details?.destinations[3]?.name}</div>
           </div>
           <p className='planet-description'>{details?.destinations[3]?.description}</p>
         </div>
         <div className='border-bottom'>
         </div>
         <span>
           <div className='avg-distance'>
           AVG. DISTANCE
           </div>
           <div className='distance-km'>
           {details?.destinations[3]?.distance}
           </div>
         </span>
         <span>
           <div className='avg-time'>
           EST. TRAVEL TIME
           </div>
           <div className='time-days'>
           {details?.destinations[3]?.travel}
           </div>
         </span>
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