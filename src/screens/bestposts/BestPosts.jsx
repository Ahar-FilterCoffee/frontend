import React, { useEffect, useState } from 'react';
import { Card } from '@nextui-org/react';
import { useNavigate } from 'react-router-dom';

const BestPosts = () => {
  const [posts, setPosts] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    // Fetch the posts from the backend
    const fetchPosts = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_BASE_URL}getPosts/`);
        const data = await response.json();
        if (data.message === 'success') {
          // Map the posts to include a hardcoded estimatedTime
          const updatedPosts = data.posts.map(post => ({
            ...post, // Default image, update as needed
            estimatedTime: '30 mins' // Hardcoded estimated time
          }));
          setPosts(updatedPosts);
        }
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-primary-100 p-6 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6">Ahar</h1>
      <h2 className="text-xl mb-4 text-center">Best Options</h2>
      <div className="w-full max-w-6xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {posts.map((post, index) => (
          <Card  key={post.id} className="flex flex-col rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300">
            <div onClick={() => navigate('/postdetails', { state: { id: post.id } })} className="w-full h-48">
              <img src={post.img} alt={`post-${index}`} className="w-full h-full object-cover" />
            </div>
            <div onClick={() => navigate('/postdetails', { state: { id: post.id } })} className="p-4">
              <p className="text-lg font-semibold mb-2">Name: {post.name}</p>
              <p className="text-lg mb-2">Quantity: {post.quantity} kg</p>
              <p className="text-lg">Estimated time of delivery: {post.estimatedTime}</p>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BestPosts;
