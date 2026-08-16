import { useState } from "react";
import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

import UploadBox from "../../Components/UploadBox/UploadBox";
import { deleteImagesCloudinary, uploadCategoryImage } from "../../utilitis/api";

const AddCategory = () => {
  const [formFields, setFormFields] = useState({
    name: "",
  });

  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [loading, setLoading] = useState(false);

  // Category name
  const onChangeInput = (e) => {
    const { name, value } = e.target;

    setFormFields((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Image select
  const handleFilesSelect = (files) => {
    setSelectedImages(files);

    const previewUrls = files.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(previewUrls);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!formFields.name.trim()) {
        alert("Please enter category name");
        return;
      }

      if (selectedImages.length === 0) {
        alert("Please select category image");
        return;
      }

      setLoading(true);

      const formData = new FormData();

      // Category name
      formData.append("name", formFields.name);

      // Images
      selectedImages.forEach((file) => {
        formData.append("images", file);
      });

      const response = await uploadCategoryImage(
        "/api/category/upload-category-img",
        formData
      );

      console.log("Category Response:", response);

      if (response?.data?.success) {
        alert("Category created successfully");

        // Reset
        setFormFields({
          name: "",
        });

        setSelectedImages([]);
        setPreviews([]);
      }
    } catch (error) {
      console.error("Category Create Error:", error);

      alert(
        error?.response?.data?.message ||
          "Something went wrong"
      );
    } finally {
      setLoading(false);
    }
  };

  const deleteImages = (image,index)=>{
     deleteImagesCloudinary(`/api/category/deleteImage=${image}`).then((res)=>{
      console.log(res)
     })
  }

  return (
    <section className="p-5 bg-gray-50">

      <form
        onSubmit={handleSubmit}
        className="p-8 py-3"
      >

        <div className="max-h-[72vh] overflow-y-scroll pr-4 pt-4">

          {/* Category Name */}
          <div className="grid grid-cols-1 mb-5">

            <div className="w-[25%]">

              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Category Name
              </h3>

              <input
                type="text"
                name="name"
                value={formFields.name}
                onChange={onChangeInput}
                placeholder="Enter category name"
                className="w-full h-[40px] border 
                border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] 
                focus:outline-none rounded-sm p-3 text-sm"
              />

            </div>

          </div>

          {/* Category Image */}
          <h3 className="text-[18px] font-[500] mb-3 text-black">
            Category Image
          </h3>

          <div className="grid grid-cols-7 gap-3">

            {/* Upload */}
            <UploadBox
              multiple={true}
              onFilesSelect={handleFilesSelect}
            />

            {/* Preview */}
            {previews.map((image, index) => (
              <div
                key={index}
                className="uploadBox relative rounded-md overflow-hidden 
                border border-[rgba(0,0,0,0.3)] h-[150px] 
                w-full bg-gray-100"
              >

                <button
                  type="button"
                  onClick={() => {
                    const newImages = selectedImages.filter(
                      (_, i) => i !== index
                    );

                    const newPreviews = previews.filter(
                      (_, i) => i !== index
                    );

                    setSelectedImages(newImages);
                    setPreviews(newPreviews);
                  }}
                  className="absolute w-[25px] h-[25px] 
                  rounded-full top-1 right-1 bg-red-500 
                  flex items-center justify-center z-20"
                >
                  <IoMdClose className="text-[17px] text-white" onClick={()=>deleteImages(image, index)} />
                </button>

                <LazyLoadImage
                  src={image}
                  alt={`category-${index}`}
                  className="w-full h-full object-cover"
                  effect="blur"
                />

              </div>
            ))}

          </div>

        </div>

        <br />

        <div className="w-[300px]">

          <Button
            type="submit"
            disabled={loading}
            className="w-full btn-blue btn-lg flex items-center gap-2"
          >
            <FaCloudUploadAlt className="text-[25px] text-white" />

            {loading ? "Uploading..." : "Publish and View"}

          </Button>

        </div>

      </form>

    </section>
  );
};

export default AddCategory;

