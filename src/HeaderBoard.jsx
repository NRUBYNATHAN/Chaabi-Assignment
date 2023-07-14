
import "./HeaderBoard.css"
import { TypeAnimation } from 'react-type-animation';
function HeaderBoard() {
  return (
       <div  className="header_board">
        {/* <div className="header_board">
        <h1 className="Name">Hello,Rubynathan</h1>
        <p className="Head_dec">Following is Your Organizations Perfomance Summary </p>
        </div> */}
        <div className="Naming">
        <span className="bold">Hello, </span>
        
        <TypeAnimation
          sequence={[
            'Rubynathan',
            2000,
           'Welcome',
           2000,
          
          ]}
          speed={50}
         
          wrapper="span"
          repeat={Infinity}
        /> 
        </div>
         <p className="Head_dec">Following is Your Organizations Perfomance Summary </p>
        
        

        </div>
  )
}

export default HeaderBoard
