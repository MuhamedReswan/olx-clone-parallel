import React, { useEffect, useState } from "react";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../firebase"; // Adjust path to your Firebase configuration
import Heart from "../../assets/Heart";
import ProductDetail from "../Product Details/ProductDetail"; 
import "./Post.css";

function Posts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null); // Step 2: Manage selected product state

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

  const handleCardClick = (product) => {
    setSelectedProduct(product); // Set the selected product
  };

  const closeDetailModal = () => {
    setSelectedProduct(null); // Clear the selected product
  };

  return (
    <div className="postParentDiv">
      <div className="moreView">
        <div className="heading">
          <span>Quick Menu</span>
          <span>View more</span>
        </div>
        <div className="cards">
          {products.map((product) => (
            <div className="card" key={product.id} onClick={() => handleCardClick(product)}>
              <div className="favorite">
                <Heart />
              </div>
              <div className="image">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="content">
                <p className="rate">&#x20B9; {product.price}</p>
                <span className="kilometer">{product.category}</span>
                <p className="name">{product.name}</p>
              </div>
              <div className="date">
                <span>
                  {new Date(product.createdAt.seconds * 1000).toDateString()}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedProduct && ( // Step 3: Render ProductDetail when a product is selected
        <ProductDetail product={selectedProduct} onClose={closeDetailModal} />
      )}
    </div>
  );
}

export default Posts;
