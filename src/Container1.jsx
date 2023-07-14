
import "./Footer.css"
import dot from "./picture/dot.png";
import arrow from "./picture/Arrow.png";
function Container1() {
  return (
    <div className="Container1">
        <div>
        <h4 className="container1_head">Monthly  Training  Activity</h4>
        <p className="container_head1"><img src={arrow}/>16% more enrolles this month</p>
        </div>
        <div>
            <div>
                <div className="container_img">
                <img src={dot}/>
                <h5 className="container1_head">Course a</h5>
                </div>
                <p className="detail">23 Workers Took This Course This Week</p>
            </div>
            <div>
            <div className="container_img">
                <img src={dot}/>
                <h5 className="container1_head">Course b</h5>
                </div>
            <p className="detail">253 Workers Took This Course This Week</p>
            </div>
            <div>
            <div className="container_img">
                <img src={dot}/>
                <h5 className="container1_head">Course c</h5>
                </div>
            <p className="detail">234 Workers Took This Course This Week</p>
            </div>
            <div>
            <div className="container_img">
                <img src={dot}/>
                <h5 className="container1_head">Course d</h5>
                </div>
            <p className="detail">239 Workers Took This Course This Week</p>
            </div>
            
        </div>
    
    </div>
  )
}

export default Container1
