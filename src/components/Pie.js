import React,{Component} from 'react';
import Chart from 'react-apexcharts';



class  Pie extends Component{

      constructor(props) {
        super(props);

        this.state = {
          options: {
            labels: ['Team A', 'Team B', 'Team C', 'Team D'],
            responsive: [{
              breakpoint: 480,
              options: {
                chart: {
                  width: 200
                },
                legend: {
                  position: 'bottom'
                }
              }
            }]
          },
          series: [44, 55, 13, 22],
        }
      }

      render() {
        return (
          <div id="pie">
            <p><b> this is a table pie</b></p>
            <Chart options={this.state.options} series={this.state.series} type="pie" width="380" />
          </div>
        );
      }
    }

export default Pie;


// {PostData.map((postDetails, modules_failed)=>{
//   return <h2>{postDetails.area}</h2>
// })}
