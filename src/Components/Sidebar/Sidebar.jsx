import { Link } from "react-router";
import logo from "../../assets/logo-light-full.png";
import Button from "@mui/material/Button";
import { RxDashboard } from "react-icons/rx";
import { FaImages } from "react-icons/fa6";
import { FiUsers } from "react-icons/fi";
import { RiProductHuntLine } from "react-icons/ri";
import { TbCategory } from "react-icons/tb";
import { IoBagCheckSharp } from "react-icons/io5";
import { IoIosLogOut } from "react-icons/io";
import { FaAngleDown } from "react-icons/fa6";
import { useState } from "react";
import { Collapse } from "react-collapse";

const Sidebar = () => {
  const [submenuIdex, setSubmenuIdex] = useState(null);
  const isOpenSubMenu = (index) => {
    if (submenuIdex === index) {
      setSubmenuIdex(null);
    } else {
      setSubmenuIdex(index);
    }
  };

  return (
    <>
      <div
        className="sidebar fixed top-0 left-0 bg-[#fff] w-[18%] h-full border-r 
      border-[rgba(0,0,0,0.1)] py-2 px-4"
      >
        <div className="img w-full py-2">
          <Link to="/">
            {" "}
            <img src={logo} alt="" className="w-[120px] " />
          </Link>
        </div>

        <ul className="mt-4">
          <li className="list-none">
            <Button className="w-full !capitalize !justify-start text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] flex gap-2 !py-2 hover:!bg-[#f1f1f1]">
              <RxDashboard className="text-[20px]" />
              <span>Dashboard</span>
            </Button>
          </li>

            <li className="list-none">
                <Button
                onClick={() => isOpenSubMenu(1)}
                className="w-full !capitalize !justify-start text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] flex gap-2 !py-2 hover:!bg-[#f1f1f1]"
                >
                <FaImages className="text-[20px]" />
                <span> Home Slides</span>
                <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center">
                    <FaAngleDown
                    className={`transition-all ${
                        submenuIdex === 1 ? "rotate-180" : ""
                    }`}
                    />
                </span>
                </Button>

                <Collapse isOpened={submenuIdex === 1 ? true : false}>
                <ul className="w-full">
                    <li>
                    <Button className="!text-[rgba(0,0,0,0.8)] !text-[13px] !pl-8 !font-[500] px-4 !capitalize !justify-start !w-full flex gap-2">
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]">
                        {" "}
                        </span>
                        Add Home Banner Slide{" "}
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                        Home Slide list
                    </Button>
                    </li>
                </ul>
                </Collapse>
            </li>

          <li className="list-none">
            <Button className="w-full !capitalize !justify-start text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] flex gap-2 !py-2 hover:!bg-[#f1f1f1]">
              <FiUsers className="text-[20px]" />
              <span>Users</span>
            </Button>
          </li>

            <li className="list-none">
                <Button
                onClick={() => isOpenSubMenu(2)}
                className="w-full !capitalize !justify-start text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] flex gap-2 !py-2 hover:!bg-[#f1f1f1]"
                >
                <RiProductHuntLine className="text-[20px]" />
                <span> Products</span>
                <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center">
                    <FaAngleDown
                    className={`transition-all ${
                        submenuIdex === 2 ? "rotate-180" : ""
                    }`}
                    />
                </span>
                </Button>

                <Collapse isOpened={submenuIdex === 2 ? true : false}>
                <ul className="w-full">
                    <li>
                    <Button className="!text-[rgba(0,0,0,0.8)] !text-[13px] !pl-8 !font-[500] px-4 !capitalize !justify-start !w-full flex gap-2">
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]">
                        {" "}
                        </span>
                        Product list{" "}
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                        product upload
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                        Add product RAMS
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                        Add product WEIGHT
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                        Add product SIZE
                    </Button>
                    </li>
                </ul>
                </Collapse>
            </li>

            <li className="list-none">
                <Button
                onClick={() => isOpenSubMenu(3)}
                className="w-full !capitalize !justify-start text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] flex gap-2 !py-2 hover:!bg-[#f1f1f1]"
                >
                <TbCategory className="text-[20px]" />
                <span> Category</span>
                <span className="ml-auto  w-[30px] h-[30px] flex items-center justify-center">
                    <FaAngleDown
                    className={`transition-all ${
                        submenuIdex === 3 ? "rotate-180" : ""
                    }`}
                    />
                </span>
                </Button>

                <Collapse isOpened={submenuIdex === 3 ? true : false}>
                <ul className="w-full">
                    <li>
                    <Button className="!text-[rgba(0,0,0,0.8)] !text-[13px] !pl-8 !font-[500] px-4 !capitalize !justify-start !w-full flex gap-2">
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]">
                        {" "}
                        </span>
                       Category list{" "}
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                        Add a category
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                        Subcategory list
                    </Button>
                    </li>
                    <li>
                    <Button
                        className="!text-[rgba(0,0,0,0.8)] px-4 !capitalize 
                            !justify-start !w-full !text-[13px] !font-[500] !pl-8 flex gap-2"
                    >
                        {" "}
                        <span className="block w-[5px] h-[5px] rounded-full bg-[rgba(0,0,0,0.2)]"></span>
                       Add a subcategory
                    </Button>
                    </li>
                </ul>
                </Collapse>
            </li>

          <li className="list-none">
            <Button className="w-full !capitalize !justify-start text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] flex gap-2 !py-2 hover:!bg-[#f1f1f1]">
              <IoBagCheckSharp className="text-[20px]" />
              <span>Orders</span>
            </Button>
          </li>

          <li className="list-none">
            <Button className="w-full !capitalize !justify-start text-[14px] !text-[rgba(0,0,0,0.8)] !font-[500] flex gap-2 !py-2 hover:!bg-[#f1f1f1]">
              <IoIosLogOut className="text-[20px]" />
              <span>LogOut</span>
            </Button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Sidebar;
