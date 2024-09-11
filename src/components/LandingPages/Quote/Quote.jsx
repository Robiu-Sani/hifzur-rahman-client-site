import useQuote from "../../customHooks/useQuote";
import PageBanner from "../../SharedComponent/PageBanner";
import QuoteCard from "../../SharedComponent/QuoteCard";

export default function Quote() {
  const { quotes } = useQuote();
  return (
    <div className="">
      <PageBanner Title="Quote" />
      <div
        className="container mx-auto my-10 z-50 grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        {quotes.map((item, idx) => (
          <QuoteCard key={idx} quote={item}></QuoteCard>
        ))}
      </div>
    </div>
  );
}
