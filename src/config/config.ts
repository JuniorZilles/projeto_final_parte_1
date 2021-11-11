import dotenv from 'dotenv';

dotenv.config({
  path: process.env.NODE_ENV === 'test' ? '.env.test' : '.env'
});

export default {
  database: {
    host: process.env.MONGO_HOST,
    username: process.env.MONGO_USER,
    password: process.env.MONGO_PASSWORD,
    collection: process.env.MONGO_COLLECTION
  },
  secret: process.env.SECRET || 'bab2ada84cd5dd8f0185e6d673e3800f'
};
