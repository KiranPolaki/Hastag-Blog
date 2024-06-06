import { useEffect, useState } from "react";
import { Avatar } from "./Avatar";
import { Link } from "react-router-dom";
function Appbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  function toggleSidebar() {
    setSidebarOpen(!sidebarOpen);
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
        setSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className="border-b flex justify-between px-10 py-4 cursor-pointer">
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center font-logo-cursive font-extrabold text-3xl text-blue-700"
      >
        # Hastag
      </Link>
      <div className="lg:hidden">
        <button onClick={toggleSidebar}>Open</button>
      </div>
      <div
        className={`fixed transform top-0 right-0 w-64 bg-white h-full shadow-lg overflow-auto ease-in-out transition-transform duration-300 ${
          sidebarOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="">
          <div className="relative w-96">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Blogs..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Link to={"/publish"} className="flex items-center rounded-full">
          <button
            type="button"
            className="py-2.5 me-1 mb-2 mt-1 text-lg font-medium text-slate-500 focus:outline-none flex items-center rounded-full hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            New Post
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-slate-500  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
      </div>
      <div className="hidden lg:flex items-center px-2 gap-16">
        {/* The search bar and the "New Post" button will only be visible on large screens. */}
        <div className="">
          <div className="relative w-96">
            <input
              type="search"
              id="default-search"
              className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search Blogs..."
              required
            />
            <button
              type="submit"
              className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <svg
                className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-white"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </button>
          </div>
        </div>
        <Link to={"/publish"} className="flex items-center rounded-full">
          <button
            type="button"
            className="py-2.5 me-1 mb-2 mt-1 text-lg font-medium text-slate-500 focus:outline-none flex items-center rounded-full hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            New Post
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-slate-500  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
            />
          </svg>
        </Link>
        <Avatar name="harkirat" size={"big"} />
      </div>
    </div>
    // <div className="border-b flex justify-between px-10 py-4 cursor-pointer">
    //   <Link
    //     to={"/blogs"}
    //     className="flex flex-col justify-center font-logo-cursive font-extrabold text-3xl text-blue-700"
    //   >
    //     # Hastag
    //   </Link>
    //   <div className="lg:hidden">
    //     <button onClick={toggleSidebar}>Open</button>
    //   </div>
    //   <div
    //     className={`fixed transform top-0 right-0 w-64 bg-white h-full shadow-lg overflow-auto ease-in-out transition-transform duration-300 ${
    //       sidebarOpen ? "translate-x-0" : "translate-x-full"
    //     }`}
    //   ></div>
    //   <div className="flex items-center px-2 gap-16">
    //     {/* This is where the recoil comes where we store the name somewher */}
    //     <div className="">
    //       <div className="relative w-96">
    //         <input
    //           type="search"
    //           id="default-search"
    //           className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
    //           placeholder="Search Blogs..."
    //           required
    //         />
    //         <button
    //           type="submit"
    //           className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:text-white hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-2xl text-sm px-2 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
    //         >
    //           <svg
    //             className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-white"
    //             aria-hidden="true"
    //             xmlns="http://www.w3.org/2000/svg"
    //             fill="none"
    //             viewBox="0 0 20 20"
    //           >
    //             <path
    //               stroke="currentColor"
    //               stroke-linecap="round"
    //               stroke-linejoin="round"
    //               stroke-width="2"
    //               d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
    //             />
    //           </svg>
    //         </button>
    //       </div>
    //     </div>
    //     <Link to={"/publish"} className="flex items-center rounded-full">
    //       <button
    //         type="button"
    //         className="py-2.5 me-1 mb-2 mt-1 text-lg font-medium text-slate-500 focus:outline-none flex items-center rounded-full hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
    //       >
    //         New Post
    //       </button>
    //       <svg
    //         xmlns="http://www.w3.org/2000/svg"
    //         fill="none"
    //         viewBox="0 0 24 24"
    //         strokeWidth={1.5}
    //         stroke="currentColor"
    //         className="size-6 text-slate-500  hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100"
    //       >
    //         <path
    //           strokeLinecap="round"
    //           strokeLinejoin="round"
    //           d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
    //         />
    //       </svg>
    //     </Link>
    //     <Avatar name="harkirat" size={"big"} />
    //   </div>
    // </div>
  );
}

export { Appbar };

// * Frontend changes for this
// TODO: If the user is logged in then we have to show the "+New Post"
// TODO: When not logged in then we have to use the "Get Started"
// TODO: If in the Blog page change this to publish instead of new post

// * Backend chnages for this
// TODO: take the image from backend

// * TODO: IF more time learn to impkement DArk and Light mode ref: https://tailwindcss.com/docs/dark-mode
