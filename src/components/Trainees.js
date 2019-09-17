import React from 'react';
// import {broweserHistory} from "react-router";

class  Trainees extends React.Component{
    onNavigateHome(){
      // broweserHistory.push("/dashboard")
    }
    render(){
        return(
            <div>
                <h3>Trainees</h3>
                <button onClick={this.onNavigateHome} className= "btn btn-primary">Dashboard</button>
                </div>

        );
    }
}
export default Trainees;
