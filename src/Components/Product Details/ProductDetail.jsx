import React, { useEffect, useState } from "react";
// Lucide Icons
import { Share2, Heart, ChevronDown } from "lucide-react";
// React Icons
import { FaShare, FaHeart, FaChevronDown, FaRegUserCircle } from "react-icons/fa";
import { ProductAuth } from "../../context/PostContext";
import { toast } from "react-toastify";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../../firebase";

const ProductDetails = () => {
  const { product } = ProductAuth();
  const [sellerData, setSellerData] = useState(null);



  const fetchUserData = async (userId) => {
    try {
      const userRef = doc(db, "users", userId);
      const userSnap = await getDoc(userRef);
  
      if (userSnap.exists()) {
        const userData = userSnap.data();
        console.log("User Data:", userData);
        return userData;
      } else {
        toast.error("User not found.");
      }
    } catch (error) {
      console.log("Error fetching user data:", error);
      toast.error("Failed to fetch user data.");
    }
  };

  
  useEffect(() => {
    if (product?.userId) {
      const fetchSellerData = async () => {
        const data = await fetchUserData(product.userId);
        if (data) {
          setSellerData(data); 
        }
      };
  
      fetchSellerData();
    }
  }, [product?.userId]);
  console.log("sellerData",sellerData);
  console.log("produst------------",sellerData);

  return (
    <main className="mt-[100px] max-w-7xl mx-auto px-4 py-6 grid grid-cols-1 md:grid-cols-3 gap-6 bg-gray-100 rounded-lg">
      <div className="md:col-span-2 bg-black bg-opacity-50 rounded-lg overflow-hidden my-auto">
        <img
          src={product.imageUrl}
          alt="iPhone"
          className="w-full h-[480px] object-contain"
        />
    
      </div>

      <div className="space-y-4">
        <div className="bg-white p-4 rounded-lg">
          <div className="flex justify-between items-center mb-4">
            <div>
              <h1 className="text-4xl font-bold">₹ {product?.price}</h1>
              <h1 className="text-3xl">{product.name}</h1>
              <p className="pt-1">{product.category}</p>
              <p className="pt-1">{product.description}</p>
            </div>

            <div className="flex justify-start gap-2">
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <Share2 className="h-6 w-6" />
              </button>
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <Heart className="h-6 w-6" />
              </button>
            </div>

            <div className="flex gap-2">
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <FaShare size={24} />
              </button>
              <button className="hover:bg-gray-100 p-2 rounded-full">
                <FaHeart size={24} />
              </button>
            </div>
          </div>

          <p className="text-gray-600"></p>
          <div className="flex justify-between mt-4 text-sm text-gray-500">
            <span>{product.address ? product.address  :"Kulukkallur, Palakkad, Kerala"}</span>
            <span>Today</span>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <div className="flex items-center gap-4 mb-4">

<FaRegUserCircle className="h-9 w-9" />
            <div>
            <h2 className="text-xl font-semibold">
  {sellerData ? sellerData.name : "Loading..."}
</h2>              <span className="text-gray-500">Member since nov 2024</span>
            </div>

            <FaChevronDown className="h-5 w-5 ml-auto" />
          </div>
          <button className="w-full py-3 border-2 border-[#002f34] rounded font-semibold hover:bg-gray-50">
            Chat with seller
          </button>
        </div>

        <div className="bg-white p-4 rounded-lg">
          <h3 className="text-xl font-semibold mb-4">Posted in</h3>
          <p className="text-gray-600">{product.address ? product.address  :"Kulukkallur, Palakkad, Kerala"}</p>
        </div>
      </div>
    </main>
  );
};

export default ProductDetails;
