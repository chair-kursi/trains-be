require('dotenv').config();
const express = require('express');
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 4000;

//MIDDLEWARES
app.use(cors({
    credentials: true, allowedHeaders: ['Origin', 'X-Requested0-With', 'Content-Type', 'Accept'],
    methods: ['GET', 'PUT', 'PATCH', 'POST'],
    origin: ['http://localhost:3000']
  }));
app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hello World!')
});

//IMPORTING ROUTES
const trainRouter = require("./routes/trains"); 
const bookingRouter = require("./routes/booking"); 


//USING ROUTES AS A MIDDLEWARE
app.use("/", trainRouter); 
app.use("/", bookingRouter); 



mongoose
.connect(process.env.DB_CONNECTION,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("Database connected!"))
    .catch((err) => console.log({ err }));

app.listen(port);