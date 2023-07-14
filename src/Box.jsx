import "./Box.css";
import up from "./picture/up.png"
import down from "./picture/down.png"
function Box() {
  return (
    <div className="Box">
      <div className="total_box">
        <p className="box_num">In Training Workers</p>
        <div className="box_cen">
        <h3 className="box_num">3345</h3>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="128" height="80" viewBox="0 0 128 80" fill="none">
           <path d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5" fill="url(#paint0_linear_1_102)"/>
        <defs>
            <linearGradient id="paint0_linear_1_102" x1="63.75" y1="-3.05169e-05" x2="63.75" y2="88" gradientUnits="userSpaceOnUse">
            <stop stop-color="#018E42"/>
               <stop offset="1" stop-color="#F9F9F9"/>
            </linearGradient>
          </defs>
         </svg>
        </div>
        <div className="box_bot">
           <p className="upscale"><img src={up}/>20%</p>
            <p className="box_num">234</p>
          </div>
      </div>

      <div className="total_box">
        <p className="box_num">Video Watch-Time(Hrs)</p>
        <div className="box_cen">
        <h3 className="box_num">2433</h3>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="128" height="80" viewBox="0 0 128 80" fill="none">
          <path d="M-1.90735e-06 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5" fill="url(#paint0_linear_1_131)"/>
        <defs>
            <linearGradient id="paint0_linear_1_131" x1="63.75" y1="-3.05169e-05" x2="63.75" y2="88" gradientUnits="userSpaceOnUse">
              <stop stop-color="#ED1C24"/>
                <stop offset="1" stop-color="#F9F9F9"/>
            </linearGradient>
        </defs>
        </svg>
        </div>
        
        <div className="box_bot">
           <p className="downscale"><img src={down}/>20%</p>
            <p className="box_num">435</p>
          </div>
      </div>

      <div className="total_box">
        <p className="box_num">% Workers Passing Quiz</p>
        <div className="box_cen">
        <h3 className="box_num">95 %</h3>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="128" height="80" viewBox="0 0 128 80" fill="none">
           <path d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5" fill="url(#paint0_linear_1_102)"/>
        <defs>
            <linearGradient id="paint0_linear_1_102" x1="63.75" y1="-3.05169e-05" x2="63.75" y2="88" gradientUnits="userSpaceOnUse">
            <stop stop-color="#018E42"/>
               <stop offset="1" stop-color="#F9F9F9"/>
            </linearGradient>
          </defs>
         </svg>
        </div>
        
        <div className="box_bot">
           <p className="upscale"><img src={up}/>20%</p>
            <p className="box_num">24%</p>
          </div>
      </div>

      <div className="total_box">
        <p className="box_num">Avg.Days Taken</p>
        <div className="box_cen">
        <h3 className="box_num">6</h3>
        <svg className="svg" xmlns="http://www.w3.org/2000/svg" width="128" height="80" viewBox="0 0 128 80" fill="none">
           <path d="M0 79.5L21.2505 12.38L43.5 40H58.5L85.258 0.300018L106.594 28.94L127.5 79.5" fill="url(#paint0_linear_1_102)"/>
        <defs>
            <linearGradient id="paint0_linear_1_102" x1="63.75" y1="-3.05169e-05" x2="63.75" y2="88" gradientUnits="userSpaceOnUse">
            <stop stop-color="#018E42"/>
               <stop offset="1" stop-color="#F9F9F9"/>
            </linearGradient>
          </defs>
         </svg>
        </div>
        
        <div className="box_bot">
           <p className="upscale"><img src={up}/>20%</p>
            <p className="box_num">3</p>
          </div>
      </div>
    </div>
  )
}

export default Box
