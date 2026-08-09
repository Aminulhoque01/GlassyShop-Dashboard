import { useContext, useState } from "react";
import { IoImagesOutline } from "react-icons/io5";
import { MyContext } from "../../App";
import { uploadImage } from "../../utilitis/api";


const UploadBox=(props)=>{
    const [previews, setPreviews]=useState([])
    
  const [uploading, setUploading] = useState(false);
   const context = useContext(MyContext);
  let selectedImages = [];
  
    const formdata = new FormData();
  
    const onChangeFile = async (e) => {
      try {
        setPreviews([]);
        const files = e.target.files;
        setUploading(true);
  
        for (var i = 0; i < files.length; i++) {
          if (
            files[i] &&
            (files[i].type === "image/jpeg" ||
              files[i].type === "image/jpg" ||
              files[i].type === "image/png" ||
              files[i].type === "image/webp")
          ) {
            const file = files[i];
            selectedImages.push(file);
            formdata.append(`avatar`, file);
  
            uploadImage("/api/user/user_avatar", formdata).then((res) => {
              console.log(res);
              setUploading(false);
  
              let avatar = [];
              avatar.push(res?.data?.avatar);
              setPreviews(avatar);
            });
          }
        }
      } catch (error) {
        context.openAlertBox(
          "error",
          "please select a valid JPG , PNG or webp image file",
        );
        console.log(error);
        setUploading(false);
      }
    };
  

    return(
        <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed 
        border-[rgba(0,0,0,0.3)] h-[150px] w-[100%] bg-gray-100 cursor-pointer hover:bg-gray-200
        flex items-center justify-center flex-col relative">
            <IoImagesOutline  className="text-[40px] opacity-35 pointer-events-none"/>
             
            <h4 className="text-[14px] font-[600] pointer-events-none">Image Upload</h4>
            <input multiple={props.multiple !==undefined ? props.multiple : false} type="file" className="absolute top-0 left-0 w-full h-full z-50 opacity-0 " />
        </div>
    )
};

export default UploadBox