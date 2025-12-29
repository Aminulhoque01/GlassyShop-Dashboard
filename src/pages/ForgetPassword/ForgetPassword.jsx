import { Link, NavLink } from "react-router";

import logo from "../../assets/logo-light-full.png";
import login from "../../assets/loginlogo.svg";
import { IoIosLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
 

 

const ForgetPassword = () => {
  

  return (
    <section className=" w-full  bg-white  h-[100vh]">
      <header className="w-full fixed top-0 left-0  px-4 py-2 flex items-center justify-between">
        <Link to="/">
          <img src={logo} alt="" className="w-[200px]" />
        </Link>

        <div className="flex items-center gap-2">
          <NavLink to="/login" exact={true} activeClassName="isActive">
            <Button className="!cursor-pointer flex gap-2 !rounded-full !text-[rgba(0,0,0,0.8)] !px-5  ">
              <IoIosLogIn className="flex gap-2" /> Login
            </Button>
          </NavLink>
          <NavLink to="/signup" exact={true} activeClassName="isActive">
            <Button className="!cursor-pointer flex gap-2 !rounded-full !text-[rgba(0,0,0,0.8)] !px-5  ">
              <FaRegUserCircle className="flex gap-2" /> Sign up
            </Button>
          </NavLink>
        </div>
      </header>

      <div className="loginBox card w-[600px] h-auto mx-auto pt-20 relative z-50">
        <div className="text-center  ">
          <img src={login} alt="" className="m-auto " />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Having trouble to sing in ?   <br />
          <span className="text-blue-600">Reset your password</span>
        </h1>

        

     

        <br />
        <form className="w-full px-8 mt-3">
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input type="email" className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
             rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3" placeholder="Enter your Email"/>
          </div>

           

            

           <Button className="btn-blue btn-lg w-full">Reset Password</Button>
           <br />
           <br />
           <div className="text-center flex items-center justify-center gap-4">
            <span>Don't want to reset ?</span>
            <Link to="/signup" className="text-blue-500 font-[700] text-[15px] hover:underline hover:text-gray-700">
              Sign In ?
            </Link>
           </div>
        </form>
      </div>

      <br />


    </section>
  );
};

export default ForgetPassword;
