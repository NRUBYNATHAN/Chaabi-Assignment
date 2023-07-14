import Chart from "react-apexcharts";
import "./Footer.css"
import { useState } from "react";
export function Par() {
   const [state,setState]=useState(
    {
        options: {
            
          chart: {
            id: "bar"
          },
      
          xaxis: {
            categories: ["S", "M", "T", "W", "T", "F","S","M","T","W"]
          }
        },
        series: [
          {
            name: "series-1",
            data: [100,90,160,110,160,80,100,60,200,190]
          }
        ]
      }
   )
    return (
        <div className="Par">

          <div className="head">
          <p className="heading">Daily Training Completions</p>
          <p className="heading">Last 7 Days</p>
          </div>
       
        
     <Chart
      options={state.options}
      series={state.series}
      type="bar"
      width="350px"
      height="220px"
    
      />
        </div>
     
    )
  }
  
  
  
