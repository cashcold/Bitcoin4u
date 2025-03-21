// filepath: [server.js](http://_vscodecontentref_/1)
const express = require('express')
const app = express()
const server = require('http').createServer(app);
const cors = require('cors') 
const dotEnv = require('dotenv')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const userRouter = require('./Router/userRouter')
const path = require('path')
const fs = require('fs');
const cron = require("node-cron")
const shell = require("shelljs")

const io = require('socket.io')(server, { 
    cors: {
        origin: "http://localhost:3000", // Restrict to your frontend
        methods: ["GET", "POST"]
    }
});

dotEnv.config()

mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    serverSelectionTimeoutMS: 5000 // Increase timeout to 5 seconds
}).then(() => {
    console.log('DataBase Connected Successful');
}).catch((err) => {
    console.error('DataBase Connection Error:', err);
});

const PORT = process.env.PORT || 8000

app.use(cors({
    origin: (origin, callback) => {
        const allowedOrigins = ["https://bitcoin4uonline.com", "http://localhost:3000"];
        if (allowedOrigins.includes(origin) || !origin) {
            callback(null, true);
        } else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    methods: ["GET", "POST"],
}));
app.use(bodyParser.json())

io.on('connection', socket => {
    socket.on('BuyBitcoin', BuyBitcoin => {
        socket.broadcast.emit('BuyBitcoin', BuyBitcoin)
    })
    
    socket.on('SellBuyBitcoin', SellBuyBitcoin => {
        socket.broadcast.emit('SellBuyBitcoin', SellBuyBitcoin)
    })
});

app.use('/users', userRouter)

app.use(express.static(path.join(__dirname, "client")));

app.get('/', (req, res) => {
    const filePath = path.resolve(__dirname, './client/build', 'index.html');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            return console.log(err);
        }

        data = data.replace(/\$OG_TITLE/g, 'Buy & Sell Bitcoin Instantly')
                   .replace(/\$OG_DESCRIPTION/g, "Bitcoinu4 makes Bitcoin transactions easy and secure. Buy, sell, and trade crypto seamlessly with the best rates.")
                   .replace(/\$OG_IMAGE/g, 'https://images.unsplash.com/photo-1609726494499-27d3e942456c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Yml0Y29pbnxlbnwwfHwwfHx8MA%3D%3D'); 
        res.send(data);
    });
});

app.use(express.static("client/build"));
if (process.env.NODE_ENV === 'production') {
    app.use(express.static("client/build"));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}


server.listen(PORT, () => {
    console.log(`server is running on local Port Number ${PORT}`)
})