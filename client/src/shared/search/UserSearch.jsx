import { useRouter } from "next/router";
import { useEffect, useRef, useState } from "react";
import TuneIcon from "@mui/icons-material/Tune";
import SidePopUp from "../Sheet";

const UserSearch = () => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const menuBtnRef = useRef(null);
  const menuRef = useRef(null); // Ref for the menu

  const router = useRouter();

  useEffect(() => {
    console.log(router.query);
  }, [router]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      // Check if the clicked element is outside both menuBtnRef and menuRef
      if (
        menuBtnRef.current &&
        !menuBtnRef.current.contains(event.target) &&
        menuRef.current &&
        !menuRef.current.contains(event.target)
      ) {
        setMenuIsOpen(false);
      }
    };

    document.addEventListener("click", handleClickOutside);

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  const handleMenuOpen = () => {
    setMenuIsOpen(!menuIsOpen);
  };

  return (
    <main className="bg-gray-100 min-h-[88dvh]">
      <div className="md:w-[88%] max-w-[1800px] mx-[10px] md:mx-auto py-5 space-y-4">
        <div className="flex items-center gap-3 w-full">
          <input
            type="text"
            className="w-full px-4 py-3 focus:outline-darkBlue rounded-md"
            placeholder="Search By Job Title"
          />
          <div className="relative">
            {/* <button ref={menuBtnRef} onClick={handleMenuOpen}>
              <TuneIcon className="text-darkBlue" />
            </button> */}
            <SidePopUp
              openBtn={
                <div>
                  <TuneIcon className="text-darkBlue" />
                </div>
              }
              title={<span className="text-3xl">Search Filters</span>}
            >
              hi
            </SidePopUp>
            {menuIsOpen && (
              <div
                ref={menuRef}
                className="absolute w-[220px] top-7 -right-10 space-y-2 bg-white drop-shadow-lg border rounded-md p-3 "
              >
                <div className="space-y-1">
                  <p className="text-sm"> Employment type</p>
                  <select
                    name=""
                    id=""
                    className="border-2 p-1 rounded-md focus:outline-none w-full text-sm"
                  >
                    <option value="" className="" disabled>
                      Employment type
                    </option>
                  </select>
                </div>
                <div className="space-y-1">
                  <p className="text-sm"> Location type</p>

                  <select
                    name=""
                    id=""
                    className="border-2 p-1 rounded-md focus:outline-none w-full text-sm"
                  >
                    <option value="" className="" disabled>
                      Location type
                    </option>
                  </select>
                </div>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              router.push("/search");
            }}
          >
            Clear
          </button>
        </div>
        <div>
          {" "}
          UserSearch {router && router.query.titlename}{" "}
          {router && router.query.title}
        </div>
      </div>
    </main>
  );
};

export default UserSearch;
