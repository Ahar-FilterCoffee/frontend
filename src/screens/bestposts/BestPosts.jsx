import React from 'react';
import { Card } from '@nextui-org/react';

const BestPosts = () => {
  const posts = [
    {
      image: new File([""], "image1.png", { type: "image/png" }),
      name: 'Food A',
      quantity: '5 kg',
      estimatedTime: '30 mins',
    },
    {
      image: new File([""], "image2.jpg", { type: "image/jpeg" }),
      name: 'Food B',
      quantity: '3 kg',
      estimatedTime: '45 mins',
    },
  ];

  return (
    <div className="min-h-screen bg-primary-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl mb-6">Ahar</h1>
      <h2 className="text-xl mb-4 text-center">Best Options</h2>
      <div className="w-full max-w-4xl space-y-6">
        {posts.map((post, index) => (
          <Card key={index} className="p-4 flex items-center">
            <div className="w-1/4 flex justify-center">
              <img src={URL.createObjectURL(post.image)} alt={`post-${index}`} className="w-24 h-24 object-cover" />
            </div>
            <div className="w-3/4 pl-4">
              <p className="text-lg mb-2">Name: {post.name}</p>
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
