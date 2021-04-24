const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({ 
    user_id: {
        type: String,
        require: true,
    },
    full_Name: {
        type: String,
        require: true,
    },
   usd: {
        
        type: Number,
        require: true,
    },
    payment__number: {
        
        type: Number,
        require: true,
    },
    payment__name: {
        type: String,
        require: true,
    },
    walletAddress: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        require: true,
    },
    
    date:{
        type: String,
        require: true,
    }
    
    
})

const BuyBitcoin = mongoose.model('BuyBitcoin', userSchema)

module.exports = BuyBitcoin;