import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UploadBox from "../../Components/UploadBox/UploadBox";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";
import { useState } from "react";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

const AddSubCategory = () => {
   const [productCate, setProductCat] = useState("");
  const handleChangeProductCate = (event) => {
    setProductCat(event.target.value);
  };
  return (
    <section className="p-5 bg-gray-50">
      <form className="p-8 py-3 ">
        <div className="max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-4 gap-5 mb-3">
            <div className="col  ">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Category
              </h3>
              <Select
                labelId="demo-simple-select-label"
                id="productCategoryDropDown"
                size="small"
                className="w-full bg-[#f3f3f3]"
                value={productCate}
                label="Category"
                onChange={handleChangeProductCate}
              >
                <MenuItem value={null}>none</MenuItem>
                <MenuItem value={10}>Fashion</MenuItem>
                <MenuItem value={20}>Beauty</MenuItem>
                <MenuItem value={30}>Wellness</MenuItem>
              </Select>
            </div>
            <div className="col  ">
                <h3 className="text-[14px] font-[500] mb-1 text-black">Sub Category Name</h3>
                <input
                type="text"
                className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
              />
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

export default AddSubCategory;
