import React, { useEffect, useState } from 'react';
import { Button, Card } from '@nextui-org/react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';

const PostDetails = () => {
  const [postDetails, setPostDetails] = useState(null);
  const location = useLocation()

  useEffect(() => {
    // Fetch the post details from the backend
    const fetchPostDetails = async () => {
      try {
        const response = await axios.post(`${import.meta.env.VITE_BASE_URL}postDetails/`,{id:location.state.id}); // Replace with your actual backend endpoint
        const data = await response.data;
        setPostDetails(data);
      } catch (error) {
        console.error('Error fetching post details:', error);
      }
    };

    fetchPostDetails();
  }, []);

  if (!postDetails) {
    return <div>Loading...</div>;
  }

  const { img, name, foodType, foodQuantity, status } = postDetails;

  return (
    <div className="min-h-screen bg-primary-100 p-6 flex flex-col lg:flex-row">
      <div className="w-full lg:w-1/3 p-4">
        <h2 className="text-2xl mb-4">Pictures</h2>
        <div className="grid grid-cols-2 gap-4">
          <Card className="w-full h-32 flex items-center justify-center">
            <img src={img} alt="Food" className="w-full h-full object-cover" />
          </Card>
        </div>
      </div>

      <div className="w-full lg:w-2/3 p-4">
        <h2 className="text-2xl mb-4">Food Details</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2">Name of food:</label>
          <p className="text-lg border-2 border-gray-300 p-2 rounded-md">{name}</p>
        </div>
        <h3 className="text-xl mb-2">Types of food:</h3>
        <div className="mb-4 flex items-center space-x-4">
          <p className="text-lg border-2 border-gray-300 p-2 rounded-md">{foodType}</p>
          <p className="text-lg border-2 border-gray-300 p-2 rounded-md">{foodQuantity} pieces</p>
        </div>
        <Button shadow className="bg-primary-200 mt-4">Accept</Button>
      </div>
    </div>
  );
};

export default PostDetails;
