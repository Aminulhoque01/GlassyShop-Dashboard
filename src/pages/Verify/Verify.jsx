import { Link, NavLink } from "react-router";

import logo from "../../assets/logo-light-full.png";
 
import { IoIosLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
import image from "../../assets/verify.png" 
import { useRef, useState } from "react";

 

const Verify = () => {
  const [otp, setOtp] = useState(Array(6).fill(""));
    const inputRefs = useRef([]);
  
    const handleChange = (value, index) => {
      if (/^[0-9]?$/.test(value)) {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);
  
        // Move to next input
        if (value && index < 5) {
          inputRefs.current[index + 1].focus();
        }
      }
    };
  
    const handleKeyDown = (e, index) => {
      if (e.key === "Backspace" && !otp[index] && index > 0) {
        inputRefs.current[index - 1].focus();
      }
    };
  
    const handleSubmit = () => {
      const finalOtp = otp.join("");
      console.log("OTP:", finalOtp);
      // toast.success(`Your OTP is: ${finalOtp}`);
    };
  

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
          <img src={image} alt="" className="w-[100px] m-auto"/>
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-2">
           Well come Back !! <br />
          Please verify your Email
        </h1>
        <br />
        <p className="text-center text-[15px]">OTP send to &nbsp; <span className="text-blue-500 font-bold">Your email</span></p>

     

        <br />
        <div className="text-center flex items-center justify-center flex-col">
          <div className="flex justify-between mb-6 gap-2">
          {otp.map((value, index) => (
            <input
              key={index}
              ref={(el) => (inputRefs.current[index] = el)}
              type="text"
              maxLength="1"
              value={value}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              className="w-12 h-12 text-center text-xl font-semibold border border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-300 outline-none"
            />
          ))}
        </div>

        <div className="w-[50%]">
          <Button
          onClick={handleSubmit}
          className="w-full btn-blue text-white py-3 rounded-xl font-semibold org-btn transition"
        >
          Verify Otp
        </Button>
        </div>
        </div>
      </div>

      <br />


    </section>
  );
};

export default Verify;
