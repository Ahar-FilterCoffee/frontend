import React from 'react';
import { Card } from '@nextui-org/react';

const BestPosts = () => {
  const posts = [
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/roti.jpeg',
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: '/image2.jpg',
      name: 'Food B',
      quantity: '3 kg',
      estimatedTime: '45 mins',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Ahar</h1>
      <h2 className="text-xl mb-4 text-center">Best Options</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <Card key={index} className="flex flex-col rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div className="w-full h-48">
              <img src={post.image} alt={`post-${index}`} className="w-full h-full object-cover" />
            </div>
            <div className="p-4">
              <p className="text-lg font-semibold mb-2">Name: {post.name}</p>
              <p className="text-lg mb-2">Quantity: {post.quantity}</p>
              <p className="text-lg">Estimated time of delivery: {post.estimatedTime}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestPosts;
