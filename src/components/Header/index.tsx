import { Link, NavLink } from 'react-router-dom';
import DarkModeSwitcher from './DarkModeSwitcher';
import SettingsIcon from './SettingsIcon';
import { AddCardDialog } from '../Dialogs/AddCard';

const Header = (props: {
  sidebarOpen: string | boolean | undefined;
  setSidebarOpen: (arg0: boolean) => void;
}) => {
  return (
    <header className="sticky top-0 z-999 flex w-full bg-white drop-shadow-1 dark:bg-boxdark dark:drop-shadow-none">
      <div className="flex flex-grow items-center justify-between px-4 py-4 shadow-2 md:px-6 2xl:px-11">
        <div className="flex items-center gap-2 sm:gap-4 lg:hidden">
          <button
            aria-controls="sidebar"
            onClick={(e) => {
              e.stopPropagation();
              props.setSidebarOpen(!props.sidebarOpen);
            }}
            className="z-99999 block rounded-sm border border-stroke bg-white p-1.5 shadow-sm dark:border-strokedark dark:bg-boxdark lg:hidden"
          >
            <span className="relative block h-5.5 w-5.5 cursor-pointer">
              <span className="du-block absolute right-0 h-full w-full">
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-[0] duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-300'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-150 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && 'delay-400 !w-full'
                  }`}
                ></span>
                <span
                  className={`relative left-0 top-0 my-1 block h-0.5 w-0 rounded-sm bg-black delay-200 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!w-full delay-500'
                  }`}
                ></span>
              </span>
              <span className="absolute right-0 h-full w-full rotate-45">
                <span
                  className={`absolute left-2.5 top-0 block h-full w-0.5 rounded-sm bg-black delay-300 duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-[0]'
                  }`}
                ></span>
                <span
                  className={`delay-400 absolute left-0 top-2.5 block h-0.5 w-full rounded-sm bg-black duration-200 ease-in-out dark:bg-white ${
                    !props.sidebarOpen && '!h-0 !delay-200'
                  }`}
                ></span>
              </span>
            </span>
          </button>

          <Link className="block flex-shrink-0 lg:hidden" to="/">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                width="32"
                height="32"
                rx="9.6"
                fill="url(#paint0_linear_1_1766)"
              />
              <path
                d="M16.3864 8.38025C16.5892 8.96096 17.0662 9.4348 17.7057 9.60514C18.3453 9.77703 18.9941 9.60513 19.4602 9.20405C19.7436 8.96093 19.9589 8.63265 20.0626 8.24551C20.1493 7.91877 20.1478 7.59048 20.0719 7.28387C19.9078 6.62729 19.4014 6.07601 18.7014 5.88708C18.0015 5.69971 17.2861 5.92423 16.8168 6.41202C12.2672 6.01714 7.95137 8.92689 6.72801 13.492C5.96922 16.3212 6.55922 19.1953 8.10158 21.4313C8.50111 22.009 8.96258 22.5448 9.48289 23.0264L13.9211 15.341L18.4165 19.8364L18.5048 19.8596L22.7587 12.4932C23.5964 14.1145 23.855 16.0424 23.344 17.9456C22.3932 21.4933 19.0855 23.7789 15.5579 23.5699C15.3395 23.0295 14.8781 22.5928 14.271 22.4302C13.664 22.2676 13.0461 22.4132 12.5862 22.774C12.2687 23.0217 12.0256 23.3717 11.9126 23.7913C11.8351 24.0809 11.8274 24.372 11.8801 24.6477C12.0132 25.3507 12.5366 25.95 13.2738 26.1467C14.0109 26.3449 14.7619 26.0863 15.2296 25.5443C19.7607 25.9144 24.0501 23.0093 25.2689 18.4613C26.0277 15.6305 25.4377 12.758 23.8953 10.5219C23.4958 9.94426 23.0343 9.40845 22.514 8.92686L21.4842 10.7108L18.0526 16.6541L13.4936 12.0952L9.23977 19.4632C8.402 17.8403 8.14339 15.9139 8.65442 14.0107C9.59903 10.4816 12.8789 8.20059 16.3864 8.38332V8.38025ZM17.492 7.55487C17.5973 7.16154 18.0015 6.92769 18.3948 7.03299C18.7882 7.13829 19.022 7.54402 18.9167 7.9358C18.8114 8.32913 18.4072 8.56298 18.0139 8.45768C17.6205 8.35238 17.3867 7.94665 17.492 7.55487ZM14.4847 24.4789C14.3794 24.8722 13.9753 25.1045 13.5819 25.0007C13.1886 24.8954 12.9548 24.4913 13.0601 24.098C13.1654 23.7046 13.5695 23.4708 13.9629 23.5761C14.3562 23.6814 14.59 24.0856 14.4847 24.4789Z"
                fill="white"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_1_1766"
                  x1="22.3619"
                  y1="1.25226"
                  x2="1.4951e-06"
                  y2="35.1495"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#5E5ADB" />
                  <stop offset="1" stop-color="#615ADB" stop-opacity="0.72" />
                </linearGradient>
              </defs>
            </svg>
          </Link>
        </div>

        <div className="hidden sm:block">
          <div className="relative flex flex-row items-center gap-4">
            <NavLink to="/">
              <i className="fa-solid fa-house cursor-pointer"></i>
            </NavLink>
            <div className="cursor-pointer flex flex-row items-center gap-2 bg-cyan-50 px-3 py-2 border-2 rounded-lg border-blue-200 text-primary font-semibold hover:bg-blue-200">
              <div>Product</div>{' '}
              <i className="fa-solid fa-xmark cursor-pointer"></i>
            </div>
            <div className="cursor-pointer flex flex-row items-center gap-2  px-3 py-2 border-2 rounded-lg font-semibold hover:bg-gray">
              <div>Customers</div>
            </div>
            <div className="cursor-pointer flex flex-row items-center gap-2 bg-cyan-50 p-3 border-2 rounded-lg border-blue-200 text-primary font-semibold hover:bg-blue-200">
              <i className="fa-solid fa-plus cursor-pointer "></i>
            </div>
          </div>
        </div>

        <div className="flex items-center gap-3 2xsm:gap-7">
          <ul className="flex items-center gap-2 2xsm:gap-4">
            <DarkModeSwitcher />
            <SettingsIcon />
            <AddCardDialog />
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;
