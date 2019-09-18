import React,{Component} from 'react';


class  Header extends React.Component{

    render(){
        return(
    <div style={{backgroundColor:'#43C747'}}>
    <p>Hello, I am the Header</p>
    <div class="search" style={{backgroundColor:'#B7E2B8'}}>
      <input type="text" name="title"/>
    </div>
    <div class="user-field">
      <a>+ add</a>
    </div>
      <a>
      <span class="circle">3</span>
      </a>
      <div class="user-img">
      <a>
        profile
      </a>
      </div>
      </div>
        );
    }
}
export default Header;
