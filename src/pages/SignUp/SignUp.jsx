import { Link, NavLink } from "react-router";

import logo from "../../assets/logo-light-full.png";
import login from "../../assets/loginlogo.svg";
import { IoIosLogIn } from "react-icons/io";
import { FaRegUserCircle } from "react-icons/fa";
import Button from "@mui/material/Button";
import { useContext, useState } from "react";
import LoadingButton from "@mui/lab/LoadingButton";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import Checkbox from "@mui/material/Checkbox";
import FormControlLabel from "@mui/material/FormControlLabel";
import { IoEye } from "react-icons/io5";
import { IoEyeOff } from "react-icons/io5";
import CircularProgress from "@mui/material/CircularProgress";
import { useNavigate } from "react-router-dom";
import { postData } from "../../utilitis/api";
import toast from "react-hot-toast";
import { MyContext } from "../../App";

const SignUp = () => {
  const [loadingGoogle, setLoadingGoogle] = useState(false);
  const [loadingFacebook, setLoadingFacebook] = useState(false);
  const [isPasswordShow, setIsPasswordShow] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    password: "",
  });

  const validValue = Object.values(formFields).every((el) => el);

  const context=useContext(MyContext)
  
  const history = useNavigate();
  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });
  };

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (formFields.name === "") {
        context.openAlertBox("error", "Please enter Full Name");
        setIsLoading(false);
        return;
      }

      if (formFields.email === "") {
        toast.error("error", "Please enter Email");
        setIsLoading(false);
        return;
      }

      if (formFields.password === "") {
        toast.error("error", "Please enter Password");
        setIsLoading(false);
        return;
      }

      const res = await postData("/api/user/register", formFields);

      if (res?.success) {
        toast.success(res?.message || "Registration successful");

        localStorage.setItem("userEmail", formFields.email);

        setFormFields({
          name: "",
          email: "",
          password: "",
        });

        history("/verify");
      } else {
        toast.error(res?.message || "Registration failed");
      }
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  function handleClickGoogle() {
    setLoadingGoogle(true);
  }
  function handleClickFacebook() {
    setLoadingFacebook(true);
  }

  return (
    <section className=" w-full  bg-white">
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
          Join us Today! Get special <br />
          <span className="text-blue-600">benefits and stay up-to-date</span>
        </h1>

        <div className="flex items-center justify-center w-full mt-5 gap-4">
          <LoadingButton
            size="small"
            onClick={handleClickGoogle}
            endIcon={<FcGoogle className="!text-[30px]" />}
            loading={loadingGoogle}
            loadingPosition="end"
            variant="outlined"
            className="!bg-none !py-2 !text-[15px] !capitalize !px-5 !font-[600] !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.5)]"
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
            className="!bg-none  !py-2 !text-[15px] !capitalize !px-5 !font-[600] !text-[rgba(0,0,0,0.7)] !border-[rgba(0,0,0,0.5)]"
          >
            Sing With Facebook
          </LoadingButton>
        </div>

        <br />
        <div className="w-full flex items-center justify-center gap-3 mt-5">
          <span className="flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.1)]"></span>
          <span className="text-[14px] text-[rgba(0,0,0,0.7)] font-[500]">
            Or, Sing in with your email
          </span>
          <span className="flex items-center w-[100px] h-[2px] bg-[rgba(0,0,0,0.1)]"></span>
        </div>

        <br />
        <form className="w-full px-8 mt-3" onSubmit={handelSubmit}>
          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Full Name</h4>
            <input
              type="text"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
             rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              name="name"
              value={formFields.name}
              disabled={isLoading === true ? true : false}
               onChange={onChangeInput}
            />
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Email</h4>
            <input
              type="email"
              className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
             rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
              name="email"
              value={formFields.email}
              disabled={isLoading === true ? true : false}
               onChange={onChangeInput}
            />
          </div>

          <div className="form-group mb-4 w-full">
            <h4 className="text-[14px] font-[500] mb-1">Password</h4>
            <div className="relative w-full">
              <input
                type={isPasswordShow === false ? "password" : "text"}
                className="w-full h-[50px] border-2 border-[rgba(0,0,0,0.1)]
             rounded-md focus:border-[rgba(0,0,0,0.7)] focus:outline-none px-3"
                name="password"
                value={formFields.password}
                disabled={isLoading === true ? true : false}
                 onChange={onChangeInput}
              />
              <Button
                className="!absolute top-[7px] right-[10px] z-50 !rounded-full
             !w-[35px] !h-[35px] !min-w-[35px]"
                onClick={() => setIsPasswordShow(!isPasswordShow)}
              >
                {isPasswordShow === false ? (
                  <IoEye className="text-[rgba(0,0,0,0.8)] text-[20px]" />
                ) : (
                  <IoEyeOff className="text-[rgba(0,0,0,0.8)] text-[20px]" />
                )}
              </Button>
            </div>
          </div>

          <div className="form-group mb-4 w-full flex items-center justify-between">
            <FormControlLabel control={<Checkbox />} label="Remember me" />

            <Link
              to="/forget-password"
              className="text-blue-600 font-[600] text-[15px] hover:underline hover:text-gray-700"
            >
              Forget Password?
            </Link>
          </div>

          <Button type="submit" disabled={!validValue} className="btn-blue btn-lg w-full">
            {
                    isLoading===true? <CircularProgress color="inherit" />
                    :"Sign Up"
                   }
          </Button>
        </form>
      </div>

      <br />
    </section>
  );
};

export default SignUp;
