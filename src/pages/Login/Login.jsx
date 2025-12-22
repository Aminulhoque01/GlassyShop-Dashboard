import { Link, NavLink } from "react-router";

import logo from "../../assets/logo-light-full.png";
import login from "../../assets/loginlogo.svg";
import { IoIosLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";

const Login = () => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  function handleClickFacebook() {
    setLoadingFacebook(true);
  }

  return (
    <section className="fixed top-0 left-0 w-full h-full bg-white">
      <header className="w-full fixed top-0 left-0 px-4 py-2 flex items-center justify-between">
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

      <div className="loginBox card w-[45%] h-[300px] mx-auto mt-20 relative z-50">
        <div className="text-center  ">
          <img src={login} alt="" className="m-auto " />
        </div>
        <h1 className="text-center text-[35px] font-[800] mt-4">
          Welcome Back ! <br />
          Sing in with your credentials
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <LoadingButton
            size="small"
            onClick={handleClickGoogle}
            endIcon={<FcGoogle className="!text-[30px]" />}
            loading={loadingGoogle}
            loadingPosition="end"
            variant="outlined"
            className="!bg-none !text-[15px] !capitalize !px-5 !font-[600] !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.5)]"
          >
            Sing With Google
          </LoadingButton>
          <LoadingButton
            size="small"
            onClick={handleClickFacebook}
            endIcon={<FaFacebook className="!text-[30px]" />}
            loading={loadingFacebook}
            loadingPosition="end"
            variant="outlined"
            className="!bg-none !text-[15px] !capitalize !px-5 !font-[600] !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.5)]"
          >
            Sing With Facebook
          </LoadingButton>
        </div>
      </div>
    </section>
  );
};

export default Login;
