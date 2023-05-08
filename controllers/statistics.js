const mongoose = require("mongoose");
const Product = require("../model/productSchema");


const statistics = (req, res)=>{
    try{
        const mon = req.body.month;
        const month = {
            January: "01", February: "02", March: "03", April: "04", May: "05", June: "06", July: "07", August: "08", September: "09", October: "10", November: "11", December: "12",
        }

        const query = {
            dateOfSale: {
              $regex: `^2021-${month[mon]}-`
            }
          };
          
          Product.find(query, (err, data) => {
            if (err) {
              console.log(err);
            } else {
              console.log(data);
            }
          });

    }
    catch(err){
        console.log("Error in getting statistics: ", err);
        return res.status(401).json({ error: "Something went wrong"});
    }
}

module.exports = statistics;