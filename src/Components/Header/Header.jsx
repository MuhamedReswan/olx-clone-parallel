import React from "react";

import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "../../context/AuthContext";


function Header() {
const {user,logout}=UserAuth()
const navigate = useNavigate();

console.log("user from header",user);

const handleLogout = async()=>{
  await logout();
  navigate('/');
  
}

  return (
    <div className="headerParentDiv">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo></OlxLogo>
        </div>
        <div className="placeSearch">
          <Search></Search>
          <input type="text" />
          <Arrow></Arrow>
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff"></Search>
          </div>
        </div>
        <div className="language">
          <span> ENGLISH </span>
          <Arrow></Arrow>
        </div>
        <div className="loginPage">
        <span>{user ? `Welcome ${user.displayName}` : <Link className='login_link' to='/login'>Login</Link>}</span>

          <hr />
        </div>

        {user && <span className='logout_link' onClick={handleLogout}>Logout</span>}
        
<Link to='/add-post'>
        <div className="sellMenu">
          <SellButton></SellButton>
          <div className="sellMenuContent">
            <SellButtonPlus></SellButtonPlus>
            <span>SELL</span>
          </div>
        </div>
        </Link>
      </div>
    </div>
  );
}

export default Header;
