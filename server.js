const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const router = require("./routes/route");
const connection = require("./db/conn");
const app = express();
const dotenv = require("dotenv");
dotenv.config();

app.use(express.json());
app.use(cookieParser());
app.use(cors());


app.use(router);


const PORT = 8009;

app.listen(PORT, ()=>{
    console.log(`Server is at PORT ${PORT}`);
})

