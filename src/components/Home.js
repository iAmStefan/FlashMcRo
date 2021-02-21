import { motion } from 'framer-motion'
import React from 'react'
import './css/Home.css'
import Footer from './Footer'
import homePage from '../indexImage.jpg'
import paysafe from '../paysafeCard.png'
import paypal from '../paypal.png'
import masterCard from '../masterCard.png'
import visaCard from '../visaCard.png'
import {Helmet} from "react-helmet";

const homeVariants = {
    hidden: {
        opacity: 0,
    },
    visible: {
        opacity: 1,
    },
    exit: {
        x: '-100vw',
        transition: { ease: 'easeInOut' }
    }
}

const Home = () => {
    return (
        <motion.div className="container-fluid" variants={homeVariants} initial="hidden" animate="visible" exit="exit">          
            <Helmet>
                <title>FlashMc | Acasa</title>
            </Helmet>
            <br/>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 no-padding">
                    <div className="imagineServer">
                        <img src={homePage} alt="" className="img-fluid" />
                        <p alt="flash-mc-ro ip" title="flash-mc-ro ip" className="ip text-center">FlashMcRo.serv.nu</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="announce">
                        <p className="text-center">Donațiile se fac pe discord la <span className="discordID">FlashMcRo#4211</span>. Dacă vei cumpăra un grad sperăm să îl folosești corespunzător.</p>                    
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="title">Metode de plată</div>
                    <div className="divider text-center"></div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={paysafe} className="img-responsive text-center"/>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={paypal} className="img-responsive"/>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={masterCard} className="img-responsive"/>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={visaCard} className="img-responsive"/>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                    <div className="title text-center">Listă cu grade</div>
                    <div className="divider text-center"></div>
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">
                        <p alt="flash-mc-ro flyer rank" title="flash-mc-ro flyer rank" className="flyer text-center">Flyer - 2€</p>
                        <p alt="flash-mc-ro elite rank" title="flash-mc-ro elite rank" className="elite text-center">Elite - 5€</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">
                        <p alt="flash-mc-ro MVP rank" title="flash-mc-ro MVP rank" className="mvp text-center">M.V.P - 10€</p>
                        <p alt="flash-mc-ro MVP+ rank" title="flash-mc-ro MVP+ rank" className="mvpPlus text-center">M.V.P+ - 15€ </p>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">
                        <p alt="flash-mc-ro VIP rank" title="flash-mc-ro VIP rank" className="vip text-center">V.I.P - 20€</p>
                        <p alt="flash-mc-ro VIP+ rank" title="flash-mc-ro VIP+ rank" className="vipPlus text-center">V.I.P+ - 25€</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">   
                        <p alt="flash-mc-ro hero rank" title="flash-mc-ro hero rank" className="hero text-center">Hero - 35€</p>
                        <p alt="flash-mc-ro legend rank" title="flash-mc-ro legend rank" className="legend text-center">Legend - 50€</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </motion.div>
      )
    }
  
  export default Home