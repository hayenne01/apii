const express=require('express');
const app=express();
const connectDB=require("./config/db");
const Contact = require('./models/Contact');
const router = require('./routes/contact');
const contactRouter=require('./routes/contact')

connectDB();


app.use(express.json())

app.use('/api/contacts',contactRouter)
const port=5000;
app.listen(port, ()=> console.log('server started'))