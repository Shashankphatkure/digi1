import Profilesettings from "@/components/applicationui/forms/formlayouts/two_column_with_cards";
import Ecommerceheader from "@/components/marketing/elements/header/with_left_aligned_nav";
import Footer from "@/components/marketing/section/footer/4_column_with_newsletter_dark";

export default function Home() {
  return (
    <>
    <Ecommerceheader/>
    <div style={{ padding: '10px', margin: '10px' }}>
  <Profilesettings/>
</div>
    <Footer/>
    </>
  );
}
