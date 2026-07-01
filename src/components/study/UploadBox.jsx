import { useRef, useState } from "react";
import { UploadCloud, FileText } from "lucide-react";

function UploadBox({ onFileSelect }) {
  const inputRef = useRef(null);
  const [file, setFile] = useState(null);

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedFile = e.target.files[0];

      // PDF ONLY CHECK
      if (selectedFile.type !== "application/pdf") {
        alert("Only PDF files are allowed!");
        return;
      }

      setFile(selectedFile);

      if (onFileSelect) {
        onFileSelect(selectedFile);
      }
    }
  };

  const handleUploadClick = () => {
    inputRef.current.click();
  };

  return (
    <div className="bg-white rounded-3xl shadow-lg border border-pink-100 p-8">

      <div className="border-2 border-dashed border-pink-300 rounded-3xl p-12 text-center hover:bg-pink-50 transition">

        <UploadCloud size={65} className="mx-auto text-pink-500" />

        <h2 className="text-3xl font-bold mt-6">
          Upload Study Notes
        </h2>

        <p className="text-gray-500 mt-3">
          Upload PDF files only
        </p>

        <input
          ref={inputRef}
          type="file"
          accept="application/pdf"
          onChange={handleFileChange}
          className="hidden"
        />

        <button
          type="button"
          onClick={handleUploadClick}
          className="mt-8 bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-2xl transition"
        >
          Choose PDF
        </button>

        {file && (
          <div className="mt-8 bg-pink-50 border border-pink-200 rounded-2xl p-4 flex items-center gap-3">

            <FileText className="text-pink-500" size={24} />

            <div className="text-left">
              <p className="font-semibold text-gray-800">
                {file.name}
              </p>
              <p className="text-sm text-gray-500">
                {(file.size / 1024).toFixed(2)} KB
              </p>
            </div>

          </div>
        )}

      </div>
    </div>
  );
}

export default UploadBox;