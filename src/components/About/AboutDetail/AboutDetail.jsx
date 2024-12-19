import React from "react";
import Sections from "../../../ui/Sections";
import logo from "./AtmaVeda.png";
import HeadingTitle from "../../../ui/HeadingTitle";

const AboutDetail = () => {
  return (
    <Sections padding="py-6 sm:py-8 lg:py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative flex flex-col lg:flex-row w-full">
        {/* Left Section */}
        <div className="lg:w-1/2 w-full h-fit flex justify-center flex-col items-center gap-6 lg:gap-10 sticky lg:sticky lg:top-20">
          <div className="flex justify-center items-center border-2 rounded-full p-6 sm:p-8 lg:p-12 shadow-inner shadow-green-200 drop-shadow-xl border-black/25">
            <img
              src={logo}
              alt="logo"
              className="w-24 sm:w-32 lg:w-40 h-auto"
            />
          </div>
          <div
            className="text-3xl sm:text-4xl lg:text-5xl font-black text-center"
            style={{ textShadow: "#25652f 0 0 8px" }}
          >
            AtmaVeda Yog
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:w-1/2 w-full flex justify-center flex-col items-center gap-6 lg:gap-12 py-6 sm:py-8 lg:py-12">
          <HeadingTitle title="About Us" />
          <div className="text-justify space-y-4">
            {/* First Paragraph */}
            <p className="indent-6 sm:indent-10 text-sm sm:text-base">
              <strong>
                Atmaveda Yog Pvt Ltd. Incorporated on 13 July 2020.
              </strong>
            </p>

            {/* Second Paragraph */}
            <p className="indent-6 sm:indent-10 text-sm sm:text-base">
              Atmavedayog is a Pune-based start-up Founded by&nbsp;
              <i>
                <strong>Dr. Sadanand Rasal&nbsp;</strong>
              </i>
              (Pune). It is dedicated to serving and promoting Quality Holistic
              Healthcare, Diagnostic Innovation, and Therapeutic Protocols. It
              is dedicated to Research, Promotion, and Integration of Yoga as a
              Healthcare solution provider in all systems of medicines of AYUSH.
            </p>

            {/* Address */}
            <p className="text-center text-sm sm:text-base">
              <strong className="text-base sm:text-lg">
                Head Office:&nbsp;
              </strong>
              34/3, Sant Tukadoji Nagar, Rahatni, Pune-411017.
            </p>

            {/* Final Paragraph */}
            <p className="indent-6 sm:indent-10 text-sm sm:text-base">
              The company under the leadership of Dr. Sadanand is focused on
              Innovation in developing technology and medical solutions in
              Non-Invasive Diagnostics, Homeopathic and AYUSH integrated
              Formulations as Intensive, Critical care medicine, Organ reversal,
              Predictive disease profiling, Research in Yog, and Preventive
              medicine. Presently Atmavedayog is the only company in the world
              to use Yogic science in Precision-based diagnostic tests,
              Treatment planning, Therapeutic moderation in medicine
              formulations, and Research in healthcare.
            </p>
          </div>
        </div>
      </div>
    </Sections>
  );
};

export default AboutDetail;
