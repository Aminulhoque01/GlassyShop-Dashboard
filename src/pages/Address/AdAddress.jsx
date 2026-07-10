import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UploadBox from "../../Components/UploadBox/UploadBox";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { PhoneInput } from "react-international-phone";
import React, { useState } from "react";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormHelperText from "@mui/material/FormHelperText";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const AddAddress = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [phone, setPhone] = useState("");
  const [formFields, setFormFields] = useState({
    name: "",
    email: "",
    mobile: "",
  });


   
  const noLabelId = React.useId();
  const [age, setAge] = useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="p-8 py-3 ">
        <div className="max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-2 mb-3 gap-4">
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Address line 1
              </h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-1 text-black">city</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
          </div>
          <div className="grid grid-cols-3 mb-3 gap-4">
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-1 text-black">state</h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                pin code
              </h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                country
              </h3>
              <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-1 text-black">mobile</h3>
              <PhoneInput
                defaultCountry="bd"
                value={phone}
                disabled={isLoading === true ? true : false}
                onChange={(phone) => {
                  setPhone(phone);
                  setFormFields({
                    mobile: phone,
                  });
                }}
              />
            </div>
            <div className="col w-[100%]">
              <h3 className="text-[14px] font-[500] mb-1 text-black">status</h3>
              <FormControl sx={{ m: 1, minWidth: 120 }}>
                <Select
                  aria-describedby={`${noLabelId}-helper-text`}
                  value={age}
                  onChange={handleChange}
                  displayEmpty
                  inputProps={{ "aria-label": "Age" }}
                >
                  <MenuItem value="">
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
                <FormHelperText id={`${noLabelId}-helper-text`}>
                  aria-label and helper text
                </FormHelperText>
              </FormControl>
            </div>
          </div>
        </div>
        <br />

        <br />
        <br />
        <div className="w-[300px]">
          <Button
            type="submit"
            className="w-full btn-blue btn-lg flex items-center gap-2"
          >
            <FaCloudUploadAlt className="text-[25px] text-white" />
            Published and View
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddAddress;
