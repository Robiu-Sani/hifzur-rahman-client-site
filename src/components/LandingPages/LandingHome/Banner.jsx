import { TypeAnimation } from "react-type-animation";
import bannerBg from "../../../image/bg1.jpg";
import Bg1 from "../../../image/bg7.png";
import Bg2 from "../../../image/bg2.png";
import person from "../../../image/1.png";
import { Link } from "react-router-dom";
import { MdArrowRightAlt } from "react-icons/md";

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen pt-[60px] bg-center  overflow-hidden flex justify-center items-end bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container  mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="w-full  flex justify-center relative items-center pb-10 ">
          <img src={Bg1} alt="" className="w-[80%] absolute" />
          <div className="w-full z-10 mb-10">
            <h1 className="text-gradient text-center sm:text-left text-[30px] md:text-[50px] font-extrabold">
              Hi! It`s
            </h1>
            <h1 className="text-gradient text-center sm:text-left text-[45px] md:text-[65px] font-extrabold">
              Dr. Hifzur Rahman
            </h1>
            <h1 className="text-gradient -mt-5 text-center sm:text-left text-[30px] md:text-[50px] font-extrabold">
              <TypeAnimation
                sequence={[
                  "I am a Teacher",
                  1000,
                  "I am a Lacturer",
                  1000,
                  "I am a Imam",
                  1000,
                  "I am a Writer",
                  1000,
                ]}
                wrapper="span"
                speed={50}
                style={{ display: "inline-block" }}
                repeat={Infinity}
              />
            </h1>
            <p className="text-gradient text-xl font-semibold text-center sm:text-left">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus non in quisquam iusto vel dolores tempora incidunt
              laudantium est dolore?
            </p>
            <div className="w-full my-5 flex justify-center items-center sm:justify-start gap-5">
              <div className="flex justify-center flex-wrap items-center gap-3 pl-5">
                <Link
                  to={"/login"}
                  className="px-5 p-2 border border-yellow-600 h-[40px] flex justify-center items-center gap-3 rounded bg-gradient text-yellow-600 shadow font-bold"
                >
                  Get services from us
                  {/* <MdArrowRightAlt className="text-4xl" /> */}
                </Link>
                <Link
                  to={"/login"}
                  className="px-5 p-2 border border-yellow-600 h-[40px] flex justify-center items-center gap-3 rounded bg-gradient text-yellow-600 shadow font-bold"
                >
                  Contact with us
                  <MdArrowRightAlt className="text-4xl" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-center relative items-end ">
          <img
            src={Bg2}
            alt=""
            className="w-[60%] absolute UpDownAnimation bottom-[20%]"
          />
          <img src={person} alt="" className="z-10 w-[70%]" />
        </div>
      </div>
    </div>
  );
}
