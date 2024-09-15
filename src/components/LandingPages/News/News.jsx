import useNews from "../../customHooks/useNews";
import NewsCard from "../../SharedComponent/NewsCard";
import PageBanner from "../../SharedComponent/PageBanner";

export default function News() {
  const { news } = useNews();
  return (
    <div className="bg-[#3171703a] ">
      <PageBanner Title="News" />
      <div className="container py-10  mx-auto  z-10 px-2 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5">
        {news.map((item, idx) => (
          <NewsCard key={idx} news={item} />
        ))}
      </div>
    </div>
  );
}
