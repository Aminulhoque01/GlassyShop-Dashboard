import Button from "@mui/material/Button";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";

import { useEffect, useState } from "react";
import { FaCloudUploadAlt } from "react-icons/fa";

import {
  fetchDataFromApi,
  postData,
} from "../../utilitis/api";


const AddSubCategory = () => {
  // =========================
  // States
  // =========================

  const [categories, setCategories] = useState([]);

  const [parentId, setParentId] = useState("");

  const [subCategoryName, setSubCategoryName] = useState("");

  const [loading, setLoading] = useState(false);

  const [submitLoading, setSubmitLoading] = useState(false);


  // =========================
  // Get Categories
  // =========================

  const getCategories = async () => {
    try {
      setLoading(true);

      const response = await fetchDataFromApi(
        "/api/category/all"
      );

      console.log("Categories:", response);

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
  // Category change
  // =========================

  const handleChangeProductCate = (event) => {
    setParentId(event.target.value);
  };


  // =========================
  // Submit
  // =========================

  const handleSubmit = async (event) => {
  event.preventDefault();

  if (!parentId) {
    alert("Please select category");
    return;
  }

  if (!subCategoryName.trim()) {
    alert("Please enter sub category name");
    return;
  }

  try {
    setSubmitLoading(true);

    const selectedParent = categories.find(
      (category) => category._id === parentId
    );

    const response = await postData(
      "/api/category/create-sub",
      {
        name: subCategoryName,
        parentId: parentId,
        parentCatName: selectedParent?.name || "",
      }
    );

    console.log("Create sub category:", response);

    if (response?.success) {
      alert("Sub category created successfully");

      setParentId("");
      setSubCategoryName("");
    } else {
      alert(
        response?.message ||
        "Sub category creation failed"
      );
    }

  } catch (error) {
    console.log(error);
    alert("Something went wrong");
  } finally {
    setSubmitLoading(false);
  }
};


  return (
    <section className="p-5 bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="p-8 py-3"
      >

        <div className="max-h-[72vh] overflow-y-scroll pr-4 pt-4">

          <div className="grid grid-cols-2 gap-5 mb-3">

            {/* =========================
                Parent Category
            ========================= */}

            <div>

              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Category
              </h3>

              <Select
                size="small"
                className="w-full bg-[#f3f3f3]"
                value={parentId}
                onChange={handleChangeProductCate}
                displayEmpty
              >

                <MenuItem value="">
                  Select Category
                </MenuItem>

                {loading ? (
                  <MenuItem disabled>
                    Loading...
                  </MenuItem>
                ) : (
                  categories.map((category) => (
                    <MenuItem
                      key={category._id}
                      value={category._id}
                    >
                      {category.name}
                    </MenuItem>
                  ))
                )}

              </Select>

            </div>


            {/* =========================
                Sub Category Name
            ========================= */}

            <div>

              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Sub Category Name
              </h3>

              <input
                type="text"
                value={subCategoryName}
                onChange={(event) =>
                  setSubCategoryName(
                    event.target.value
                  )
                }
                placeholder="Enter sub category name"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  focus:border-[rgba(0,0,0,0.4)]
                  rounded-sm
                  p-3
                  text-sm
                "
              />

            </div>

          </div>

        </div>


        <br />
        <br />


        {/* =========================
            Submit
        ========================= */}

        <div className="w-[300px]">

          <Button
            type="submit"
            disabled={submitLoading}
            className="
              w-full
              btn-blue
              btn-lg
              flex
              items-center
              gap-2
            "
          >

            <FaCloudUploadAlt
              className="
                text-[25px]
                text-white
              "
            />

            {submitLoading
              ? "Publishing..."
              : "Published and View"}

          </Button>

        </div>

      </form>

    </section>
  );
};


export default AddSubCategory;