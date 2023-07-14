import Chart from "react-apexcharts";
import "./Charts.css"
export function Donut() {
   
    const options ={
      series:[6.2,6.05,2,6,10.5],
      labels:["finished training","Chapter A","Chapter B","Chapter C","Haven't Started Yet"],
      colors:["#B2BEB5","#287872","#E7DECC","#B2BEB5","#849028",],
      plotOptions:{
        pie:{
          expandOnClick:false,
          donut:{
            size:"50px",
            labels:{
              show:true,
              Text:"hello",
              total:{
                show:true,
                showAlways:true,
                fontSize:"20px",
                backgroundcolor:"#2787AB",
                color:"#B2BEB5"
              }
            }
          }
        }
      }
    };
    const series=[6.2,6.05,2,6,10.5];
    return (
        <div className="Donut">
        <p className="head">chpter wise status</p>
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
  
  
  