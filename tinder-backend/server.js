import express from 'express'
import mongoose from 'mongoose'
import Cards from './dbCards.js'
import Cors from 'cors'

// App Config
const app = express();
const port = process.env.PORT || 8001;
const connection_uri = `mongodb+srv://tinderxx:tinderxx@cluster0.pwexdav.mongodb.net/tinderdb?retryWrites=true&w=majority`

//Middleware
app.use(express.json());
app.use(Cors());

// DB config
mongoose.connect(connection_uri,()=>{
    console.log("MongoDB Connected");
})

// API Endpoints
app.get('/',(req,res)=>{
    return res.status(200).send('Hello Clever');
})
app.post("/tinder/cards",async (req,res)=>{
    const dbCard = req.body;
    const newCard = new Cards(dbCard);
    await newCard.save();
    res.status(200).json(newCard);
})

app.get("/tinder/cards",async (req,res)=>{
    const cards = await Cards.find();
    if(!cards) return res.status(500).json("No cards found");
    res.status(200).json(cards);
})

//Listener
app.listen(port , ()=>{
    console.log(`Server started on ${port}`)
})