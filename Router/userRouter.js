const express = require('express')
const nodemailer = require("nodemailer");
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

Router.post("/register/", async (req, res) => {
    try {
        // Check if the user already exists
        const user = await User.findOne({ email: req.body.email });
        if (user) return res.status(400).send("Email already exists");

        // Validate and convert phone number
        const phone = Number(req.body.phone);
        if (isNaN(phone)) return res.status(400).send("Invalid phone number");

        // Hash the password
        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt);

        // Create a new user instance
        const saveUser = new User({
            full_name: req.body.full_name,
            password: hashPassword,
            email: req.body.email,
            referral: req.body.referral,
            phone: phone,
            ip_address: req.body.ip_address,
            date: req.body.date,
        });

        // Save the user to the database
        await saveUser.save();

        // Configure Nodemailer for your new email hosting
        const transporter = nodemailer.createTransport({
            host: "mail.bitcoin4uonline.com",
            port: 465, // Use 587 if TLS is needed
            secure: true, // True for SSL
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASS,
            },
            
            tls: {
                rejectUnauthorized: false // Disable SSL/TLS verification
            }
        });

        // Email options
        const mailOptions = {
            from: '"Bitcoin4U Support" <support@bitcoin4uonline.com>',
            to: req.body.email, // Send email to the registered user
            subject: "Welcome to Bitcoin4U!",
            html: `
                <!DOCTYPE html>
                <html>
                <head>
                    <style>
                        body {
                            font-family: Arial, sans-serif;
                            margin: 0;
                            padding: 0;
                            background-color: #f4f4f4;
                        }
                        .container {
                            width: 100%;
                            max-width: 600px;
                            margin: 0 auto;
                            background-color: #ffffff;
                            padding: 20px;
                            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
                        }
                        .header {
                            text-align: center;
                            padding: 10px 0;
                            background-color: #007bff;
                            color: #ffffff;
                        }
                        .content {
                            padding: 20px;
                        }
                        .footer {
                            text-align: center;
                            padding: 10px 0;
                            background-color: #007bff;
                            color: #ffffff;
                        }
                        .social-icons {
                            text-align: center;
                            margin-top: 20px;
                        }
                        .social-icons img {
                            width: 40px;
                            margin: 0 10px;
                        }
                        @media (max-width: 600px) {
                            .container {
                                padding: 10px;
                            }
                            .content {
                                padding: 10px;
                            }
                        }
                    </style>
                </head>
                <body>
                    <div class="container">
                        <div class="header">
                            <h1>Welcome to Bitcoin4U!</h1>
                        </div>
                        <div class="content">
                            <p>Hello ${req.body.full_name},</p>
                            <p>Thank you for registering with Bitcoin4U! Your account has been successfully created.</p>
                            <p>We buy and sell bitcoin with no hidden fees. We also offer rewards to users in many ways, such as our referral program and many others.</p>
                            <p>Visit our website: <a href="https://bitcoin4uonline.com">bitcoin4uonline.com</a></p>
                            <p>Best Regards,<br>Bitcoin4U Team</p>
                        </div>
                        <div class="social-icons">
                            <a href="https://facebook.com/bitcoin4u"><img src="https://image.shutterstock.com/image-vector/facebook-icon-260nw-600469566.jpg" alt="Facebook"></a>
                            <a href="https://twitter.com/bitcoin4u"><img src="https://image.shutterstock.com/image-vector/twitter-icon-260nw-600469567.jpg" alt="Twitter"></a>
                            <a href="https://instagram.com/bitcoin4u"><img src="https://image.shutterstock.com/image-vector/instagram-icon-260nw-600469568.jpg" alt="Instagram"></a>
                        </div>
                        <div class="footer">
                            <p>&copy; 2025 Bitcoin4U. All rights reserved.</p>
                        </div>
                    </div>
                </body>
                </html>
            `,
        };

        // Send email
        transporter.sendMail(mailOptions, (error, info) => {
            if (error) {
                console.error("Email sending failed:", error);
                return res.status(500).send("User registered but email not sent.");
            }
            console.log("Email sent:", info.response);
        });

        res.send("User saved and email sent successfully.");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("An error occurred.");
    }
});

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
