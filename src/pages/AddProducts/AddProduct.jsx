import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";
import Rating from "@mui/material/Rating";
import Stack from "@mui/material/Stack";
import UploadBox from "../../Components/UploadBox/UploadBox";

const AddProduct = () => {
  const [productCate, setProductCat] = useState("");
  const [productSubCate, setProductSubCat] = useState("");
  const [productFeatured, setProductFeatured] = useState("");
  const [productRams, setProductRams] = useState("");
  const [productWeight, setProductWeight] = useState("");
  const [productSize, setProductSize] = useState("");

  const handleChangeProductCate = (event) => {
    setProductCat(event.target.value);
  };
  const handleChangeProductSubCate = (event) => {
    setProductSubCat(event.target.value);
  };
  const handleChangeProductFeatured = (event) => {
    setProductFeatured(event.target.value);
  };
  const handleChangeProductRams = (event) => {
    setProductRams(event.target.value);
  };
  const handleChangeProductWeight = (event) => {
    setProductWeight(event.target.value);
  };
  const handleChangeProductSize = (event) => {
    setProductSize(event.target.value);
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="p-8 py-3">
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Name
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Description
            </h3>
            <textarea
              type="text"
              className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mb-3 gap-5">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Category
            </h3>
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
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Sub Category
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

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Price
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Old Price
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mb-3 gap-5">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Is Featured?
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCategoryDropDown"
              size="small"
              className="w-full bg-[#f3f3f3]"
              value={productFeatured}
              label="Category"
              onChange={handleChangeProductFeatured}
            >
              <MenuItem value={10}>True</MenuItem>
              <MenuItem value={20}>False</MenuItem>
            </Select>
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Stock
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Brand
            </h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Discount
            </h3>
            <input
              type="number"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>

        <div className="grid grid-cols-4 mb-3 gap-5">
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Rams
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCategoryDropDown"
              size="small"
              className="w-full bg-[#f3f3f3]"
              value={productRams}
              label="Category"
              onChange={handleChangeProductRams}
            >
              <MenuItem value={"4GB"}>4GB</MenuItem>
              <MenuItem value={"6GB"}>6GB</MenuItem>
              <MenuItem value={"8GB"}>8GB</MenuItem>
            </Select>
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Weight
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCategoryDropDown"
              size="small"
              className="w-full bg-[#f3f3f3]"
              value={productWeight}
              label="Category"
              onChange={handleChangeProductWeight}
            >
              <MenuItem value={"4KG"}>4KG</MenuItem>
              <MenuItem value={"6KG"}>6KG</MenuItem>
              <MenuItem value={"8KG"}>8KG</MenuItem>
            </Select>
          </div>
          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product size
            </h3>
            <Select
              labelId="demo-simple-select-label"
              id="productCategoryDropDown"
              size="small"
              className="w-full bg-[#f3f3f3]"
              value={productSize}
              label="Category"
              onChange={handleChangeProductSize}
            >
              <MenuItem value={"S"}>S</MenuItem>
              <MenuItem value={"M"}>M</MenuItem>
              <MenuItem value={"L"}>L</MenuItem>
            </Select>
          </div>

          <div className="col">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Rating
            </h3>
             
              <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
             
             
          </div>
        </div>

        <div className="col w-full p-5 px-0">
          <h3 className="font-[700] text-[18px]">Media & Images</h3>

          <div className="grid grid-cols-6">
            <UploadBox multiple={true}/>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
