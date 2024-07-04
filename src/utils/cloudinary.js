// src/utils/cloudinary.js
import axios from 'axios';

const cloudinaryUpload = async (file) => {
  const formData = new FormData();
  formData.append('file', file);
  formData.append('upload_preset', 'bisineimages'); // Replace with your Cloudinary upload preset

  const response = await axios.post(
    `https://api.cloudinary.com/v1_1/ddkpclbs2/image/upload`, // Replace with your Cloudinary cloud name
    formData
  );

  return response.data.secure_url; // This is the URL of the uploaded image
};

export default cloudinaryUpload;
