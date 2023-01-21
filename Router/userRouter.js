const express = require('express')
const User = require('../UserModel/userModel')
const UserDeposit = require('../UserModel/depositModel')
const WithdrawDeposit = require('../UserModel/widthdraw')
const BuyBitcoin = require('../UserModel/buyBitcoinModel')
const SellBitcoin = require('../UserModel/sellBitcoinModel')
const bcrypt = require('bcryptjs')
const mailgun = require('mailgun-js')
const dotEnv = require('dotenv')
const jwt = require('jsonwebtoken')
const async = require('async')
const crypto = require('crypto')  

dotEnv.config()

const Router = express.Router()

Router.post('/register/', async(req,res)=>{

    
    User.findOne({reffer : req.params})
    // reffer program

    const user = await User.findOne({email: req.body.email})
    if(user) return res.status(400).send('Email already Exist')


    const salt = await bcrypt.genSalt(10)
    const hashPassword = await bcrypt.hash(req.body.password, salt)

    const saveUser = new User({ 
        full_name: req.body.full_name,
        password: hashPassword,
        email: req.body.email,
        referral: req.body.referral,
        phone: Number(req.body.phone),
        ip_address: req.body.ip_address,
        date: req.body.date
    })

    var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
    var data = {
        from: 'PayItForward <payitforwardisnvestmentlimited@gmail.com>',
        to: 'frankainoo@gmail.com',
        subject: 'Hello',
        text: 'Thank you for making Bussiness with us, Have a nice day. Thank You'
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(body);
    });
  

    await saveUser.save()
    res.send("user save")

})



Router.post('/login', async(req,res)=>{
    const user = await User.findOne({email: req.body.email})
    if(!user) {

        return res.status(400).send('Email Do Not Exist')
    } 

    await bcrypt.compare(req.body.password, user.password,(err,isMatch)=>{
        if(!isMatch) return res.status(400).send('Invalid Password ')
        else{
            const payload = {
                 user_id: user._id,
                 full_name: user.full_name,
                 phone: user.phone,
                 email: user.email,
                 password: user.password,
                 ip_address: user.ip_address,           
                 date: user.date,
            }
            const token = jwt.sign(payload, process.env.TokenSecret)
            res.header('x-access-token', token)
            return res.status(200).send(token)
        }
    })
})

Router.post('/forgotpassword', async (req,res,next)=>{  
    const userEmail = req.body.email;
    async.waterfall([
       (done)=>{
         crypto.randomBytes(20,(err,buffer)=>{
             let token = buffer.toString('hex');
             done(err, token);
         })
         
       },
       (token, done)=>{
         User.findOne({email: req.body.email},(err,user)=>{
             if(!user){
                 return res.status(400).send('Email Not Found')
             }
             user.restartLinkPassword =  token;
             user.save((err)=>{
                 done(err, token, user)
             })
         })
       },
       (token,user,done)=>{
        var mailgun = require('mailgun-js')({apiKey: process.env.API_key, domain: process.env.API_baseURL});
        var data = {
            from: 'Bitcoin4u <bitcoin4u.gh@gmail.com>',
            to: userEmail,
            subject: 'Password Reset',
            html: ` <h1>Please Follow the link to restart your password </h1>
                <p>${process.env.forgotPasswordLink}/${token}</p>
            `
        };
         mailgun.messages().send(data, function (error, body) {
             if(error){
                 return res.status(400).send(error.message)
             }
            return res.status(200).send('Link sent to Email Address')
       });
 
       },
       
    ])
 
     
 })
 Router.post("/updateprofile/:id", async (req, res) => {
    const salt = await bcrypt.genSalt(10)
    const editPassword = await bcrypt.hash(req.body.password, salt)


    const user = await User.findById(req.params.id);
    if (req.body.full_name) {
        user.full_name = req.body.full_name;
    }
    if (req.body.password) {
        user.password = editPassword;
    }
    if (req.body.phone) {
        user.phone = req.body.phone;
    }
    await user.save();
    

    const payload = {
    user_id: user._id,
    full_name: user.full_name,
    email: user.email,
    phone: user.phone,
    password: user.password,
    ip_address: user.ip_address,     
    date: user.date
}
const RefreshToken = jwt.sign(payload, process.env.RefreshToken)
res.header('RefreshToken', RefreshToken)
res.send(RefreshToken)


});

    Router.post('/editeProfil', async(req,res)=>{
        const salt = await bcrypt.genSalt(10)
        const editPassword = await bcrypt.hash(req.body.password, salt)

        
        const EditProfit = new User({
            full_name: req.body.full_name,
            phone: req.body.phone,
            password: editPassword,
        })
        
        const user = await User.updateOne({full_Name: req.body.full_name})
        const phone = await User.updateOne({phone: req.body.phone})
        const userPassword = await User.updateOne({password: EditProfit.password})

        
        

        await EditProfit.save()
    })



 Router.post('/activtypassword/:token', async(req,res)=>{
   
   User.findOne({restartLinkPassword : req.params.token})
   .then(user=>{
       if(!user){
           return res.status(422).json({error:"Invalid token"})
       }
       bcrypt.genSalt(10, function(err, salt) {
           bcrypt.hash(req.body.password, salt, function(err, hash) {
           user.password = hash
           user.restartLinkPassword = undefined
           user.save().then((saveduser)=>{
               res.json({message:"password updated success"})
           })

           });
        });
       
   }).catch(err=>{
       console.log(err)
   })
})



Router.post('/buyBitcoinInfo',async(req,res)=>{
   
    user_id = req.body.id
    const user = await BuyBitcoin.findOne({user_id: req.body.id})

    if(user){
        const currentDeposit = await BuyBitcoin.aggregate([
            { $match : { }},
            {$group: {_id: "$user_id", totalBuy: { $sum: "$usd" },lastBuy: { $last: "$usd" }}},
            
        ])
    res.send(currentDeposit)
    }
    
    
})
Router.post('/sellBitcoinInfo',async(req,res)=>{
   
    user_id = req.body.id
    const user = await SellBitcoin.findOne({user_id: req.body.id})

    if(user){
        const currentDeposit = await SellBitcoin.aggregate([
            { $match : { }},
            {$group: {_id: "$user_id", totalSell: { $sum: "$usd" },lastSell: { $last: "$usd" }}},
            
        ])
    res.send(currentDeposit)
    }
    
    
})



Router.post('/buyBitcoin', async(req,res)=>{
    
    const BuyBitcoinNow = new BuyBitcoin({
        user_id: req.body.user_id,
        full_name: req.body.full_name,
        usd: Number(req.body.usd),
        payment__number: Number(req.body.payment__number),
        payment__name: req.body.payment__name,
        walletAddress: req.body.walletAddress,
        email: req.body.email,
        date: req.body.date

    })

    await BuyBitcoinNow.save()
    res.send(".........Waiting for BlockChain confirm to credit your Dashboard")
})

Router.post('/sellBitcoin', async(req,res)=>{
    
    const SellBitcoinNow = new SellBitcoin({
        user_id: req.body.user_id,
        full_name: req.body.full_name,
        usd: Number(req.body.usd),
        payment__number: Number(req.body.payment__number),
        payment__name: req.body. payment__name,
        email: req.body.email,
        date: req.body.date

    })

    await SellBitcoinNow.save()
    res.send(".........Waiting for BlockChain confirm to credit your Dashboard")
})



Router.post('/sendmessage',(req,res)=>{
   
   
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'Please i have sent you $548, Check your Account ',
     from: '+19472105301',
     to: '+233235674386'
   })
  .then(message => console.log(message.sid));

    res.send('Message Sent')
 })


















































































// Router.post('/widthdraw/:id', async(req,res)=>{
//     console.log(req.body.zero_accountBalance)
//     const user = await User.findById(req.params.id);
//     if (req.body.zero_accountBalance) user.accountBalance = req.body.zero_accountBalance;
//     await user.save();

  
//     res.send('Payment send to Account Wallet')
// })






module.exports = Router;
