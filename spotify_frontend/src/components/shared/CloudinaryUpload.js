import { openUploadWidget } from "../../utils/CloudinaryService";
import { cloudinary_upload_preset } from "../../config";

const CloudinaryUpload = ({setUrl, setName}) => {
  const uploadImageWidget = () => {
    let myUploadWidget = openUploadWidget(
      {
        cloudName: "dejrkilnh",
        uploadPreset: cloudinary_upload_preset,
        sources: ["local"]
      },
      function (error, result) {
        if (!error && result.event === "success") {
          setUrl(result.info.secure_url);
          setName(result.info.original_filename);
        } else{
            if(error){
                console.log(error);
            }
        }
      }
    );
    myUploadWidget.open();
  };

  return (
    <button className="bg-white text-black rounded-full py-2 px-4 font-semibold" onClick={uploadImageWidget}>
      Select track
    </button>
  );
};

export default CloudinaryUpload;