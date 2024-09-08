import useContactsMessages from "../../customHooks/useContactsMessages";
import MessageCard from "../ShireDeshboardComponent/MessageCard";

export default function ContactMessages() {
  const { ContactsMessages, refetch } = useContactsMessages();
  return (
    <div
      className="w-full grid gap-5"
      style={{
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
      }}
    >
      {ContactsMessages.map((item, idx) => (
        <MessageCard key={idx} messages={item} refetch={refetch}></MessageCard>
      ))}
    </div>
  );
}
