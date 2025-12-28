import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useState } from "react";
import { Link } from "react-router";
 
import Button from "@mui/material/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import ProgressBar from "../../Components/ProgressBar/ProgressBar";
import SearchBox from "../../Components/SearchBox/SearchBox";

const columns = [
  { id: "UserImage", label: "User_Image", minWidth: 170 },
  { id: "UserName", label: "User Name", minWidth: 100 },
  {
    id: "UserEmail",
    label: "User Email",
    minWidth: 170,
  },

  {
    id: "UserPh",
    label: "User Phone",
    minWidth: 130,
  },
  {
    id: "UserAdd",
    label: "User Address",
    minWidth: 100,
  },

  {
    id: "action",
    label: "Action",
    minWidth: 120,
  },
];

const Users = () => {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };
  return (
    <>
      <div className="flex items-center justify-between px-5 py-5 pr-0">
        <h2 className="text-[18spx] font-[600]">Users</h2>

        <div className="col w-[40%] ml-auto  ">
           <SearchBox/>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell className="!bg-[#00369b] ">
                  <Checkbox {...label} size="" className="!text-white" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    className="!bg-[#00369b] !text-white"
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={0}>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[200px]">
                    <div className="img w-[50px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/325345" data-discover="true">
                        <img
                          src="data:image/jpeg;base64,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"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                     
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Woman
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $58.00
                    </span>
                    <span className="  text-blue-600 text-[15px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px]">
                    <span className="font-[600]">234</span>sale
                  </p>
                  <ProgressBar value={80} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
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
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/325345" data-discover="true">
                        <img
                          src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-500">
                        <Link to="/product/4656">
                          VNEED Women Embroidered Rayon Kurta Pant set | kurta
                          set for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Woman
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $58.00
                    </span>
                    <span className="  text-blue-600 text-[15px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px]">
                    <span className="font-[600]">234</span>sale
                  </p>
                  <ProgressBar value={80} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
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
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/325345" data-discover="true">
                        <img
                          src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-500">
                        <Link to="/product/4656">
                          VNEED Women Embroidered Rayon Kurta Pant set | kurta
                          set for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Woman
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $58.00
                    </span>
                    <span className="  text-blue-600 text-[15px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px]">
                    <span className="font-[600]">234</span>sale
                  </p>
                  <ProgressBar value={80} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
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
                </TableCell>
              </TableRow>
              <TableRow key={0}>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <Checkbox {...label} size="" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
                      <Link to="/product/325345" data-discover="true">
                        <img
                          src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                    <div className="info w-[75%]">
                      <h3 className="font-[600] text-[12px] leading-4 hover:text-blue-500">
                        <Link to="/product/4656">
                          VNEED Women Embroidered Rayon Kurta Pant set | kurta
                          set for Women
                        </Link>
                      </h3>
                      <span className="text-[12px]">Books</span>
                    </div>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Electronics
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  Woman
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <div className="flex items-center gap-1 flex-col">
                    <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
                      $58.00
                    </span>
                    <span className="  text-blue-600 text-[15px] font-[600]">
                      $58.00
                    </span>
                  </div>
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
                  <p className="text-[14px]">
                    <span className="font-[600]">234</span>sale
                  </p>
                  <ProgressBar value={80} type="success" />
                </TableCell>
                <TableCell style={{ minWidth: columns.minWidth }}>
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
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>
    </>
  );
};

export default Users;
