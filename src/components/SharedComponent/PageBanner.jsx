import bannerBg from "../../image/bg1.jpg";
import img1 from "../../image/bg4.png";
import img2 from "../../image/bg5.png";

export default function PageBanner({ Title }) {
  return (
    <div
      className="w-full pt-[60px]  min-h-[400px] bg-center  !overflow-hidden flex justify-center items-center bg-no-repeat bg-cover"
      style={{ backgroundImage: `url(${bannerBg})` }}
    >
      <div className="absolute overflow-hidden  container w-full py-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="w-full h-auto sm:h-[400px] overflow-hidden flex  justify-center items-center p-5">
          <img src={img1} alt="" className="max-w-full max-h-full" />
        </div>
        <div className="w-full hidden  md:flex h-auto sm:h-[400px] overflow-hidden justify-center items-center p-5">
          <img src={img2} alt="" className="max-w-full max-h-full" />
        </div>
      </div>
      <h1 className="text-4xl z-10 font-extrabold leading-[70px] text-center text-gradient sm:text-[80px]">
        {Title ? Title : null}
      </h1>
    </div>
  );
}
