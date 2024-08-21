import PageBanner from "../../SharedComponent/PageBanner";
import AddressContact from "./AddressContact";
import ContactForm from "./ContactForm";
import SocialMediaInfo from "./SocialMediaInfo";

export default function Contact() {
  return (
    <div>
      <PageBanner Title="Contact with Dr: Hifzur Rahman" />
      <AddressContact></AddressContact>
      <ContactForm></ContactForm>
      <SocialMediaInfo></SocialMediaInfo>
    </div>
  );
}
