import bannerBg from "../../../image/bg1.jpg";
import Bg1 from "../../../image/bg7.png";

export default function Banner() {
  return (
    <div
      className="w-full min-h-screen pt-[100px] bg-center flex justify-center items-end bg-no-repeat bg-cover "
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 gap-2">
        <div className="w-full flex justify-center relative items-center pb-10 ">
          <img src={Bg1} alt="" className="w-[80%] absolute" />
          <div className="w-full z-10">
            <h1 className="text-gradient text-center sm:text-left text-[30px] md:text-[50px] font-extrabold">
              Hi! It`s
            </h1>
            <h1 className="text-gradient text-center sm:text-left text-[45px] md:text-[65px] font-extrabold">
              Dr. Hifzur Rahman
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
