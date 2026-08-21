import { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { FaCloudUploadAlt } from "react-icons/fa";

import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import Rating from "@mui/material/Rating";

import UploadBox from "../../Components/UploadBox/UploadBox";

import {
  fetchDataFromApi,
  postData,
  deleteImagesCloudinary,
  uploadImage,
} from "../../utilitis/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AddProduct = () => {
  // =========================================
  // Product States
  // =========================================

  const [productName, setProductName] = useState("");

  const [description, setDescription] = useState("");

  const [productCat, setProductCat] = useState("");

  const [productSubCat, setProductSubCat] = useState("");

  const [price, setPrice] = useState("");

  const [oldPrice, setOldPrice] = useState("");
  const [selectedImages, setSelectedImages] = useState([]);
  const [previews, setPreviews] = useState([]);
  const [productFeatured, setProductFeatured] = useState("");

  const [stock, setStock] = useState("");

  const [brand, setBrand] = useState("");

  const [discount, setDiscount] = useState("");

  const [productRams, setProductRams] = useState("");

  const [productWeight, setProductWeight] = useState("");

  const [productSize, setProductSize] = useState("");

  const [rating, setRating] = useState(0);

  // =========================================
  // Category States
  // =========================================

  const [categories, setCategories] = useState([]);

  const [subCategories, setSubCategories] = useState([]);

  // =========================================
  // Loading States
  // =========================================

  const [loading, setLoading] = useState(false);

  const [imageUploading, setImageUploading] = useState(false);

  // =========================================
  // Get All Categories
  // =========================================

  useEffect(() => {
    getCategories();
  }, []);

  const getCategories = async () => {
    try {
      const response = await fetchDataFromApi("/api/category/all");

      console.log("Category Response:", response);

      if (response?.success) {
        setCategories(response.data || []);
      }
    } catch (error) {
      console.log("Category Error:", error);
    }
  };

  // =========================================
  // Category Change
  // =========================================

  const handleCategoryChange = (event) => {
    const categoryId = event.target.value;

    setProductCat(categoryId);
    setProductSubCat("");

    const selectedCategory = categories.find(
      (category) => category._id === categoryId,
    );

    

    if (selectedCategory) {
      setSubCategories(selectedCategory.children || []);
    } else {
      setSubCategories([]);
    }

    
  };

  // =========================================
  // Sub Category Change
  // =========================================

  const handleSubCategoryChange = (event) => {
    setProductSubCat(event.target.value);
  };

  // =========================================
  // Image Select
  // =========================================

  const handleFilesSelect = (files) => {
    const fileArray = Array.from(files);

    setSelectedImages(fileArray);

    const previewUrls = fileArray.map((file) => URL.createObjectURL(file));

    setPreviews(previewUrls);
  };

  // =========================================
  // Remove Selected Image
  // =========================================
  const deleteImages = (image) => {
    deleteImagesCloudinary(`/api/category/deleteImage=${image}`).then((res) => {
      console.log(res);
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedImages.length === 0) {
        alert("Please select product images");
        return;
      }

      if (!productCat) {
        alert("Please select category");
        return;
      }

      if (!productSubCat) {
        alert("Please select sub category");
        return;
      }

      setLoading(true);

      // Upload images
      const formData = new FormData();

      selectedImages.forEach((file) => {
        formData.append("images", file);
      });

      const uploadResponse = await uploadImage(
        "/api/product/uploadImages",
        formData,
      );

      if (!uploadResponse?.data?.success) {
        throw new Error(uploadResponse?.data?.message || "Image upload failed");
      }

      const uploadedImages = uploadResponse.data.images || [];

      if (!uploadedImages.length) {
        throw new Error("No images returned from server");
      }

      // =========================
      // Find Category
      // =========================

      const selectedCategory = categories.find(
        (category) => category._id === productCat,
      );

      // =========================
      // Find Sub Category
      // =========================

      const selectedSubCategory = subCategories.find(
        (subCategory) => subCategory._id === productSubCat,
      );

      console.log("Selected Category:", selectedCategory);
      console.log("Selected SubCategory:", selectedSubCategory);

      // =========================
      // Product Data
      // =========================

      const productData = {
        name: productName,
        description: description,

        images: uploadedImages,

        category: productCat,

        catId: productCat,
        catName: selectedCategory?.name || "",

        subCatId: productSubCat,
        subCatName: selectedSubCategory?.name || "",

        price: Number(price),
        oldPrice: Number(oldPrice) || 0,
        stock: Number(stock) || 0,

        brand: brand,

        discount: Number(discount) || 0,
        rating: Number(rating) || 0,
      };

      console.log("FINAL PRODUCT DATA:", productData);

      const productResponse = await postData(
        "/api/product/create",
        productData,
      );

      if (!productResponse?.success) {
        throw new Error(productResponse?.message || "Product creation failed");
      }

      alert("Product created successfully!");

      setSelectedImages([]);
      setPreviews([]);
    } catch (error) {
      console.error("Product submit error:", error);
      alert(error?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="p-5 bg-gray-50">
      <form className="p-8 py-3" onSubmit={handleSubmit}>
        <div className="max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          {/* ================================= */}
          {/* Basic Product Information */}
          {/* ================================= */}

          <div className="grid grid-cols-4 gap-5 mb-5">
            {/* Product Name */}

            <div className="col-span-2">
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Name
              </h3>

              <input
                type="text"
                value={productName}
                onChange={(event) => setProductName(event.target.value)}
                placeholder="Enter product name"
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

            {/* Brand */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">Brand</h3>

              <input
                type="text"
                value={brand}
                onChange={(event) => setBrand(event.target.value)}
                placeholder="Enter brand"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>

            {/* Stock */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">Stock</h3>

              <input
                type="number"
                value={stock}
                onChange={(event) => setStock(event.target.value)}
                placeholder="Enter stock"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>

            {/* Category */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Category
              </h3>

              <Select
                size="small"
                className="w-full bg-[#f3f3f3]"
                value={productCat}
                displayEmpty
                onChange={handleCategoryChange}
              >
                <MenuItem value="">Select Category</MenuItem>

                {categories.map((category) => (
                  <MenuItem key={category._id} value={category._id}>
                    {category.name}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* Sub Category */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Product Sub Category
              </h3>

              <Select
                size="small"
                className="w-full bg-[#f3f3f3]"
                value={productSubCat}
                displayEmpty
                onChange={handleSubCategoryChange}
                disabled={!productCat}
              >
                <MenuItem value="">Select Sub Category</MenuItem>

                {subCategories.map((subCategory) => (
                  <MenuItem key={subCategory._id} value={subCategory._id}>
                    {subCategory.name}
                  </MenuItem>
                ))}
              </Select>
            </div>

            {/* Price */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">Price</h3>

              <input
                type="number"
                value={price}
                onChange={(event) => setPrice(event.target.value)}
                placeholder="Product price"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>

            {/* Old Price */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Old Price
              </h3>

              <input
                type="number"
                value={oldPrice}
                onChange={(event) => setOldPrice(event.target.value)}
                placeholder="Old price"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>

            {/* Discount */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Discount
              </h3>

              <input
                type="number"
                value={discount}
                onChange={(event) => setDiscount(event.target.value)}
                placeholder="Discount %"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>

            {/* Featured */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">
                Featured
              </h3>

              <Select
                size="small"
                className="w-full bg-[#f3f3f3]"
                value={productFeatured}
                displayEmpty
                onChange={(event) => setProductFeatured(event.target.value)}
              >
                <MenuItem value="">Select</MenuItem>

                <MenuItem value="true">Yes</MenuItem>

                <MenuItem value="false">No</MenuItem>
              </Select>
            </div>

            {/* RAM */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">RAM</h3>

              <input
                type="text"
                value={productRams}
                onChange={(event) => setProductRams(event.target.value)}
                placeholder="Ex: 8GB"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>

            {/* Weight */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">Weight</h3>

              <input
                type="text"
                value={productWeight}
                onChange={(event) => setProductWeight(event.target.value)}
                placeholder="Ex: 1.5kg"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>

            {/* Size */}

            <div>
              <h3 className="text-[14px] font-[500] mb-1 text-black">Size</h3>

              <input
                type="text"
                value={productSize}
                onChange={(event) => setProductSize(event.target.value)}
                placeholder="Ex: M, L, XL"
                className="
                  w-full
                  h-[40px]
                  border
                  border-[rgba(0,0,0,0.2)]
                  bg-[#f3f3f3]
                  focus:outline-none
                  rounded-sm
                  p-3
                  text-sm
                "
              />
            </div>
          </div>

          {/* ================================= */}
          {/* Description */}
          {/* ================================= */}

          <div className="mb-5">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Description
            </h3>

            <textarea
              value={description}
              onChange={(event) => setDescription(event.target.value)}
              placeholder="Write product description..."
              className="
                w-full
                min-h-[140px]
                border
                border-[rgba(0,0,0,0.2)]
                bg-[#f3f3f3]
                focus:outline-none
                rounded-sm
                p-3
                text-sm
                resize-none
              "
            />
          </div>

          {/* ================================= */}
          {/* Rating */}
          {/* ================================= */}

          <div className="mb-5">
            <h3 className="text-[14px] font-[500] mb-1 text-black">
              Product Rating
            </h3>

            <Rating
              name="product-rating"
              value={rating}
              precision={0.5}
              onChange={(event, newValue) => {
                setRating(newValue || 0);
              }}
            />
          </div>

          {/* ================================= */}
          {/* Images */}
          {/* ================================= */}

          <div className="mb-5">
            <h3 className="text-[14px] font-[500] mb-2 text-black">
              Product Images
            </h3>

            <div className="grid grid-cols-7 gap-3">
              {/* Upload */}
              <UploadBox multiple={true} onFilesSelect={handleFilesSelect} />

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
                        (_, i) => i !== index,
                      );

                      const newPreviews = previews.filter(
                        (_, i) => i !== index,
                      );

                      setSelectedImages(newImages);
                      setPreviews(newPreviews);
                    }}
                    className="absolute w-[25px] h-[25px] 
                  rounded-full top-1 right-1 bg-red-500 
                  flex items-center justify-center z-20"
                  >
                    <IoMdClose
                      className="text-[17px] text-white"
                      onClick={() => deleteImages(image, index)}
                    />
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
        </div>

        {/* ================================= */}
        {/* Submit */}
        {/* ================================= */}

        <div className="w-[300px] mt-5">
          <Button
            type="submit"
            disabled={loading || imageUploading}
            className="
              !w-full
              btn-blue
              btn-lg
              flex
              items-center
              gap-2
              !text-white
            "
          >
            <FaCloudUploadAlt
              className="
                text-[25px]
                text-white
              "
            />

            {imageUploading
              ? "Uploading Images..."
              : loading
                ? "Publishing..."
                : "Published and View"}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default AddProduct;
