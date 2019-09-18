import React,{Component} from 'react';
// import Trainees from './components/Trainees';
// import Branches from './components/Branches';
// import Reports from './components/Reports';
// import Settings from './components/Settings';

class Navigation extends React.Component{

  getstyle = ()=>{
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted'
          }
        }

    render(){
        return(
            <div style = {this.getstyle()}>
              <p>Hello, I am Navigation</p>
              <section id="sideMenu">
              <nav>
        <table>
        <tr><a href="/app">Dashboard</a></tr>
        <tr><a href="/trainees">Trainees</a></tr>
        <tr><a href="/branches">Branches</a></tr>
        <tr><a href="/reports">Reports</a></tr>
        <tr><a href="/settings">Settings</a></tr>
        </table>
      </nav>

    </section>
    </div>
        );
    }
}
export default Navigation;
