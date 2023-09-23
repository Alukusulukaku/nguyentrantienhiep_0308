import { Link } from "react-router-dom";
import Footer from "./Footer";

function Home() {
  return (
    <>
      <nav className="tw-fixed tw-top-0 tw-z-50 tw-w-full tw-bg-white tw-border-b tw-border-gray-200 light:tw-bg-gray-800 light:tw-border-gray-700">
        <div className="tw-px-3 tw-py-3 lg:tw-px-5 lg:tw-pl-3">
          <div className="tw-flex tw-items-center tw-justify-between">
            <div className="tw-flex tw-items-center tw-justify-start">
              <button
                data-drawer-target="separator-sidebar"
                data-drawer-toggle="separator-sidebar"
                aria-controls="separator-sidebar"
                type="button"
                className="tw-inline-flex tw-items-center tw-p-2 tw-text-sm tw-text-gray-500 tw-rounded-lg sm:tw-hidden hover:tw-bg-gray-100 focus:tw-outline-none focus:tw-ring-2 focus:tw-ring-gray-200 light:tw-text-gray-400 light:hover:tw-bg-gray-700 light:focus:tw-ring-gray-600"
              >
                <span className="sr-only">Open sidebar</span>
                <svg
                  className="tw-w-6 tw-h-6"
                  aria-hidden="true"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    clip-rule="evenodd"
                    fill-rule="evenodd"
                    d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                  ></path>
                </svg>
              </button>
              <Link
                to="https://flowbite.com"
                className="tw-flex tw-ml-2 md:tw-mr-24"
              >
                <img
                  src="https://flowbite.com/docs/images/logo.svg"
                  className="h-8 mr-3"
                  alt="FlowBite Logo"
                />
                <span className="tw-self-center tw-text-xl tw-font-semibold sm:tw-text-2xl tw-whitespace-nowrap light:tw-text-white">
                  Flowbite
                </span>
              </Link>
            </div>
            <div className="tw-flex tw-items-center">
              <div className="tw-flex tw-items-center tw-ml-3">
                <span class="tw-text-sm tw-text-gray-500 sm:tw-text-center light:tw-text-gray-400">
                  Hello, user.
                </span>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <aside
        id="separator-sidebar"
        className="tw-fixed tw-top-0 tw-left-0 tw-z-40 tw-w-64 tw-h-screen tw-pt-20 tw-bg-white tw-border-r tw-border-gray-200 tw-transition-transform -tw-translate-x-full light:tw-bg-gray-800 light:tw-border-gray-700 sm:-tw-translate-x-0 sidebar"
        aria-label="Sidebar"
      >
        <div className="tw-h-full tw-px-3 tw-py-4 tw-overflow-y-auto tw-bg-white light:tw-bg-gray-800">
          <ul className="tw-space-y-2 tw-font-medium">
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ml-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 18"
                >
                  <path d="M6.143 0H1.857A1.857 1.857 0 0 0 0 1.857v4.286C0 7.169.831 8 1.857 8h4.286A1.857 1.857 0 0 0 8 6.143V1.857A1.857 1.857 0 0 0 6.143 0Zm10 0h-4.286A1.857 1.857 0 0 0 10 1.857v4.286C10 7.169 10.831 8 11.857 8h4.286A1.857 1.857 0 0 0 18 6.143V1.857A1.857 1.857 0 0 0 16.143 0Zm-10 10H1.857A1.857 1.857 0 0 0 0 11.857v4.286C0 17.169.831 18 1.857 18h4.286A1.857 1.857 0 0 0 8 16.143v-4.286A1.857 1.857 0 0 0 6.143 10Zm10 0h-4.286A1.857 1.857 0 0 0 10 11.857v4.286c0 1.026.831 1.857 1.857 1.857h4.286A1.857 1.857 0 0 0 18 16.143v-4.286A1.857 1.857 0 0 0 16.143 10Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Kanban
                </span>
                <span className="tw-inline-flex tw-items-center tw-justify-center tw-px-2 tw-ml-3 tw-text-sm tw-font-medium tw-text-gray-800 tw-bg-gray-100 tw-rounded-full light:tw-bg-gray-700 light:tw-text-gray-300">
                  Pro
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="m17.418 3.623-.018-.008a6.713 6.713 0 0 0-2.4-.569V2h1a1 1 0 1 0 0-2h-2a1 1 0 0 0-1 1v2H9.89A6.977 6.977 0 0 1 12 8v5h-2V8A5 5 0 1 0 0 8v6a1 1 0 0 0 1 1h8v4a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-4h6a1 1 0 0 0 1-1V8a5 5 0 0 0-2.582-4.377ZM6 12H4a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Inbox
                </span>
                <span className="tw-inline-flex tw-items-center tw-justify-center tw-w-3 tw-h-3 tw-p-3 tw-ml-3 tw-text-sm tw-font-medium tw-text-blue-800 tw-bg-blue-100 tw-rounded-full light:tw-bg-blue-900 light:tw-text-blue-300">
                  3
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Users
                </span>
              </Link>
            </li>
            <li>
              <button
                type="button"
                className="tw-flex tw-items-center tw-w-full tw-p-2 tw-text-base tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                aria-controls="dropdown-example"
                data-collapse-toggle="dropdown-example"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 group-hover:tw-text-gray-900 light:tw-text-gray-400 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 18 21"
                >
                  <path d="M15 12a1 1 0 0 0 .962-.726l2-7A1 1 0 0 0 17 3H3.77L3.175.745A1 1 0 0 0 2.208 0H1a1 1 0 0 0 0 2h.438l.6 2.255v.019l2 7 .746 2.986A3 3 0 1 0 9 17a2.966 2.966 0 0 0-.184-1h2.368c-.118.32-.18.659-.184 1a3 3 0 1 0 3-3H6.78l-.5-2H15Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-text-left tw-whitespace-nowrap">
                  E-commerce
                </span>
                <svg
                  className="tw-w-3 tw-h-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 10 6"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="m1 1 4 4 4-4"
                  />
                </svg>
              </button>
              <ul
                id="dropdown-example"
                className="tw-hidden tw-py-2 tw-space-y-2"
              >
                <li>
                  <Link
                    to="#"
                    className="tw-flex tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                  >
                    Products
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="tw-flex tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                  >
                    Billing
                  </Link>
                </li>
                <li>
                  <Link
                    to="#"
                    className="tw-flex tw-items-center tw-w-full tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg tw-pl-11 tw-group hover:tw-bg-gray-100 light:tw-text-white light:hover:tw-bg-gray-700"
                  >
                    Invoice
                  </Link>
                </li>
              </ul>
            </li>

            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 18 16"
                >
                  <path
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M1 8h11m0 0L8 4m4 4-4 4m4-11h3a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-3"
                  />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Sign In
                </span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-rounded-lg light:tw-text-white hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.96 2.96 0 0 0 .13 5H5Z" />
                  <path d="M6.737 11.061a2.961 2.961 0 0 1 .81-1.515l6.117-6.116A4.839 4.839 0 0 1 16 2.141V2a1.97 1.97 0 0 0-1.933-2H7v5a2 2 0 0 1-2 2H0v11a1.969 1.969 0 0 0 1.933 2h12.134A1.97 1.97 0 0 0 16 18v-3.093l-1.546 1.546c-.413.413-.94.695-1.513.81l-3.4.679a2.947 2.947 0 0 1-1.85-.227 2.96 2.96 0 0 1-1.635-3.257l.681-3.397Z" />
                  <path d="M8.961 16a.93.93 0 0 0 .189-.019l3.4-.679a.961.961 0 0 0 .49-.263l6.118-6.117a2.884 2.884 0 0 0-4.079-4.078l-6.117 6.117a.96.96 0 0 0-.263.491l-.679 3.4A.961.961 0 0 0 8.961 16Zm7.477-9.8a.958.958 0 0 1 .68-.281.961.961 0 0 1 .682 1.644l-.315.315-1.36-1.36.313-.318Zm-5.911 5.911 4.236-4.236 1.359 1.359-4.236 4.237-1.7.339.341-1.699Z" />
                </svg>
                <span className="tw-flex-1 tw-ml-3 tw-whitespace-nowrap">
                  Sign Up
                </span>
              </Link>
            </li>
          </ul>
          <ul className="tw-pt-4 tw-mt-4 tw-space-y-2 tw-font-medium tw-border-t tw-border-gray-200 light:tw-border-gray-700">
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 light:tw-text-white tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 17 20"
                >
                  <path d="M7.958 19.393a7.7 7.7 0 0 1-6.715-3.439c-2.868-4.832 0-9.376.944-10.654l.091-.122a3.286 3.286 0 0 0 .765-3.288A1 1 0 0 1 4.6.8c.133.1.313.212.525.347A10.451 10.451 0 0 1 10.6 9.3c.5-1.06.772-2.213.8-3.385a1 1 0 0 1 1.592-.758c1.636 1.205 4.638 6.081 2.019 10.441a8.177 8.177 0 0 1-7.053 3.795Z" />
                </svg>
                <span className="tw-ml-4">Upgrade to Pro</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 light:tw-text-white tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 16 20"
                >
                  <path d="M16 14V2a2 2 0 0 0-2-2H2a2 2 0 0 0-2 2v15a3 3 0 0 0 3 3h12a1 1 0 0 0 0-2h-1v-2a2 2 0 0 0 2-2ZM4 2h2v12H4V2Zm8 16H3a1 1 0 0 1 0-2h9v2Z" />
                </svg>
                <span className="tw-ml-3">Documentation</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 light:tw-text-white tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M18 0H6a2 2 0 0 0-2 2h14v12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Z" />
                  <path d="M14 4H2a2 2 0 0 0-2 2v10a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2ZM2 16v-6h12v6H2Z" />
                </svg>
                <span className="tw-ml-3">Components</span>
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="tw-flex tw-items-center tw-p-2 tw-text-gray-900 tw-transition tw-duration-75 tw-rounded-lg hover:tw-bg-gray-100 light:hover:tw-bg-gray-700 light:tw-text-white tw-group"
              >
                <svg
                  className="tw-flex-shrink-0 tw-w-5 tw-h-5 tw-text-gray-500 tw-transition tw-duration-75 light:tw-text-gray-400 group-hover:tw-text-gray-900 light:group-hover:tw-text-white"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 21 21"
                >
                  <path d="m5.4 2.736 3.429 3.429A5.046 5.046 0 0 1 10.134 6c.356.01.71.06 1.056.147l3.41-3.412c.136-.133.287-.248.45-.344A9.889 9.889 0 0 0 10.269 1c-1.87-.041-3.713.44-5.322 1.392a2.3 2.3 0 0 1 .454.344Zm11.45 1.54-.126-.127a.5.5 0 0 0-.706 0l-2.932 2.932c.029.023.049.054.078.077.236.194.454.41.65.645.034.038.078.067.11.107l2.927-2.927a.5.5 0 0 0 0-.707Zm-2.931 9.81c-.024.03-.057.052-.081.082a4.963 4.963 0 0 1-.633.639c-.041.036-.072.083-.115.117l2.927 2.927a.5.5 0 0 0 .707 0l.127-.127a.5.5 0 0 0 0-.707l-2.932-2.931Zm-1.442-4.763a3.036 3.036 0 0 0-1.383-1.1l-.012-.007a2.955 2.955 0 0 0-1-.213H10a2.964 2.964 0 0 0-2.122.893c-.285.29-.509.634-.657 1.013l-.01.016a2.96 2.96 0 0 0-.21 1 2.99 2.99 0 0 0 .489 1.716c.009.014.022.026.032.04a3.04 3.04 0 0 0 1.384 1.1l.012.007c.318.129.657.2 1 .213.392.015.784-.05 1.15-.192.012-.005.02-.013.033-.018a3.011 3.011 0 0 0 1.676-1.7v-.007a2.89 2.89 0 0 0 0-2.207 2.868 2.868 0 0 0-.27-.515c-.007-.012-.02-.025-.03-.039Zm6.137-3.373a2.53 2.53 0 0 1-.35.447L14.84 9.823c.112.428.166.869.16 1.311-.01.356-.06.709-.147 1.054l3.413 3.412c.132.134.249.283.347.444A9.88 9.88 0 0 0 20 11.269a9.912 9.912 0 0 0-1.386-5.319ZM14.6 19.264l-3.421-3.421c-.385.1-.781.152-1.18.157h-.134c-.356-.01-.71-.06-1.056-.147l-3.41 3.412a2.503 2.503 0 0 1-.443.347A9.884 9.884 0 0 0 9.732 21H10a9.9 9.9 0 0 0 5.044-1.388 2.519 2.519 0 0 1-.444-.348ZM1.735 15.6l3.426-3.426a4.608 4.608 0 0 1-.013-2.367L1.735 6.4a2.507 2.507 0 0 1-.35-.447 9.889 9.889 0 0 0 0 10.1c.1-.164.217-.316.35-.453Zm5.101-.758a4.957 4.957 0 0 1-.651-.645c-.033-.038-.077-.067-.11-.107L3.15 17.017a.5.5 0 0 0 0 .707l.127.127a.5.5 0 0 0 .706 0l2.932-2.933c-.03-.018-.05-.053-.078-.076ZM6.08 7.914c.03-.037.07-.063.1-.1.183-.22.384-.423.6-.609.047-.04.082-.092.129-.13L3.983 4.149a.5.5 0 0 0-.707 0l-.127.127a.5.5 0 0 0 0 .707L6.08 7.914Z" />
                </svg>
                <span className="tw-ml-3">Help</span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <div className="overlay"></div>
      <div className="tw-p-4 sm:tw-ml-64">
        <div class="tw-relative tw-overflow-x-auto tw-shadow-md sm:tw-rounded-lg tw-mt-10">
          <table class="tw-w-full tw-text-sm tw-text-left tw-text-gray-500 dark:tw-text-gray-400">
            <thead class="tw-text-xs tw-text-gray-700 tw-uppercase tw-bg-gray-50 dark:tw-bg-gray-700 dark:tw-text-gray-400">
              <tr>
                <th scope="col" class="tw-px-6 tw-py-3">
                  Product name
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                  Color
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                  Category
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                  Price
                </th>
                <th scope="col" class="tw-px-6 tw-py-3">
                  <span class="tw-sr-only">Edit</span>
                </th>
              </tr>
            </thead>
            <tbody>
              <tr class="tw-bg-white tw-border-b dark:tw-bg-gray-800 dark:tw-border-gray-700 hover:tw-bg-gray-50 dark:hover:tw-bg-gray-600">
                <th
                  scope="row"
                  class="tw-px-6 py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white"
                >
                  Apple MacBook Pro 17"
                </th>
                <td class="tw-px-6 tw-py-4">Silver</td>
                <td class="tw-px-6 tw-py-4">Laptop</td>
                <td class="tw-px-6 tw-py-4">$2999</td>
                <td class="tw-px-6 tw-py-4 text-right">
                  <Link
                    to="#"
                    class="tw-font-medium tw-text-blue-600 dark:tw-text-blue-500 hover:tw-underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr class="tw-bg-white tw-border-b dark:tw-bg-gray-800 dark:tw-border-gray-700 hover:tw-bg-gray-50 dark:hover:tw-bg-gray-600">
                <th
                  scope="row"
                  class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white"
                >
                  Microsoft Surface Pro
                </th>
                <td class="tw-px-6 tw-py-4">White</td>
                <td class="tw-px-6 tw-py-4">Laptop PC</td>
                <td class="tw-px-6 tw-py-4">$1999</td>
                <td class="tw-px-6 tw-py-4 tw-text-right">
                  <Link
                    to="#"
                    class="tw-font-medium tw-text-blue-600 dark:tw-text-blue-500 hover:tw-underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
              <tr class="tw-bg-white dark:tw-bg-gray-800 hover:tw-bg-gray-50 dark:hover:tw-bg-gray-600">
                <th
                  scope="row"
                  class="tw-px-6 tw-py-4 tw-font-medium tw-text-gray-900 tw-whitespace-nowrap dark:tw-text-white"
                >
                  Magic Mouse 2
                </th>
                <td class="tw-px-6 tw-py-4">Black</td>
                <td class="tw-px-6 tw-py-4">Accessories</td>
                <td class="tw-px-6 tw-py-4">$99</td>
                <td class="tw-px-6 tw-py-4 tw-text-right">
                  <Link
                    to="#"
                    class="tw-font-medium tw-text-blue-600 dark:tw-text-blue-500 hover:tw-underline"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default Home;