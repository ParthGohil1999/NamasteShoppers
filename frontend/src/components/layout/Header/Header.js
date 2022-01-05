import React from 'react'
import { ReactNavbar } from "overlay-navbar";
import logo from "../../../images/logo.svg";

const options = {
    burgerColor: "grey",
    burgerColorHover: "#6a88e7",
    logo,
    logoWidth: "5vmax",
    logoHeight: "5vmax",
    navColor1: "#121218",
    navColor2: "#121218",
    navColor3: "#121218",
    navColor4: "#121218",
    logoHoverSize: "10px",
    logoHoverColor: "#6a88e7",
    link1Text: "Home",
    link2Text: "Products",
    link3Text: "Contact",
    link4Text: "About",
    link1Url: "/",
    link2Url: "/products",
    link3Url: "/contact",
    link4Url: "/about",
    link1Size: "1.3vmax",
    link1Color: "grey",
    nav1justifyContent: "flex-end",
    nav2justifyContent: "flex-end",
    nav3justifyContent: "flex-start",
    nav4justifyContent: "flex-start",
    link1ColorHover: "#6a88e7",
    link1Margin: "1vmax",
    profileIconUrl: "/login",
    profileIconColor: "grey",
    searchIconColor: "grey",
    cartIconColor: "grey",
    profileIconColorHover: "#6a88e7",
    searchIconColorHover: "#6a88e7",
    cartIconColorHover: "#6a88e7",
    cartIconMargin: "1vmax",
};
  
  const Header = () => {
    return <ReactNavbar {...options} />;
  };
  
  export default Header;
