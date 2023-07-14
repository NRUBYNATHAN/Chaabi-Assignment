import image from "./picture/chappilogo.png";
import Dash from "./picture/Category.png";
import training from "./picture/Game.png";
import user from "./picture/Ticket Star.png";
import location from "./picture/Location.png";

import "./LeftDash.css";

function LeftDash() {
  return (
    <div className="left_dash">
      <div className="dash_logo">
      <img className="logo_img" src={image}/>
      </div>
      <div className="dash_btns">
        <div className="btns1">
        <img className="dash_icon" src={Dash}/>
        <p>Dashboard</p>
        </div>
        <div className="btns">
        <img className="dash_icon" src={training}/>
        <p>Trainings</p>
        </div>
        <div className="btns">
        <img className="dash_icon" src={user}/>
        <p>Users</p>
        </div>
        <div className="btns">
        <img className="dash_icon" src={location}/>
        <p>Analytics</p>
        </div>
        <div className="btns">
        <img className="dash_icon" src={location}/>
        <p>My Account</p>
        </div>
        <div className="btns">
        <img className="dash_icon"src={location}/>
        <p>Support</p>
        </div>
       
      </div>
    
    </div>
  )
}

export default LeftDash
