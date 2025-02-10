import Header from "./Header";
import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import smvduLogo from "../../public/logo.png";
import Notification from "./Notification";
import mst from "../../public/Sponsors/1st.png";
import dobtmst from "../../public/Sponsors/2nd.png";
import tfmst from "../../public/Sponsors/3rd.jpeg";
import jkbmst from "../../public/Sponsors/4th.jpeg";

const Layout = () => {
  return (
    <div className="overflow-x-hidden">
      <Notification />
      <div className="conference-details py-5 border ">
        <div className=" flex justify-center items-center ">
          <div>
            <img
              className=" md:w-48 md:h-32 "
              src={smvduLogo}
              alt="smvdu_logo"
            />
          </div>
          <div className="flex flex-col gap-5">
            <h1 className="text-lg md:text-2xl font-bold text-sky-800 text-center sm:w-[400] md:w-[600px] lg:w-[900px]">
              3<sup>rd</sup> International Conference on Emerging Trends in
              Biosciences and Chemical Technology Cum Workshop on Skills in
              Biosciences
            </h1>
            <p className="text-center text-sm md:text-xl font-bold">
              14<sup>th</sup>-15<sup>th</sup>, February 2025
            </p>
            <p className="text-sm md:text-xl font-bold text-center ">
              Shri Mata Vaishno Devi University (SMVDU), Jammu & Kashmir
            </p>
          </div>
        </div>
      </div>
      <Header />
      <Outlet />
      <div className="sponsor-section py-10 bg-gray-200">
        <div className="container space-y-3 mx-auto">
          <h1 className="text-center text-3xl ">Sponsors</h1>
          <div className="flex-col flex sm:flex-row justify-center items-center gap-y-10 sm:gap-x-10">
            <div className="flex justify-center items-center">
              <img
                className="w-48 h-48"
                src={mst}
                alt="minister of science and technology logo"
              />
            </div>
            <div className="flex justify-center items-center ">
              <img
                className="w-48 h-48"
                src={dobtmst}
                alt="department of biotechnology minister of science and technology logo"
              />
            </div>
            <div className="flex justify-center items-center ">
              <img
                className="w-48 h-48"
                src={tfmst}
                alt="department of biotechnology minister of science and technology logo"
              />
            </div>
            <div className="flex justify-center items-center ">
              <img
                className="w-48 h-48"
                src={jkbmst}
                alt="department of biotechnology minister of science and technology logo"
              />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
