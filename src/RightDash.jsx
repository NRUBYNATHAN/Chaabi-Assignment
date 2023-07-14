import Box from './Box'
import  Charts  from './Charts'
import Footer from './Footer'
import HeaderBoard from './HeaderBoard'

import "./RightDash.css"
function RightDash() {
  return (
    <div className='Rightdash'>
      <HeaderBoard/>
      <div className='main'>
      <Box/>
      <Charts/>
      <Footer/>
      </div>
   
      
     
    </div>
  )
}

export default RightDash
