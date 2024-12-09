import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ShopProducts from '@/components/ShopProducts';
import Feature from '@/components/Feature';

export default function ShopPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      
        <ShopProducts />
      </div>
      <Feature />
      <Footer />
    </main>
  );
}