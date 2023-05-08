const Product = require("../model/productSchema");

const statistics = async (req, res) => {
  try {
    const mon = req.body.month;
    const month = {
      January: "01",
      February: "02",
      March: "03",
      April: "04",
      May: "05",
      June: "06",
      July: "07",
      August: "08",
      September: "09",
      October: "10",
      November: "11",
      December: "12",
    };

    
    const data = await Product.find({
      dateOfSale: { $expr: { $eq: [{ $month: "$dateOfSale" }, month[mon] ] } },
    });
    console.log(data);
    // Product.find(query, (err, data) => {
    //   if (err) {
    //     console.log(err);
    //   } else {
    //     data = data;
    //   }
    // });
    return res.status(201).json({ data: data });
  } catch (err) {
    console.log("Error in getting statistics: ", err);
    return res.status(401).json({ error: "Something went wrong" });
  }
};

module.exports = statistics;
