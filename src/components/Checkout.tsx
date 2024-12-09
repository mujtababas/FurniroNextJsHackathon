// src/app/components/Checkout.tsx  

import React from 'react';  

const Checkout: React.FC = () => {  
  return (  
    <div className="relative bg-gray-100">  
      <div className="bg-cover bg-center h-64 mb-8" style={{ backgroundImage: "url('/Rectangle 1 (2).png')" }}>  
        <div className="absolute inset-0 bg-black opacity-25"></div>  
        <div className="relative z-10 flex flex-col justify-center items-center h-full">  
          <h1 className="text-4xl text-black font-bold">Checkout</h1>  
          <nav className="mt-2">  
            <ol className="flex space-x-2">  
              <li>  
                <a href="/" className="text-black">Home</a>  
              </li>  
              <li>  
                <span className="text-black"> &gt; </span>  
              </li>  
              <li>  
                <span className="text-black">Checkout</span>  
              </li>  
            </ol>  
          </nav>  
        </div>  
      </div>  

      <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">  
        <h2 className="text-2xl font-bold mb-6">Billing Details</h2>  
        
        <form>  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">  
          <input className="border p-2 rounded" type="text" placeholder="First Name" required />  
          <input className="border p-2 rounded" type="text" placeholder="Last Name" required />  
          <input className="border p-2 rounded" type="text" placeholder="Company Name (Optional)" />  
          <select className="border p-2 rounded" required>  
            <option value="">Country / Region</option>  
            <option value="Sri Lanka">Sri Lanka</option>  
            {/* Add other countries as necessary */}  
          </select>  
          <input className="border p-2 rounded" type="text" placeholder="Street address" required />  
          <input className="border p-2 rounded" type="text" placeholder="Town / City" required />  
          <select className="border p-2 rounded" required>  
            <option value="">Province</option>  
            <option value="Western Province">Western Province</option>  
            {/* Add other provinces as necessary */}  
          </select>  
          <input className="border p-2 rounded" type="text" placeholder="ZIP code" required />  
          <input className="border p-2 rounded" type="tel" placeholder="Phone" required />  
          <input className="border p-2 rounded" type="email" placeholder="Email address" required />  
          <textarea className="border p-2 rounded col-span-1 md:col-span-2" rows={3} placeholder="Additional information"></textarea>  
        </div>  

        <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded">Place Order</button>  
      </form>

          <div className="mt-6">  
            <div className="mb-4">  
              <input type="radio" id="bank-transfer" name="payment" value="bank" className="mr-2" />  
              <label htmlFor="bank-transfer">Direct Bank Transfer</label>  
              <p className="text-sm text-gray-600 mt-1">Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</p>  
            </div>  
            <div className="mb-4">  
              <input type="radio" id="cash-delivery" name="payment" value="cash" className="mr-2" />  
              <label htmlFor="cash-delivery">Cash On Delivery</label>  
            </div>  
          </div>  

          <button type="submit" className="w-full mt-4 bg-blue-600 text-white py-2 rounded">Place order</button>  
          
      </div>  
  </div>
  );  
};  

export default Checkout;