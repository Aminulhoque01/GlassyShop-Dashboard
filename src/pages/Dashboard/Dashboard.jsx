import DashboardBoxes from "../../Components/DashboardBoxes/DashboardBoxes";
import image from "../../../src/assets/shop-illustration.webp";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import Button from "@mui/material/Button";
import { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import { Collapse } from "react-collapse";
import { IoIosArrowUp } from "react-icons/io";
import Badge from "../../Components/Badge/Badge";
import Checkbox from "@mui/material/Checkbox";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import { CiEdit } from "react-icons/ci";
import { MdOutlineRemoveRedEye } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import MetarialTable from "../../Components/MetarilaTable/MetarialTable";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';
 

const Dashboard = () => {
  const [isOpenOrderProduct, setIsOpenOrderProduct] = useState(null);
  const [char1Data, setChart1Data] = useState([
    {
      name: "Page A",
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: "Page B",
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: "Page C",
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: "Page D",
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: "Page E",
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: "Page F",
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: "Page G",
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ]);
  const [age, setAge] = useState("");

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  const isShowOrderdProduct = (index) => {
    if (isOpenOrderProduct === index) {
      setIsOpenOrderProduct(null);
    } else {
      setIsOpenOrderProduct(index);
    }
  };
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

  return (
    <>
      <div
        className="w-full py-2 px-5 border
       border-[rgba(0,0,0,0.1)] flex item-center gap-8 mb-5 
       justify-between rounded-md bg-white"
      >
        <div className="info">
          <h1 className="text-[35px] font-bold leading-9 mb-3">
            Good Morning, <br /> Cameron{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 128 128"
                class="inline-flex h-8 w-8"
              >
                <path
                  fill="#fac036"
                  d="M39.11 79.56c-1.1 1.03-2.21-.2-2.21-.2S18.42 59.78 17.22 58.9c-1.69-1.23-5.31-3.16-8.93.57-1.51 1.55-3.97 5 .6 10.56.99 1.2 29.78 31.54 31.46 33.18 0 0 13.3 12.94 21.35 17.81 2.23 1.35 4.74 2.78 7.67 3.78 2.92 1 6.22 1.69 9.7 1.69 3.48.04 7.09-.63 10.5-1.88 3.41-1.26 6.59-3.09 9.48-5.2.71-.54 1.43-1.08 2.1-1.66l1.94-1.6a58.67 58.67 0 0 0 3.82-3.53c2.43-2.42 4.62-5.01 6.55-7.66 1.92-2.66 3.55-5.41 4.85-8.15 1.3-2.74 2.21-5.49 2.76-8.09.58-2.59.74-5.04.65-7.18-.02-2.14-.45-3.97-.8-5.43-.4-1.46-.83-2.55-1.17-3.27-.33-.72-.51-1.1-.51-1.1-.46-1.29-.9-2.52-1.29-3.63a889.622 889.622 0 0 0-4.51-12.47l.01.03c-4.85-13.17-10.06-26.74-10.06-26.74-.79-2.39-3.7-3.22-5.84-1.68-6.18 4.44-8.07 10.92-5.89 17.83l5.59 15.32c.79 1.71-1.39 3.69-2.85 2.5-4.59-3.74-14.3-14.05-14.3-14.05-4.34-4.16-28.83-29.27-30.47-30.8-3.3-3.07-7.46-4.65-10.63-2.32-3.24 2.38-4.14 6.06-1.01 10.08.85 1.09 25.6 27.24 25.6 27.24 1.44 1.51-.26 3.65-1.85 2.18 0 0-30.79-32.12-32.18-33.62-3.15-3.42-8.21-4.17-11.21-1.35-2.93 2.75-2.86 7.26.34 10.8 1.02 1.12 22.71 24.02 31.39 33.4.58.63 1.03 1.47.17 2.26-.01.01-.88.95-2-.25-2.36-2.52-25.93-27.08-27.24-28.41-3.01-3.06-7.05-4.51-10.3-1.53-2.96 2.71-3.44 7.44-.04 10.78l28.55 30.18s.93 1.1-.11 2.07z"
                ></path>
                <path
                  fill="#e48c15"
                  d="m85.46 54.4 2.41 2.58s-13.79 13.31-4.39 33.75c0 0 1.22 2.59-.38 3.02 0 0-1.4.78-3-3.2 0-.01-9.49-19.42 5.36-36.15z"
                ></path>
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-miterlimit="10"
                  stroke-width="4"
                  opacity="0.5"
                  d="M63.28 10.2s5.81.88 11.19 6.64c5.38 5.77 7.87 13.18 7.87 13.18M77.44 3.5s4.87 2.45 8.63 8.5c3.76 6.05 4.67 13.05 4.67 13.05m-55.03 85.68s-5.86.39-12.35-4.09-10.52-11.18-10.52-11.18m18.69 25.1s-5.44.23-11.68-3.22-10.44-9.12-10.44-9.12"
                ></path>
              </svg>
            </span>
          </h1>
          <p>
            Here’s What happening on your store today. See the statistics at
            once.
          </p>
          <br />
          <Button className="btn-blue">
            <CiSquarePlus className="text-white text-[20px]" /> Add Product{" "}
          </Button>
        </div>

        <img src={image} alt="" className="w-[200px]  " />
      </div>
      <DashboardBoxes />

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18spx] font-[600]">Products</h2>
        </div>
        <div className="flex items-center w-full pl-5 pb-2 ">
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

          <div className="col w-[25%] ml-auto flex items-center gap-3">
            <Button className="btn   !text-white   "> Export</Button>
            <Button className="btn-blue   !text-white ">Add product</Button>
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

      {/* ....... */}
      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18spx] font-[600]">Products</h2>
        </div>
        <MetarialTable />
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-between px-5 py-5">
          <h2 className="text-[18spx] font-[600]">Recent Orders</h2>
        </div>
        <div class="relative overflow-x-auto   border border-default">
          <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
            <table className="w-full text-sm text-left rtl:text-right text-body">
              <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                <tr>
                  <th scope="col" className="px-6 py-3 font-[600]"></th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Order Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Payment Id
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Products
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Name
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Phone Number
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Address
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Pincode
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Total Amount
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Email
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    User Id
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 font-[600] whitespace-nowrap"
                  >
                    Order Status
                  </th>
                  <th scope="col" className="px-6 py-3 font-[600]">
                    Date
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-neutral-primary border-b border-default font-[500]">
                  <td className="px-6 py-4">
                    <Button
                      onClick={() => isShowOrderdProduct(0)}
                      className="!w-[35px] !h-[35px] !min-h-[35px] !rounded-full !bg-[#f1f1f1]"
                    >
                      {isOpenOrderProduct === 0 ? (
                        <IoIosArrowUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                      ) : (
                        <IoIosArrowDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                      )}
                    </Button>
                  </td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">
                    <Badge status="confirm" />
                  </td>
                  <td className="px-6 py-4">54644</td>
                </tr>
                {isOpenOrderProduct === 0 && (
                  <tr>
                    <td className=" pl-20" colSpan="6">
                      <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 font-[600] whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-[600] whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th scope="col" className="px-6 py-3 font-[600]">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3 font-[600]">
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-[600] whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 font-[600]">
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-neutral-primary border-b border-default font-[500]">
                            <td className="px-6 py-4">dfgdfg</td>
                            <td className="px-6 py-4">54644</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                                className="w-[40px] h-[40px] rounded-md object-cover"
                                alt=""
                              />
                            </td>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">$1300</td>
                            <td className="px-6 py-4">$1300</td>
                          </tr>
                          <tr className="bg-neutral-primary border-b border-default font-[500]">
                            <td className="px-6 py-4">dfgdfg</td>
                            <td className="px-6 py-4">54644</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                                className="w-[40px] h-[40px] rounded-md object-cover"
                                alt=""
                              />
                            </td>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">$1300</td>
                            <td className="px-6 py-4">$1300</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
                <tr className="bg-neutral-primary border-b border-default font-[500]">
                  <td className="px-6 py-4">
                    <Button
                      onClick={() => isShowOrderdProduct(1)}
                      className="!w-[35px] !h-[35px] !min-h-[35px] !rounded-full !bg-[#f1f1f1]"
                    >
                      {isOpenOrderProduct === 1 ? (
                        <IoIosArrowUp className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                      ) : (
                        <IoIosArrowDown className="text-[16px] text-[rgba(0,0,0,0.7)]" />
                      )}
                    </Button>
                  </td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">54644</td>
                  <td className="px-6 py-4">
                    <Badge status="confirm" />
                  </td>
                  <td className="px-6 py-4">54644</td>
                </tr>
                {isOpenOrderProduct === 1 && (
                  <tr>
                    <td className=" pl-20" colSpan="6">
                      <table className="w-full text-sm text-left rtl:text-right text-body">
                        <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
                          <tr>
                            <th
                              scope="col"
                              className="px-6 py-3 font-[600] whitespace-nowrap"
                            >
                              Product Id
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-[600] whitespace-nowrap"
                            >
                              Product Title
                            </th>
                            <th scope="col" className="px-6 py-3 font-[600]">
                              Image
                            </th>
                            <th scope="col" className="px-6 py-3 font-[600]">
                              Quantity
                            </th>
                            <th
                              scope="col"
                              className="px-6 py-3 font-[600] whitespace-nowrap"
                            >
                              Price
                            </th>
                            <th scope="col" className="px-6 py-3 font-[600]">
                              SubTotal
                            </th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="bg-neutral-primary border-b border-default font-[500]">
                            <td className="px-6 py-4">dfgdfg</td>
                            <td className="px-6 py-4">54644</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                                className="w-[40px] h-[40px] rounded-md object-cover"
                                alt=""
                              />
                            </td>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">$1300</td>
                            <td className="px-6 py-4">$1300</td>
                          </tr>
                          <tr className="bg-neutral-primary border-b border-default font-[500]">
                            <td className="px-6 py-4">dfgdfg</td>
                            <td className="px-6 py-4">54644</td>
                            <td className="px-6 py-4">
                              <img
                                src="https://serviceapi.spicezgold.com/download/1742462909158_gdgd2.jpg"
                                className="w-[40px] h-[40px] rounded-md object-cover"
                                alt=""
                              />
                            </td>
                            <td className="px-6 py-4">2</td>
                            <td className="px-6 py-4">$1300</td>
                            <td className="px-6 py-4">$1300</td>
                          </tr>
                        </tbody>
                      </table>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        <div className="flex items-center justify-center   px-5 py-5">
              <h2 className="text-[18px] font-[600[]]">Repeat Customer Rate</h2>    
        </div>
        <LineChart
          style={{
            width: "1000%",
            maxWidth: "1000px",
            height: "500%",
            maxHeight: "70vh",
            aspectRatio: 1.618,
          }}
          responsive
          data={char1Data}
          margin={{
            top: 5,
            right: 0,
            left: 0,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis width="auto" />
          <Tooltip />
          <Legend />
          <Line
            type="monotone"
            dataKey="pv"
            stroke="#8884d8"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
        </LineChart>
      </div>
    </>
  );
};

export default Dashboard;
