

import React from 'react';
// Lucide Icons
import { Share2, Heart, ChevronDown } from 'lucide-react';
// React Icons
import { FaShare, FaHeart, FaChevronDown } from 'react-icons/fa';
import { ProductAuth } from '../../context/PostContext';

const ProductDetails = () => {

const {product}=ProductAuth();

  return (
    <main className="mt-[100px] max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 rounded-lg">
      {/* Image Section */}
      <div className="md:col-span-2 bg-black rounded-lg overflow-hidden">
        <img
          src={product.imageUrl}
          alt="iPhone"
          className="w-full h-[480px] object-contain"
        />
        <div className="bg-black bg-opacity-50 text-white px-4 py-2 text-sm flex justify-between">
          <span>Click to zoom</span>
          <span>1/1</span>
        </div>
      </div>

      {/* Details Section */}
      <div className="space-y-4">
        {/* Price Section */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
            <h1 className="text-4xl font-bold">₹ {product?.price }</h1>
<h1 className='text-3xl'>{product.name}</h1>
<p className='pt-1'>{product.category}</p>
<p className='pt-1'>{product.description}</p>
            </div>
            
            {/* Example using Lucide Icons */}
            <div className="flex justify-start gap-2">
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <Share2 className="h-6 w-6" /> {/* Lucide Icon */}
              </button>
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <Heart className="h-6 w-6" /> {/* Lucide Icon */}
              </button>
            </div>

            {/* Example using React Icons */}
            <div className="flex gap-2">
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <FaShare size={24} /> {/* React Icon */}
              </button>
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <FaHeart size={24} /> {/* React Icon */}
              </button>
            </div>
          </div>
          
          <p className="text-gray-600">
            {/* Neet and good condition One year I care plus guaranty
             */}
          </p>
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>Kulukkallur, Palakkad, Kerala</span>
            <span>Today</span>
          </div>
        </div>

        {/* Seller Section */}
        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center gap-4 mb-4">
            <img
              src="/api/placeholder/48/48"
              alt="Seller"
              className="w-12 h-12 rounded-full"
            />
            
            <div>
              <h2 className="text-xl font-semibold">User</h2>
              <span className="text-gray-500">Member since Apr 2021</span>
            </div>
            {/* You can use either icon here */}
            <ChevronDown className="h-5 w-5 ml-auto" /> {/* Lucide Icon */}
            <FaChevronDown className="h-5 w-5 ml-auto" /> {/* React Icon */}
          </div>
          <button className="w-full py-3 border-2 border-[#002f34] rounded font-semibold hover:bg-gray-50">
            Chat with seller
          </button>
        </div>

        {/* Posted Location */}
        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Posted in</h3>
          <p className="text-gray-600">Kulukkallur, Palakkad, Kerala</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;