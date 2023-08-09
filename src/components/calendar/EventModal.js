import React, { useContext, useState } from "react";
import GlobalContext from "../../context/GlobalContext";
export default function EventModal() {
//  const types_tab = ["SSL certifications", "type 2", "type 3"]
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { setShowEventModal, daySelected } = useContext(GlobalContext);
  return (
    <div className="h-screen w-full fixed left-0 top-0 flex justify-center items-center">
      <form className="bg-white rounded-lg shadow-2xl w-1/3">
        <header className="bg-gray-100 px-4 py-2 flex justify-between items-center">
          <span className="material-icons-outlined text-gray-400">
            drag_handle
          </span>
          <button onClick={() => setShowEventModal(false)}>
            <span className="material-icons-outlined text-gray-400">close</span>
          </button>
        </header>
        <div className="p-3">
          <div className="grid grid-cols-1/5 items-end gap-y-7">
            <div></div>
            <input
              type="text"
              name="title"
              placeholder="Add Title"
              value={title}
              required
              className="pt-3 border-0 text-gray-600 text-xl font-semibold pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setTitle(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              schedule
            </span>
            <p>{daySelected.format("ddd, MMMM DD")}</p>
            <span className="material-icons-outlined text-gray-400">
              bookmark_border
            </span>
            <div className="flex gap-x-2">
              <select className="pt-3 border-0 border-gray-200 border-b-2 text-gray-600 pb-2 w-full focus:outline_none focus:border-blue-500 focus:ring-0">
                <option value="Type">Type_1</option>
                <option value="Type">Type_2</option>
                <option value="Type">Type_3</option>
              </select>
              {/* <select className="">
                {types_tab[0].map((type,i)=>(
                  <option key={i}></option>
                ))}
              </select> */}
            </div>
            <span className="material-icons-outlined text-gray-400">
              segment
            </span>
            <input
              type="text"
              name="title"
              placeholder="Add Notes"
              value={description}
              required
              className="pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0 focus:border-blue-500"
              onChange={(e) => setDescription(e.target.value)}
            />
            <span className="material-icons-outlined text-gray-400">
              attach_file
            </span>
            <input
              type="file"
              name="file"
              className="file:border-none file:bg-gradient-to-b file:from-blue-500 file:to-blue-600 file:px-4 file:py-2 file:rounded-full file:text-white pt-3 border-0 text-gray-600 pb-2 w-full border-b-2 border-gray-200 focus:outline-none focus:ring-0"
            />
          </div>
        </div>
        <footer className="flex justify-end border-t p-3 mt-5">
          <button
            type="submit"
            className="bg-blue-500 hover:bg-blue-600 px-6 py-2 rounded text-white"
          >
            Save
          </button>
        </footer>
      </form>
    </div>
  );
}
