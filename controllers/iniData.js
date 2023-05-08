const mongoose = require("mongoose");
const Product = require("../model/productSchema");
const dotenv = require("dotenv").config();
const axios = require("axios");


const IniData = async (req, res) =>{
    try{
        const del = await Product.deleteMany({});

        const response = await axios.get(process.env.API_URL);
                
        response.data.map((v,i)=>{
            v.dateOfSale = new Date(v.dateOfSale);
        });
        console.log(response.data);

        await Product.insertMany(response.data);
        
        return res.status(201).json({status:201, success:true});
    }
    catch(err){
        console.log("Error in initializing the database: ", err);
        return res.status(401).json({ status:401, error: "Something went Wrong" });
    }
}

module.exports = IniData;