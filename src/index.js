import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Router, Route,broweserHistory,IndexRoute} from "react-router";
import {Branches} from './components/Branches';
import {Trainees} from './components/Trainees';
import {Reports} from './components/Reports';
import {Settings} from './components/Settings';
import {Dashboard} from './components/Dashboard';


// class App extends React.Component{
//   render(){
//     return(
//       <Router history={broweserHistory}>
//         <Route path{"/"} component={}>
//           <IndexRoute component={Dashboard}/>
//           <Route path{"app"} component={Dashboard}>
//           <Route path{"trainees"} component={Trainees}>
//           <Route path{"branches"} component={Branches}>
//           <Route path{"reports"} component={Reports}>
//           <Route path{"settings"} component={Settings}>
//         </Route>
//         <Route>path={"home-single"} component={Dashboard}</Route>
//       </Router>
//     );
//   }
// }



ReactDOM.render(<App />, document.getElementById('root'));
