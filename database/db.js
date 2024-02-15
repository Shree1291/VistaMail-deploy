
// import mongoose from 'mongoose';
// import dotenv from 'dotenv';

// dotenv.config();

// const USERNAME = process.env.DB_USERNAME;
// const PASSWORD = process.env.DB_PASSWORD;


// const Connection = async () => {
//   const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-jybynsp-shard-00-00.8izscyn.mongodb.net:27017,ac-jybynsp-shard-00-01.8izscyn.mongodb.net:27017,ac-jybynsp-shard-00-02.8izscyn.mongodb.net:27017/?ssl=true&replicaSet=atlas-ocynsr-shard-0&authSource=admin&retryWrites=true&w=majority`;

//   try {
//     await mongoose.connect(DB_URI);
//     mongoose.set('strictQuery', false);
//     console.log("Database connected successfully!");
//   } catch (err) {
//     console.error("Error while connecting with the database:", err.message);
//   }
// };

// export default Connection;
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const Connection = () => {

    var MongoClient = require('mongodb').MongoClient;

    var uri = "mongodb://${USERNAME}:${PASSWORD}@ac-zdl2ods-shard-00-00.tms7t5v.mongodb.net:27017,ac-zdl2ods-shard-00-01.tms7t5v.mongodb.net:27017,ac-zdl2ods-shard-00-02.tms7t5v.mongodb.net:27017/?ssl=true&replicaSet=atlas-d547jx-shard-0&authSource=admin&retryWrites=true&w=majority";

    //const DB_URI = `mongodb://${USERNAME}:${PASSWORD}@ac-zdl2ods-shard-00-00.tms7t5v.mongodb.net:27017,ac-zdl2ods-shard-00-01.tms7t5v.mongodb.net:27017,ac-zdl2ods-shard-00-02.tms7t5v.mongodb.net:27017/?ssl=true&replicaSet=atlas-d547jx-shard-0&authSource=admin&retryWrites=true&w=majority`; 
    try{
        MongoClient.connect(uri, function(err, client) {
            const collection = client.db("test").collection("devices");
            client.close();
        });
          
        // mongoose.connect(DB_URI);
        mongoose.set('strictQuery', false);
        console.log("Database connected successfully!");
    } catch(err) {
        console.log("Error while connecting with the database ", err.message);
    }
}

export default Connection;



