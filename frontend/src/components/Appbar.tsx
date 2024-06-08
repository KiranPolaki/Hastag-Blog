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
    <div
      className="sticky top-0 z-10 flex justify-between px-14 py-9 cursor-pointer bg-black lg:px-52"
      style={{
        background:
          "radial-gradient(125% 125% at 50% 90%, #000 40%, #63e 100%)",
      }}
    >
      <Link
        to={"/blogs"}
        className="flex flex-col justify-center font-logo-cursive font-extrabold text-3xl text-white"
      >
        # Hastag
      </Link>
      <div className="text-white lg:hidden">
        <button onClick={toggleSidebar}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-8 text-white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 1 1-3 0m3 0a1.5 1.5 0 1 0-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 0 1-3 0m3 0a1.5 1.5 0 0 0-3 0m-9.75 0h9.75"
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed transform top-0 right-0 w-64 h-full shadow-lg overflow-auto ease-in-out transition-transform duration-300 ${
          sidebarOpen
            ? "translate-x-0 backdrop-filter backdrop-blur-lg bg-opacity-30"
            : "translate-x-full"
        }`}
      >
        <div>
          <div className="relative ">
            <div className="flex justify-end gap-28 pt-9 pr-9 mb-9 pl-4">
              <Avatar name="Sai" size={"big"} />
              <button onClick={toggleSidebar} className="pr-1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-8 text-white"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18 18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            <div className="relative w-48 mx-auto">
              <input
                type="search"
                id="default-search"
                className="block w-full p-2 pr-8 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
                placeholder="Search Blogs..."
                required
              />
              <button
                type="submit"
                className="absolute top-1/2 right-2 transform -translate-y-1/2 text-black hover:text-blue-800 focus:outline-none font-medium rounded-2xl text-sm px-2 py-2 "
              >
                <svg
                  className="w-4 h-4 text-black hover:text-blue-500"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        <div className="flex justify-center flex-col items-center">
          <Link to={"/publish"} className="flex items-center rounded-full mt-7">
            <button
              type="button"
              className="py-2.5 me-1 mb-2 mt-1 text-lg font-medium text-white focus:outline-none flex items-center rounded-full hover:text-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                />
              </svg>
              Write
            </button>
          </Link>
          <Link to={"/blogs"} className="flex items-center rounded-full">
            <button
              type="button"
              className="py-2.5 me-1 mb-2 mt-1 text-lg font-medium text-white focus:outline-none flex items-center rounded-full hover:text-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                />
              </svg>
              Home
            </button>
          </Link>
          <Link to={"/sigin"} className="flex items-center rounded-full">
            <button
              type="button"
              className="py-2.5 me-1 mb-2 mt-1 text-lg font-medium text-white focus:outline-none flex items-center rounded-full hover:text-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 9V5.25A2.25 2.25 0 0 1 10.5 3h6a2.25 2.25 0 0 1 2.25 2.25v13.5A2.25 2.25 0 0 1 16.5 21h-6a2.25 2.25 0 0 1-2.25-2.25V15m-3 0-3-3m0 0 3-3m-3 3H15"
                />
              </svg>
              Logout
            </button>
          </Link>
        </div>
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
                className="w-4 h-4 text-white  hover:text-gray-500"
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
            className="py-2.5 me-1 mb-2 mt-1 text-lg font-medium text-white focus:outline-none flex items-center rounded-full hover:text-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
          >
            New Post
          </button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-6 text-white hover:text-blue-400 focus:z-10 focus:ring-4 focus:ring-gray-100"
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
