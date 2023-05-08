const mongoose = require("mongoose");

const schema = mongoose.Schema({
    id:{
        type: Number,
        require: true,
    },
    title:{
        type: String,
        require: true,
    },
    price:{
        type:Number,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    category:{
        type:String,
        require:true,
    },
    imageUrl:{
        type:String,
        require:true,
    },
    sold:{
        type:Boolean,
        require:true,
    },
    dateOfSale:{
        type: String,
        require:true,
    },
});

const product = mongoose.model("product", schema);

module.exports = product;