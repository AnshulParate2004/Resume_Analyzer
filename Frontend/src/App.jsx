import { FiPlusCircle } from "react-icons/fi";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { FaArrowUp } from "react-icons/fa6";

export default function App() {
  const [fileName, setFileName] = useState("");

  const onDrop = useCallback((acceptedFiles) => {
    const file = acceptedFiles[0];
    if (file) {
      setFileName(file.name);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive, open } = useDropzone({
    onDrop,
    noClick: true, 
    noKeyboard: false,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.openxmlformats-officedocument.wordprocessingml.document": [
        ".docx",
      ],
    },
  });

  return (
    <div className="flex flex-col justify-center items-center w-full h-[100vh] border-2 bg-[#1E1E1E]">
      <h2 className="text-white text-3xl font-bold mb-4">Upload Your Resume Here</h2>
      <div className="w-1/2 h-auto border-gray-500 border rounded-4xl bg-[#2B2B2B] flex justify-start items-center p-4 gap-2"
        {...getRootProps()}
      >
        <input {...getInputProps()} />
        <button onClick={open} className="flex justify-center place-items-center gap-2 text-gray-400">
          <FiPlusCircle size={30} />
        </button>
        <div className="flex justify-center items-center">
          {
            fileName ? (
              <p className="text-gray-300 font-bold underline">{fileName}</p>
            ) : (
              isDragActive ? (
                <p className="text-gray-400">Drop the files here ...</p>
              ) : (
                <p className="text-gray-400">Drag & drop files here, or click to select</p>
              )
            )
          }
        </div>
        <button onClick={() => alert("Submit file")} className="gap-2 bg-gray-400 rounded-full ml-auto p-1.5">
          <FaArrowUp size={20}/>
        </button>
      </div>
    </div>
  );
}
