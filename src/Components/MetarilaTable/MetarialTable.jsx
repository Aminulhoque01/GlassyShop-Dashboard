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
import ProgressBar from "../ProgressBar/ProgressBar";
import Button from "@mui/material/Button";
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";

const columns = [
  
  { id: "product", label: "Product", minWidth: 170 },
  { id: "category", label: "Category", minWidth: 100 },
  {
    id: "subcategory",
    label: "Sub Category",
    minWidth: 170,
  },
  
  {
    id: "price",
    label: "Price",
    minWidth: 130,
  },
  {
    id: "sales",
    label: "Sales",
    minWidth: 100,
  },
  
  {
    id: "action",
    label: "Action",
    minWidth: 120,
  },
];



const MetarialTable = () => {
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
      <Paper sx={{ width: "100%", overflow: "hidden" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <Checkbox {...label} size="" />
                </TableCell>
                {columns.map((column) => (
                  <TableCell
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
                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
                             !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]" title="Edit">
                              <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]"/>
                            </Button>
                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
                            !border border-[rgba(0,0,0,0.4)]" title="view">
                              <MdOutlineRemoveRedEye  className="text-[rgba(0,0,0,0.7)] text-[20px]"/>
                            </Button>
                            <Button className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]" title="Remove">
                              <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]"/>
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

export default MetarialTable;
