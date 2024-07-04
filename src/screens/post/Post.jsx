import React, { useState } from 'react';
import { Button, Input, Card, Spacer } from '@nextui-org/react';

const Post = () => {
  const [pictures, setPictures] = useState([]);
  const [foodName, setFoodName] = useState('');
  const [foodTypes, setFoodTypes] = useState([{ type: '', quantity: '' }]);

  const handlePictureUpload = (event) => {
    const files = Array.from(event.target.files);
    setPictures((prevPictures) => [...prevPictures, ...files]);
  };

  const handleAddFoodType = () => {
    setFoodTypes((prevFoodTypes) => [...prevFoodTypes, { type: '', quantity: '' }]);
  };

  const handleFoodTypeChange = (index, field, value) => {
    const newFoodTypes = foodTypes.map((foodType, i) => 
      i === index ? { ...foodType, [field]: value } : foodType
    );
    setFoodTypes(newFoodTypes);
  };

  const handlePost = () => {
    // Handle the post submission logic here
    console.log({
      foodName,
      foodTypes,
      pictures,
    });
  };

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
          <label className="w-full h-32 flex items-center justify-center border-2 border-dashed border-gray-400 cursor-pointer">
            <span className="text-gray-400">+</span>
            <input type="file" multiple className="hidden" onChange={handlePictureUpload} />
          </label>
        </div>
        <Button className="mt-4 bg-primary-200" onClick={() => document.querySelector('input[type="file"]').click()}>Upload</Button>
      </div>

      <div className="w-2/3 p-4">
        <h2 className="text-2xl mb-4">Enter Food Details</h2>
        <div className="mb-4">
          <label className="block text-lg mb-2">Name of food:</label>
          <Input 
            clearable 
            underlined 
            placeholder="Enter food name" 
            value={foodName} 
            onChange={(e) => setFoodName(e.target.value)} 
            className="border-2 border-gray-300 p-2 rounded-md"
          />
        </div>
        <h3 className="text-xl mb-2">Types of food:</h3>
        {foodTypes.map((foodType, index) => (
          <div key={index} className="mb-4 flex items-center space-x-4">
            <Input 
              clearable 
              underlined 
              placeholder="Enter type" 
              value={foodType.type} 
              onChange={(e) => handleFoodTypeChange(index, 'type', e.target.value)} 
              className="border-2 border-gray-300 p-2 rounded-md"
            />
            <Input 
              clearable 
              underlined 
              placeholder="Enter quantity" 
              value={foodType.quantity} 
              onChange={(e) => handleFoodTypeChange(index, 'quantity', e.target.value)} 
              className="border-2 border-gray-300 p-2 rounded-md"
            />
          </div>
        ))}
        <Button light auto className="bg-primary-200" onClick={handleAddFoodType}>+</Button>
        <Spacer y={1} />
        <Button shadow className="bg-primary-200" onClick={handlePost}>Post</Button>
      </div>
    </div>
  );
};

export default Post;
