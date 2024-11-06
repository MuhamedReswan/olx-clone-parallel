import React, { useEffect, useState } from "react";
import { FaCircle, FaRegHeart } from "react-icons/fa";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import { ProductAuth } from "../../context/PostContext";
import { useNavigate } from "react-router-dom";

const Card = () => {

    const [products, setProducts] = useState([]);
    const {setProduct} = ProductAuth();
    const navigate = useNavigate()
  
    useEffect(() => {
      const fetchProducts = async () => {
        try {
          const productsCollection = collection(db, "products");
          const querySnapshot = await getDocs(productsCollection);
          const productList = querySnapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
          }));
  
          setProducts(productList);
        } catch (error) {
          console.error("Error fetching products:", error);
        }
      };
  
      fetchProducts();
    }, []);
  

   function handleClick(product){
    setProduct(product);
    navigate('/single-product')

   }

 
return (
    <>
    <div className="m-4 mb-6 p-4 pb-8 bg-[#ebeeef] rounded-md">
      <div>
        <h1 className="text-3xl font-semibold">Quick menu</h1>
      </div>
      <div className="m-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.length > 0 ? (
          products.map((product) => (
            <div
              key={product.id}
              className="relative p-4 border-2 border-black rounded-md bg-gray-100"
              onClick={()=>handleClick(product)}
            >
              <div className="mx-auto relative">
                <img
                  className="m-3 max-w-60"
                  src={product.imageUrl}
                  alt={product.name}
                />
                <FaCircle className="absolute top-3 right-8 w-9 h-9 text-white" />
                <FaRegHeart className="absolute top-5 right-10 w-5 h-5" />
              </div>
              <div className="ps-5 pb-3 text-start m-auto">
                <h2 className="font-bold">${product.price}.00</h2>
                <p className="font-semibold">{product.name}</p>
                <p>{product.category}</p>
                <p>{product.description}</p>
                <p className="text-sm">{new Date(product.createdAt.seconds * 1000).toDateString()}</p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-500 text-lg">
            No available products
          </p>
        )}
      </div>
    </div>
  </>
  );
};

export default Card;
