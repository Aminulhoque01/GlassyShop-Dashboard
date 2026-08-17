// import Checkbox from "@mui/material/Checkbox";
// import Paper from "@mui/material/Paper";
// import Table from "@mui/material/Table";
// import TableBody from "@mui/material/TableBody";
// import TableCell from "@mui/material/TableCell";
// import TableContainer from "@mui/material/TableContainer";
// import TableHead from "@mui/material/TableHead";
// import TablePagination from "@mui/material/TablePagination";
// import TableRow from "@mui/material/TableRow";
// import { useContext, useState } from "react";
// import { Link } from "react-router";

// import Button from "@mui/material/Button";
// import { CiEdit } from "react-icons/ci";
// import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
// import { MyContext } from "../../App";

// const columns = [
//   { id: "Category Image", label: "Image", minWidth: 170 },
//   { id: "Category Name", label: "Name", minWidth: 170 },

//   {
//     id: "action",
//     label: "Action",
//     minWidth: 120,
//   },
// ];

// const Category = () => {
//   const [page, setPage] = useState(0);
//   const [rowsPerPage, setRowsPerPage] = useState(10);

//   const handleChangePage = (event, newPage) => {
//     setPage(newPage);
//   };

//   const handleChangeRowsPerPage = (event) => {
//     setRowsPerPage(+event.target.value);
//     setPage(0);
//   };
//   const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

//   const context = useContext(MyContext);
//   return (
//     <>
//       <div className="flex items-center justify-between px-5 py-5 pr-0">
//         <h2 className="text-[18spx] font-[600]">Category</h2>

//         <div className="col w-[25%] ml-auto flex items-center gap-3">
//           <Button className="btn   !text-white   "> Export</Button>
//           <Button
//             className="btn-blue   !text-white "
//             onClick={() =>
//               context.setIsOpenFullScreenPanel({
//                 open: true,
//                 model: "Add Categories",
//               })
//             }
//           >
//             Add Categories
//           </Button>
//         </div>
//       </div>
//       <Paper sx={{ width: "100%", overflow: "hidden" }}>
//         <TableContainer sx={{ maxHeight: 440 }}>
//           <Table stickyHeader aria-label="sticky table">
//             <TableHead>
//               <TableRow>
//                 <TableCell className="!bg-[#00369b] " width={60}>
//                   <Checkbox {...label} size="" className="!text-white" />
//                 </TableCell>
//                 {columns.map((column) => (
//                   <TableCell
//                     className="!bg-[#00369b] !text-white"
//                     width={column.minWidth}
//                     key={column.id}
//                     align={column.align}
//                   >
//                     {column.label}
//                   </TableCell>
//                 ))}
//               </TableRow>
//             </TableHead>
//             <TableBody>
//               <TableRow key={0}>
//                 <TableCell width={100}>
//                   <Checkbox {...label} size="" />
//                 </TableCell>
//                 <TableCell width={100}>
//                   <div className="flex items-center gap-4 w-[300px]">
//                     <div className="img w-full h-[80px]  rounded-md overflow-hidden group">
//                       <Link to="/product/325345" data-discover="true">
//                         <img
//                           src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fcategories%2Fbags.webp&w=1920&q=75"
//                           alt=""
//                           className="w-full group-hover:scale-105 transition-all"
//                         />
//                       </Link>
//                     </div>
//                   </div>
//                 </TableCell>

//                 <TableCell style={{ minWidth: columns.minWidth }}>
//                   Electronics
//                 </TableCell>
//                 <TableCell width={100}>
//                   <div className="flex items-center gap-1">
//                     <Button
//                       className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
//                              !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
//                       title="Edit"
//                     >
//                       <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                     </Button>
//                     <Button
//                       className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
//                             !border border-[rgba(0,0,0,0.4)]"
//                       title="view"
//                     >
//                       <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                     </Button>
//                     <Button
//                       className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
//                       title="Remove"
//                     >
//                       <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                     </Button>
//                   </div>
//                 </TableCell>
//               </TableRow>
//             </TableBody>
//           </Table>
//         </TableContainer>
//         <TablePagination
//           rowsPerPageOptions={[10, 25, 100]}
//           component="div"
//           rowsPerPage={rowsPerPage}
//           page={page}
//           onPageChange={handleChangePage}
//           onRowsPerPageChange={handleChangeRowsPerPage}
//         />
//       </Paper>
//     </>
//   );
// };

// export default Category;


import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import TextField from "@mui/material/TextField";

import CircularProgress from "@mui/material/CircularProgress";

import { useContext, useEffect, useState } from "react";

import { Link } from "react-router";

import { CiEdit } from "react-icons/ci";
import {
  MdDeleteOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

import { MyContext } from "../../App";

import {
  fetchDataFromApi,
  editData,
  deleteData,
} from "../../utilitis/api";


const columns = [
  {
    id: "Category Image",
    label: "Image",
    minWidth: 170,
  },
  {
    id: "Category Name",
    label: "Name",
    minWidth: 170,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 180,
  },
];


const Category = () => {
  const context = useContext(MyContext);

  // =========================
  // States
  // =========================

  const [categories, setCategories] = useState([]);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  const [loading, setLoading] = useState(false);

  const [deleteLoading, setDeleteLoading] = useState(false);

  const [updateLoading, setUpdateLoading] = useState(false);


  // Edit modal
  const [openEditModal, setOpenEditModal] = useState(false);

  const [selectedCategory, setSelectedCategory] = useState(null);

  const [editName, setEditName] = useState("");

  const [editImage, setEditImage] = useState("");


  // View modal
  const [openViewModal, setOpenViewModal] = useState(false);

  const [viewCategory, setViewCategory] = useState(null);


  // =========================
  // Get all categories
  // =========================

  const getCategories = async () => {
    try {
      setLoading(true);

      const response = await fetchDataFromApi("/api/category/all");

      console.log("Category API:", response);

      if (response?.success) {
        setCategories(response.data || []);
      } else {
        console.log(response?.message);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };


  useEffect(() => {
    getCategories();
  }, []);


  // =========================
  // Pagination
  // =========================

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };


  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);

    setPage(0);
  };


  // =========================
  // Edit
  // =========================

  const handleEditClick = (category) => {
    setSelectedCategory(category);

    setEditName(category.name || "");

    setEditImage(category.image || "");

    setOpenEditModal(true);
  };


  const handleCloseEdit = () => {
    setOpenEditModal(false);

    setSelectedCategory(null);

    setEditName("");

    setEditImage("");
  };


  const handleUpdateCategory = async () => {
    if (!selectedCategory) return;

    if (!editName.trim()) {
      alert("Category name is required");

      return;
    }

    try {
      setUpdateLoading(true);

      const response = await editData(
        `/api/category/${selectedCategory._id}`,
        {
          name: editName,
          image: editImage,
        }
      );

      console.log("Update response:", response);

      if (response?.success) {
        alert("Category updated successfully");

        handleCloseEdit();

        getCategories();
      } else {
        alert(response?.message || "Category update failed");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setUpdateLoading(false);
    }
  };


  // =========================
  // View
  // =========================

  const handleViewClick = async (category) => {
    try {
      const response = await fetchDataFromApi(
        `/api/category/${category._id}`
      );

      console.log("Single category:", response);

      if (response?.success) {
        setViewCategory(response.data);

        setOpenViewModal(true);
      } else {
        alert(response?.message || "Category not found");
      }
    } catch (error) {
      console.log(error);
    }
  };


  const handleCloseView = () => {
    setOpenViewModal(false);

    setViewCategory(null);
  };


  // =========================
  // Delete
  // =========================

  const handleDeleteClick = async (category) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${category.name}"?`
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeleteLoading(true);

      const response = await deleteData(
        `/api/category/${category._id}`
      );

      console.log("Delete response:", response);

      if (response?.success) {
        alert("Category deleted successfully");

        // instantly remove from UI
        setCategories((prev) =>
          prev.filter((item) => item._id !== category._id)
        );

        // page issue handle
        if (
          page > 0 &&
          (categories.length - 1) <= page * rowsPerPage
        ) {
          setPage(page - 1);
        }
      } else {
        alert(response?.message || "Category delete failed");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setDeleteLoading(false);
    }
  };


  // =========================
  // Current page data
  // =========================

  const visibleCategories = categories.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage
  );


  // =========================
  // Checkbox aria label
  // =========================

  const label = {
    slotProps: {
      input: {
        "aria-label": "Checkbox demo",
      },
    },
  };


  return (
    <>
      {/* =================================
          Header
      ================================= */}

      <div className="flex items-center justify-between px-5 py-5 pr-0">
        <h2 className="text-[18px] font-[600]">
          Category
        </h2>

        <div className="w-[25%] ml-auto flex items-center gap-3">
          <Button className="btn !text-white">
            Export
          </Button>

          <Button
            className="btn-blue !text-white"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Categories",
              })
            }
          >
            Add Categories
          </Button>
        </div>
      </div>


      {/* =================================
          Table
      ================================= */}

      <Paper
        sx={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <TableContainer
          sx={{
            maxHeight: 500,
          }}
        >
          <Table stickyHeader>
            
            {/* =========================
                Table Header
            ========================= */}

            <TableHead>
              <TableRow>

                <TableCell
                  className="!bg-[#00369b]"
                  width={60}
                >
                  <Checkbox
                    {...label}
                    className="!text-white"
                  />
                </TableCell>


                {columns.map((column) => (
                  <TableCell
                    className="!bg-[#00369b] !text-white"
                    width={column.minWidth}
                    key={column.id}
                  >
                    {column.label}
                  </TableCell>
                ))}

              </TableRow>
            </TableHead>


            {/* =========================
                Table Body
            ========================= */}

            <TableBody>

              {/* Loading */}

              {loading ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                    className="!py-10"
                  >
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : visibleCategories.length === 0 ? (
                <TableRow>
                  <TableCell
                    colSpan={4}
                    align="center"
                    className="!py-10"
                  >
                    No categories found
                  </TableCell>
                </TableRow>
              ) : (
                visibleCategories.map((category) => (

                  <TableRow
                    hover
                    key={category._id}
                  >

                    {/* Checkbox */}

                    <TableCell width={60}>
                      <Checkbox {...label} />
                    </TableCell>


                    {/* Image */}

                    <TableCell>
                      <div className="flex items-center gap-4">

                        <div
                          className="
                            w-[100px]
                            h-[70px]
                            rounded-md
                            overflow-hidden
                            group
                            bg-gray-100
                          "
                        >

                          <Link
                            to={`/product/${category._id}`}
                          >

                            <img
                              src={
                                category.image ||
                                category.images?.[0] ||
                                ""
                              }
                              alt={category.name}
                              className="
                                w-full
                                h-full
                                object-cover
                                group-hover:scale-105
                                transition-all
                              "
                            />

                          </Link>

                        </div>

                      </div>
                    </TableCell>


                    {/* Name */}

                    <TableCell>
                      <span className="font-medium">
                        {category.name}
                      </span>
                    </TableCell>


                    {/* Action */}

                    <TableCell>

                      <div className="flex items-center gap-2">

                        {/* Edit */}

                        <Button
                          onClick={() =>
                            handleEditClick(category)
                          }
                          className="
                            !w-[35px]
                            !h-[35px]
                            !min-w-[35px]
                            !p-0
                            !bg-[#f1f1f1]
                            !border
                            !border-[rgba(0,0,0,0.4)]
                            !rounded-full
                            hover:!bg-[#e5e5e5]
                          "
                          title="Edit"
                        >
                          <CiEdit
                            className="
                              text-[rgba(0,0,0,0.7)]
                              text-[20px]
                            "
                          />
                        </Button>


                        {/* View */}

                        <Button
                          onClick={() =>
                            handleViewClick(category)
                          }
                          className="
                            !w-[35px]
                            !h-[35px]
                            !min-w-[35px]
                            !p-0
                            !bg-[#f1f1f1]
                            !rounded-full
                            !border
                            !border-[rgba(0,0,0,0.4)]
                            hover:!bg-[#e5e5e5]
                          "
                          title="View"
                        >
                          <MdOutlineRemoveRedEye
                            className="
                              text-[rgba(0,0,0,0.7)]
                              text-[20px]
                            "
                          />
                        </Button>


                        {/* Delete */}

                        <Button
                          disabled={deleteLoading}
                          onClick={() =>
                            handleDeleteClick(category)
                          }
                          className="
                            !w-[35px]
                            !h-[35px]
                            !min-w-[35px]
                            !p-0
                            !bg-[#f1f1f1]
                            !rounded-full
                            !border
                            !border-[rgba(0,0,0,0.4)]
                            hover:!bg-[#e5e5e5]
                          "
                          title="Remove"
                        >
                          <MdDeleteOutline
                            className="
                              text-[rgba(0,0,0,0.7)]
                              text-[20px]
                            "
                          />
                        </Button>

                      </div>

                    </TableCell>

                  </TableRow>

                ))
              )}

            </TableBody>

          </Table>
        </TableContainer>


        {/* =================================
            Pagination
        ================================= */}

        <TablePagination
          rowsPerPageOptions={[10, 25, 50, 100]}
          component="div"
          count={categories.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />

      </Paper>


      {/* ==========================================
          EDIT MODAL
      ========================================== */}

      <Dialog
        open={openEditModal}
        onClose={handleCloseEdit}
        fullWidth
        maxWidth="sm"
      >

        <DialogTitle>
          Update Category
        </DialogTitle>


        <DialogContent>

          <div className="pt-4 flex flex-col gap-5">

            {/* Current image */}

            {editImage && (
              <div className="flex justify-center">

                <img
                  src={editImage}
                  alt={editName}
                  className="
                    w-[150px]
                    h-[100px]
                    object-cover
                    rounded-md
                  "
                />

              </div>
            )}


            {/* Category Name */}

            <TextField
              fullWidth
              label="Category Name"
              value={editName}
              onChange={(e) =>
                setEditName(e.target.value)
              }
            />


            {/* Image URL */}

            <TextField
              fullWidth
              label="Image URL"
              value={editImage}
              onChange={(e) =>
                setEditImage(e.target.value)
              }
            />

          </div>

        </DialogContent>


        <DialogActions>

          <Button
            onClick={handleCloseEdit}
          >
            Cancel
          </Button>


          <Button
            variant="contained"
            onClick={handleUpdateCategory}
            disabled={updateLoading}
          >
            {updateLoading ? (
              <CircularProgress
                size={22}
                className="!text-white"
              />
            ) : (
              "Update"
            )}
          </Button>

        </DialogActions>

      </Dialog>


      {/* ==========================================
          VIEW MODAL
      ========================================== */}

      <Dialog
        open={openViewModal}
        onClose={handleCloseView}
        fullWidth
        maxWidth="sm"
      >

        <DialogTitle>
          Category Details
        </DialogTitle>


        <DialogContent>

          {viewCategory && (
            <div className="py-4">

              {/* Image */}

              <div className="flex justify-center mb-5">

                <img
                  src={
                    viewCategory.image ||
                    viewCategory.images?.[0] ||
                    ""
                  }
                  alt={viewCategory.name}
                  className="
                    w-[220px]
                    h-[150px]
                    object-cover
                    rounded-lg
                  "
                />

              </div>


              {/* Name */}

              <div className="mb-3">

                <p className="text-sm text-gray-500">
                  Category Name
                </p>

                <p className="text-lg font-semibold">
                  {viewCategory.name}
                </p>

              </div>


              {/* ID */}

              <div className="mb-3">

                <p className="text-sm text-gray-500">
                  Category ID
                </p>

                <p className="text-sm">
                  {viewCategory._id}
                </p>

              </div>


              {/* Parent */}

              <div>

                <p className="text-sm text-gray-500">
                  Parent Category
                </p>

                <p className="text-sm">
                  {viewCategory.parentId || "Root Category"}
                </p>

              </div>

            </div>
          )}

        </DialogContent>


        <DialogActions>

          <Button onClick={handleCloseView}>
            Close
          </Button>

        </DialogActions>

      </Dialog>

    </>
  );
};


export default Category;