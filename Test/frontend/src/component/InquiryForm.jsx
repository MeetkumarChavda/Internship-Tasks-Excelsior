const InquiryForm = () => {
  return (
    <div className="bg-light-green h-100 px-12 rounded-lg py-6">
      <form>
        <div className="flex gap-2 rounded-sm">
          <input
            className="w-1/2 bg-light-green  py-4 border-b "
            type="text"
            id="fnam"
            name="fnam"
            placeholder="First Name"
          />
          <input
            className="w-1/2 bg-light-green border-b  "
            type="text"
            id="lnam"
            name="lnam"
            placeholder="Last Name"
          />
        </div>
        <input
          className="w-full bg-light-green pt-2 border-b  py-4"
          type="text"
          id="email"
          name="email"
          placeholder="Your Email"
        />
        {/* Dropdown */}
        <div className="pt-3 border-b  w-full">
          <button
            id="dropdownCheckboxButton"
            data-dropdown-toggle="dropdownDefaultCheckbox"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm  py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            type="button"
          >
            Dropdown checkbox
            <svg
              className="w-2.5 h-2.5 ms-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <div
            id="dropdownDefaultCheckbox"
            className="z-10 hidden w-48 bg-white divide-y divide-gray-100 rounded-lg shadow dark:bg-gray-700 dark:divide-gray-600"
          >
            <ul
              className="p-3 space-y-3 text-sm text-gray-700 dark:text-gray-200"
              aria-labelledby="dropdownCheckboxButton"
            >
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-1"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-1"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    checked
                    id="checkbox-item-2"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-2"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Checked state
                  </label>
                </div>
              </li>
              <li>
                <div className="flex items-center">
                  <input
                    id="checkbox-item-3"
                    type="checkbox"
                    value=""
                    className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                  />
                  <label
                    htmlFor="checkbox-item-3"
                    className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Default checkbox
                  </label>
                </div>
              </li>
            </ul>
          </div>
        </div>
        {/* Check box */}
        <div>
          <div className="pt-3">
            <strong className="font-bold text-lg mt-10 ">
              What topic are you intrusted in ?
            </strong>
          </div>

          <div className="flex w-3/4 pt-5 ">
            <div className="flex items-center me-4">
              <input
                checked
                id="red-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-red-600 bg-gray-100 border-gray-300 rounded focus:ring-red-500 dark:focus:ring-red-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="red-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Red
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                checked
                id="green-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-green-600 bg-gray-100 border-gray-300 rounded focus:ring-green-500 dark:focus:ring-green-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="green-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Green
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                checked
                id="purple-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-purple-600 bg-gray-100 border-gray-300 rounded focus:ring-purple-500 dark:focus:ring-purple-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="purple-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Purple
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                checked
                id="teal-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 dark:focus:ring-teal-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="teal-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Teal
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                checked
                id="yellow-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-yellow-400 bg-gray-100 border-gray-300 rounded focus:ring-yellow-500 dark:focus:ring-yellow-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="yellow-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Yellow
              </label>
            </div>
            <div className="flex items-center me-4">
              <input
                checked
                id="orange-checkbox"
                type="checkbox"
                value=""
                className="w-4 h-4 text-orange-500 bg-gray-100 border-gray-300 rounded focus:ring-orange-500 dark:focus:ring-orange-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label
                htmlFor="orange-checkbox"
                className="ms-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Orange
              </label>
            </div>
          </div>
        </div>

        <button className="bg-green w-full text-ff px-5 py-2 mt-5 rounded-lg font-semibold">
            Save & Subscribe
        </button>

        <p className="font-normal mt-3 text-center">
        Appearance do not determine whether, <span className="border-b border-green"> in some styles of writing</span> particularly journalistic styles, <span className="border-b border-green"> a paragraph can be just </span> one sentence long.

        </p>
      </form>
    </div>
  );
};

export default InquiryForm;
