const mongoose = require('mongoose');
 
const userSchema = new mongoose.Schema({
      user_id: {
        type: String,
        require: true,
    },
    user_Name: { 
        type: String,
    },
    accountBalance: {
        type: Number    ,
    },  
    email: {
        type: String,
        require: true,
    },
    bitcoin: {
        type: String,
    },
    bitcoinCash: {
        type: String,
    },
    ethereum: {
        type: String,
    },
    zero_accountBalance: {
        type: String,
    },
    date:{
        type: String,
        require: true,
    }


    
})

const WithdrawDeposit = mongoose.model('WithdrawDeposit', userSchema)

module.exports = WithdrawDeposit;