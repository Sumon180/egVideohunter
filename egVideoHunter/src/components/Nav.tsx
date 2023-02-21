import { useState, useEffect } from "react";
import {
  Navbar,
  MobileNav,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import logo from "../assets/images/logo.png";

const Home = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-4 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg">
          Top YouTube Videos
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <a href="#" className="flex items-center text-lg">
          Top Facebook Videos
        </a>
      </Typography>
    </ul>
  );
  return (
    <>
      <Navbar className="block w-full shadow-md backdrop-saturate-200 backdrop-blur-2xl bg-opacity-80 border border-white/80 bg-white text-white mx-auto max-w-screen-3xl py-2 px-4 lg:px-8 lg:py-4">
        <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="mr-4 cursor-pointer py-1.5 font-normal"
          >
            <div className="flex items-center justify-end logo-container">
              <div>
                <img src={logo} alt="Logo" width="40px" />
              </div>
              <div className="pl-2">
                <h2 className=" text-xl">𝓮𝓰𝓥𝓲𝓭𝓮𝓸𝓗𝓾𝓷𝓽𝓮𝓻</h2>
                <span className="logo-slogan">Download any video easily</span>
              </div>
            </div>
          </Typography>
          <div className="hidden lg:block">{navList}</div>
          <Button
            variant="gradient"
            size="sm"
            className="hidden lg:inline-block"
          >
            <span>Share the download link</span>
          </Button>
          <IconButton
            variant="text"
            className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
            ripple={false}
            onClick={() => setOpenNav(!openNav)}
          >
            {openNav ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                className="h-6 w-6"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                strokeWidth={2}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </IconButton>
        </div>
        <MobileNav open={openNav}>
          <div className="container mx-auto">
            {navList}
            <Button variant="gradient" size="sm" fullWidth className="mb-2">
              <span>Share the download link</span>
            </Button>
          </div>
        </MobileNav>
      </Navbar>
    </>
  );
};

export default Home;
