import React,{useState} from "react";
import '../components/Nav.css'
// import { NavLink } from "react-router-dom";
import HomeIcon from '@material-ui/icons/Home';
import LaptopIcon from '@material-ui/icons/Laptop';
import InfoIcon from '@material-ui/icons/Info';
import ContactMailIcon from '@material-ui/icons/ContactMail';
import Logo from '../img/Logo CrossFire.png';
import {Link} from 'react-scroll';
const Navbar = () => {

  const [navbar,SetnavBar] = useState(false)

  const ChangeBackground = () => {
    if(window.scrollY >= 597){
      SetnavBar(true)
    }else{
      SetnavBar(false)
    }
  }
  
  window.addEventListener('scroll',ChangeBackground)


  return (


    <div className="container-fluid nav_bg">
    <div className="row">
    <div className="col-12 mx-auto">
    
    <nav className={navbar ? "navbar navbar-expand-lg navbar-light bg-light active" : "navbar navbar-expand-lg "}>
  <div className="container-fluid">
    <Link className="navbar-brand" to="home"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}><span className="logo"><img src={Logo} alt="Logo"/></span> CrossFire Ltd. </Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ml-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link  aria-current="page" className="nav-link active" to="home"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false} ><HomeIcon/> Home</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link " to="Services"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}><LaptopIcon/>  Services</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="about"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}><InfoIcon/>  About</Link>
        </li>
        <li className="nav-item">
          <Link  className="nav-link" to="contact"
      spy={true}
      smooth={true}
      offset={50}
      duration={500}
      isDynamic={true}
      ignoreCancelEvents={false}><ContactMailIcon/>  Contact</Link>
        </li>
  
      </ul>
      
    </div>
  </div>
</nav>
 </div>
    </div>




    </div>
  );
};

export default Navbar;
