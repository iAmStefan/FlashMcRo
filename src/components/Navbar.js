import React from 'react'
import './css/Navbar.css'
import { NavLink } from 'react-router-dom'
import logo from '../icon.png'

class Navbar extends React.Component {

    constructor() {
      super();
      this.state={
          show:true
      }
    }
    render() {
      return (
        <div className="container-fluid">
          <div className="row">
            <div className="menu no-padding">
              <div className="logo">
                <a href="/"><img src={logo} alt="" /></a>
              </div>
              <div onClick={()=>{this.setState({show:!this.state.show})}} className="showHide">
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
              </div>
              {
                this.state.show? <ul> 
                    <li alt="flash-mc-ro home section" title="flash-mc-ro home section"><NavLink exact to="/" className="navigation" activeClassName="navigation-active">Acasă</NavLink></li>
                    <li alt="flash-mc-ro forum section" title="flash-mc-ro forum section"><NavLink exact to="/forum" className="navigation" activeClassName="navigation-active">Forum</NavLink></li>
                    <li alt="flash-mc-ro vote section" title="flash-mc-ro vote section"><NavLink exact to="/vot" className="navigation" activeClassName="navigation-active">Votează</NavLink></li>
                  </ul> : null }
            </div>
          </div>
        </div>
      )
    }
  }
  
  export default Navbar
  