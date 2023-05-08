const mongoose = require("mongoose");
const dotenv = require("dotenv");
const Product = require("../model/productSchema");
const axios = require("axios");

dotenv.config();
const connection = async ()=>{
    try{
        await mongoose.connect(process.env.URL, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
        console.log("Database Connected...")
        const del = await Product.deleteMany({});
        // console.log(del);

        const response = await axios.get(process.env.API_URL);
        
        await Product.insertMany(response.data);

    }
    catch(error){
        console.log("Error in database connection: ", error);
    }
}

module.exports = connection();