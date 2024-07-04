import React, { useState } from 'react';
import { Button, Input, Card, Spacer } from '@nextui-org/react';
import cloudinaryUpload from '../../utils/cloudinary';
import axios from 'axios';
import { getUserId } from '../../utils/handleCookie';
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom/dist';

const Post = () => {
  const navigate = useNavigate();
  const [picture, setPicture] = useState(null);
  const [foodType, setFoodType] = useState('');
  const [quantity, setQuantity] = useState('');
  const [isLoading, setIsLoading] = useState(false)

  const handlePictureUpload = (event) => {
    const file = event.target.files[0];
    setPicture(file);
  };

  const handlePost = async () => {
    // Handle the post submission logic here
    setIsLoading(true)
    try {
      const imgUrl = await cloudinaryUpload(picture)
      if (getUserId() == null) {
        toast.error("Login to add products....")
      } else {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}${import.meta.env.VITE_MAKEPOST}`, {
          id: getUserId(),
          quantity: quantity,
          img: imgUrl,
          foodType: foodType,
          foodQuantity: quantity
        })

        if (response.data.message = "success") {
          toast.success("Product added successfully. Kindly wait for any NGO to pick up.")
          navigate('/')
        }
      }
    } catch (e) {
      toast.error("Error adding product...")
    }
    setIsLoading(false)
  };

  return (
    <div className="min-h-screen bg-primary-100 p-6 flex flex-col items-center">
      <div className="w-full md:w-1/3 p-4">
        <h2 className="text-2xl mb-4">Upload Picture</h2>
        <div className="w-full h-48 flex items-center justify-center border-2 border-dashed border-gray-400 cursor-pointer mb-4">
          {picture ? (
            <img src={URL.createObjectURL(picture)} alt="uploaded" className="w-full h-full object-cover" />
          ) : (
            <label className="w-full h-full flex items-center justify-center">
              <span className="text-gray-400">+</span>
              <input type="file" className="hidden" onChange={handlePictureUpload} />
            </label>
          )}
        </div>
        <Button className="bg-primary-200 w-full" onClick={() => document.querySelector('input[type="file"]').click()}>Upload</Button>
      </div>

      <div className="w-full md:w-1/2 p-4">

        <div className="mb-4">
          <label className="block text-lg mb-2">Type of food:</label>
          <Input
            clearable
            underlined
            placeholder="Enter type"
            value={foodType}
            onChange={(e) => setFoodType(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label className="block text-lg mb-2">Quantity:</label>
          <Input
            clearable
            underlined
            placeholder="Enter quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            className="border-2 border-gray-300 p-2 rounded-md"
            type="number"
            step="0.01"
          />
        </div>
        <Spacer y={1} />
        <Button isLoading={isLoading} shadow className="bg-primary-200 w-full" onClick={handlePost}>Post</Button>
      </div>
    </div>
  );
};

export default Post;
