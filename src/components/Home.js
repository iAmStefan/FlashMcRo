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
                        <p alt="flash-mc minecraft ip" title="flash-mc minecraft ip" className="ip text-center">FlashMcRo.serv.nu</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div className="announce">
                        <p alt="flash-mc minecraft donation" title="flash-mc minecraft donation" className="text-center">Donațiile se fac pe discord la <span className="discordID">FlashMcRo#4211</span>. Dacă vei cumpăra un grad sperăm să îl folosești corespunzător.</p>                    
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                    <div class="title" alt="flash-mc payment methods" title="flash-mc payment methods">Metode de plată</div>
                    <div className="divider text-center"></div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={paysafe} className="img-responsive text-center" alt="flash-mc paysafe payment" title="flash-mc paysafe payment"/>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={paypal} className="img-responsive" alt="flash-mc paypal payment" title="flash-mc paypal payment"/>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={masterCard} className="img-responsive" alt="flash-mc master card payment" title="flash-mc master card payment"/>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-6 col-lg-6 col-xl-3 col-xxl-3">
                    <div className="paymentMethods">
                        <img src={visaCard} className="img-responsive" alt="flash-mc visa card payment" title="flash-mc visa card payment"/>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xxl-12">
                    <div className="title text-center" alt="flash-mc minecraft rank list" title="flash-mc minecraft rank list">Listă cu grade</div>
                    <div className="divider text-center"></div>
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">
                        <p alt="flash-mc Flyer rank" title="flash-mc flyer rank" className="flyer text-center">Flyer - 1€</p>
                        <p alt="flash-mc MVP rank" title="flash-mc MVP rank" className="mvp text-center">MVP - 2€</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">
                        <p alt="flash-mc MVP+ rank" title="flash-mc MVP+ rank" className="mvpPlus text-center">M.V.P+ - 3.5€</p>
                        <p alt="flash-mc VIP rank" title="flash-mc VIP rank" className="vip text-center">V.I.P - 4€ </p>
                    </div>
                </div>
                
                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">
                        <p alt="flash-mc VIP+ rank" title="flash-mc VIP+ rank" className="vipPlus text-center">V.I.P+ - 5€</p>
                        <p alt="flash-mc Helper rank" title="flash-mc Helper rank" className="helper text-center">Helper - 7€ / Cerere</p>
                    </div>
                </div>

                <div className="col-xs-12 col-sm-3 col-md-3 col-lg-3 col-xl-3 col-xxl-3">
                    <div className="grade">   
                        <p alt="flash-mc Moderator rank" title="flash-mc Moderator rank" className="moderator text-center">Moderator - 10€</p>
                        <p alt="flash-mc Operator rank" title="flash-mc Operator rank" className="operator text-center">Operator - 13€</p>
                    </div>
                </div>
            </div>
            <Footer/>
        </motion.div>
      )
    }
  
  export default Home