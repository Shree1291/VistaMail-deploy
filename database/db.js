
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {
    const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-zdl2ods-shard-00-00.tms7t5v.mongodb.net:27017,ac-zdl2ods-shard-00-01.tms7t5v.mongodb.net:27017,ac-zdl2ods-shard-00-02.tms7t5v.mongodb.net:27017/?ssl=true&replicaSet=atlas-d547jx-shard-0&authSource=admin&retryWrites=true&w=majority`; 
    try{
        mongoose.connect(DB_URI);
        mongoose.set('strictQuery', false);
        console.log("Database connected successfully!");
    } catch(err) {
        console.log("Error while connecting with the database ", err.message);
    }
}

export default Connection;