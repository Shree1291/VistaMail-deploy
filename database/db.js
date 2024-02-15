
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;


const Connection = async () => {
  const DB_URI = `mongodb://shriramb1291:7cNusX1MRVUC8ZUJ@ac-toxirnq-shard-00-00.kvspx6m.mongodb.net:27017,ac-toxirnq-shard-00-01.kvspx6m.mongodb.net:27017,ac-toxirnq-shard-00-02.kvspx6m.mongodb.net:27017/?ssl=true&replicaSet=atlas-t2m3tl-shard-0&authSource=admin&retryWrites=true&w=majority`;

  try {
    await mongoose.connect(DB_URI);
    mongoose.set('strictQuery', false);
    console.log("Database connected successfully!");
  } catch (err) {
    console.error("Error while connecting with the database:", err.message);
  }
};

export default Connection;
