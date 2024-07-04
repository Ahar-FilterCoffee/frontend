// HomeFoodProducer.tsx

import React from 'react';
import { Image } from '@nextui-org/react';
const HomeFoodProducer = () => {
    const posts = [
        { id: 1, name: 'Organization 1', quantity: '100kg', status: 'delivered' },
        { id: 2, name: 'Organization 2', quantity: '150kg', status: 'delivering' },
        { id: 3, name: 'Organization 1', quantity: '100kg', status: 'delivered' },
        { id: 4, name: 'Organization 2', quantity: '150kg', status: 'delivering' },
        // Add more posts as needed
    ];

    return (
        <div className="min-h-screen bg-background-100 p-5">
                <h1 className="text-3xl font-bold text-primary-200 mb-5 text-center">Ahar</h1>
                <div className="bg-white p-6 rounded-lg  mb-5">
                    <div className="flex flex-col md:flex-row justify-between items-center mb-5">
                        <div className="mb-4 md:mb-0 flex flex-col md:flex-row items-center">
                            <p className="text-lg font-medium text-textSecondary-100 mb-2 md:mb-0 md:mr-4">
                                Total food waste reduced: <span className="font-bold">5000kg</span>
                            </p>
                            <p className="text-lg font-medium text-textSecondary-100">
                                Total mouths fed: <span className="font-bold">1000</span>
                            </p>
                        </div>
                        <button className="bg-primary-200 text-white hover:bg-primary-300 py-2 px-4 rounded-lg">
                            Make a post
                        </button>
                    </div>
                    <div className="grid grid-cols-1 gap-4">
                        {posts.map(post => (
                            <div key={post.id} className="bg-white p-4 rounded-lg shadow-md flex items-center">
                                <div className="w-16 h-16 bg-gray-200 rounded-full mr-4 flex-shrink-0">
                                <Image src='/logo1.jpg'></Image>    
                                </div> 
                                <div>
                                    <p className="text-lg font-semibold text-textSecondary-100">Name: {post.name}</p>
                                    <p className="text-lg text-textSecondary-200">Quantity: {post.quantity}</p>
                                    <p className="text-lg text-textSecondary-300">Status: {post.status}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
        </div>
    );
};

export default HomeFoodProducer;
