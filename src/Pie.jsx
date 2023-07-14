import Chart from "react-apexcharts";
import "./Footer.css"
export function Pie() {
   
    const options ={
      series:[4,6.05],
      labels:["finished training","Chapter A"],
      colors:["#FF0000","#008000"],
    
    };
    const series=[4,6.05];
    return (
        <div className="Pie">
        <p className="piename">Quiz Passing % </p>
     <Chart
      options={options}
      series={series}
      type="donut"
      width="400px"
      height="500px"
    
      />
 </div>
     
    )
  }
  
  
  