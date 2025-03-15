import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';
dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
  api_url: process.env.CLOUDINARY_URL,
});

cloudinary.api
  .ping()
  .then((result) => {
    console.log('Cloudinary connection successful:', result);
  })
  .catch((error) => {
    console.error('Cloudinary connection failed:', error);
  });

export const CloudinaryConfig = cloudinary;
