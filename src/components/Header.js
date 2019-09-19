import React, { Component } from "react";
import Logo from "../assets/logo.svg";
import ProfileIcon from "../assets/round_account_circle.png";
class Header extends Component {
  render() {
    return (
      <header>
        <img src={Logo} className="logo"></img>
        <div className="profile">
          <a href="#">Meu Perfil</a>
          <img src={ProfileIcon}></img>
        </div>
      </header>
    );
  }
}
export default Header;
