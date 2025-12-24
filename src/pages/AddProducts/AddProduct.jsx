import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { useState } from "react";

const AddProduct = () => {
  const [productCate, setProductCat] = useState("");

  const handleChangeProductCate = (event) => {
    setProductCat(event.target.value);
  };

  return (
    <section className="p-5">
      <form>
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3>Product Name</h3>
            <input
              type="text"
              className="w-full h-[40px] border border-[rgba(0,0,0,0.1)] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-1 mb-3">
          <div className="col">
            <h3>Product Description</h3>
            <textarea
              type="text"
              className="w-full h-[140px] border border-[rgba(0,0,0,0.1)] focus:outline-none
                     focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
            />
          </div>
        </div>
        <div className="grid grid-cols-4 mb-3">
          <div className="col">
            <h3>Product Category</h3>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={productCate}
              label="Age"
              onChange={handleChangeProductCate}
            >
              <MenuItem value={10}>Ten</MenuItem>
              <MenuItem value={20}>Twenty</MenuItem>
              <MenuItem value={30}>Thirty</MenuItem>
            </Select>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
