import React,{Component} from 'react';
import Chart from 'react-apexcharts';

class BarFailed extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            horizontal: true,
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: [ 'Failed'],
        }
      },
      series: [{
        data: [10]
      }],
    }
  }

  render() {
    return (
      <div id="chart">
        <Chart options={this.state.options} series={this.state.series} type="bar" height="100" />
      </div>


    );
  }
}

export default BarFailed;
