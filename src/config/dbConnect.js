import mongoose, { mongo } from "mongoose";

async function conectaNaDatabase() {

    mongoose.connect("mongodb+srv://victorperezveiga:yMUDY1pAeL1OAtY2@cluster0.7lvwe.mongodb.net/livraria?retryWrites=true&w=majority&appName=Cluster0")
    
return mongoose.connection;
};

export default conectaNaDatabase;