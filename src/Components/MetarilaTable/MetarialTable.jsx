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

const columns = [
  { id: "id", label: "ID", minWidth: 80 },
  { id: "product", label: "Product", minWidth: 170 },
  { id: "category", label: "Category", minWidth: 100 },
  {
    id: "subcategory",
    label: "Sub Category",
    minWidth: 170,
    
  },
  {
    id: "brand",
    label: "Brand",
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
    id: "rating",
    label: "Rating",
    minWidth: 80,
    
  },
  {
    id: "action",
    label: "Action",
    minWidth: 120,
    
  },
];

function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}

 

const MetarialTable = () => {
  const [page, setPage] =  useState(0);
  const [rowsPerPage, setRowsPerPage] =  useState(10);

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
                 <TableCell style={{minWidth:columns.minWidth}}>
                  <Checkbox {...label} size="small"/>
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                  fgf
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                dfd
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                  &nbsp;
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                  &nbsp;
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                  &nbsp;
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                  &nbsp;
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                  &nbsp;
                 </TableCell>
                 <TableCell style={{minWidth:columns.minWidth}}>
                  &nbsp;
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
