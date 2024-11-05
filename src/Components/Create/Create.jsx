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
  const [description, setDescription] = useState(""); // State for description

  const [file, setFile] = useState(null);

  const navigate = useNavigate();

  const { user } = UserAuth();
  // console.log("user.uid",user.uid)

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
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
      console.log("data from cloudinary", data);
      return data.secure_url;
    } catch (error) {
      toast.error("Image upload failed");
      console.log("error", error);
      return null;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!name || !category || !price || !file) {
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
        price: parseFloat(price),
        imageUrl,
        createdAt: new Date(),
      });

      console.log(res, "res from fire base");

      toast.success("Product added successfully!");
      setName("");
      setCategory("");
      setPrice("");
      setDescription("");
      setFile(null);

      navigate("/");
    } catch (error) {
      toast.error("Failed to add product. Please try again.");
      console.log("Firestore error:", error);
    }
  };

  return (
    <Fragment>
      <Header />
      <div className="centerDiv">
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name</label>
          <br />
          <input
            className="input"
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br />
          <label htmlFor="category">Category</label>
          <br />
          <input
            className="input"
            type="text"
            id="category"
            name="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          />
          <br />
          <label htmlFor="price">Price</label>
          <br />
          <input
            className="input"
            type="number"
            id="price"
            name="price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <br />
          <label htmlFor="description">Description</label>
          <br />
          <input
            className="input"
            type="text"
            id="description"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <br />
          <br />
          <label htmlFor="image">Upload Image</label>
          <br />
          <input type="file" onChange={handleFileChange} />
          <br />
          <button type="submit" className="uploadBtn">
            Upload and Submit
          </button>
        </form>
      </div>
    </Fragment>
  );
};

export default Create;
