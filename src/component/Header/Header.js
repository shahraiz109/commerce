import React from 'react'
import { ReactNavbar } from 'overlay-navbar';
import { FaSearch, FaUserCircle } from "react-icons/fa"
import { FiShoppingBag } from "react-icons/fi";
import logo from "../../images/assets/logo.png"


const Header = () => {
    return (
        <>
            <ReactNavbar
                burgerColorHover="#eb4034"
                logo={logo}
                logoWidth="20vmax"
                navColor1="white"
                logoHoverSize="10px"
                logoHoverColor="#eb4034"
                link1Text="Home"
                link2Text="Product"
                link3Text="Contact"
                link4Text="About"
                link1Url="/"
                link2Url="/product"
                link3Url="/contact"
                link4Url="/about"
                link1Size="1.3vmax"
                link1Color="rgba(35, 35, 35,0.8)"
                nav1justifyContent="flex-end"
                nav2justifyContent="flex-end"
                nav3justifyContent="flex-start"
                nav4justifyContent="flex-start"
                link1ColorHover="#eb4034"
                link1Margin="1vmax"
                profileIcon={true}
                ProfileIconElement={FaUserCircle}
                profileIconUrl="/login"
                profileIconColor="rgba(35, 35, 35,0.8)"
                profileIconColorHover="#eb4034"
                searchIcon={true}
                SearchIconElement={FaSearch}
                searchIconColor="rgba(35, 35, 35,0.8)"
                searchIconColorHover="#eb4034"
                cartIcon={true}
                CartIconElement={FiShoppingBag}
                cartIconColor="rgba(35, 35, 35,0.8)"
                cartIconColorHover="#eb4034"
                cartIconMargin="1vmax"
            />
        </>
    )
}

export default Header