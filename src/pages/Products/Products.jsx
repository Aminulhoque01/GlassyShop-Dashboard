import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import { useContext, useState } from "react";
import { IoMdAdd } from "react-icons/io";
import { Link } from "react-router";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import Pagination from "@mui/material/Pagination";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import SearchBox from "../../Components/SearchBox/SearchBox";
import { MyContext } from "../../App";

 
const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

const Products = () => {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };

  const context= useContext(MyContext);

  return (
    <>
       <div className="flex items-center justify-between px-5 py-0 mt-3">
          <h2 className="text-[18spx] font-[600]">Products</h2>
          <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
            <Button className="btn   !text-white   "> Export</Button>
           {/* <Link to="/add-product"> */}
             <Button className="btn-blue   !text-white " onClick={()=>context.setIsOpenFullScreenPanel({
              open:true,
              model:"Add product"
             })}>Add product</Button>
           {/* </Link> */}
          </div>
        </div>
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        
        <div className="flex items-center w-full pl-5 pb-2 pt-5 px-5 ">
          <div className="col w-[20%]">
            <h4 className="font-[600] text-[13px] mb-2">Category By</h4>

            <Select
              className="w-full"
              size="small"
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={age}
              label="Age"
              onChange={handleChange}
            >
              <MenuItem value="">
                <em>None</em>
              </MenuItem>
              <MenuItem value={10}>Man</MenuItem>
              <MenuItem value={20}>Woman</MenuItem>
              <MenuItem value={30}>Kids</MenuItem>
            </Select>
          </div>
           <div className="col w-[20%] ml-auto">
            <SearchBox/>
           </div>
          
        </div>

        <div class="relative overflow-x-auto   border border-default">
          <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
              <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    <div className="w-[60px]">
                      <Checkbox {...label} size="small" />
                    </div>
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Product
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Category
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    SubCategory
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Price
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Sales
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr
                  className="odd:bg-white   even:bg-gray-50
                 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td scope="col" className="px-6 py-3 font-[600]">
                    <div className="w-[60px]">
                      <Checkbox {...label} size="small" />
                    </div>
                  </td>

                  <td className="px-6 py-3">
                    <div className="flex items-center gap-4 w-[350px]">
                      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                        <Link to="/product/35345">
                          <img
                            src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
                            alt=""
                            className="w-full group-hover:scale-105 transition-all"
                          />
                        </Link>
                      </div>
                      <div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4  ">
                          <Link to="/product/35345">
                            VINNED Women Embroiderd Rayon Kurta pant set | Kurta
                            set for women
                          </Link>
                        </h3>
                        <span>Books</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3">Electronics</td>
                  <td className="px-6 py-3">Woman</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1 flex-col">
                      <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        $58.00
                      </span>
                      <span className="  text-blue-600 text-[15px] font-[600]">
                        $58.00
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-[14px]">
                      <span className="font-[600]">234</span>sale
                    </p>
                    <ProgressBar value={80} type="error" />
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1">
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
                             !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
                        title="Edit"
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
                            !border border-[rgba(0,0,0,0.4)]"
                        title="view"
                      >
                        <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
                        title="Remove"
                      >
                        <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="odd:bg-white   even:bg-gray-50
                   border-b dark:border-gray-700"
                >
                  <td scope="col" className="px-6 py-3 font-[600]">
                    <div className="w-[60px]">
                      <Checkbox {...label} size="small" />
                    </div>
                  </td>

                  <td className="px-6 py-3">
                    <div className="flex items-center gap-4 w-[350px]">
                      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                        <Link to="/product/35345">
                          <img
                            src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
                            alt=""
                            className="w-full group-hover:scale-105 transition-all"
                          />
                        </Link>
                      </div>
                      <div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4  ">
                          <Link to="/product/35345">
                            VINNED Women Embroiderd Rayon Kurta pant set | Kurta
                            set for women
                          </Link>
                        </h3>
                        <span>Books</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3">Electronics</td>
                  <td className="px-6 py-3">Woman</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1 flex-col">
                      <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        $58.00
                      </span>
                      <span className="  text-blue-600 text-[15px] font-[600]">
                        $58.00
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-[14px]">
                      <span className="font-[600]">234</span>sale
                    </p>
                    <ProgressBar value={80} type="error" />
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1">
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
                             !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
                        title="Edit"
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
                            !border border-[rgba(0,0,0,0.4)]"
                        title="view"
                      >
                        <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
                        title="Remove"
                      >
                        <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="odd:bg-white   even:bg-gray-50
                 even:dark:bg-gray-800 border-b dark:border-gray-700"
                >
                  <td scope="col" className="px-6 py-3 font-[600]">
                    <div className="w-[60px]">
                      <Checkbox {...label} size="small" />
                    </div>
                  </td>

                  <td className="px-6 py-3">
                    <div className="flex items-center gap-4 w-[350px]">
                      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                        <Link to="/product/35345">
                          <img
                            src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
                            alt=""
                            className="w-full group-hover:scale-105 transition-all"
                          />
                        </Link>
                      </div>
                      <div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4  ">
                          <Link to="/product/35345">
                            VINNED Women Embroiderd Rayon Kurta pant set | Kurta
                            set for women
                          </Link>
                        </h3>
                        <span>Books</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3">Electronics</td>
                  <td className="px-6 py-3">Woman</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1 flex-col">
                      <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        $58.00
                      </span>
                      <span className="  text-blue-600 text-[15px] font-[600]">
                        $58.00
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-[14px]">
                      <span className="font-[600]">234</span>sale
                    </p>
                    <ProgressBar value={80} type="error" />
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1">
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
                             !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
                        title="Edit"
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
                            !border border-[rgba(0,0,0,0.4)]"
                        title="view"
                      >
                        <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
                        title="Remove"
                      >
                        <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </div>
                  </td>
                </tr>
                <tr
                  className="odd:bg-white   even:bg-gray-50
                   border-b dark:border-gray-700"
                >
                  <td scope="col" className="px-6 py-3 font-[600]">
                    <div className="w-[60px]">
                      <Checkbox {...label} size="small" />
                    </div>
                  </td>

                  <td className="px-6 py-3">
                    <div className="flex items-center gap-4 w-[350px]">
                      <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                        <Link to="/product/35345">
                          <img
                            src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
                            alt=""
                            className="w-full group-hover:scale-105 transition-all"
                          />
                        </Link>
                      </div>
                      <div className="info w-[75%]">
                        <h3 className="font-[600] text-[12px] leading-4  ">
                          <Link to="/product/35345">
                            VINNED Women Embroiderd Rayon Kurta pant set | Kurta
                            set for women
                          </Link>
                        </h3>
                        <span>Books</span>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-3">Electronics</td>
                  <td className="px-6 py-3">Woman</td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1 flex-col">
                      <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                        $58.00
                      </span>
                      <span className="  text-blue-600 text-[15px] font-[600]">
                        $58.00
                      </span>
                    </div>
                  </td>
                  <td className="px-6 py-3">
                    <p className="text-[14px]">
                      <span className="font-[600]">234</span>sale
                    </p>
                    <ProgressBar value={80} type="error" />
                  </td>
                  <td className="px-6 py-3">
                    <div className="flex items-center gap-1">
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
                             !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
                        title="Edit"
                      >
                        <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
                            !border border-[rgba(0,0,0,0.4)]"
                        title="view"
                      >
                        <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                      <Button
                        className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
                        title="Remove"
                      >
                        <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
                      </Button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="flex items-center justify-end mt-4 mb-4">
            <Pagination count={10} color="secondary" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
