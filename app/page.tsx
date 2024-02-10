import Reviews from "@/components/ecommerce/reviews/with_summary_chart";
import Banners from "@/components/marketing/elements/banners/with_button";
import Blogsection from "@/components/marketing/section/blogsection/three_column_with_images";
import Contentsection from "@/components/marketing/section/contentsection/with_testimonial_and_stats";
import Footer from "@/components/marketing/section/footer/4_column_with_newsletter_dark";

export default function Home() {
  return (
    <>
    <Banners />
    <Contentsection />
    <Blogsection />
    <Reviews/>
    <Footer/>
    </>
  );
}
