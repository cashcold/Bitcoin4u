const mongoose = require('mongoose');

const sellBitcoinSchema = new mongoose.Schema({ 
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
    email: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    }
}, { timestamps: true });

const SellBitcoin = mongoose.model('SellBitcoin', sellBitcoinSchema);

module.exports = SellBitcoin;