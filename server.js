const express = require('express')
const app = express()
const server = require('http').createServer(app);
const cors = require('cors') 
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./Router/userRouter')
const path = require('path')
const cron = require("node-cron")
const shell = require("shelljs")

const io = require('socket.io')(server, { 
    cors: {
        origin: "http://localhost:3000", // Restrict to your frontend
        methods: ["GET", "POST"]
    }
});

dotEnv.config()



mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true },()=>{
    console.log('DataBase Connented Successful')
})
const PORT = process.env.PORT || 8000



app.use(cors({
    origin: "http://localhost:3000" // Allow requests from the frontend
}));
app.use(bodyParser.json())

io.on('connection', socket => {
    

    socket.on('BuyBitcoin', BuyBitcoin =>{
        socket.broadcast.emit('BuyBitcoin', BuyBitcoin)
    })
    
    socket.on('SellBuyBitcoin', SellBuyBitcoin =>{
        socket.broadcast.emit('SellBuyBitcoin', SellBuyBitcoin)
    })
 
   
 
 
});

app.use('/users',userRouter)

if(process.env.NODE_ENV === 'production'){
    app.use(express.static("client/build"))
    app.get('*',(req,res)=>{
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
    })
}


server.listen(PORT,()=>{
    console.log(`server is runing on local Port Number ${PORT}`)
})