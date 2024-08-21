import PageBanner from "../../SharedComponent/PageBanner";
import QuoteCard from "../../SharedComponent/QuoteCard";

export default function Quote() {
  return (
    <div>
      <PageBanner Title="Quote" />
      <div
        className="container mx-auto my-10 z-50 grid gap-5"
        style={{
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        }}
      >
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
        <QuoteCard></QuoteCard>
      </div>
    </div>
  );
}
