import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { MyContext } from "../../App";
import { TextField } from "@mui/material";
import Button from "@mui/material/Button";
import { IoEyeOffOutline, IoEyeOutline } from "react-icons/io5";
import toast from "react-hot-toast";
import { postData } from "../../utilitis/api";
import CircularProgress from "@mui/material/CircularProgress";

const ForgetPassword = () => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const [isShowPassword2, setIsShowPassword2] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const [formFields, setFormFields] = useState({
    email: localStorage.getItem("userEmail"),
    newPassword: "",
    confirmPassword: "",
  });

  const context = useContext(MyContext);
  const history = useNavigate();

  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validValue = Object.values(formFields).every((el) => el);

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (formFields.newPassword === "") {
        context.openAlertBox("error", "Please enter new password");
        setIsLoading(false);
        return;
      }

      if (formFields.confirmPassword === "") {
        context.openAlertBox("error", "Please enter confirm password");
        setIsLoading(false);
        return;
      }

      if (formFields.newPassword !== formFields.confirmPassword) {
        context.openAlertBox("error", "Password and Confirm Password do not match");
        setIsLoading(false);
        return;
      }

      postData("/api/user/reset-password", formFields).then((res) => {
        if (res?.success === true) {
          context.openAlertBox("success", res?.message);

          localStorage.removeItem("userEmail");
          localStorage.removeItem("actionType");

          history("/login");
        } else {
          context.openAlertBox("error", res?.message);
        }
      });
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="min-h-[80vh] flex items-center justify-center bg-gray-50 py-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl p-8">
        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800">
            Reset Password
          </h1>

          <p className="text-gray-500 text-sm mt-2">
            Create a strong password to secure your account.
          </p>
        </div>

        <form onSubmit={handelSubmit} className="space-y-5">
          {/* New Password */}
          <div className="relative">
            <TextField
              fullWidth
              label="New Password"
              variant="outlined"
              type={isShowPassword ? "text" : "password"}
              value={formFields.newPassword}
              name="newPassword"
              disabled={isLoading}
              onChange={onChangeInput}
            />

            <Button
              type="button"
              onClick={() => setIsShowPassword(!isShowPassword)}
              className="!absolute top-[10px] right-[10px] !min-w-[35px] !w-[35px] !h-[35px]"
            >
              {isShowPassword ? (
                <IoEyeOffOutline className="text-[22px] text-gray-600" />
              ) : (
                <IoEyeOutline className="text-[22px] text-gray-600" />
              )}
            </Button>
          </div>

          {/* Confirm Password */}
          <div className="relative">
            <TextField
              fullWidth
              label="Confirm Password"
              variant="outlined"
              type={isShowPassword2 ? "text" : "password"}
              value={formFields.confirmPassword}
              name="confirmPassword"
              disabled={isLoading}
              onChange={onChangeInput}
            />

            <Button
              type="button"
              onClick={() => setIsShowPassword2(!isShowPassword2)}
              className="!absolute top-[10px] right-[10px] !min-w-[35px] !w-[35px] !h-[35px]"
            >
              {isShowPassword2 ? (
                <IoEyeOffOutline className="text-[22px] text-gray-600" />
              ) : (
                <IoEyeOutline className="text-[22px] text-gray-600" />
              )}
            </Button>
          </div>

          {/* Button */}
          <Button
            type="submit"
            disabled={!validValue || isLoading}
            className="btn-blue btn-lg !w-full !py-3 flex items-center justify-center gap-2"
          >
            {isLoading ? (
              <CircularProgress color="inherit" size={22} />
            ) : (
              "Reset Password"
            )}
          </Button>

          {/* Footer */}
          <div className="text-center pt-2">
            <p className="text-sm text-gray-500">
              Remember your password?{" "}
              <Link
                to="/login"
                className="font-semibold text-primary hover:underline"
              >
                Back to Login
              </Link>
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ForgetPassword;