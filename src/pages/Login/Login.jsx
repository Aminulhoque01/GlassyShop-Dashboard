import { Link, NavLink } from "react-router";
import image1 from "../../assets/background.avif";
import logo from "../../assets/logo-light-full.png";

import { IoIosLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "@mui/material/Button";

const Login = () => {
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
      <img src={image1} alt="" className="w-full top-0 left-0 opacity-5" />
    </section>
  );
};

export default Login;
