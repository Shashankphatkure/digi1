import Gridlists from "@/components/applicationui/lists/gridlists/contact_cards_with_small_portraits";
import Ecommerceheader from "@/components/marketing/elements/header/with_left_aligned_nav";
import Footer from "@/components/marketing/section/footer/4_column_with_newsletter_dark";

export default function Home() {
  return (
    <>
    <Ecommerceheader/>
    
    <div style={{ padding: '10px', margin: '10px' }}>
    <Gridlists/>
    </div>
    
    <Footer/>
    </>
  );
}
