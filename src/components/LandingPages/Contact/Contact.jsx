import PageBanner from "../../SharedComponent/PageBanner";
import AddressContact from "./AddressContact";
import ContactForm from "./ContactForm";
import SocialMediaInfo from "./SocialMediaInfo";

export default function Contact() {
  return (
    <div className="">
      <PageBanner Title="Contact with Dr: Hefzur Rahman" />
      <AddressContact></AddressContact>
      <ContactForm></ContactForm>
      <SocialMediaInfo></SocialMediaInfo>
    </div>
  );
}
