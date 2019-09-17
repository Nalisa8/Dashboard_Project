import React,{Component} from 'react';
import Chart from 'react-apexcharts';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Bar from './components/Bar';
import Navigation from './components/Navigation';
import Pie from './components/Pie';
import Trainees from './components/Trainees';
import Branches from './components/Branches';
import Reports from './components/Reports';
import Settings from './components/Settings';
import './App.css';


class App extends Component {
  render(){
    return(
      <div className='App'>
        <Dashboard/>
        <Header/>
        <Bar/>
    </div>

    )
  }

}

export default App;
