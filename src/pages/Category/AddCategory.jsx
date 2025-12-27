import { IoMdClose } from "react-icons/io";
import { LazyLoadImage } from "react-lazy-load-image-component";
import UploadBox from "../../Components/UploadBox/UploadBox";
import Button from "@mui/material/Button";
import { FaCloudUploadAlt } from "react-icons/fa";

const AddCategory = () => {
  return (
    <section className="p-5 bg-gray-50">
      <form className="p-8 py-3 ">
        <div className="max-h-[72vh] overflow-y-scroll pr-4 pt-4">
          <div className="grid grid-cols-7 gap-3">
            <UploadBox multiple={true} />
            <div className="uploadBoxWrapper relative">
              <span className="absolute w-[20px] h-[20px] rounded-full overflow-hidden -top-[10px] -right-[10px] bg-red-500 flex items-center justify-center z-50 cursor-pointer">
                <IoMdClose className="text-[17px] text-white" />
              </span>

              <div
                className="uploadBox p-3 rounded-md overflow-hidden border border-dashed 
                  border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
                  flex items-center justify-center flex-col relative"
              >
                <LazyLoadImage
                  alt={"image"}
                  src="https://isomorphic-furyroad.vercel.app/_next/image?url=https%3A%2F%2Fisomorphic-furyroad.s3.amazonaws.com%2Fpublic%2Fproducts%2Fmodern%2F1.webp&w=1920&q=75" // use normal <img> attributes as props
                  className="w-full h-full object-cover"
                  effect="blur"
                  wrapperProps={{
                    style: { transitionDelay: "1s" },
                  }}
                />
              </div>
            </div>
          </div>
        </div>
         <br />
        
        <br />
        <br />
        <div className="w-[300px]">
        <Button
          type="submit"
          className="w-full btn-blue btn-lg flex items-center gap-2"
        >
          <FaCloudUploadAlt className="text-[25px] text-white" />
          Published and View
        </Button>
        </div>
      </form>
    </section>
  );
};

export default AddCategory;
