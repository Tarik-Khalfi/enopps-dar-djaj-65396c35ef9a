"use client";
import { Nav } from "@/components";
import Image from "next/image";
import Link from "next/link";

export default function Header() {
  return (
    <div className="bg-black lg:h-[95vh] min-h-[100%]   relative">
      <div className='bg-[url("/Rectangle3.jpg")] bg-cover   bg-no-repeat lg:h-[95vh]  h-[100%] opacity-25 absolute w-full '></div>
      <div className="bg-gradient-to-b from-black via-transparent to-transparent absolute h-[250px] w-full opacity-25"></div>
      <Nav />

      <Image
        src="Group 5.svg"
        width={240}
        height={20}
        alt=""
        className="absolute -z-1  w-[140px] lg:w-[240px] right-0 top-[25%]  "
      />
      <div className="lg:grid lg:grid-cols-2 text-white  lg:container lg:px-10 px-4 mx-auto  lg:gap-[122px]  flex md:flex-col flex-col gap-[300px] pb-[50px]">
        <div className=" mt-[88px] w-full  z-50">
          <div className="  lg:w-[100%] col-span-1">
            <h1 className=" max-w-md font-[400] lg:text-[44px] text-[35px] Leading-[50.63px] text-[#F09804]  font-bernier">
              Bienvenue a Dar d&lsquo;jaj
            </h1>
            <h1 className=" font-poppins lg:text-[50px] text-[30px] font-[600] leading-normal z-20 text-[#FFF]">
              Votre Restaurant
            </h1>
            <h1 className=" font-poppins lg:text-[50px] text-[30px] font-[600] z-20 lieading-normal w- text-[#FFF] lg:w-auto">
              Unique Et Authentique
            </h1>

            <h1 className=" font-poppins text-[20px] text-[#FFF] font-[400] z-20 leading-normal mt-[30px] ">
              {/* D4D4D4 */}
              Venez decouvrir le goût inmensurable de notre cuisine
              <br />
              Car la rôtisserie de qualité, c&apos;est notre métier.
            </h1>
            <Link href="/menu">
              <button className="border-[#D7B686] border-2 hover:border-none  hover:bg-primary transition-all duration-300  max-w-sm  text-[#FFF] font-popins text-[16px] font-[600] leading-normal py-[18px] px-[60px] mt-[60px] cursor-pointer z-50">
                VOIR MENU
              </button>
            </Link>
          </div>
        </div>
        <div className="lg:flex  relative  mt-[20px] lg:mt-[20px] flex flex-col-reverse  ">
          <div className="masked lg:h-[290px] lg:w-[245px] h-[190px] w-[190px]  bg-[#e3c18d49] flex items-center justify-center  absolute  lg:top-[35%] lg:left-[10%]  lg:mt-[0px] left-0 bottom-0 z-50">
            <div className="masked lg:w-[240px] lg:h-[285px] h-[185px] w-[185px] ">
              <Image
                src="/_DSC4816.jpg"
                alt=""
                fill
                className="object-cover object-center  "
              />
            </div>
          </div>
          <div className=" w-[80%] masked2 flex items-center justify-center bg-[#e3c18d49]  lg:w-[495px] lg:h-[500px]  h-[300px] absolute right-0 ">
            <div className="masked2 lg:w-[490px] lg:h-[495px] h-[295px] w-[97%]">
              <Image
                src="/_DSC4793.jpg"
                alt=""
                fill
                classname="object-cover object-center "
              />
            </div>
          </div>
        </div>
      </div>
      <Image
        src="/Group 5.svg"
        alt=""
        width={173}
        height={91}
        className="absolute bottom-0 right-0 md:left-0 md:-bottom-52 z-20 lg:bottom-2 lg:w-[173px] w-[120px]"
      />
      <Image
        L
        src="/Group 5 vertical.svg"
        alt=""
        width={91}
        height={173}
        className="absolute bottom-0 right-0 md:left-0 md:-bottom-52 z-20 lg:bottom-2 lg:w-[91px] w-[71px]"
      />
    </div>
  );
}
