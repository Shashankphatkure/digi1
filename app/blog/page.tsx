import Ecommerceheader from "@/components/marketing/elements/header/with_left_aligned_nav";
import Blogsection from "@/components/marketing/section/blogsection/three_column_with_images";
import Footer from "@/components/marketing/section/footer/4_column_with_newsletter_dark";
import Blogcontent from "@/components/preline/blogcontent";

export default function page() {
  return (
    <>
    <Ecommerceheader/>
    <Blogcontent/>
    <Blogsection/>
    <Footer/>
    </>
  );
}
