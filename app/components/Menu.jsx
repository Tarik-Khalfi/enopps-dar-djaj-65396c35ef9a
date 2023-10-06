import Image from "next/image";
import React from "react";

export default function Menu() {
  return (
    <div className=" xl:container xl:mx-auto xl:px-2 lg:h-[780px] bg-[#0B0E11] mb-[20px] lg:mb-[90px]  relative mt-[800px] lg:mt-[20px]">
      <div className="lg:container lg:mx-auto lg:px-10 relative flex flex-col-reverse">
        <div className="bg-[#FFFF] h-[420px]  lg:w-[482px]  flex flex-col py-5 lg:mt-[184px]  mt-[260px] z-50   items-center justify-center lg:absolute lg:top-[-60%] ">
          <div className="  lg:w-[442px] w-[100%] my-auto lg:space-y-6  space-y-2  absolute space-x-2 overflow-hidden">
            <p className="text-[#f09804] font-bernier text-[44px] font-[400] leading-normal text-left md:px-5 lg:px-1 px-4">
              POULET BRAISE GRILLE
            </p>
            <div className="flex  justify-between items-center md:px-5 lg:px-1   px-4 space-y-2">
              <p className="text-[#0F1622] font-bernier text-[24px] font-[400] leading-normal text-uppercase">
                1/4 poulet
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------------
              </p>
              <p className="text-[#F09804] text-[24px] font-[400] leading-normal font-bernier">
                40DHS
              </p>
            </div>
            <div className="flex justify-between items-center md:px-5  lg:px-1 px-4">
              <p className="text-[#0F1622] font-bernier text-[24px] font-[400] leading-normal text-uppercase">
                1/2 poulet
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------------
              </p>
              <p className="text-[#F09804] text-[24px] font-[400] leading-normal font-bernier">
                80DHS
              </p>
            </div>
            <div className="flex justify-between items-center md:px-5 lg:px-1 px-4 ">
              <p className="text-[#0F1622] font-bernier text-[24px] font-[400] leading-normal text-uppercase">
                poulet entier
              </p>
              <p className="text-[#F09804] text-sm  ">
                ------------------------
              </p>
              <p className="text-[#F09804] text-[24px] font-[400] leading-normal font-bernier ">
                145DHS
              </p>
            </div>
            <p className="text-[#F09804] font-bernier text-[26px] font-[400] leading-normal md:px-5  lg:px-1 px-4">
              SERVI AVEC SALADE MAROCAINE SAUCE,RIZ ET FRITE
            </p>
          </div>
        </div>
        <div className="mt-[80px] relative lg:w-full  ">
          <div className="overflow-hidden">
            <div className="absolute z-20 w-[100%] lg:w-[90%] h-[600px]   lg:left-[10%] right-[-10]">
              <Image
                src="/Group 41.svg"
                alt="shape"
                width={210}
                height={210}
                className="absolute lg:top-[-12%] lg:left-[-10%] top-[-20%] left-[-15%] z-1 w-[170px] lg:w-[210]  z-10"
              />
              <Image
                src="/menu_poulet.jpg"
                fill={true}
                objectFit="cover"
                objectPosition="center"
                className="  absolute hidden lg:block z-10 overflow-hidden foodClipe xl:lmr-auto xl:container xl:left:[0%]"
                alt="plat poulet"
              />
              <Image
                alt="plat poulet"
                src="/menu_poulet.jpg"
                width={300}
                height={300}
                className="w-full lg:hidden z-50"
              />

              <Image
                src="/Group 5.svg"
                width={170}
                height={170}
                alt="plat poulet"
                className="absolute lg:bottom-0 lg:right-[-10%] bottom-[-75%]  right-[0] z-20 hidden"
                f
              />
              <Image
                src="/Group 5 vertical.svg"
                width={100}
                height={70}
                alt="plat poulet"
                className="absolute lg:bottom-[-16%] lg:right-[-3%] bottom-[-90%] right-[20%]  z-20 hidden"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
