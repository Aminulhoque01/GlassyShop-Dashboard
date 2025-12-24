import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const AddProduct = () => {
  const [productCate, setProductCat] = useState("");
  const [productSubCate, setProductSubCat] = useState("");

  const handleChangeProductCate = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCate = (event) => {
    setProductSubCat(event.target.value);
  };

  return (
    <section className="p-5">
      <form>
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Name</h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3  className="text-[14px] font-[500] mb-1 text-black">Product Description</h3>
            <textarea
              type="text"
              className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mb-3 gap-5">
          <div className="col">
            <h3  className="text-[14px] font-[500] mb-1 text-black">Product Category</h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCategoryDropDown"
              size="small"
              className="w-full bg-[#f3f3f3]"
              value={productSubCate}
              label="Category"
              onChange={handleChangeProductSubCate}
            >
              <MenuItem value={null}>none</MenuItem>
              <MenuItem value={10}>Fashion</MenuItem>
              <MenuItem value={20}>Beauty</MenuItem>
              <MenuItem value={30}>Wellness</MenuItem>
            </Select>
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Sub Category</h3>
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

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Price</h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">Product Old Price</h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
