import Chart from "react-apexcharts";
import "./Charts.css"
import { useState } from "react";
export function Line() {
   const [state,setState]=useState(
    {
        options: {
            
          chart: {
            id: "bar"
          },
        
          xaxis: {
            categories: ["3 Jun", "4 Jun", "5 Jun", "6 Jun", "7 Jun", "8 Jun","9 Jun","10 Jun","11 Jun","12 Jun","13 Jun","14 Jun"]
          }
        },
        series: [
          {
            name: "series-1",
            data: [100,150,160,210,260,180,190,60,220,300,350,390]
          }
        ]
      }
   )
    return (
        <div className="Line">
            <div className="head1">
            <p className="head">Last 14 Days Active Workers In Training</p>
            <p className="head">Last 14 Days</p>
            </div>
        
     <Chart
      options={state.options}
      series={state.series}
      type="bar"
      width="800px"
      height="200px"
    
      />
        </div>
     
    )
  }
  
  
  
