import React, { useState } from 'react';
import { Card, Spacer, Button } from '@nextui-org/react';

const PostAccept = () => {
  // Default data and images
  const defaultPictures = [
    '/roti.jpeg', // Replace with actual image paths or URLs
    '/roti.jpeg',
    // Add more images as needed
  ];
  const defaultFoodName = 'Sample Data';
  const defaultFoodTypes = [
    { type: 'Fruit', quantity: '10kg' },
    { type: 'Vegetable', quantity: '15kg' },
    // Add more food types as needed
  ];

  const [pictures] = useState(defaultPictures);
  const [foodName] = useState(defaultFoodName);
  const [foodTypes] = useState(defaultFoodTypes);

  const handlePost = () => {
    // Handle the post submission logic here
    console.log({
      foodName,
      foodTypes,
      pictures,
    });
  };

  return (
    <div className="min-h-screen bg-primary-100 p-6 flex flex-col lg:flex-row gap-6">
      <div className="w-full lg:w-1/3 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">Pictures</h2>
        <div className="grid grid-cols-2 gap-4">
          {pictures.map((pic, index) => (
            <Card key={index} className="w-full h-40 rounded-lg overflow-hidden shadow-lg">
              <img src={pic} alt={`pic-${index}`} className="w-full h-full object-cover" />
            </Card>
          ))}
        </div>
        <Spacer y={1} />
        <h2 className="text-xl font-semibold mb-2">Estimated Time: 30 minutes</h2>
      </div>

      <div className="w-full lg:w-2/3 flex flex-col">
        <h2 className="text-3xl font-bold mb-4">Ahar</h2>
        <h3 className="text-2xl font-semibold mb-4">Types of food:</h3>
        {foodTypes.map((foodType, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow-md mb-4 flex flex-col sm:flex-row justify-between">
            <p className="text-lg font-medium text-gray-700">Type: {foodType.type}</p>
            <p className="text-lg font-medium text-gray-700">Quantity: {foodType.quantity}</p>
          </div>
        ))}
        <Spacer y={2} />
        <Button shadow className="w-full bg-primary-200 text-white py-3 text-lg font-semibold" onClick={handlePost}>
          Accept
        </Button>
      </div>
    </div>
  );
};

export default PostAccept;
