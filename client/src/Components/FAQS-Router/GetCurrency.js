import React, { Component } from 'react';
import './style.css'
class GetCurrency extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return ( 
            <div className='Digital__currency'>
                <section className='digital__box1'>
                    <p>
                        <h1><span>CREATING</span> YOUR <span>CRYPTO</span> WALLET/ACCOUNT</h1>
                        It’s very important to manage your bitcoins safely. We assist in buying and selling Cryptocurrencies like Bitcoin, Ethereum, Litecoin, Bitcoin Cash and Digital Currencies like Perfect Money, but you are responsible for managing them yourself. In this article, We will use Bitcoin has the first Cryptocurrency Wallet Your Are creating. With Cryptocurrencies Like Bitcoin: you are your own bank!
                        <br/>
                        You manage your bitcoin/cryptocurrency using a wallet. On this page we’ll explain everything you need to know about wallets.
                    </p> 
                    <p>
                        <h1><span> What’s</span> a bitcoin wallet?</h1>
                        A bitcoin wallet is similar to a digital bank account. Here you can send, receive, and manage your bitcoin. Here’s how it works: you buy bitcoin at Bitcoin4u, they are then sent to your wallet. In your wallet you manage your coins. Would you like to send some bitcoin somewhere else? Then you can choose the option ‘Send’ in your wallet, and enter the receiving address of the recipient. The coins will be sent from your wallet to the recipient’s wallet.
                        <br/>
                        <br/>
                        
                    </p> 
                    <p>
                        <h1><span>Which</span> bitcoin wallet should I choose?</h1>
                        There is a great number of different wallets to choose from. Which wallet you should choose depends on several factors. Have you just started trading in cryptocurrencies, or are you more experienced? Would you like to buy a small amount, or invest a large sum?
                        <br/>
                        <br/>
                        Creating a bitcoin wallet is simple. There are roughly three types of wallets: Mobile Wallets, Software and Hardware Wallets. Mobile and software wallets are often free. Each type has multiple providers, and each wallet has its own characteristics with regard to things like ease of use and security.
                        <br/>
                        <br/>
                        We suggest using blockchain.com for your Bitcoin / Cryptocurrency management. perfectmoney.is for your perfect money account.
                        <br/>
                        <br/>
                        Blockchain.com comes with a Mobile App which you can download from google playstore and apple store. 
                        
                    </p> 
                    <p>
                        <h1>How do I <span>create</span> a bitcoin wallet?</h1>
                        Which wallet suits you best depends on several factors, such as what your buying needs are, and what you would like to use the bitcoins for. When you’ve just started buying bitcoin, an online wallet is the easiest and most user-friendly way to manage them. A much used free wallet is blockchain.com. This wallet also supports other coins. You set up a Blockchain wallet by following these steps:
                        <br/>
                        <br/>
                        <ul>
                            <li><span> Go to</span> the App store (iOS) or Google Play store (Android).</li>
                            <li><span>Search and download Blockchain Wallet.</span> Alternatively your can visit blockchain.com and click wallet to create your account from your device web browser.</li>
                            <li><span> Open the app and Create Account</span>. Enter your email and a password.!</li>
                            <li><span>Set a 4 Digit Wallet Pin Code</span> to always use to unlock and access your blockchain app.</li>
                            <li><span>Verify your email, Mobile Number,</span> and Backup your 12 Words Passphrase and keep in a secure location. If anything happens to your device, You can recover your funds using the 12 Words Passphrase your backed up.</li>
                            <li><span>Verify your email, Mobile Number,</span> and Backup your 12 Words Passphrase and keep in a secure location. If anything happens to your device, You can recover your funds using the 12 Words Passphrase your backed up.</li>
                            
                    </ul>
                    </p> 
                    <p>
                        <h1><span>What’s</span> a bitcoin receiving address?</h1>
                        A receiving address is similar to your bank account number. Each bitcoin wallet has a unique bitcoin receiving address. You can share this bitcoin address with others to let them know how to send coins to your wallet.
                        <br/>
                        <br/>
                        A BTC address is alphanumeric and always starts with a 1 or a 3 or a bc1. This is an example of a receiving address: 3FZbg**********dwV8ey*****kLtktZc5. A common question is how to get a BTC address. Each wallet automatically generates a bitcoin address. If you’ve just created a new wallet, then you have a unique bitcoin address right away. When you enter this address on our order form, we’ll know where to send the coins to.
                        <br/>
                        <br/>
                        A new bitcoin address is not only generated once you’ve created a new wallet, but after each transaction as well. And for a good reason: when your address regularly changes, your privacy on the network is better protected.
                        <br/>
                        <br/>
                        Would you like to use your old bitcoin address again? No problem! Each address on which you’ve previously received bitcoin, can be used again. It doesn’t matter if someone sends coins to your most recent address or to your oldest address- the bitcoins will arrive in the same wallet. In most wallets all generated addresses can be found in the transaction history.
                    </p> 
                    <p>
                        <h1><span>Please</span> note!</h1>
                        For receiving as well as sending bitcoin, always copy and paste the receiving address. This lowers the risk of making a mistake. Don’t write or type the address. All cryptocurrency transactions are irreversible; once the coins have been sent, there’s no way of getting them back.
                        <br/>
                    </p> 
                    <p>
                        <h1>How do I <span>receive</span> or send bitcoin?</h1>
                        When buying or receiving bitcoin, you use the receiving address from your wallet. We can’t emphasise it enough: copy and paste this address, do not write or type it. A bitcoin receiving address is similar to your personal bank account number on which you receive your bitcoin. But where do you find your bitcoin receiving address?
                        <br/>
                    </p> 
                    <p>
                        <h1>The receiving <span>address</span></h1>
                        First, log into your wallet. In most wallets, the receiving address can be found under the button ‘Receive’. There are wallets in which a bitcoin receiving address will automatically change once it has been used for a transaction. This is in consideration of your privacy. But don’t worry: ‘old’ receiving addresses will always stay valid and linked to your wallet.
                        <br/>
                    </p> 
                   
                </section>
                <section className='hlogo'>
                <div className='logoImg animate__animated animate__slower animate__flash'>
                         <h1> <i class="fab fa-bitcoin fa-3x"></i><span className='h1_bitcoin4u'>Bitcoin4u</span></h1>
                       </div>
                </section>
            </div>  
         );
    }
}
 
export default GetCurrency;