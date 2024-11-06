// import React from "react";

// import "./Header.css";
// import OlxLogo from "../../assets/OlxLogo";
// import Search from "../../assets/Search";
// import Arrow from "../../assets/Arrow";
// import SellButton from "../../assets/SellButton";
// import SellButtonPlus from "../../assets/SellButtonPlus";
// import { Link, useNavigate } from "react-router-dom";
// import { UserAuth } from "../../context/AuthContext";

// function Header() {
// const {user,logout}=UserAuth()
// const navigate = useNavigate();

// console.log("user from header",user);

// const handleLogout = async()=>{
//   await logout();
//   navigate('/');

// }

//   return (
//     <div className="headerParentDiv">
//       <div className="headerChildDiv">
//         <div className="brandName">
//           <OlxLogo></OlxLogo>
//         </div>
//         <div className="placeSearch">
//           <Search></Search>
//           <input type="text" />
//           <Arrow></Arrow>
//         </div>
//         <div className="productSearch">
//           <div className="input">
//             <input
//               type="text"
//               placeholder="Find car,mobile phone and more..."
//             />
//           </div>
//           <div className="searchAction">
//             <Search color="#ffffff"></Search>
//           </div>
//         </div>
//         <div className="language">
//           <span > ENGLISH </span>
//           <Arrow></Arrow>
//         </div>
//         <div className="loginPage">
//         <span>{user ? `Welcome ${user.displayName}` : <Link className='login_link' to='/login'>Login</Link>}</span>

//           <hr />
//         </div>

//         {user && <span className='logout_link' onClick={handleLogout}>Logout</span>}

// <Link to='/add-post'>
//         <div className="sellMenu">
//           <SellButton></SellButton>
//           <div className="sellMenuContent">
//             <SellButtonPlus></SellButtonPlus>
//             <span>SELL</span>
//           </div>
//         </div>
//         </Link>
//       </div>
//     </div>
//   );
// }

// export default Header;

import React from "react";
import { FaSearch } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { UserAuth } from "../../context/AuthContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user, logout } = UserAuth();
  const navigate = useNavigate();

  console.log("user from header", user);

  const handleLogout = async () => {
    await logout();
    navigate("/");
  };
  return (
    <div className="inset-0 z-50  fixed grid grid-cols-9 w-full h-[4.5rem] bg-gray-200">
      <div className="col-span-2 flex items-center justify-center ml-4">
        <div className="mr-2">
          <img
            src="/olx-logo.png"
            className="w-[36px] h-[20px] sm:w-[42px] sm:h-[26px]"
            alt="olx"
          />
        </div>
        <div className="relative ml-2">
          <IoSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            className="text-base sm:text-xl pl-10 pr-10 h-[2.5rem] sm:h-[2.9rem] w-[10rem] sm:w-[14rem] border-2 border-green-900 focus:border-sky-300 focus:border-double rounded"
            placeholder="Location"
          />
          <IoIosArrowDown className="absolute h-5 w-5 sm:h-6 sm:w-6 right-3 top-1/2 transform -translate-y-1/2 text-gray-500" />
        </div>
      </div>

      <div className="relative col-span-4 flex items-center justify-center">
        <input
          type="text"
          placeholder="Find Cars, Mobile Phones and more..."
          className="grow  pl-4 sm:pl-5 text-base sm:text-xl w-[18rem] sm:w-[38rem] pr-10 h-[2.5rem] sm:h-[2.9rem] ms-4 sm:ms-8 border-solid border-2 border-green-900 rounded-l-sm focus:border-double"
        />
        <button className="h-[2.5rem] sm:h-[2.9rem] w-[2.5rem] sm:w-[2.7rem] flex items-center justify-center bg-green-950 rounded-r-lg">
          <FaSearch className="text-white text-lg sm:text-xl" />
        </button>
      </div>

      <div className="relative col-span-3 flex items-center justify-around">
        <div className="font-semibold">
          <p className="text-sm sm:text-base">ENGLISH</p>
          <IoIosArrowDown className="absolute h-5 w-5 sm:h-6 sm:w-6 top-1/2 transform -translate-y-1/2 left-[4rem] sm:left-[5rem]" />
        </div>
        <div className="font-semibold ml-3 sm:ml-6 flex justify-between">
          <p className=" text-sm sm:text-base flex justify-center items-center flex-col text-center">
            {user ? (
              <>
                <span>Welcome</span>
                <span>{user.displayName}</span>
              </>
            ) : (
              <Link className="login_link" to="/login">
                Login
              </Link>
            )}
          </p>

          {user && (
            <span
              className="pl-6 flex
           items-center"
              onClick={handleLogout}
            >
              Logout
            </span>
          )}
        </div>
        <div className="flex items-center justify-center">
          <Link to="/add-post">
            <img
              className="h-[45px] w-[70px] sm:h-[55px] sm:w-[90px]"
              src="/addButton.png"
              alt="Add Button"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
