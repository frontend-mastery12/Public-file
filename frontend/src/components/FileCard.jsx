import formatFileSize from "../utils/formatFileSize";
import { FileText } from "lucide-react";
import { Download } from "lucide-react";
import { Trash } from "lucide-react";

const FileCard = ({ file, openModal }) => {
  return (
    <div className="p-4 flex justify-between border-b-2 border-gray-300">
      <div className="flex items-center">
        <div className="flex items-center gap-3 w-136 ">
          <FileText className="fill-red-100 text-red-800 w-8 h-8" />
          <div>
            <h3 className="font-semibold text-gray-800 truncate">
              {file.fileName}
            </h3>

            <p className="text-sm text-gray-500">
              {formatFileSize(file.fileSize)}
            </p>
          </div>
        </div>

        <p className="text-sm font-semibold text-gray-900 mb-1">
          {new Date(file.createdAt).toLocaleString()}
        </p>
      </div>

      <div className="flex justify-between items-center w-30 mr-1">
        <a
          href={`http://localhost:5000/api/files/download/${file._id}`}
          className="text-indigo-700 cursor-pointer  border-2 border-indigo-300 p-3 rounded-full hover:border-indigo-500 hover:text-indigo-900"
        >
          <Download className="w-5 h-5" />
        </a>

        <button
          onClick={() => openModal(file._id)}
          className="text-red-500 cursor-pointer hover:text-red-600 border-2 border-red-400 p-3 hover:border-red-600 rounded-full"
        >
          <Trash className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default FileCard;
