import { useState } from "react";
import { IoImagesOutline } from "react-icons/io5";

const UploadBox = ({ multiple = false, onFilesSelect }) => {
  const [previews, setPreviews] = useState([]);

  const onChangeFile = (e) => {
    const files = Array.from(e.target.files);

    const validFiles = files.filter((file) =>
      ["image/jpeg", "image/jpg", "image/png", "image/webp"].includes(
        file.type
      )
    );

    if (validFiles.length === 0) {
      alert("Please select JPG, PNG or WEBP image");
      return;
    }

    // Preview
    const previewUrls = validFiles.map((file) =>
      URL.createObjectURL(file)
    );

    setPreviews(previewUrls);

    // Parent component এ files পাঠানো
    onFilesSelect(validFiles);
  };

  return (
    <div className="uploadBox p-3 rounded-md overflow-hidden border border-dashed 
      border-[rgba(0,0,0,0.3)] h-[150px] w-full bg-gray-100 cursor-pointer 
      hover:bg-gray-200 flex items-center justify-center flex-col relative">

      <IoImagesOutline
        className="text-[40px] opacity-35 pointer-events-none"
      />

      <h4 className="text-[14px] font-[600] pointer-events-none">
        Image Upload
      </h4>

      <input
        type="file"
        accept="image/jpeg,image/jpg,image/png,image/webp"
        multiple={multiple}
        className="absolute top-0 left-0 w-full h-full z-50 opacity-0"
        onChange={onChangeFile}
      />

      {/* Preview */}
      {previews.length > 0 && (
        <div className="absolute inset-0 bg-white grid grid-cols-2 gap-1 p-1 z-10 pointer-events-none">
          {previews.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`preview-${index}`}
              className="w-full h-full object-cover rounded"
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default UploadBox;