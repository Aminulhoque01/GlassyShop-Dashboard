import React, { useContext, useEffect, useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FaCloudUploadAlt } from "react-icons/fa";
import "react-international-phone/style.css";
import toast from "react-hot-toast";
import { MyContext } from "../../App";
import {  postData } from "../../utilitis/api";
import { PhoneInput } from "react-international-phone";

const AddAddress = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const context = useContext(MyContext);

  const [formFields, setFormFields] = useState({
    address_line1: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    mobile: "",
    status: "",
    userId: "",
  });

  const handleInputChange = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

   

  useEffect(() => {
    if (context?.userData?.data?._id) {
      const mobile = String(context?.userData?.data?.mobile || "");

      setPhone(mobile);

      setFormFields((prev) => ({
        ...prev,
        userId: context.userData.data._id,
        mobile,
      }));
    }
  }, [context?.userData]);

  


  

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setIsLoading(true);

      if (!formFields.address_line1)
        return context.openAlertBox("error", "Enter Address");

      if (!formFields.city) return context.openAlertBox("error", "Enter City");

      if (!formFields.state)
        return context.openAlertBox("error", "Enter State");

      if (!formFields.pinCode)
        return context.openAlertBox("error", "Enter Pin Code");

      if (!formFields.country)
        return context.openAlertBox("error", "Enter Country");

      if (!formFields.mobile)
        return context.openAlertBox("error", "Enter Mobile");

      const res = await postData("/api/address/add", formFields, {
        withCredentials: true,
      });

      console.log(res);

      if (res?.success) {
        toast.success(res.message);

        setFormFields({
          address_line1: "",
          city: "",
          state: "",
          pinCode: "",
          country: "",
          mobile: "",
          status: "",
          userId: context?.userData?.data?._id,
        });

        setPhone("");

        context?.setIsOpenFullScreenPanel({
          open: false,
        });
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error?.response?.data?.message ||
          error?.message ||
          "Something went wrong",
      );
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="p-5 bg-white rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          {/* Address */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">Address Line 1</h3>

            <input
              type="text"
              name="address_line1"
              value={formFields.address_line1}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-gray-300 rounded-md px-3 outline-none focus:border-blue-500"
              placeholder="Enter Address"
            />
          </div>

          {/* City */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">City</h3>

            <input
              type="text"
              name="city"
              value={formFields.city}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-gray-300 rounded-md px-3 outline-none focus:border-blue-500"
              placeholder="Enter City"
            />
          </div>

          {/* State */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">State</h3>

            <input
              type="text"
              name="state"
              value={formFields.state}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-gray-300 rounded-md px-3 outline-none focus:border-blue-500"
              placeholder="Enter State"
            />
          </div>

          {/* Pin Code */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">Pin Code</h3>

            <input
              type="text"
              name="pinCode"
              value={formFields.pinCode}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-gray-300 rounded-md px-3 outline-none focus:border-blue-500"
              placeholder="Enter Pin Code"
            />
          </div>

          {/* Country */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">Country</h3>

            <input
              type="text"
              name="country"
              value={formFields.country}
              onChange={handleInputChange}
              className="w-full h-[45px] border border-gray-300 rounded-md px-3 outline-none focus:border-blue-500"
              placeholder="Enter Country"
            />
          </div>

          {/* Mobile */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">Mobile</h3>

            <PhoneInput
              defaultCountry="bd"
              value={phone || ""}
              disabled={isLoading}
              onChange={(value) => {
                setPhone(String(value));

                setFormFields((prev) => ({
                  ...prev,
                  mobile: String(value),
                }));
              }}
            />
          </div>

          {/* Status */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">Status</h3>

            <FormControl fullWidth size="small">
              <Select
                value={formFields.status}
                onChange={(e) =>
                  setFormFields((prev) => ({
                    ...prev,
                    status: e.target.value,
                  }))
                }
              >
                <MenuItem value={true}>Published</MenuItem>
                <MenuItem value={false}>Unpublished</MenuItem>
              </Select>
            </FormControl>
          </div>
        </div>

        <div className="mt-8 w-[300px]">
          <Button
            type="submit"
            variant="contained"
            disabled={isLoading}
            className="!w-full !py-3 flex items-center gap-2"
          >
            <FaCloudUploadAlt className="text-[22px]" />
            {isLoading ? "Saving..." : "Publish & View"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddAddress;
