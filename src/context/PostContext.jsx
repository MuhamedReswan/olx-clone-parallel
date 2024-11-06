import React, { createContext, useContext, useState } from 'react'


const PostContext = createContext()
const PostContextProvider = ({children}) => {

    const [product,setProduct]=useState({
        category: "car",
        createdAt: new Date("2024-11-06T05:12:55+05:30"), // Convert the timestamp to a Date object
        description: "good quality and mileage, good comfort",
        imageUrl: "https://res.cloudinary.com/duxddwvek/image/upload/v1730869974/olx-products/gxro0evnh4nw1ygpxafu.jpg",
        name: "wagn-R",
        price: 76000,
        userId: "4mI9Pm1txTW5wUcgDdwqoe99Z9w1",
      });


  return (
    <div>
        <PostContext.Provider value={{product,setProduct}}>
{children}
        </PostContext.Provider>
      
    </div>
  )
}

export default PostContextProvider

export const ProductAuth =()=>{
    return useContext(PostContext);
}
