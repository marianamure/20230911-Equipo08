import { Tooltip } from "@mui/material";
import { useState } from "react";
import { IoCloudUploadOutline } from "react-icons/io5";

const FileChange = () => {
  const [fileName, setFileName] = useState<string>("");
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files ? e.target.files[0] : null;
    const maxFileSize = 10 * 1024 * 1024;

    if (file && file.size > maxFileSize) {
      setFileName("Archivo demasiado grande (máx. 10MB)");
    } else if (file) {
      setFileName(`Archivo cargado: ${file.name}`);
    } else {
      setFileName("No se ha seleccionado ningún archivo.");
    }
  };

  return (
    <div>
      <Tooltip title=".jpg / .jpeg / .png / .pdf" placement="top">
        <label
          htmlFor="file-upload"
          className="h-full cursor-pointer flex items-center gap-4 text-lg border-2 border-black px-6 py-3 rounded-full bg-transparent hover:bg-black hover:text-white transition relative"
        >
          Adjuntar un Archivo
          <IoCloudUploadOutline />
          {/* <span className="absolute text-sm bottom-1 left-12">
              .jpg .jpeg .png .pdf
            </span> */}
        </label>
      </Tooltip>
      <input
        id="file-upload"
        onChange={handleFileChange}
        type="file"
        accept=".jpg,.jpeg,.png,.pdf"
        className="hidden relative"
      />
      <p className="absolute mt-2 text-sm">{fileName}</p>
    </div>
  );
};

export default FileChange;
