import Navbar from "@/components/Navbar";
import Banner from "@/components/Banner";
import BrowseRange from "@/components/BrowseRange";
import Products from "@/components/Products";
import SectionWithSlider from "@/components/SectionWithSlider";
import ImageCollage from "@/components/ImageCollage";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      
      <BrowseRange />
      <Products />  
      <SectionWithSlider />
      <ImageCollage /> 
      <Footer />
    </>
  );
}
