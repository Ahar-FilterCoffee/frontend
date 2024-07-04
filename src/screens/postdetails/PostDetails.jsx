import React from 'react';
import { Button, Card } from '@nextui-org/react';

const PostDetails = () => {
  const pictures = [
    new File([""], "im.png", { type: "image/png" }),
    // new File([""], "image2.jpg", { type: "image/jpeg" })
  ];

  const foodName = 'Ahar';
  const foodTypes = [
    { type: 'Type1', quantity: '10' },
    { type: 'Type2', quantity: '20' }
  ];

  return (
    <div className="min-h-screen bg-primary-100 p-6 flex">
      <div className="w-1/3 p-4">
        <h2 className="text-2xl mb-4">Pictures</h2>
        <div className="grid grid-cols-2 gap-4">
          {pictures.map((pic, index) => (
            <Card key={index} className="w-full h-32 flex items-center justify-center">
              <img src={URL.createObjectURL(pic)} alt={`pic-${index}`} className="w-full h-full object-cover" />
            </Card>
          ))}
        </div>
      </div>

      <div className="w-2/3 p-4">
        <h2 className="text-2xl mb-4">Food Details</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2">Name of food:</label>
          <p className="text-lg border-2 border-gray-300 p-2 rounded-md">{foodName}</p>
        </div>
        <h3 className="text-xl mb-2">Types of food:</h3>
        {foodTypes.map((foodType, index) => (
          <div key={index} className="mb-4 flex items-center space-x-4">
            <p className="text-lg border-2 border-gray-300 p-2 rounded-md">{foodType.type}</p>
            <p className="text-lg border-2 border-gray-300 p-2 rounded-md">{foodType.quantity}</p>
          </div>
        ))}
        <Button shadow className="bg-primary-200 mt-4">Accept</Button>
      </div>
    </div>
  );
};

export default PostDetails;
