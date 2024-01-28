
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
      

     const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@vistamail.8izscyn.mongodb.net/vistamail?retryWrites=true&w=majority`;
    try{
       // mongoose.connect(DB_URI);
      mongoose.connect(DB_URI, {
        serverSelectionTimeoutMS: 30000
      });
        mongoose.set('strictQuery', false);
        console.log("Database connected successfully!");
    } catch(err) {
        console.log("Error while connecting with the database ", err.message);
    }
}

export default Connection;
