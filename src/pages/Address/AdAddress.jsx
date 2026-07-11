import React, { useState } from "react";
import Button from "@mui/material/Button";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import "react-international-phone/style.css";

const AddAddress = () => {
  const [isLoading] = useState(false);
  const [phone, setPhone] = useState("");

  const [formFields, setFormFields] = useState({
    address_line1: "",
    city: "",
    state: "",
    pinCode: "",
    country: "",
    mobile: "",
    status: "",
  });

    const handleInputChange = (e) => {
    setFormFields((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleStatusChange = (event) => {
    setFormFields((prev) => ({
      ...prev,
      status: event.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(formFields);
  };

  return (
    <section className="p-5 bg-white rounded-md">
      <form onSubmit={handleSubmit}>
        <div className="grid grid-cols-2 gap-5">
          {/* Address */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">
              Address Line 1
            </h3>

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
            <h3 className="text-[14px] font-[500] mb-1">
              City
            </h3>

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
            <h3 className="text-[14px] font-[500] mb-1">
              State
            </h3>

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
            <h3 className="text-[14px] font-[500] mb-1">
              Pin Code
            </h3>

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
            <h3 className="text-[14px] font-[500] mb-1">
              Country
            </h3>

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
            <h3 className="text-[14px] font-[500] mb-1">
              Mobile
            </h3>

            <PhoneInput
              defaultCountry="bd"
              value={phone}
              disabled={isLoading}
              onChange={(value) => {
                setPhone(value);

                setFormFields((prev) => ({
                  ...prev,
                  mobile: value,
                }));
              }}
            />
          </div>

          {/* Status */}
          <div>
            <h3 className="text-[14px] font-[500] mb-1">
              Status
            </h3>

          <FormControl fullWidth size="small">
            <Select
              value={formFields.status}
              onChange={handleStatusChange}
              displayEmpty
            >
              <MenuItem value="">
                <em>Select Status</em>
              </MenuItem>

              <MenuItem value="Published">
                Published
              </MenuItem>

              <MenuItem value="Unpublished">
                Unpublished
              </MenuItem>
            </Select>
          </FormControl>
          </div>
        </div>

        <div className="mt-8 w-[300px]">
          <Button
            type="submit"
            variant="contained"
            className="!w-full !py-3 flex items-center gap-2"
          >
            <FaCloudUploadAlt className="text-[22px]" />
            Publish & View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddAddress;