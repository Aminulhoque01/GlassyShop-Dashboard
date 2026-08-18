// import Button from "@mui/material/Button";
// import Checkbox from "@mui/material/Checkbox";
// import { useContext, useState } from "react";
// import { IoMdAdd } from "react-icons/io";
// import { Link } from "react-router";
// import ProgressBar from "../../Components/ProgressBar/ProgressBar";
// import { CiEdit } from "react-icons/ci";
// import { MdDeleteOutline, MdOutlineRemoveRedEye } from "react-icons/md";
// import Pagination from "@mui/material/Pagination";
// import MenuItem from "@mui/material/MenuItem";
// import Select from "@mui/material/Select";
// import SearchBox from "../../Components/SearchBox/SearchBox";
// import { MyContext } from "../../App";

 
// const label = { slotProps: { input: { "aria-label": "Checkbox demo" } } };

// const Products = () => {
//   const [age, setAge] = useState("");
//   const handleChange = (event) => {
//     setAge(event.target.value);
//   };

//   const context= useContext(MyContext);

//   return (
//     <>
//        <div className="flex items-center justify-between px-5 py-0 mt-3">
//           <h2 className="text-[18spx] font-[600]">Products</h2>
//           <div className="col w-[25%] ml-auto flex items-center justify-end gap-3">
//             <Button className="btn   !text-white   "> Export</Button>
//            {/* <Link to="/add-product"> */}
//              <Button className="btn-blue   !text-white " onClick={()=>context.setIsOpenFullScreenPanel({
//               open:true,
//               model:"Add product"
//              })}>Add product</Button>
//            {/* </Link> */}
//           </div>
//         </div>
//       <div className="card my-4 shadow-md sm:rounded-lg bg-white">
        
//         <div className="flex items-center w-full pl-5 pb-2 pt-5 px-5 ">
//           <div className="col w-[20%]">
//             <h4 className="font-[600] text-[13px] mb-2">Category By</h4>

//             <Select
//               className="w-full"
//               size="small"
//               labelId="demo-simple-select-helper-label"
//               id="demo-simple-select-helper"
//               value={age}
//               label="Age"
//               onChange={handleChange}
//             >
//               <MenuItem value="">
//                 <em>None</em>
//               </MenuItem>
//               <MenuItem value={10}>Man</MenuItem>
//               <MenuItem value={20}>Woman</MenuItem>
//               <MenuItem value={30}>Kids</MenuItem>
//             </Select>
//           </div>
//            <div className="col w-[20%] ml-auto">
//             <SearchBox/>
//            </div>
          
//         </div>

//         <div class="relative overflow-x-auto   border border-default">
//           <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border border-default">
//             <table className="w-full text-sm text-left rtl:text-right text-body">
//               <thead className="text-sm text-body bg-neutral-secondary-soft border-b rounded-base border-default">
//                 <tr>
//                   <th scope="col" className="px-6 py-3 font-[600]">
//                     <div className="w-[60px]">
//                       <Checkbox {...label} size="small" />
//                     </div>
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 font-[600] whitespace-nowrap"
//                   >
//                     Product
//                   </th>
//                   <th
//                     scope="col"
//                     className="px-6 py-3 font-[600] whitespace-nowrap"
//                   >
//                     Category
//                   </th>
//                   <th scope="col" className="px-6 py-3 font-[600]">
//                     SubCategory
//                   </th>

//                   <th
//                     scope="col"
//                     className="px-6 py-3 font-[600] whitespace-nowrap"
//                   >
//                     Price
//                   </th>
//                   <th scope="col" className="px-6 py-3 font-[600]">
//                     Sales
//                   </th>
//                   <th scope="col" className="px-6 py-3 font-[600]">
//                     Action
//                   </th>
//                 </tr>
//               </thead>
//               <tbody>
//                 <tr
//                   className="odd:bg-white   even:bg-gray-50
//                  even:dark:bg-gray-800 border-b dark:border-gray-700"
//                 >
//                   <td scope="col" className="px-6 py-3 font-[600]">
//                     <div className="w-[60px]">
//                       <Checkbox {...label} size="small" />
//                     </div>
//                   </td>

//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-4 w-[350px]">
//                       <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
//                         <Link to="/product/35345">
//                           <img
//                             src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
//                             alt=""
//                             className="w-full group-hover:scale-105 transition-all"
//                           />
//                         </Link>
//                       </div>
//                       <div className="info w-[75%]">
//                         <h3 className="font-[600] text-[12px] leading-4  ">
//                           <Link to="/product/35345">
//                             VINNED Women Embroiderd Rayon Kurta pant set | Kurta
//                             set for women
//                           </Link>
//                         </h3>
//                         <span>Books</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">Electronics</td>
//                   <td className="px-6 py-3">Woman</td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1 flex-col">
//                       <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
//                         $58.00
//                       </span>
//                       <span className="  text-blue-600 text-[15px] font-[600]">
//                         $58.00
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">
//                     <p className="text-[14px]">
//                       <span className="font-[600]">234</span>sale
//                     </p>
//                     <ProgressBar value={80} type="error" />
//                   </td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1">
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
//                              !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
//                         title="Edit"
//                       >
//                         <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
//                             !border border-[rgba(0,0,0,0.4)]"
//                         title="view"
//                       >
//                         <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
//                         title="Remove"
//                       >
//                         <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr
//                   className="odd:bg-white   even:bg-gray-50
//                    border-b dark:border-gray-700"
//                 >
//                   <td scope="col" className="px-6 py-3 font-[600]">
//                     <div className="w-[60px]">
//                       <Checkbox {...label} size="small" />
//                     </div>
//                   </td>

//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-4 w-[350px]">
//                       <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
//                         <Link to="/product/35345">
//                           <img
//                             src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
//                             alt=""
//                             className="w-full group-hover:scale-105 transition-all"
//                           />
//                         </Link>
//                       </div>
//                       <div className="info w-[75%]">
//                         <h3 className="font-[600] text-[12px] leading-4  ">
//                           <Link to="/product/35345">
//                             VINNED Women Embroiderd Rayon Kurta pant set | Kurta
//                             set for women
//                           </Link>
//                         </h3>
//                         <span>Books</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">Electronics</td>
//                   <td className="px-6 py-3">Woman</td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1 flex-col">
//                       <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
//                         $58.00
//                       </span>
//                       <span className="  text-blue-600 text-[15px] font-[600]">
//                         $58.00
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">
//                     <p className="text-[14px]">
//                       <span className="font-[600]">234</span>sale
//                     </p>
//                     <ProgressBar value={80} type="error" />
//                   </td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1">
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
//                              !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
//                         title="Edit"
//                       >
//                         <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
//                             !border border-[rgba(0,0,0,0.4)]"
//                         title="view"
//                       >
//                         <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
//                         title="Remove"
//                       >
//                         <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr
//                   className="odd:bg-white   even:bg-gray-50
//                  even:dark:bg-gray-800 border-b dark:border-gray-700"
//                 >
//                   <td scope="col" className="px-6 py-3 font-[600]">
//                     <div className="w-[60px]">
//                       <Checkbox {...label} size="small" />
//                     </div>
//                   </td>

//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-4 w-[350px]">
//                       <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
//                         <Link to="/product/35345">
//                           <img
//                             src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
//                             alt=""
//                             className="w-full group-hover:scale-105 transition-all"
//                           />
//                         </Link>
//                       </div>
//                       <div className="info w-[75%]">
//                         <h3 className="font-[600] text-[12px] leading-4  ">
//                           <Link to="/product/35345">
//                             VINNED Women Embroiderd Rayon Kurta pant set | Kurta
//                             set for women
//                           </Link>
//                         </h3>
//                         <span>Books</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">Electronics</td>
//                   <td className="px-6 py-3">Woman</td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1 flex-col">
//                       <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
//                         $58.00
//                       </span>
//                       <span className="  text-blue-600 text-[15px] font-[600]">
//                         $58.00
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">
//                     <p className="text-[14px]">
//                       <span className="font-[600]">234</span>sale
//                     </p>
//                     <ProgressBar value={80} type="error" />
//                   </td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1">
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
//                              !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
//                         title="Edit"
//                       >
//                         <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
//                             !border border-[rgba(0,0,0,0.4)]"
//                         title="view"
//                       >
//                         <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
//                         title="Remove"
//                       >
//                         <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                     </div>
//                   </td>
//                 </tr>
//                 <tr
//                   className="odd:bg-white   even:bg-gray-50
//                    border-b dark:border-gray-700"
//                 >
//                   <td scope="col" className="px-6 py-3 font-[600]">
//                     <div className="w-[60px]">
//                       <Checkbox {...label} size="small" />
//                     </div>
//                   </td>

//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-4 w-[350px]">
//                       <div className="img w-[65px] h-[65px] rounded-md overflow-hidden group">
//                         <Link to="/product/35345">
//                           <img
//                             src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75"
//                             alt=""
//                             className="w-full group-hover:scale-105 transition-all"
//                           />
//                         </Link>
//                       </div>
//                       <div className="info w-[75%]">
//                         <h3 className="font-[600] text-[12px] leading-4  ">
//                           <Link to="/product/35345">
//                             VINNED Women Embroiderd Rayon Kurta pant set | Kurta
//                             set for women
//                           </Link>
//                         </h3>
//                         <span>Books</span>
//                       </div>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">Electronics</td>
//                   <td className="px-6 py-3">Woman</td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1 flex-col">
//                       <span className="oldPrice line-through text-gray-500 text-[15px] font-[500]">
//                         $58.00
//                       </span>
//                       <span className="  text-blue-600 text-[15px] font-[600]">
//                         $58.00
//                       </span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-3">
//                     <p className="text-[14px]">
//                       <span className="font-[600]">234</span>sale
//                     </p>
//                     <ProgressBar value={80} type="error" />
//                   </td>
//                   <td className="px-6 py-3">
//                     <div className="flex items-center gap-1">
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1]
//                              !border border-[rgba(0,0,0,0.4)] !rounded-full hover:!bg-[#f1f1f1]"
//                         title="Edit"
//                       >
//                         <CiEdit className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] 
//                             !border border-[rgba(0,0,0,0.4)]"
//                         title="view"
//                       >
//                         <MdOutlineRemoveRedEye className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                       <Button
//                         className="!w-[35px] !h-[35px] !min-w-[35px] bg-[#f1f1f1] !rounded-full hover:!bg-[#f1f1f1] !border border-[rgba(0,0,0,0.4)]"
//                         title="Remove"
//                       >
//                         <MdDeleteOutline className="text-[rgba(0,0,0,0.7)] text-[20px]" />
//                       </Button>
//                     </div>
//                   </td>
//                 </tr>
//               </tbody>
//             </table>
//           </div>
//           <div className="flex items-center justify-end mt-4 mb-4">
//             <Pagination count={10} color="secondary" />
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Products;




import Button from "@mui/material/Button";
import Checkbox from "@mui/material/Checkbox";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import MenuItem from "@mui/material/MenuItem";
import Pagination from "@mui/material/Pagination";
import Select from "@mui/material/Select";
import TextField from "@mui/material/TextField";

import { useEffect, useMemo, useState } from "react";

import {
  CiEdit,
  CiSearch,
} from "react-icons/ci";

import {
  MdDeleteOutline,
  MdOutlineRemoveRedEye,
} from "react-icons/md";

import { IoMdClose } from "react-icons/io";

import {
  fetchDataFromApi,
 
  editData,
  deleteData,
  uploadCategoryImage,
} from "../../utilitis/api";

import ProgressBar from "../../Components/ProgressBar/ProgressBar";

import { MyContext } from "../../App";
import { useContext } from "react";


const label = {
  slotProps: {
    input: {
      "aria-label": "Checkbox demo",
    },
  },
};


const Products = () => {

  const context = useContext(MyContext);


  // ==========================================
  // Products
  // ==========================================

  const [products, setProducts] = useState([]);

  const [loading, setLoading] = useState(false);


  // ==========================================
  // Categories
  // ==========================================

  const [categories, setCategories] = useState([]);


  // ==========================================
  // Search / Filter
  // ==========================================

  const [search, setSearch] = useState("");

  const [categoryFilter, setCategoryFilter] =
    useState("");

  const [priceFilter, setPriceFilter] =
    useState("");

  const [ratingFilter, setRatingFilter] =
    useState("");


  // ==========================================
  // Pagination
  // ==========================================

  const [page, setPage] = useState(1);

  const [rowsPerPage, setRowsPerPage] =
    useState(10);


  // ==========================================
  // View Modal
  // ==========================================

  const [viewOpen, setViewOpen] =
    useState(false);

  const [selectedProduct, setSelectedProduct] =
    useState(null);

  const [viewLoading, setViewLoading] =
    useState(false);


  // ==========================================
  // Edit Modal
  // ==========================================

  const [editOpen, setEditOpen] =
    useState(false);

  const [editLoading, setEditLoading] =
    useState(false);


  // ==========================================
  // Edit Form
  // ==========================================

  const [editForm, setEditForm] = useState({
    name: "",
    description: "",
    category: "",
    subCategory: "",
    price: "",
    oldPrice: "",
    stock: "",
    brand: "",
    discount: "",
    rams: "",
    weight: "",
    size: "",
    rating: 0,
    isFeatured: false,
    images: [],
  });


  // ==========================================
  // Edit New Images
  // ==========================================

  const [newImages, setNewImages] =
    useState([]);


  // ==========================================
  // Edit Sub Categories
  // ==========================================

  const [editSubCategories, setEditSubCategories] =
    useState([]);


  // ==========================================
  // Get All Products
  // ==========================================

  useEffect(() => {
    getProducts();
    getCategories();
  }, []);


  const getProducts = async () => {

    try {

      setLoading(true);

      const response =
        await fetchDataFromApi(
          "/api/product/all-products"
        );

      console.log(
        "All Products:",
        response
      );


      if (response?.success) {

        /*
          Backend response যদি:

          {
            success: true,
            data: [...]
          }

          হয়
        */

        setProducts(
          response.products || []
        );

      } else {

        setProducts([]);

      }

    } catch (error) {

      console.log(
        "Product fetch error:",
        error
      );

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // Get Categories
  // ==========================================

  const getCategories = async () => {

    try {

      const response =
        await fetchDataFromApi(
          "/api/category/all"
        );

      if (response?.success) {

        setCategories(
          response.data || []
        );

      }

    } catch (error) {

      console.log(
        "Category error:",
        error
      );

    }

  };


  // ==========================================
  // Search + Filter
  // ==========================================

  const filteredProducts = useMemo(() => {

    let result = [...products];


    // Search

    if (search.trim()) {

      const searchValue =
        search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name
            ?.toLowerCase()
            .includes(searchValue) ||

          product.categoryName
            ?.toLowerCase()
            .includes(searchValue) ||

          product.subCategoryName
            ?.toLowerCase()
            .includes(searchValue) ||

          product.brand
            ?.toLowerCase()
            .includes(searchValue)
      );

    }


    // Category

    if (categoryFilter) {

      result = result.filter(
        (product) =>
          product.category ===
            categoryFilter ||

          product.category?._id ===
            categoryFilter
      );

    }


    // Price

    if (priceFilter === "low") {

      result = result.filter(
        (product) =>
          Number(product.price) < 1000
      );

    }

    if (priceFilter === "medium") {

      result = result.filter(
        (product) =>
          Number(product.price) >= 1000 &&
          Number(product.price) <= 5000
      );

    }

    if (priceFilter === "high") {

      result = result.filter(
        (product) =>
          Number(product.price) > 5000
      );

    }


    // Rating

    if (ratingFilter) {

      result = result.filter(
        (product) =>
          Number(product.rating || 0) >=
          Number(ratingFilter)
      );

    }


    return result;

  }, [
    products,
    search,
    categoryFilter,
    priceFilter,
    ratingFilter,
  ]);


  // ==========================================
  // Pagination
  // ==========================================

  const totalPages =
    Math.ceil(
      filteredProducts.length /
        rowsPerPage
    );


  const paginatedProducts =
    filteredProducts.slice(
      (page - 1) * rowsPerPage,
      page * rowsPerPage
    );


  // ==========================================
  // Search Change
  // ==========================================

  const handleSearch = (event) => {

    setSearch(
      event.target.value
    );

    setPage(1);

  };


  // ==========================================
  // Category Filter
  // ==========================================

  const handleCategoryFilter = (
    event
  ) => {

    setCategoryFilter(
      event.target.value
    );

    setPage(1);

  };


  // ==========================================
  // Price Filter
  // ==========================================

  const handlePriceFilter = (
    event
  ) => {

    setPriceFilter(
      event.target.value
    );

    setPage(1);

  };


  // ==========================================
  // Rating Filter
  // ==========================================

  const handleRatingFilter = (
    event
  ) => {

    setRatingFilter(
      event.target.value
    );

    setPage(1);

  };


  // ==========================================
  // View Product
  // ==========================================

  const handleView = async (product) => {

    try {

      setViewOpen(true);

      setViewLoading(true);

      const response =
        await fetchDataFromApi(
          `/api/product/${product._id}`
        );


      console.log(
        "Single Product:",
        response
      );


      if (response?.success) {

        setSelectedProduct(
          response.product

        );

      } else {

        setSelectedProduct(
          product
        );

      }

    } catch (error) {

      console.log(
        "View product error:",
        error
      );

      setSelectedProduct(
        product
      );

    } finally {

      setViewLoading(false);

    }

  };


  // ==========================================
  // Open Edit
  // ==========================================

  const handleEdit = async (product) => {

    try {

      setEditLoading(true);

      const response =
        await fetchDataFromApi(
          `/api/product/${product._id}`
        );


      const data = response.product


      console.log(
        "Edit Product:",
        data
      );


      setSelectedProduct(data);


      setEditForm({

        name:
          data.name || "",

        description:
          data.description || "",

        category:
          data.catName?._id ||
          data.category ||
          "",

        subCategory:
          data.subCat?._id ||
          data.subCategory ||
          "",

        price:
          data.price || "",

        oldPrice:
          data.oldPrice || "",

        stock:
          data.stock || "",

        brand:
          data.brand || "",

        discount:
          data.discount || "",

        rams:
          data.rams || "",

        weight:
          data.weight || "",

        size:
          data.size || "",

        rating:
          data.rating || 0,

        isFeatured:
          data.isFeatured || false,

        images:
          data.images || [],

      });


      // Load subcategories

      const selectedCategory =
        categories.find(
          (category) =>
            category._id ===
            (
              data.category?._id ||
              data.category
            )
        );


      setEditSubCategories(
        selectedCategory?.children || []
      );


      setEditOpen(true);

    } catch (error) {

      console.log(
        "Edit error:",
        error
      );

    } finally {

      setEditLoading(false);

    }

  };


  // ==========================================
  // Edit Input Change
  // ==========================================

  const handleEditChange = (
    event
  ) => {

    const {
      name,
      value,
    } = event.target;


    setEditForm(
      (prev) => ({
        ...prev,
        [name]: value,
      })
    );

  };


  // ==========================================
  // Edit Category Change
  // ==========================================

  const handleEditCategoryChange = (
    event
  ) => {

    const categoryId =
      event.target.value;


    const category =
      categories.find(
        (item) =>
          item._id === categoryId
      );


    setEditForm(
      (prev) => ({
        ...prev,

        category:
          categoryId,

        subCategory:
          "",
      })
    );


    setEditSubCategories(
      category?.children || []
    );

  };


  // ==========================================
  // New Image Select
  // ==========================================

  const handleNewImages = (
    event
  ) => {

    const files =
      Array.from(
        event.target.files || []
      );


    setNewImages(
      (prev) => [
        ...prev,
        ...files,
      ]
    );

  };


  // ==========================================
  // Remove Existing Image
  // ==========================================

  const handleRemoveExistingImage = (
    index
  ) => {

    setEditForm(
      (prev) => ({
        ...prev,

        images:
          prev.images.filter(
            (_, i) =>
              i !== index
          ),
      })
    );

  };


  // ==========================================
  // Remove New Image
  // ==========================================

  const handleRemoveNewImage = (
    index
  ) => {

    setNewImages(
      (prev) =>
        prev.filter(
          (_, i) =>
            i !== index
        )
    );

  };


  // ==========================================
  // Update Product
  // ==========================================

  const handleUpdate = async (
    event
  ) => {

    event.preventDefault();


    if (!selectedProduct?._id) {
      return;
    }


    try {

      setEditLoading(true);


      let finalImages = [
        ...editForm.images,
      ];


      // ======================================
      // Upload New Images
      // ======================================

      if (newImages.length > 0) {

        const formData =
          new FormData();


        newImages.forEach(
          (file) => {
            formData.append(
              "images",
              file
            );
          }
        );


        const uploadResponse =
          await uploadCategoryImage(
            "/api/product/uploadImages",
            formData
          );


        console.log(
          "New Image Upload:",
          uploadResponse
        );


        if (
          !uploadResponse?.data
            ?.success
        ) {

          throw new Error(
            uploadResponse?.data
              ?.message ||
              "Image upload failed"
          );

        }


        const uploadedImages =
          uploadResponse.data.data ||
          [];


        finalImages = [
          ...finalImages,
          ...uploadedImages,
        ];

      }


      // ======================================
      // Product Data
      // ======================================

      const updateData = {

        name:
          editForm.name,

        description:
          editForm.description,

        images:
          finalImages,

        category:
          editForm.category,

        subCategory:
          editForm.subCategory,

        price:
          Number(editForm.price),

        oldPrice:
          Number(editForm.oldPrice) || 0,

        stock:
          Number(editForm.stock) || 0,

        brand:
          editForm.brand,

        discount:
          Number(editForm.discount) || 0,

        rams:
          editForm.rams,

        weight:
          editForm.weight,

        size:
          editForm.size,

        rating:
          Number(editForm.rating) || 0,

        isFeatured:
          editForm.isFeatured === true ||
          editForm.isFeatured === "true",

      };


      console.log(
        "Update Data:",
        updateData
      );


      // ======================================
      // Update API
      // ======================================

      const response =
        await editData(
          `/api/product/update/${selectedProduct._id}`,
          updateData
        );


      console.log(
        "Update Response:",
        response
      );


      if (!response?.success) {

        throw new Error(
          response?.message ||
            "Product update failed"
        );

      }


      alert(
        "Product updated successfully!"
      );


      // Close

      setEditOpen(false);

      setNewImages([]);


      // Refresh

      await getProducts();


    } catch (error) {

      console.log(
        "Update product error:",
        error
      );

      alert(
        error?.message ||
          "Something went wrong"
      );

    } finally {

      setEditLoading(false);

    }

  };


  // ==========================================
  // Delete Product
  // ==========================================

  const handleDelete = async (
    product
  ) => {

    if (!product?._id) {
      return;
    }


    const confirmed =
      window.confirm(
        `Are you sure you want to delete "${product.name}"?`
      );


    if (!confirmed) {
      return;
    }


    try {

      setLoading(true);


      const response =
        await deleteData(
          `/api/product/product-delete/${product._id}`
        );


      console.log(
        "Delete Response:",
        response
      );


      if (!response?.success) {

        throw new Error(
          response?.message ||
            "Product delete failed"
        );

      }


      alert(
        "Product deleted successfully!"
      );


      await getProducts();


    } catch (error) {

      console.log(
        "Delete error:",
        error
      );

      alert(
        error?.message ||
          "Something went wrong"
      );

    } finally {

      setLoading(false);

    }

  };


  // ==========================================
  // Reset Filters
  // ==========================================

  const resetFilters = () => {

    setSearch("");

    setCategoryFilter("");

    setPriceFilter("");

    setRatingFilter("");

    setPage(1);

  };


  // ==========================================
  // Render
  // ==========================================

  return (
    <>
      {/* ====================================== */}
      {/* Header */}
      {/* ====================================== */}

      <div className="flex items-center justify-between px-5 py-0 mt-3">

        <h2 className="text-[18px] font-[600]">
          Products
        </h2>


        <div className="w-[25%] ml-auto flex items-center justify-end gap-3">

          <Button className="btn !text-white">
            Export
          </Button>


          <Button
            className="btn-blue !text-white"
            onClick={() =>
              context.setIsOpenFullScreenPanel({
                open: true,
                model: "Add product",
              })
            }
          >
            Add product
          </Button>

        </div>

      </div>


      {/* ====================================== */}
      {/* Filter Section */}
      {/* ====================================== */}

      <div className="card my-4 shadow-md sm:rounded-lg bg-white">

        <div className="flex flex-wrap items-end gap-4 p-5">

          {/* Category */}

          <div className="w-[220px]">

            <h4 className="font-[600] text-[13px] mb-2">
              Category
            </h4>

            <Select
              className="w-full"
              size="small"
              value={categoryFilter}
              displayEmpty
              onChange={
                handleCategoryFilter
              }
            >

              <MenuItem value="">
                All Categories
              </MenuItem>


              {categories.map(
                (category) => (
                  <MenuItem
                    key={category._id}
                    value={category._id}
                  >
                    {category.name}
                  </MenuItem>
                )
              )}

            </Select>

          </div>


          {/* Price */}

          <div className="w-[180px]">

            <h4 className="font-[600] text-[13px] mb-2">
              Price
            </h4>

            <Select
              className="w-full"
              size="small"
              value={priceFilter}
              displayEmpty
              onChange={
                handlePriceFilter
              }
            >

              <MenuItem value="">
                All Price
              </MenuItem>

              <MenuItem value="low">
                Below 1000
              </MenuItem>

              <MenuItem value="medium">
                1000 - 5000
              </MenuItem>

              <MenuItem value="high">
                Above 5000
              </MenuItem>

            </Select>

          </div>


          {/* Rating */}

          <div className="w-[180px]">

            <h4 className="font-[600] text-[13px] mb-2">
              Rating
            </h4>

            <Select
              className="w-full"
              size="small"
              value={ratingFilter}
              displayEmpty
              onChange={
                handleRatingFilter
              }
            >

              <MenuItem value="">
                All Rating
              </MenuItem>

              <MenuItem value="4">
                4★ and above
              </MenuItem>

              <MenuItem value="3">
                3★ and above
              </MenuItem>

              <MenuItem value="2">
                2★ and above
              </MenuItem>

            </Select>

          </div>


          {/* Search */}

          <div className="w-[300px] ml-auto">

            <h4 className="font-[600] text-[13px] mb-2">
              Search
            </h4>

            <div className="relative">

              <CiSearch
                className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  text-gray-500
                  text-xl
                "
              />

              <input
                type="text"
                value={search}
                onChange={
                  handleSearch
                }
                placeholder="Search product..."
                className="
                  w-full
                  h-[40px]
                  border
                  border-gray-300
                  rounded-md
                  pl-10
                  pr-3
                  text-sm
                  focus:outline-none
                "
              />

            </div>

          </div>


          {/* Reset */}

          <Button
            variant="outlined"
            onClick={resetFilters}
          >
            Reset
          </Button>

        </div>


        {/* ==================================== */}
        {/* Table */}
        {/* ==================================== */}

        <div className="relative overflow-x-auto">

          <table className="w-full text-sm text-left">

            <thead className="text-sm bg-gray-100 border-b">

              <tr>

                <th className="px-6 py-3">

                  <Checkbox
                    {...label}
                    size="small"
                  />

                </th>


                <th className="px-6 py-3">
                  Product
                </th>


                <th className="px-6 py-3">
                  Category
                </th>


                <th className="px-6 py-3">
                  SubCategory
                </th>


                <th className="px-6 py-3">
                  Price
                </th>


                <th className="px-6 py-3">
                  Stock
                </th>


                <th className="px-6 py-3">
                  Rating
                </th>


                <th className="px-6 py-3">
                  Action
                </th>

              </tr>

            </thead>


            <tbody>

              {loading ? (

                <tr>

                  <td
                    colSpan="8"
                    className="text-center py-10"
                  >
                    Loading products...
                  </td>

                </tr>

              ) : paginatedProducts.length ===
                0 ? (

                <tr>

                  <td
                    colSpan="8"
                    className="text-center py-10 text-gray-500"
                  >
                    No products found
                  </td>

                </tr>

              ) : (

                paginatedProducts.map(
                  (product) => (

                    <tr
                      key={product._id}
                      className="
                        border-b
                        hover:bg-gray-50
                      "
                    >

                      {/* Checkbox */}

                      <td className="px-6 py-3">

                        <Checkbox
                          {...label}
                          size="small"
                        />

                      </td>


                      {/* Product */}

                      <td className="px-6 py-3">

                        <div className="flex items-center gap-4 w-[350px]">

                          <div
                            className="
                              w-[65px]
                              h-[65px]
                              rounded-md
                              overflow-hidden
                              bg-gray-100
                              flex-shrink-0
                            "
                          >

                            {product.images?.[0] ? (

                              <img
                                src={
                                  product.images[0]
                                }
                                alt={
                                  product.name
                                }
                                className="
                                  w-full
                                  h-full
                                  object-cover
                                "
                              />

                            ) : (

                              <div className="
                                w-full
                                h-full
                                flex
                                items-center
                                justify-center
                                text-xs
                                text-gray-400
                              ">
                                No image
                              </div>

                            )}

                          </div>


                          <div className="info">

                            <h3 className="
                              font-[600]
                              text-[12px]
                              leading-4
                            ">

                              {product.name}

                            </h3>


                            <span className="text-gray-500">
                              {product.brand || "No Brand"}
                            </span>

                          </div>

                        </div>

                      </td>


                      {/* Category */}

                      <td className="px-6 py-3">

                        {product.catName ||
                          product.category?.name ||
                          "N/A"}

                      </td>


                      {/* SubCategory */}

                      <td className="px-6 py-3">

                        {product.subCat ||
                          product.subCategory?.name ||
                          "N/A"}

                      </td>


                      {/* Price */}

                      <td className="px-6 py-3">

                        <div className="
                          flex
                          flex-col
                        ">

                          {product.oldPrice >
                            product.price && (

                            <span className="
                              line-through
                              text-gray-500
                            ">
                              ৳{product.oldPrice}
                            </span>

                          )}

                          <span className="
                            text-blue-600
                            font-[600]
                          ">
                            ৳{product.price}
                          </span>

                        </div>

                      </td>


                      {/* Stock */}

                      <td className="px-6 py-3">

                        <p>

                          <span className="font-[600]">
                            {product.stock || 0}
                          </span>

                          {" "}items

                        </p>


                        <ProgressBar
                          value={
                            Math.min(
                              Number(
                                product.stock || 0
                              ),
                              100
                            )
                          }
                          type={
                            Number(
                              product.stock || 0
                            ) <= 10
                              ? "error"
                              : "success"
                          }
                        />

                      </td>


                      {/* Rating */}

                      <td className="px-6 py-3">

                        <span className="
                          text-yellow-500
                          font-[600]
                        ">
                          ⭐{" "}
                          {product.rating || 0}
                        </span>

                      </td>


                      {/* Action */}

                      <td className="px-6 py-3">

                        <div className="
                          flex
                          items-center
                          gap-1
                        ">

                          {/* Edit */}

                          <Button
                            onClick={() =>
                              handleEdit(
                                product
                              )
                            }
                            className="
                              !w-[35px]
                              !h-[35px]
                              !min-w-[35px]
                              !bg-[#f1f1f1]
                              !border
                              !border-[rgba(0,0,0,0.4)]
                              !rounded-full
                            "
                            title="Edit"
                          >

                            <CiEdit
                              className="
                                text-[20px]
                                text-black
                              "
                            />

                          </Button>


                          {/* View */}

                          <Button
                            onClick={() =>
                              handleView(
                                product
                              )
                            }
                            className="
                              !w-[35px]
                              !h-[35px]
                              !min-w-[35px]
                              !bg-[#f1f1f1]
                              !border
                              !border-[rgba(0,0,0,0.4)]
                              !rounded-full
                            "
                            title="View"
                          >

                            <MdOutlineRemoveRedEye
                              className="
                                text-[20px]
                                text-black
                              "
                            />

                          </Button>


                          {/* Delete */}

                          <Button
                            onClick={() =>
                              handleDelete(
                                product
                              )
                            }
                            className="
                              !w-[35px]
                              !h-[35px]
                              !min-w-[35px]
                              !bg-[#f1f1f1]
                              !border
                              !border-[rgba(0,0,0,0.4)]
                              !rounded-full
                            "
                            title="Delete"
                          >

                            <MdDeleteOutline
                              className="
                                text-[20px]
                                text-black
                              "
                            />

                          </Button>

                        </div>

                      </td>

                    </tr>

                  )
                )

              )}

            </tbody>

          </table>

        </div>


        {/* ==================================== */}
        {/* Pagination */}
        {/* ==================================== */}

        <div className="
          flex
          items-center
          justify-between
          px-5
          py-4
        ">

          <div className="flex items-center gap-2">

            <span className="text-sm">
              Rows:
            </span>

            <Select
              size="small"
              value={rowsPerPage}
              onChange={(event) => {

                setRowsPerPage(
                  Number(
                    event.target.value
                  )
                );

                setPage(1);

              }}
            >

              <MenuItem value={5}>
                5
              </MenuItem>

              <MenuItem value={10}>
                10
              </MenuItem>

              <MenuItem value={25}>
                25
              </MenuItem>

              <MenuItem value={50}>
                50
              </MenuItem>

            </Select>

          </div>


          <Pagination
            count={totalPages || 1}
            page={page}
            onChange={(
              event,
              value
            ) => setPage(value)}
            color="primary"
          />

        </div>

      </div>


      {/* ================================================= */}
      {/* VIEW MODAL */}
      {/* ================================================= */}

      <Dialog
        open={viewOpen}
        onClose={() =>
          setViewOpen(false)
        }
        maxWidth="md"
        fullWidth
      >

        <DialogTitle>

          Product Details

          <IconButton
            onClick={() =>
              setViewOpen(false)
            }
            className="!absolute !right-2 !top-2"
          >
            <IoMdClose />
          </IconButton>

        </DialogTitle>


        <DialogContent>

          {viewLoading ? (

            <div className="py-10 text-center">
              Loading...
            </div>

          ) : selectedProduct ? (

            <div className="space-y-5">

              {/* Images */}

              <div className="
                grid
                grid-cols-5
                gap-3
              ">

                {selectedProduct.images?.map(
                  (image, index) => (

                    <div
                      key={index}
                      className="
                        h-[120px]
                        rounded-md
                        overflow-hidden
                        border
                      "
                    >

                      <img
                        src={image}
                        alt=""
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />

                    </div>

                  )
                )}

              </div>


              {/* Name */}

              <div>

                <h2 className="
                  text-xl
                  font-[600]
                ">
                  {selectedProduct.name}
                </h2>

              </div>


              {/* Details Grid */}

              <div className="
                grid
                grid-cols-2
                gap-4
              ">

                <DetailItem
                  label="Category"
                  value={
                    selectedProduct.catName||
                    selectedProduct.category?.name
                  }
                />


                <DetailItem
                  label="Sub Category"
                  value={
                    selectedProduct.subCat ||
                    selectedProduct.subCategory?.name
                  }
                />


                <DetailItem
                  label="Brand"
                  value={
                    selectedProduct.brand
                  }
                />


                <DetailItem
                  label="Price"
                  value={`৳${selectedProduct.price}`}
                />


                <DetailItem
                  label="Old Price"
                  value={`৳${selectedProduct.oldPrice || 0}`}
                />


                <DetailItem
                  label="Stock"
                  value={
                    selectedProduct.stock
                  }
                />


                <DetailItem
                  label="Discount"
                  value={`${
                    selectedProduct.discount ||
                    0
                  }%`}
                />


                <DetailItem
                  label="Rating"
                  value={`⭐ ${
                    selectedProduct.rating ||
                    0
                  }`}
                />


                <DetailItem
                  label="RAM"
                  value={
                    selectedProduct.rams ||
                    "N/A"
                  }
                />


                <DetailItem
                  label="Weight"
                  value={
                    selectedProduct.weight ||
                    "N/A"
                  }
                />


                <DetailItem
                  label="Size"
                  value={
                    selectedProduct.size ||
                    "N/A"
                  }
                />


                <DetailItem
                  label="Featured"
                  value={
                    selectedProduct.isFeatured
                      ? "Yes"
                      : "No"
                  }
                />

              </div>


              {/* Description */}

              <div>

                <h3 className="
                  font-[600]
                  mb-2
                ">
                  Description
                </h3>

                <p className="
                  text-gray-600
                  leading-6
                ">
                  {selectedProduct.description ||
                    "No description available"}
                </p>

              </div>


              {/* Delete */}

              <div className="
                flex
                justify-end
                pt-3
              ">

                <Button
                  variant="contained"
                  color="error"
                  onClick={() => {

                    setViewOpen(false);

                    handleDelete(
                      selectedProduct
                    );

                  }}
                >
                  Delete Product
                </Button>

              </div>

            </div>

          ) : (

            <div>
              Product not found
            </div>

          )}

        </DialogContent>

      </Dialog>


      {/* ================================================= */}
      {/* EDIT MODAL */}
      {/* ================================================= */}

      <Dialog
        open={editOpen}
        onClose={() =>
          setEditOpen(false)
        }
        maxWidth="lg"
        fullWidth
      >

        <DialogTitle>

          Edit Product

          <IconButton
            onClick={() =>
              setEditOpen(false)
            }
            className="!absolute !right-2 !top-2"
          >
            <IoMdClose />
          </IconButton>

        </DialogTitle>


        <DialogContent>

          <form
            onSubmit={handleUpdate}
            className="pt-3"
          >

            <div className="
              grid
              grid-cols-3
              gap-4
            ">


              {/* Name */}

              <div className="col-span-2">

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Product Name
                </label>

                <TextField
                  fullWidth
                  size="small"
                  name="name"
                  value={
                    editForm.name
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Brand */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Brand
                </label>

                <TextField
                  fullWidth
                  size="small"
                  name="brand"
                  value={
                    editForm.brand
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Category */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Category
                </label>

                <Select
                  fullWidth
                  size="small"
                  value={
                    editForm.category
                  }
                  onChange={
                    handleEditCategoryChange
                  }
                >

                  {categories.map(
                    (category) => (

                      <MenuItem
                        key={
                          category._id
                        }
                        value={
                          category._id
                        }
                      >
                        {
                          category.name
                        }
                      </MenuItem>

                    )
                  )}

                </Select>

              </div>


              {/* Sub Category */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Sub Category
                </label>

                <Select
                  fullWidth
                  size="small"
                  value={
                    editForm.subCategory
                  }
                  onChange={(
                    event
                  ) =>
                    setEditForm(
                      (prev) => ({
                        ...prev,
                        subCategory:
                          event.target.value,
                      })
                    )
                  }
                >

                  {editSubCategories.map(
                    (subCategory) => (

                      <MenuItem
                        key={
                          subCategory._id
                        }
                        value={
                          subCategory._id
                        }
                      >
                        {
                          subCategory.name
                        }
                      </MenuItem>

                    )
                  )}

                </Select>

              </div>


              {/* Price */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Price
                </label>

                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  name="price"
                  value={
                    editForm.price
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Old Price */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Old Price
                </label>

                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  name="oldPrice"
                  value={
                    editForm.oldPrice
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Stock */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Stock
                </label>

                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  name="stock"
                  value={
                    editForm.stock
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Discount */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Discount
                </label>

                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  name="discount"
                  value={
                    editForm.discount
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* RAM */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  RAM
                </label>

                <TextField
                  fullWidth
                  size="small"
                  name="rams"
                  value={
                    editForm.rams
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Weight */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Weight
                </label>

                <TextField
                  fullWidth
                  size="small"
                  name="weight"
                  value={
                    editForm.weight
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Size */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Size
                </label>

                <TextField
                  fullWidth
                  size="small"
                  name="size"
                  value={
                    editForm.size
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Rating */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Rating
                </label>

                <TextField
                  fullWidth
                  size="small"
                  type="number"
                  inputProps={{
                    min: 0,
                    max: 5,
                    step: 0.5,
                  }}
                  name="rating"
                  value={
                    editForm.rating
                  }
                  onChange={
                    handleEditChange
                  }
                />

              </div>


              {/* Featured */}

              <div>

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Featured
                </label>

                <Select
                  fullWidth
                  size="small"
                  value={
                    editForm.isFeatured
                      ? "true"
                      : "false"
                  }
                  onChange={(event) =>
                    setEditForm(
                      (prev) => ({
                        ...prev,
                        isFeatured:
                          event.target
                            .value ===
                          "true",
                      })
                    )
                  }
                >

                  <MenuItem value="true">
                    Yes
                  </MenuItem>

                  <MenuItem value="false">
                    No
                  </MenuItem>

                </Select>

              </div>


              {/* Description */}

              <div className="col-span-3">

                <label className="
                  text-sm
                  font-[600]
                  block
                  mb-1
                ">
                  Description
                </label>

                <textarea
                  name="description"
                  value={
                    editForm.description
                  }
                  onChange={
                    handleEditChange
                  }
                  className="
                    w-full
                    min-h-[120px]
                    border
                    border-gray-300
                    rounded-md
                    p-3
                    text-sm
                    focus:outline-none
                  "
                />

              </div>

            </div>


            {/* ================================= */}
            {/* Existing Images */}
            {/* ================================= */}

            <div className="mt-5">

              <h3 className="
                font-[600]
                text-sm
                mb-2
              ">
                Existing Images
              </h3>


              <div className="
                grid
                grid-cols-6
                gap-3
              ">

                {editForm.images.map(
                  (image, index) => (

                    <div
                      key={index}
                      className="
                        relative
                        h-[120px]
                        rounded-md
                        overflow-hidden
                        border
                      "
                    >

                      <img
                        src={image}
                        alt=""
                        className="
                          w-full
                          h-full
                          object-cover
                        "
                      />


                      <button
                        type="button"
                        onClick={() =>
                          handleRemoveExistingImage(
                            index
                          )
                        }
                        className="
                          absolute
                          top-1
                          right-1
                          w-[25px]
                          h-[25px]
                          bg-red-500
                          text-white
                          rounded-full
                          flex
                          items-center
                          justify-center
                        "
                      >

                        <IoMdClose />

                      </button>

                    </div>

                  )
                )}

              </div>

            </div>


            {/* ================================= */}
            {/* Add New Images */}
            {/* ================================= */}

            <div className="mt-5">

              <h3 className="
                font-[600]
                text-sm
                mb-2
              ">
                Add New Images
              </h3>


              <input
                type="file"
                multiple
                accept="image/*"
                onChange={
                  handleNewImages
                }
                className="
                  block
                  w-full
                  text-sm
                  border
                  p-2
                  rounded
                "
              />


              {newImages.length > 0 && (

                <div className="
                  grid
                  grid-cols-6
                  gap-3
                  mt-3
                ">

                  {newImages.map(
                    (file, index) => (

                      <div
                        key={index}
                        className="
                          relative
                          h-[120px]
                          rounded-md
                          overflow-hidden
                          border
                        "
                      >

                        <img
                          src={URL.createObjectURL(
                            file
                          )}
                          alt=""
                          className="
                            w-full
                            h-full
                            object-cover
                          "
                        />


                        <button
                          type="button"
                          onClick={() =>
                            handleRemoveNewImage(
                              index
                            )
                          }
                          className="
                            absolute
                            top-1
                            right-1
                            w-[25px]
                            h-[25px]
                            bg-red-500
                            text-white
                            rounded-full
                            flex
                            items-center
                            justify-center
                          "
                        >

                          <IoMdClose />

                        </button>

                      </div>

                    )
                  )}

                </div>

              )}

            </div>


            {/* ================================= */}
            {/* Update Button */}
            {/* ================================= */}

            <div className="
              flex
              justify-end
              gap-3
              mt-6
            ">

              <Button
                variant="outlined"
                onClick={() =>
                  setEditOpen(false)
                }
              >
                Cancel
              </Button>


              <Button
                type="submit"
                variant="contained"
                disabled={editLoading}
              >
                {editLoading
                  ? "Updating..."
                  : "Update Product"}
              </Button>

            </div>

          </form>

        </DialogContent>

      </Dialog>

    </>
  );
};


// ======================================================
// Detail Component
// ======================================================

const DetailItem = ({
  label,
  value,
}) => {

  return (
    <div className="
      border
      rounded-md
      p-3
      bg-gray-50
    ">

      <p className="
        text-xs
        text-gray-500
        mb-1
      ">
        {label}
      </p>

      <p className="
        text-sm
        font-[600]
      ">
        {value || "N/A"}
      </p>

    </div>
  );

};


export default Products;