const mongoose = require('mongoose');

const buyBitcoinSchema = new mongoose.Schema({ 
    user_id: {
        type: String,
        required: true,
    },
    full_name: {
        type: String,
        required: true,
    },
    usd: {
        type: Number,
        required: true,
    },
    ghc: {
        type: Number,
        required: true,
    },
    payment__number: {
        type: Number,
        required: true,
    },
    payment__name: {
        type: String,
        required: true,
    },
    walletAddress: {
        type: String,
        // required: true,
    },
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const BuyBitcoin = mongoose.model('BuyBitcoin', buyBitcoinSchema);

module.exports = BuyBitcoin;