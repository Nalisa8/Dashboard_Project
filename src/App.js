import React,{Component} from 'react';
import Chart from 'react-apexcharts';
import Header from './components/Header';
import Dashboard from './components/Dashboard';
import Pie from './components/Pie';
import BarPassed from './components/BarPassed';
import BarInProgress from './components/BarInProgress';
import BarFailed from './components/BarFailed';
import Navigation from './components/Navigation';
import ListBranches from './components/ListBranches';
// import PostData from '../data/sample.json';
import './App.css';



class App extends Component {

  render(){
    return(
      <div className='App'>
      <h1>Dashboard</h1>
        <Dashboard/>
        <Header/>
        <BarPassed/>
        <BarInProgress/>
        <BarFailed/>
        <Navigation/>
        <Pie/>
        <ListBranches/>
    </div>
    )
  }
}

export default App;
