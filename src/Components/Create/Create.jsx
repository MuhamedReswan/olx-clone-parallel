import React, { useState, Fragment } from "react";
import "./Create.css";
import Header from "../Header/Header";
import { toast } from "react-toastify";
import { db } from "../../firebase";
import { doc, setDoc } from "firebase/firestore";
import { UserAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [description, setDescription] = useState("");
  const [address, setAddress] = useState(""); 
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);

  const navigate = useNavigate();
  const { user } = UserAuth();

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFile(file);
    
    // Create a preview of the selected image
    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const uploadImage = async (file) => {
    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", "olx-product-images");
    formData.append("cloud_name", "duxddwvek");
    formData.append("folder", "olx-products");

    try {
      const response = await fetch(
        "https://api.cloudinary.com/v1_1/duxddwvek/image/upload",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      return data.secure_url;
    } catch (error) {
      console.log("error",error)
      toast.error("Image upload failed");
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category || !price || !file || !address) {
      toast.error("Please fill in all fields and upload an image.");
      return;
    }

    try {
      // Upload the image and get the URL
      const imageUrl = await uploadImage(file);
      if (!imageUrl) {
        toast.error("Failed to upload image. Please try again.");
        return;
      }

      // Create a new document in Firestore
      const res = await setDoc(doc(db, "products", `${Date.now()}`), {
        name,
        userId: user.uid,
        category,
        description,
        address,
        price: parseFloat(price),
        imageUrl,
        createdAt: new Date(),
      });

console.log("responseof add sell", res)      
      toast.success("Product added successfully!");
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setAddress("");
      setFile(null);
      setImagePreview(null);

      navigate("/");
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
      console.log("Firestore error:", error);
    }
  };

  return (
    <Fragment>
      {/* <Header /> */}
      <div className="flex justify-center items-center  min-h-screen my-auto bg-gray-100">
        <div className="bg-white p-4 rounded-lg border border-gray-300 shadow-lg w-full max-w-sm">
          <form onSubmit={handleSubmit}>
            <label
              className="block text-xs font-medium text-gray-700 mb-1"
              htmlFor="name"
            >
              Name
            </label>
            <input
              className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <label
              className="block text-xs font-medium text-gray-700 mb-1"
              htmlFor="category"
            >
              Category
            </label>
            <input
              className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
              type="text"
              id="category"
              name="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />

            <label
              className="block text-xs font-medium text-gray-700 mb-1"
              htmlFor="price"
            >
              Price
            </label>
            <input
              className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
              type="number"
              id="price"
              name="price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <label
              className="block text-xs font-medium text-gray-700 mb-1"
              htmlFor="description"
            >
              Description
            </label>
            <input
              className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
              type="text"
              id="description"
              name="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />

            <label
              className="block text-xs font-medium text-gray-700 mb-1"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
              type="text"
              id="address"
              name="address"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />

            <label
              className="block text-xs font-medium text-gray-700 mb-1"
              htmlFor="image"
            >
              Upload Image
            </label>
            <input
              className="block w-full px-2 py-1 mb-3 border-b border-gray-300 outline-none focus:ring-2 focus:ring-green-800 rounded text-sm"
              type="file"
              onChange={handleFileChange}
            />

            {/* Image Preview */}
            {imagePreview && (
              <div className="mb-3">
                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full py-1.5 bg-green-950 text-white font-semibold rounded hover:bg-white hover:text-green-950 hover:border-2 hover:border-green-950 transition text-sm"
            >
              Upload and Submit
            </button>
          </form>
        </div>
      </div>
    </Fragment>
  );
};

export default Create;
