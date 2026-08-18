// import Box from "@mui/material/Box";
// import InputLabel from "@mui/material/InputLabel";
// import MenuItem from "@mui/material/MenuItem";
// import FormControl from "@mui/material/FormControl";
// import Select from "@mui/material/Select";
// import { useState } from "react";
// import Rating from "@mui/material/Rating";
// import Stack from "@mui/material/Stack";
// import UploadBox from "../../Components/UploadBox/UploadBox";
// import { LazyLoadImage } from "react-lazy-load-image-component";
// import "react-lazy-load-image-component/src/effects/blur.css";
// import { IoMdClose } from "react-icons/io";
// import Button from "@mui/material/Button";
// import { FaCloudUploadAlt } from "react-icons/fa";

// const AddProduct = () => {
//   const [productCate, setProductCat] = useState("");
//   const [productSubCate, setProductSubCat] = useState("");
//   const [productFeatured, setProductFeatured] = useState("");
//   const [productRams, setProductRams] = useState("");
//   const [productWeight, setProductWeight] = useState("");
//   const [productSize, setProductSize] = useState("");

//   const handleChangeProductCate = (event) => {
//     setProductCat(event.target.value);
//   };
//   const handleChangeProductSubCate = (event) => {
//     setProductSubCat(event.target.value);
//   };
//   const handleChangeProductFeatured = (event) => {
//     setProductFeatured(event.target.value);
//   };
//   const handleChangeProductRams = (event) => {
//     setProductRams(event.target.value);
//   };
//   const handleChangeProductWeight = (event) => {
//     setProductWeight(event.target.value);
//   };
//   const handleChangeProductSize = (event) => {
//     setProductSize(event.target.value);
//   };

//   return (
//     <section className="p-5 bg-gray-50">
//       <form className="p-8 py-3 ">
//         <div className="max-h-[72vh] overflow-y-scroll pr-4">
//         <div className="grid grid-cols-1 mb-3">
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Name
//             </h3>
//             <input
//               type="text"
//               className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
//                      focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-1 mb-3">
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Description
//             </h3>
//             <textarea
//               type="text"
//               className="w-full h-[140px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
//                      focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-4 mb-3 gap-5">
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Category
//             </h3>
//             <Select
//               labelId="demo-simple-select-label"
//               id="productCategoryDropDown"
//               size="small"
//               className="w-full bg-[#f3f3f3]"
//               value={productSubCate}
//               label="Category"
//               onChange={handleChangeProductSubCate}
//             >
//               <MenuItem value={null}>none</MenuItem>
//               <MenuItem value={10}>Fashion</MenuItem>
//               <MenuItem value={20}>Beauty</MenuItem>
//               <MenuItem value={30}>Wellness</MenuItem>
//             </Select>
//           </div>
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Sub Category
//             </h3>
//             <Select
//               labelId="demo-simple-select-label"
//               id="productCategoryDropDown"
//               size="small"
//               className="w-full bg-[#f3f3f3]"
//               value={productCate}
//               label="Category"
//               onChange={handleChangeProductCate}
//             >
//               <MenuItem value={null}>none</MenuItem>
//               <MenuItem value={10}>Fashion</MenuItem>
//               <MenuItem value={20}>Beauty</MenuItem>
//               <MenuItem value={30}>Wellness</MenuItem>
//             </Select>
//           </div>

//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Price
//             </h3>
//             <input
//               type="number"
//               className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
//                      focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
//             />
//           </div>
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Old Price
//             </h3>
//             <input
//               type="number"
//               className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
//                      focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
//             />
//           </div>
//         </div>
//         <div className="grid grid-cols-4 mb-3 gap-5">
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Is Featured?
//             </h3>
//             <Select
//               labelId="demo-simple-select-label"
//               id="productCategoryDropDown"
//               size="small"
//               className="w-full bg-[#f3f3f3]"
//               value={productFeatured}
//               label="Category"
//               onChange={handleChangeProductFeatured}
//             >
//               <MenuItem value={10}>True</MenuItem>
//               <MenuItem value={20}>False</MenuItem>
//             </Select>
//           </div>
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Stock
//             </h3>
//             <input
//               type="number"
//               className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
//                      focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
//             />
//           </div>
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Brand
//             </h3>
//             <input
//               type="text"
//               className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
//                      focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
//             />
//           </div>
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Discount
//             </h3>
//             <input
//               type="number"
//               className="w-full h-[40px] border border-[rgba(0,0,0,0.2)] bg-[#f3f3f3] focus:outline-none
//                      focus:border-[rgba(0,0,0,0.4)] rounded-sm p-3 text-sm"
//             />
//           </div>
//         </div>

//         <div className="grid grid-cols-4 mb-3 gap-5">
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Rams
//             </h3>
//             <Select
//               labelId="demo-simple-select-label"
//               id="productCategoryDropDown"
//               size="small"
//               className="w-full bg-[#f3f3f3]"
//               value={productRams}
//               label="Category"
//               onChange={handleChangeProductRams}
//             >
//               <MenuItem value={"4GB"}>4GB</MenuItem>
//               <MenuItem value={"6GB"}>6GB</MenuItem>
//               <MenuItem value={"8GB"}>8GB</MenuItem>
//             </Select>
//           </div>
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Weight
//             </h3>
//             <Select
//               labelId="demo-simple-select-label"
//               id="productCategoryDropDown"
//               size="small"
//               className="w-full bg-[#f3f3f3]"
//               value={productWeight}
//               label="Category"
//               onChange={handleChangeProductWeight}
//             >
//               <MenuItem value={"4KG"}>4KG</MenuItem>
//               <MenuItem value={"6KG"}>6KG</MenuItem>
//               <MenuItem value={"8KG"}>8KG</MenuItem>
//             </Select>
//           </div>
//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product size
//             </h3>
//             <Select
//               labelId="demo-simple-select-label"
//               id="productCategoryDropDown"
//               size="small"
//               className="w-full bg-[#f3f3f3]"
//               value={productSize}
//               label="Category"
//               onChange={handleChangeProductSize}
//             >
//               <MenuItem value={"S"}>S</MenuItem>
//               <MenuItem value={"M"}>M</MenuItem>
//               <MenuItem value={"L"}>L</MenuItem>
//             </Select>
//           </div>

//           <div className="col">
//             <h3 className="text-[14px] font-[500] mb-1 text-black">
//               Product Rating
//             </h3>

//             <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
//           </div>
//         </div>

//         <div className="col w-full p-5 px-0">
//           <h3 className="font-[700] text-[18px] mb-3">Media & Images</h3>

//           <div className="grid grid-cols-7 gap-3">
//             <UploadBox multiple={true} />
//             <div className="uploadBoxWrapper relative">
//               <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden -top-[10px] -right-[10px] bg-red-500 flex items-center justify-center z-50 cursor-pointer">
//                 <IoMdClose className="text-[17px] text-white"/></span>

//               <div
//                 className="uploadBox p-3 rounded-md overflow-hidden border border-dashed
//                   border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
//                   flex items-center justify-center flex-col relative"
//               >
//                 <LazyLoadImage
//                   alt={"image"}
//                   src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75" // use normal <img> attributes as props
//                   className="w-full h-full object-cover"
//                   effect="blur"
//                   wrapperProps={{
//                     style: { transitionDelay: "1s" },
//                   }}
//                 />
//               </div>
//             </div>

//              <div className="uploadBoxWrapper relative">
//               <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden -top-[10px] -right-[10px] bg-red-500 flex items-center justify-center z-50 cursor-pointer">
//                 <IoMdClose className="text-[17px] text-white"/></span>

//               <div
//                 className="uploadBox p-3 rounded-md overflow-hidden border border-dashed
//                   border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
//                   flex items-center justify-center flex-col relative"
//               >
//                 <LazyLoadImage
//                   alt={"image"}
//                   src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75" // use normal <img> attributes as props
//                   className="w-full h-full object-cover"
//                   effect="blur"
//                   wrapperProps={{
//                     style: { transitionDelay: "1s" },
//                   }}
//                 />
//               </div>
//             </div>
//              <div className="uploadBoxWrapper relative">
//               <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden -top-[10px] -right-[10px] bg-red-500 flex items-center justify-center z-50 cursor-pointer">
//                 <IoMdClose className="text-[17px] text-white"/></span>

//               <div
//                 className="uploadBox p-3 rounded-md overflow-hidden border border-dashed
//                   border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
//                   flex items-center justify-center flex-col relative"
//               >
//                 <LazyLoadImage
//                   alt={"image"}
//                   src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75" // use normal <img> attributes as props
//                   className="w-full h-full object-cover"
//                   effect="blur"
//                   wrapperProps={{
//                     style: { transitionDelay: "1s" },
//                   }}
//                 />
//               </div>
//             </div>
//              <div className="uploadBoxWrapper relative">
//               <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden -top-[10px] -right-[10px] bg-red-500 flex items-center justify-center z-50 cursor-pointer">
//                 <IoMdClose className="text-[17px] text-white"/></span>

//               <div
//                 className="uploadBox p-3 rounded-md overflow-hidden border border-dashed
//                   border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
//                   flex items-center justify-center flex-col relative"
//               >
//                 <LazyLoadImage
//                   alt={"image"}
//                   src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75" // use normal <img> attributes as props
//                   className="w-full h-full object-cover"
//                   effect="blur"
//                   wrapperProps={{
//                     style: { transitionDelay: "1s" },
//                   }}
//                 />
//               </div>
//             </div>
//           </div>
//         </div>

//         </div>
//            <hr />
//         <br />
//         <Button type="submit" className="w-full btn-blue btn-lg flex items-center gap-2">
//           <FaCloudUploadAlt className="text-[25px] text-white"/>
// Published and View</Button>
//       </form>
//     </section>
//   );
// };

// export default AddProduct;

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
  uploadCategoryImage,
  postData,
  deleteImagesCloudinary,
} from "../../utilitis/api";
import { LazyLoadImage } from "react-lazy-load-image-component";

const AddProduct = () => {
  // =========================================
  // Product States
  // =========================================

  const [productName, setProductName] = useState("");

  const [description, setDescription] = useState("");

  const [productCate, setProductCate] = useState("");

  const [productSubCate, setProductSubCate] = useState("");

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
  // Image States
  // =========================================

   

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

    setProductCate(categoryId);

    setProductSubCate("");

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
    setProductSubCate(event.target.value);
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

  // =========================================
  // Upload Product Images
  // =========================================

  // const handleUploadImages = async () => {
  //   if (images.length === 0) {
  //     throw new Error("Please upload at least one image");
  //   }

  //   const formData = new FormData();

  //   images.forEach((file) => {
  //     formData.append("images", file);
  //   });

  //   setImageUploading(true);

  //   try {
  //     const response = await uploadCategoryImage(
  //       "/api/product/uploadImages",
  //       formData,
  //     );

  //     console.log("Product Image Upload Response:", response);

  //     /*
  //       axios response structure:

  //       response.data = backend response

  //       তাই backend যদি দেয়:

  //       {
  //         success: true,
  //         data: [...]
  //       }

  //       তাহলে response.data.data হবে image array
  //     */

  //     if (!response?.data?.success) {
  //       throw new Error(response?.data?.message || "Image upload failed");
  //     }

  //     return response.data.data || [];
  //   } finally {
  //     setImageUploading(false);
  //   }
  // };

  // =========================================
  // Create Product
  // =========================================

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedImages.length === 0) {
        alert("Please select product images");
        return;
      }

      setLoading(true);

      // =================================
      // 1. Create FormData
      // =================================

      const formData = new FormData();

      selectedImages.forEach((file) => {
        formData.append("images", file);
      });

      console.log("Selected Images:", selectedImages);

      // =================================
      // 2. Upload Images
      // =================================

      const uploadResponse = await uploadCategoryImage(
        "/api/product/uploadImages",
        formData,
      );

      console.log("Upload Response:", uploadResponse);

      if (!uploadResponse?.data?.success) {
        throw new Error(uploadResponse?.data?.message || "Image upload failed");
      }

      // =================================
      // 3. Get Cloudinary URLs
      // =================================

      const uploadedImages = uploadResponse.data.data;

      console.log("Uploaded Images:", uploadedImages);

      // =================================
      // 4. Create Product
      // =================================

      const productData = {
        name: productName,

        description: description,

        images: uploadedImages,

        category: productCate,

        subCategory: productSubCate,

        price: Number(price),

        oldPrice: Number(oldPrice),

        stock: Number(stock),

        brand: brand,

        discount: Number(discount) || 0,

        rating: Number(rating) || 0,
      };

      const productResponse = await postData("/api/product/create", productData);

      console.log("Product Response:", productResponse);

      if (!productResponse?.success) {
        throw new Error(productResponse?.message || "Product creation failed");
      }

      alert("Product created successfully!");

      // Reset

      setSelectedImages([]);

      setPreviews([]);
    } catch (error) {
      console.error(error);

      alert(error.message || "Something went wrong");
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
                value={productCate}
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
                value={productSubCate}
                displayEmpty
                onChange={handleSubCategoryChange}
                disabled={!productCate}
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
