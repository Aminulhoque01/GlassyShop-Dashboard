/* eslint-disable no-unused-vars */
import { useContext, useEffect, useRef, useState } from "react";
import { FaCamera, FaCloudUploadAlt } from "react-icons/fa";
import { MyContext } from "../../App";
import { Button, CircularProgress, TextField } from "@mui/material";
import { aditData, postData, uploadImage } from "../../utilitis/api";
import toast from "react-hot-toast";
import { PhoneInput } from 'react-international-phone';
import 'react-international-phone/style.css';
import {Collapse} from "react-collapse"

const Profile = () => {
  const fileInputRef = useRef(null);
  const [previews, setPreviews] = useState([]);
   const [isLoading, setIsLoading] = useState(false);
   const [isLoading2, setIsLoading2] = useState(false);
  const [userId, setUserId] = useState("");
  const [isChangePasswordFormShow, setIsChangePasswordFormShow]=useState(false);
    const [phone, setPhone] = useState('');
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });

  const [uploading, setUploading] = useState(false);
  const context = useContext(MyContext);

  const [changePassword, setChangePassword] = useState({
    email: "",
    oldPassword: "",
    newPassword: "",
    confirmPassword: "",
  });

  useEffect(() => {
    const userAvatar = [];
    if (
      context?.userData?.data?.avatar !== "" &&
      context?.userData?.data?.avatar !== undefined
    ) {
      userAvatar.push(context?.userData?.data?.avatar);
      setPreviews(userAvatar);
    }
  }, [context?.userData]);

  let selectedImages = [];

  const formdata = new FormData();

  const onChangeFile = async (e) => {
    try {
      setPreviews([]);
      const files = e.target.files;
      setUploading(true);

      for (var i = 0; i < files.length; i++) {
        if (
          files[i] &&
          (files[i].type === "image/jpeg" ||
            files[i].type === "image/jpg" ||
            files[i].type === "image/png" ||
            files[i].type === "image/webp")
        ) {
          const file = files[i];
          selectedImages.push(file);
          formdata.append(`avatar`, file);

          uploadImage("/api/user/user_avatar", formdata).then((res) => {
            console.log(res);
            setUploading(false);

            let avatar = [];
            avatar.push(res?.data?.avatar);
            setPreviews(avatar);
          });
        }
      }
    } catch (error) {
      context.openAlertBox(
        "error",
        "please select a valid JPG , PNG or webp image file",
      );
      console.log(error);
      setUploading(false);
    }
  };



  useEffect(() => {
    if (
      context?.userData?.data?._id !== "" &&
      context?.userData?.data?._id !== undefined
    ) {
      setUserId(context?.userData?.data?._id);
      setFormFields({
        name: context?.userData?.data?.name,
        email: context?.userData?.data?.email,
        mobile: context?.userData?.data?.mobile,
      });
      const ph=`"context?.userData?.data?.mobile"`
      setPhone(ph)

      setChangePassword({
         email: context?.userData?.data?.email,
          
      })
    }
  }, [context?.userData]);

  

  const onChangeInput = (e) => {
    const { name, value } = e.target;
    setFormFields(() => {
      return {
        ...formFields,
        [name]: value,
      };
    });

    setChangePassword(() => {
      return {
        ...changePassword,
        [name]: value,
      };
    });
  };

  const validValue = Object.values(formFields).every((el) => el);
  const validValuePass = Object.values(changePassword).every((el) => el);

  const handelSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (formFields.name === "") {
        context.openAlertBox("error", "Please enter name");
        setIsLoading(false);
        return;
      }

      if (formFields.email === "") {
        context.openAlertBox("error", "Please enter email");
        setIsLoading(false);
        return;
      }
      if (formFields.mobile === "") {
        context.openAlertBox("error", "Please enter mobile number");
        setIsLoading(false);
        return;
      }

      const res = await aditData(`/api/user/${userId}`, formFields, {
        withCredentials: true,
      }).then((res) => {
        if (res?.data?.message === "User Updated successfully") {
          toast.success(res?.data?.message);
        }
      });
      console.log(res);
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };

  const handelSubmitChangePassword = async (e) => {
    e.preventDefault();

    try {
      setIsLoading2(true);

      if (changePassword.oldPassword === "") {
        context.openAlertBox("error", "Please enter oldPassword");
        setIsLoading2(false);
        return;
      }

      if (changePassword.newPassword === "") {
        context.openAlertBox("error", "Please enter newPassword");
        setIsLoading2(false);
        return;
      }
      if (changePassword.confirmPassword === "") {
        context.openAlertBox("error", "Please enter confirmPassword");
        setIsLoading2(false);
        return;
      }

      if (changePassword.newPassword !== changePassword.confirmPassword) {
        context.openAlertBox(
          "error",
          "newPassword and confirmPassword not match",
        );
      }

      const res = await postData(`/api/user/reset-password`, changePassword, {
        withCredentials: true,
      }).then((res) => {
        console.log(res);
         toast.success(res?.message)
        if(res?.error !== true){
          setIsLoading2(false)
          context.openAlertBox("success", res?.message)
        }
        else{
           context.openAlertBox("error", res?.message)
           setIsLoading2(false)
        }
      });
      console.log(res);
    } catch (error) {
      toast.error(error?.message || "Something went wrong");
    } finally {
      setIsLoading(false);
    }
  };
  

  return (
    <>
    <div className="card my-6 shadow-md rounded-xl bg-white p-6  w-[65%]">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-8">User Profile</h2>

       <Button className="!ml-auto" onClick={()=>setIsChangePasswordFormShow(!isChangePasswordFormShow)}>change password</Button>
          
      </div>

        <div className="w-full  flex items-center justify-center flex-col">
          <div
            className="w-[110px] h-[110px] rounded-full overflow-hidden mb-4 relative group flex items-center 
        justify-center bg-gray-200"
          >
            {previews?.length === 0 && (
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSs86eV39_U63X9x2vieNVSpUPSB5t1TIYh_eNIAoOoIA&s=10"
                className="w-full h-full object-cover"
              />
            )}
            {uploading === true ? (
              <CircularProgress color="inherit" />
            ) : (
              <>
                {previews?.length !== 0 &&
                  previews?.map((img, index) => {
                    return (
                      <img
                        src={img}
                        key={index}
                        alt=""
                        className="w-full h-full object-cover"
                      />
                    );
                  })}
              </>
            )}

            <div
              className="overly w-[100%] h-[100%] top-0 left-0 bg-[rgba(0,0,0,0.7)] absolute flex items-center 
                                 justify-center cursor-pointer opacity-0 transition-all group-hover:opacity-100"
            >
              <FaCloudUploadAlt className="text-[#fff] text-[25px]" />
              <input
                type="file"
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
                accept="image/*"
                onChange={(e) => onChangeFile(e, "/api/user/user_avatar")}
                name="avatar"
              />
            </div>
          </div>

          <h3 className="text-[16px] font-[600]">
            {context?.userData?.data?.name}
          </h3>
          <h6 className="text-[13px] font-[400]">
            {context?.userData?.data?.email}
          </h6>
        </div>

          <form action="" className="form mt-8" onSubmit={handelSubmit}>
              <div className="flex items-center gap-5">
                <div className="w-[50%] ">
                  <TextField
                   type="text"
                    label="Full Name"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="name"
                    value={formFields.name}
                    disabled={isLoading === true ? true : false}
                    onChange={onChangeInput}
                  />
                </div>
                <div className="w-[50%] ">
                  <TextField
                    type="email"
                    label="Email"
                    variant="outlined"
                    size="small"
                    className="w-full"
                    name="email"
                    value={formFields.email}
                    disabled={true}
                    onChange={onChangeInput}
                  />
                </div>
              </div>

              <div className="flex items-center gap-5 mt-5">
                <div className="w-[50%] ">
                   <PhoneInput
                    defaultCountry="bd"
                    value={phone}
                    disabled={isLoading === true ? true : false}
                    onChange={(phone) => {
                      setPhone(phone);
                      setFormFields({
                        mobile:phone
                      })
                    }}
                  />
                  
                </div>
              </div>

              <br />

              <div className="flex items-center justify-center p-5 border border-dashed border-[rgba(0,0,0,0.2) bg-[#f1faff]]">
                <span>Add address</span>
              </div>

              <div className="flex items-center gap-4">
                <Button
                  type="submit"
                  disabled={!validValue}
                  className="btn-blue  w-[300px]"
                >
                  {isLoading === true ? (
                    <CircularProgress color="inherit" />
                  ) : (
                    "save"
                  )}
                </Button>
              </div>
            </form>

            
      </div>


    <Collapse isOpened={isChangePasswordFormShow}>
            <div className="card bg-white p-5 shadow-md rounded-md w-[65%]">
              <div className="flex items-center pb-0">
                <h2 className="pb-0">change password</h2>
                <hr />
              </div>

              <form
                action=""
                className="mt-5"
                onSubmit={handelSubmitChangePassword}
              >
                <div className="flex items-center gap-5">
                  <div className="w-[50%] ">
                    <TextField
                      label="Old Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="oldPassword"
                      value={changePassword.oldPassword}
                      disabled={isLoading2 === true ? true : false}
                      onChange={onChangeInput}
                    />
                  </div>
                  <div className="w-[50%] ">
                    <TextField
                      type="new password"
                      label="New Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="newPassword"
                      value={changePassword.newPassword}
                      disabled={isLoading2 === true ? true : false}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 mt-5">
                  <div className="w-[50%] ">
                    <TextField
                      label="Confirm Password"
                      variant="outlined"
                      size="small"
                      className="w-full"
                      name="confirmPassword"
                      value={changePassword.confirmPassword}
                      disabled={isLoading === true ? true : false}
                      onChange={onChangeInput}
                    />
                  </div>
                </div>

                <br />

                <div className="flex items-center gap-4">
                  <Button
                    type="submit"
                    disabled={!validValuePass}
                    className="btn-blue  w-[300px]"
                  >
                    {isLoading2 === true ? (
                      <CircularProgress color="inherit" />
                    ) : (
                      "change password"
                    )}
                  </Button>
                </div>
              </form>
            </div>
            </Collapse>
    </>

       
     
  );
};

export default Profile;
