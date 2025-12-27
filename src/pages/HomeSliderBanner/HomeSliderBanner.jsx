import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";
import { useContext, useState } from "react";
import { Link } from "react-router";

import Button from "@mui/material/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
import { MyContext } from "../../App";

const columns = [
  { id: "Image", label: "Image", minWidth: 170 },

  {
    id: "action",
    label: "Action",
    minWidth: 120,
  },
];

const HomeSliderBanner = () => {
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

  const context = useContext(MyContext);
  return (
    <>
      <div className="flex items-center justify-between px-5 py-5 pr-0">
        <h2 className="text-[18spx] font-[600]">Home Slider Banner</h2>

        <div className="col w-[25%] ml-auto flex items-center gap-3">
          <Button className="btn   !text-white   "> Export</Button>
          <Button
            className="btn-blue   !text-white "
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Home Slider",
              })
            }
          >
            Add Home Slider 
          </Button>
        </div>
      </div>
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell className="!bg-[#00369b] " width={60}>
                  <Checkbox {...label} size="" className="!text-white" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
                    className="!bg-[#00369b] !text-white"
                    width={column.minWidth}
                    key={column.id}
                    align={column.align}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              <TableRow key={0}>
                <TableCell width={100}>
                  <Checkbox {...label} size="" />
                </TableCell>
                <TableCell width={100}>
                  <div className="flex items-center gap-4 w-[300px]">
                    <div className="img w-full h-[80px]  rounded-md overflow-hidden group">
                      <Link to="/product/325345" data-discover="true">
                        <img
                          src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
                          alt=""
                          className="w-full group-hover:scale-105 transition-all"
                        />
                      </Link>
                    </div>
                  </div>
                </TableCell>

                <TableCell width={100}>
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

export default HomeSliderBanner;
