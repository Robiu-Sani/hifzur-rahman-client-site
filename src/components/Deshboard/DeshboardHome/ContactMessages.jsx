import MessageCard from "../ShireDeshboardComponent/MessageCard";

export default function ContactMessages() {
  return (
    <div
      className="w-full grid gap-5"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
      <MessageCard></MessageCard>
    </div>
  );
}
