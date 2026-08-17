import Checkbox from "@mui/material/Checkbox";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import Chip from "@mui/material/Chip";
import Button from "@mui/material/Button";

import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";

import TextField from "@mui/material/TextField";
import CircularProgress from "@mui/material/CircularProgress";

import { useContext, useEffect, useMemo, useState } from "react";

import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import { MyContext } from "../../App";

import { fetchDataFromApi, editData, deleteData } from "../../utilitis/api";

const columns = [
  {
    id: "Sub Category Image",
    label: "Image",
    minWidth: 170,
  },
  {
    id: "Category Name",
    label: "Category Name",
    minWidth: 170,
  },
  {
    id: "Sub Category Name",
    label: "Sub Category Name",
    minWidth: 250,
  },
  {
    id: "action",
    label: "Action",
    minWidth: 120,
  },
];

const SubCategory = () => {
  const context = useContext(MyContext);

  // =====================================
  // States
  // =====================================

  const [categories, setCategories] = useState([]);

  const [loading, setLoading] = useState(false);

  const [page, setPage] = useState(0);

  const [rowsPerPage, setRowsPerPage] = useState(10);

  // =====================================
  // Edit states
  // =====================================

  const [openEditModal, setOpenEditModal] = useState(false);

  const [selectedSubCategory, setSelectedSubCategory] = useState(null);

  const [editName, setEditName] = useState("");

  const [updateLoading, setUpdateLoading] = useState(false);

  // =====================================
  // Delete state
  // =====================================

  const [deleteLoading, setDeleteLoading] = useState(false);

  // =====================================
  // Get all categories
  // =====================================

  const getCategories = async () => {
    try {
      setLoading(true);

      const response = await fetchDataFromApi("/api/category/all");

      console.log("All categories:", response);

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

  // =====================================
  // Only parent categories
  // =====================================

  const parentCategories = useMemo(() => {
    return categories.filter((category) => !category.parentId);
  }, [categories]);

  // =====================================
  // Create parent + children structure
  // =====================================

  const categoryRows = useMemo(() => {
    return parentCategories.map((parent) => {
      const children = categories.filter(
        (category) => category.parentId?.toString() === parent._id.toString(),
      );

      return {
        parent,
        children,
      };
    });
  }, [parentCategories, categories]);

  // =====================================
  // Pagination
  // =====================================

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10));

    setPage(0);
  };

  // =====================================
  // Edit
  // =====================================

  const handleEdit = (subCategory) => {
    setSelectedSubCategory(subCategory);

    setEditName(subCategory.name || "");

    setOpenEditModal(true);
  };

  const handleCloseEdit = () => {
    setOpenEditModal(false);

    setSelectedSubCategory(null);

    setEditName("");
  };

  // =====================================
  // Update Sub Category
  // =====================================

  const handleUpdate = async () => {
    if (!selectedSubCategory) {
      return;
    }

    if (!editName.trim()) {
      alert("Sub category name is required");

      return;
    }

    try {
      setUpdateLoading(true);

      const response = await editData(
        `/api/category/${selectedSubCategory._id}`,
        {
          name: editName,
          parentId: selectedSubCategory.parentId,
          parentCatName: selectedSubCategory.parentCatName,
        },
      );

      console.log("Update response:", response);

      if (response?.success) {
        alert("Sub category updated successfully");

        handleCloseEdit();

        getCategories();
      } else {
        alert(response?.message || "Sub category update failed");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setUpdateLoading(false);
    }
  };

  // =====================================
  // Delete Sub Category
  // =====================================

  const handleDelete = async (subCategory) => {
    const confirmDelete = window.confirm(
      `Are you sure you want to delete "${subCategory.name}"?`,
    );

    if (!confirmDelete) {
      return;
    }

    try {
      setDeleteLoading(true);

      const response = await deleteData(`/api/category/${subCategory._id}`);

      console.log("Delete response:", response);

      if (response?.success) {
        alert("Sub category deleted successfully");

        // Remove immediately from UI

        setCategories((prev) =>
          prev.filter((item) => item._id !== subCategory._id),
        );
      } else {
        alert(response?.message || "Sub category delete failed");
      }
    } catch (error) {
      console.log(error);

      alert("Something went wrong");
    } finally {
      setDeleteLoading(false);
    }
  };

  // =====================================
  // Paginated rows
  // =====================================

  const visibleRows = categoryRows.slice(
    page * rowsPerPage,
    page * rowsPerPage + rowsPerPage,
  );

  // =====================================
  // Checkbox
  // =====================================

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
        <h2 className="text-[18px] font-[600]">Sub Category</h2>

        <div className="w-[30%] ml-auto flex items-center gap-3">
          <Button className="btn !text-white">Export</Button>

          <Button
            className="btn-blue !text-white"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add Sub Categories",
              })
            }
          >
            Add Sub Categories
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
            {/* ============================
                Header
            ============================ */}

            <TableHead>
              <TableRow>
                <TableCell className="!bg-[#00369b]" width={60}>
                  <Checkbox {...label} className="!text-white" />
                </TableCell>

                {columns.map((column) => (
                  <TableCell
                    className="
                      !bg-[#00369b]
                      !text-white
                    "
                    width={column.minWidth}
                    key={column.id}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>

            {/* ============================
                Body
            ============================ */}

            <TableBody>
              {loading ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" className="!py-10">
                    <CircularProgress />
                  </TableCell>
                </TableRow>
              ) : visibleRows.length === 0 ? (
                <TableRow>
                  <TableCell colSpan={5} align="center" className="!py-10">
                    No sub categories found
                  </TableCell>
                </TableRow>
              ) : (
                visibleRows.map(({ parent, children }) => (
                  <TableRow hover key={parent._id}>
                    {/* Checkbox */}

                    <TableCell width={60}>
                      <Checkbox {...label} />
                    </TableCell>

                    {/* =====================
                          Parent Image
                      ===================== */}

                    <TableCell>
                      <div
                        className="
                            w-[100px]
                            h-[70px]
                            rounded-md
                            overflow-hidden
                            bg-gray-100
                          "
                      >
                        <img
                          src={parent.images?.[0] || parent.image || ""}
                          alt={parent.name}
                          className="
                              w-full
                              h-full
                              object-cover
                            "
                        />
                      </div>
                    </TableCell>

                    {/* =====================
                          Parent Name
                      ===================== */}

                    <TableCell>
                      <Chip label={parent.name} />
                    </TableCell>

                    {/* =====================
                          Sub Categories
                      ===================== */}

                    <TableCell>
                      <div className="flex flex-wrap items-center gap-2">
                        {parent.children && parent.children.length > 0 ? (
                          parent.children.map((subCategory) => (
                            <Chip
                              key={subCategory._id}
                              label={subCategory.name}
                              color="primary"
                              onDelete={() => handleDelete(subCategory)}
                            />
                          ))
                        ) : (
                          <span className="text-gray-400">No sub category</span>
                        )}
                      </div>
                    </TableCell>

                    {/* =====================
                          Action
                      ===================== */}

                    <TableCell width={130}>
                      <div
                        className="
                            flex
                            items-center
                            gap-1
                          "
                      >
                        {/* Edit */}

                        <Button
                          onClick={() => {
                            if (children.length === 1) {
                              handleEdit(children[0]);
                            } else {
                              alert("Please click a sub category to edit.");
                            }
                          }}
                          className="
                              !w-[35px]
                              !h-[35px]
                              !min-w-[35px]
                              !p-0
                              !bg-[#f1f1f1]
                              !border
                              !border-[rgba(0,0,0,0.4)]
                              !rounded-full
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

                        {/* Delete */}

                        <Button
                          disabled={deleteLoading}
                          onClick={() => {
                            if (children.length === 1) {
                              handleDelete(children[0]);
                            } else {
                              alert(
                                "Please use the delete icon on the sub category.",
                              );
                            }
                          }}
                          className="
                              !w-[35px]
                              !h-[35px]
                              !min-w-[35px]
                              !p-0
                              !bg-[#f1f1f1]
                              !border
                              !border-[rgba(0,0,0,0.4)]
                              !rounded-full
                            "
                          title="Delete"
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
          count={categoryRows.length}
          page={page}
          rowsPerPage={rowsPerPage}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

      {/* =========================================
          EDIT MODAL
      ========================================= */}

      <Dialog
        open={openEditModal}
        onClose={handleCloseEdit}
        fullWidth
        maxWidth="sm"
      >
        <DialogTitle>Edit Sub Category</DialogTitle>

        <DialogContent>
          <div className="pt-5">
            <TextField
              fullWidth
              label="Sub Category Name"
              value={editName}
              onChange={(event) => setEditName(event.target.value)}
            />
          </div>
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseEdit}>Cancel</Button>

          <Button
            variant="contained"
            onClick={handleUpdate}
            disabled={updateLoading}
          >
            {updateLoading ? (
              <CircularProgress size={22} className="!text-white" />
            ) : (
              "Update"
            )}
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default SubCategory;
