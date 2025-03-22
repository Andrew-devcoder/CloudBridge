import * as dotenv from 'dotenv';
dotenv.config();

export const rabbitConfig = {
  vhost: process.env.RABBIT_VHOST,
  user: process.env.RABBIT_USER,
  password: process.env.RABBIT_PASSWORD,
  posts: process.env.RABBIT_POSTS,
  url: process.env.RABBIT_URL,
};
