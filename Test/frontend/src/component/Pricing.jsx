const Pricing = () => {
  return (
    <section className="relative bg-ff h-[120vh] overflow-hidden flex items-center flex-col justify-center">
      <div className="mt-[1vh]">
        <strong className="text-lg relative uppercase text-green ">
          <span className="absolute bottom-[35%] left-[-55%] font-light">
            _____
          </span>{" "}
          PRICE PLANS{" "}
          <span className="absolute bottom-[35%] right-[-55%] font-light">
            _____
          </span>
        </strong>
      </div>
      {/* card section */}
      <div className="sm:flex sm:flex-col sm:align-center p-10">
        <div className="relative self-center bg-slate-200 rounded-lg p-0.5 flex">
          <button
            type="button"
            className="relative w-1/2 rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 bg-slate-50 border-slate-50 text-slate-900 shadow-sm"
          >
            Monthly billing
          </button>
          <button
            type="button"
            className="ml-0.5 relative w-1/2 border rounded-md py-2 text-sm font-medium whitespace-nowrap focus:outline-none sm:w-auto sm:px-8 border-transparent text-slate-900"
          >
            Yearly billing
          </button>
        </div>
        <div className="mt-12 space-y-3 sm:mt-16 sm:space-y-0 sm:grid sm:grid-cols-3 sm:gap-6 md:max-w-8xl md:mx-auto xl:grid-cols-3">
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-3xl leading-6 font-bold text-green">Basic</h2>
              <p className="mt-2 text-base text-slate-700 leading-tight">
                Biller every month, cancel any time
              </p>
              <p className="mt-3">
                <span className="text-7xl font-bold text-slate-900 tracking-tighter">
                  $0
                </span>

                <span className="text-xl font-medium text-slate-500">
                  /yearly
                </span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-[60%]  bg-[#23281e] bg-slate-900 rounded-md py-4 text-sm font-semibold text-ff text-center "
              >
                Purchase This Plan
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                What&apos;s included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    1 landing page included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    1,000 visits/mo
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    Access to all UI blocks
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    50 conversion actions included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    5% payment commission
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    Real-time analytics
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200 bg-green">
            {/* <div className="p-6">
                <h2 className="text-xl leading-6 font-bold text-slate-900">Standerd</h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">For creators with multiple ideas who want to
                    efficiently test and refine them.</p>
                <p className="mt-8">
                    <span className="text-4xl font-bold text-slate-900 tracking-tighter">$8</span>

                    <span className="text-base font-medium text-slate-500">/mo</span>
                </p><a href="/sign-up"
                    className="mt-8 block w-full bg-slate-900 rounded-md py-2 text-sm font-semibold text-white text-center">Join
                    as a Superior</a>
            </div> */}
            <div className="p-6">
              <h2 className="text-3xl leading-6 font-bold text-ff ">
                Standerd
              </h2>
              <p className="mt-2 text-base text-ff leading-tight">
                Biller every 3 month, cancel any time
              </p>
              <p className="mt-3">
                <span className="text-7xl font-bold text-ff tracking-tighter">
                  $119
                </span>

                <span className="text-xl font-medium text-ff">/yearly</span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-[60%]  bg-ff rounded-md py-4 text-sm font-bold text-green text-center "
              >
                Purchase This Plan
              </a>
            </div>
            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-ff tracking-wide uppercase">
                What&apos;s included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-ff">All Free features</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-ff ">
                    5 landing pages included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-ff">50,000 visits/mo</span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-ff ">
                    1,000 conversion actions included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="white"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-ff ">
                    1% payment commission
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="border border-slate-200 rounded-lg shadow-sm divide-y divide-slate-200">
            <div className="p-6">
              <h2 className="text-3xl leading-6 font-bold text-green">
                Premium
              </h2>
              <p className="mt-2 text-base text-slate-700 leading-tight">
                Biller every 6 month, cancel any try our premium {"           "}
              </p>
              <p className="mt-3">
                <span className="text-7xl font-bold text-slate-900 tracking-tighter">
                  $499
                </span>

                <span className="text-xl font-medium text-slate-500">
                  /yearly
                </span>
              </p>
              <a
                href="/sign-up"
                className="mt-8 block w-[60%]  bg-[#23281e] bg-slate-900 rounded-md py-4 text-sm font-semibold text-ff text-center "
              >
                Purchase This Plan
              </a>
            </div>
            {/* <div className="p-6">
                <h2 className="text-3xl leading-6 font-bold text-green">Premium</h2>
                <p className="mt-2 text-base text-slate-700 leading-tight">Biller every 6 month, cancel any time</p>
                <p className="mt-3">
                    <span className="text-7xl font-bold text-slate-900 tracking-tighter">$499</span>

                    <span className="text-xl font-medium text-slate-500">/yearly</span>
                </p>
                <a href="/sign-up"
                    className="mt-8 block w-[60%]  bg-[#23281e] bg-slate-900 rounded-md py-4 text-sm font-semibold text-ff text-center ">Purchase This Plan</a>
            </div> */}

            <div className="pt-6 pb-8 px-6">
              <h3 className="text-sm font-bold text-slate-900 tracking-wide uppercase">
                What&apos;s included
              </h3>
              <ul role="list" className="mt-4 space-y-3">
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    All Standard features
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    20 landing pages included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    200,000 visits/mo
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    5,000 conversion actions included
                  </span>
                </li>
                <li className="flex space-x-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="flex-shrink-0 h-5 w-5 text-green-400"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <path d="M5 12l5 5l10 -10"></path>
                  </svg>
                  <span className="text-base text-slate-700">
                    No payment commission
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
        {/* paragraph section */}
      <div className="w-[50%] text-center">
        <p className="font-normal">
        paragraph is defined as a group of sentences or a single sentence that forms a unit Length and appearance do not determine whether a section in a paper is  For instance, <span className="border-b border-green"> in some styles of writing</span> particularly journalistic styles, <span className="border-b border-green"> a paragraph can be just </span> one sentence long.

        </p>
      </div>
    </section>
  );
};

export default Pricing;
