// src/app/checkout/page.tsx  
import Footer from '@/components/Footer';
import Checkout from '@/components/Checkout';  
import Navbar from '@/components/Navbar';

const CheckoutPage = () => {  
  return (  
    <div>
       <Navbar />
      <Checkout />
      <Footer />  
      {/* Additional checkout page content can go here */}  
    </div>  
  );  
}  

export default CheckoutPage;