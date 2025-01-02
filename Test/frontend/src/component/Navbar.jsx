import { RiArrowDropDownLine } from "react-icons/ri";
import { CiSearch } from "react-icons/ci";
import { SlHandbag } from "react-icons/sl";
import { HiOutlineBars2 } from "react-icons/hi2";

const Navbar = () => {
  return (
    <>
      <section className="py-2">
        <nav className="bg-white border-gray-200 dark:bg-gray-900 dark:border-gray-700 text-green">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto px-[-6vw] py-2">
            <a
              href="#"
              className="flex items-center space-x-4 rtl:space-x-reverse"
            >
              <img
                src="https://flowbite.com/docs/images/logo.svg"
                className="h-8"
                alt="Flowbite Logo"
              />
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
                Lizza
              </span>
            </a>

            <div
              className="hidden w-full md:block md:w-auto "
              id="navbar-multi-level"
            >
              <ul className="flex flex-col font-medium  md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                <li>
                  <a
                    href="#"
                    className="flex align-bottom py-2 px-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 md:dark:text-blue-500 dark:bg-blue-600 md:dark:bg-transparent"
                    aria-current="page"
                  >
                    Home <RiArrowDropDownLine size={"25px"} />
                  </a>
                </li>
                <li>
                  <button
                    id="dropdownNavbarLink"
                    data-dropdown-toggle="dropdownNavbar"
                    className="flex align-bottom justify-between w-full py-2 px-3 text-gray-900 hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:hover:bg-gray-700 md:dark:hover:bg-transparent"
                  >
                    Pages <RiArrowDropDownLine size={"25px"} />
                  </button>

                  <div
                    id="dropdownNavbar"
                    className="z-10 hidden font-normal bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700 dark:divide-gray-600"
                  >
                    <ul
                      className="py-2 text-sm text-gray-700 dark:text-gray-200"
                      aria-labelledby="dropdownLargeButton"
                    >
                      <li>
                        <a
                          href="#"
                          className="flex align-bottom px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-600 dark:hover:text-white"
                        >
                          pages <RiArrowDropDownLine size={"25px"} />
                        </a>
                      </li>
                    </ul>
                  </div>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex align-bottom py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Lms Shortcodes <RiArrowDropDownLine size={"25px"} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex align-bottom py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Cources <RiArrowDropDownLine size={"25px"} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex align-bottom py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Classis <RiArrowDropDownLine size={"25px"} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex align-bottom py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Blog <RiArrowDropDownLine size={"25px"} />
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="flex align-bottom py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-white md:dark:hover:text-blue-500 dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent"
                  >
                    Contect <RiArrowDropDownLine size={"25px"} />
                  </a>
                </li>
              </ul>
            </div>

            <div className="flex items-center space-x-4">
              <CiSearch size={"25px"} />
              <SlHandbag size={"20px"} />
              <button
                style={{ color: "white" }}
                className="bg-green  px-4 py-2 rounded-lg"
              >
                Get Started
              </button>
              <HiOutlineBars2 style={{ color: "black" }} size={"25px"} />
            </div>
          </div>
        </nav>
      </section>
    </>
  );
};

export default Navbar;
