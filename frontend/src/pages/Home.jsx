import { useState } from "react";
import UploadBox from "../components/UploadBox";
import FileCard from "../components/FileCard";
import DeleteModal from "../components/DeleteModal";
import useFiles from "../hooks/useFiles";

const Home = () => {
  const { files, upload, deleteFile, loading, error, success } = useFiles();

  const [isOpen, setIsOpen] = useState(false);
  const [selectedId, setSelectedId] = useState(null);

  const openModal = (id) => {
    setSelectedId(id);
    setIsOpen(true);
  };

  const handleDeleteConfirm = (code) => {
    deleteFile(selectedId, code);
  };

  return (
    <div className="min-h-screen bg-gray-100 px-6 py-10">
      <div className="max-w-6xl mx-auto">
        <UploadBox onUpload={upload} />

        {loading && (
          <div className="mt-8 relative left-140 loader w-5 xl:w-6"></div>
        )}

        {success && (
          <p className="text-center mt-6 text-xl text-green-700">{success}</p>
        )}

        {error && <p className="text-center text-xl mt-6 text-red-500">{error}</p>}

        <h2 className="text-2xl font-semibold mt-10 mb-1 text-gray-900">
          Recent Files
        </h2>

        <p className="text-gray-600">
          Overview of every files or documents that you have stored
        </p>

        <div className={`${files.length === 0 ? "mt-16 text-center text-2xl" : "mt-6 border-2 border-gray-300 rounded-sm"}`}>
          {files.length === 0 ? (
            <p className="text-gray-500">No files uploaded yet</p>
          ) : (
            <>
              {" "}
              <div className="py-3 flex justify-between px-4 border-b-2 border-gray-300">
                <span className="font-semibold">File name</span>
                <span className="font-semibold pl-30">Date uploaded</span>
                <span className="font-semibold pr-10">More info</span>
              </div>
              <div className="">
                {files.map((file) => (
                  <FileCard key={file._id} file={file} openModal={openModal} />
                ))}
              </div>
            </>
          )}

          <DeleteModal
            isOpen={isOpen}
            onClose={() => setIsOpen(false)}
            onConfirm={handleDeleteConfirm}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
