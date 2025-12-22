import Button from "@mui/material/Button";
import { RiMenu2Fill } from "react-icons/ri";
import Badge from "@mui/material/Badge";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import { IoNotifications } from "react-icons/io5";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Divider from "@mui/material/Divider";
import "../../App.css";
import { useContext, useState } from "react";
import { FaRegUser } from "react-icons/fa";
import { IoSettingsOutline } from "react-icons/io5";
import { TbCircuitCapacitor } from "react-icons/tb";
import { IoIosLogOut } from "react-icons/io";
import { MyContext } from "../../App";

import { MdOutlineMenuOpen } from "react-icons/md";
import { Link } from "react-router";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    right: -3,
    top: 13,
    border: `2px solid ${(theme.vars ?? theme).palette.background.paper}`,
    padding: "0 4px",
  },
}));

const Header = () => {
  const [anchorAcc, setAnchorAcc] = useState(null);
  const openMyAcc = Boolean(anchorAcc);
  const handleClickMyAcc = (event) => {
    setAnchorAcc(event.currentTarget);
  };
  const handleCloseMyAcc = () => {
    setAnchorAcc(null);
  };

  const context = useContext(MyContext);

  return (
    <header
      className={`bg-[#fff] w-full h-auto py-2 shadow-md  ${
        context.isSidebarOpen === true ? "pl-64" : "pl-5"
      } transition-all pr-5 flex items-center justify-between`}
    >
      <div className="part1">
        <Button
          onClick={() => context.setIsSidebarOpen(!context.isSidebarOpen)}
          className="!w-[40px] !h-[40px] flex  !text-[#000] !rounded-full !min-w-[40px]"
        >
          {context.isSidebarOpen === true ? (
            <MdOutlineMenuOpen className="text-[20px]" />
          ) : (
            <RiMenu2Fill className="text-[20px]" />
          )}
        </Button>
      </div>

      <div className="part2 w-[40%] flex items-center justify-end gap-5">
        <IconButton aria-label="cart">
          <StyledBadge badgeContent={4} color="secondary">
            <IoNotifications />
          </StyledBadge>
        </IconButton>

        {context.isLogin === true ? (
          <div className="relative">
            <div
              className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer"
              onClick={handleClickMyAcc}
            >
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEV1cmRYNcFh_-d-dqVHpxP4MPS4K4WDQ6w&s"
                alt=""
                className="w-full h-full object-cover "
              />
            </div>

            <Menu
              anchorEl={anchorAcc}
              id="account-menu"
              open={openMyAcc}
              onClose={handleCloseMyAcc}
              onClick={handleCloseMyAcc}
              slotProps={{
                paper: {
                  elevation: 0,
                  sx: {
                    overflow: "visible",
                    filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
                    mt: 1.5,
                    "& .MuiAvatar-root": {
                      width: 32,
                      height: 32,
                      ml: -0.5,
                      mr: 1,
                    },
                    "&::before": {
                      content: '""',
                      display: "block",
                      position: "absolute",
                      top: 0,
                      right: 14,
                      width: 10,
                      height: 10,
                      bgcolor: "background.paper",
                      transform: "translateY(-50%) rotate(45deg)",
                      zIndex: 0,
                    },
                  },
                },
              }}
              transformOrigin={{ horizontal: "right", vertical: "top" }}
              anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
            >
              <MenuItem onClick={handleCloseMyAcc} className="!bg-white">
                <div className="flex items-center gap-3">
                  <div className="rounded-full w-[35px] h-[35px] overflow-hidden cursor-pointer">
                    <img
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsEV1cmRYNcFh_-d-dqVHpxP4MPS4K4WDQ6w&s"
                      alt=""
                      className="w-full h-full object-cover "
                    />
                  </div>

                  <div className="info">
                    <h3 className="text-[15px] font-[500] leading-5">
                      Aminul haque
                    </h3>
                    <p className="text-[12px] font-[400] opacity-70">
                      admin-01@gmail.com
                    </p>
                  </div>
                </div>
              </MenuItem>
              <Divider />
              <MenuItem onClick={handleCloseMyAcc} className="flex gap-4">
                <FaRegUser className="text-[16px]" /> <span>My Profile</span>
              </MenuItem>
              <MenuItem onClick={handleCloseMyAcc} className="flex gap-4">
                <IoSettingsOutline className="text-[16px]" />{" "}
                <span>Account setting</span>
              </MenuItem>
              <MenuItem onClick={handleCloseMyAcc} className="flex gap-4">
                <TbCircuitCapacitor className="text-[16px]" />{" "}
                <span>Activity Log</span>
              </MenuItem>
              <MenuItem onClick={handleCloseMyAcc} className="flex gap-4">
                <IoIosLogOut className="text-[20px]" /> <span>Sing out</span>
              </MenuItem>
            </Menu>
          </div>
        ) : (
         <Link to="/login"> <Button className="btn-blue btn-sm !rounded-full">Sing In</Button></Link>
        )}
      </div>
    </header>
  );
};

export default Header;
