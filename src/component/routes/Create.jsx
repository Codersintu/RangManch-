import React from "react";
import Imag from "../image/Imag";
function Create() {
  return (
    <div className="flex flex-col gap-10">
      <div className="flex justify-between items-center shadow-sm p-5 border-b border-gray-200">
        <h1 className="text-2xl font-serif">Create Pin</h1>
        <button className="bg-red-600 py-2 px-8 rounded-md text-white font-serif">
          Publish
        </button>
      </div>
      <div className="md:flex-row flex flex-col justify-center gap-10">
        <div className="flex-1 flex flex-col items-center gap-10">
          <div className="w-80 h-[400px] relative bg-gray-300 rounded-xl flex items-center justify-center">
            <div className="flex flex-col gap-2 items-center">
              <div className="w-10 cursor-pointer">
                {" "}
                <Imag src="../general/upload.png" />
              </div>
              <p className="text-xs text-gray-700">
                Choose a file or drag and drop it here
              </p>
            </div>
            <p className="absolute bottom-2 text-center text-sm text-gray-800">
              We recommend using high quality .jpg files less than 20 MB or .mp4
              files less than 200 MB.
            </p>
          </div>
          <span className="bg-gray-200 w-full h-0.5"></span>
          <button className="w-full bg-gray-600 py-3 rounded-lg text-white font-semibold">
            Save from URL
          </button>
        </div>

        <div className="flex-1 bg-white rounded-lg shadow-sm">
          {/* Title */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Title</label>
            <input
              type="text"
              placeholder="Add a title"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Description */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Description
            </label>
            <textarea
              placeholder="Add a detailed description"
              rows={3}
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            ></textarea>
          </div>

          {/* Link */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Link</label>
            <input
              type="url"
              placeholder="Add a link"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
          </div>

          {/* Board */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Board</label>
            <select className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none">
              <option>Choose a board</option>
              <option>Inspiration</option>
              <option>Projects</option>
              <option>Ideas</option>
            </select>
          </div>

          {/* Tagged topics */}
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Tagged topics (0)
            </label>
            <input
              type="text"
              placeholder="Search for a tag"
              className="w-full border border-gray-300 rounded-md px-3 py-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            />
            <p className="text-xs text-gray-500 mt-1">
              Don't worry, people won’t see your tags
            </p>
          </div>

          {/* Add products */}
          <div className="mb-4">
            <button className="px-4 py-2 bg-gray-100 rounded-full text-sm font-medium hover:bg-gray-200">
              Add products
            </button>
          </div>

          {/* More options */}
          <div className="mb-4">
            <button className="text-sm font-medium text-gray-700 flex items-center">
              More options <span className="ml-1">▼</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Create;
