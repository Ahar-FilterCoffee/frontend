import React from 'react';
import { Card, Button } from '@nextui-org/react';

const App = () => {
  const foods = [
    { name: 'Food A', quantity: '5 kg', image: '/roti.jpeg' },
    { name: 'Food B', quantity: '3 kg', image: '/roti.jpeg' },
    { name: 'Food C', quantity: '7 kg', image: '/roti.jpeg' },
    { name: 'Food D', quantity: '2 kg', image: '/roti.jpeg' },
  ];

  return (
    <div className="min-h-screen bg-primary-100 flex flex-col items-center justify-center text-center p-6">
      <div className="bg-white shadow-lg rounded-lg p-10 max-w-2xl w-full mb-10 transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-6xl font-bold mb-4 text-primary-700">Ahar</h1>
        <p className="text-lg mb-4 text-gray-700">A zero hunger platform</p>
        <hr className="border-gray-300 my-6" />
        <p className="text-lg font-semibold mb-2 text-gray-600">By FilterCoffee</p>
      </div>

      <div className="w-full max-w-4xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {foods.map((food, index) => (
          <Card key={index} className="p-4 flex flex-col items-center bg-white shadow-lg rounded-lg transform hover:scale-105 transition-transform duration-300">
            <img src={food.image} alt={food.name} className="w-full h-32 object-cover mb-4 rounded-md" />
            <h3 className="text-xl font-semibold mb-2 text-gray-800">{food.name}</h3>
            <p className="text-lg mb-2 text-gray-600">Quantity: {food.quantity}</p>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default App;
