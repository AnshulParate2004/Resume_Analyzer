import { FiPlusCircle } from "react-icons/fi";

export default function App() {
  return (
    <div className="flex justify-center place-items-center w-full h-[100vh] border-2 bg-[#1E1E1E] ">
      <div className="w-1/2 h-[10%] border-gray-500 border rounded-4xl bg-[#2B2B2B] flex justify-start place-items-center p-4">
        <button onClick={() => alert("File upload")}>
          <FiPlusCircle color="gray" size={30} />
        </button>
      </div>
    </div>
  );
}
