import { motion } from 'framer-motion'
import React from 'react'
import './css/Home.css'
import homePage from '../indexImage.jpg'
import paysafe from '../paysafeCard.png'
import paypal from '../paypal.png'
import masterCard from '../masterCard.png'
import visaCard from '../visaCard.png'

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
            <br/>
            <div className="row">
                <div className="col-xs-12 col-sm-12 col-lg-12 no-padding">
                    <div className="imagineServer">
                        <img src={homePage} alt="" className="img-fluid" />
                        <p alt="flash-mc-ro ip" title="flash-mc-ro ip" className="ip text-center">FlashMcRo.serv.nu</p>
                    </div>
                </div>

                <div class="col-xs-12 col-lg-12">
                    <div class="announce">
                        <p class="text-center">Donatiile se fac pe discord la FlashMcRo#4211. Daca vei cumpara un grad speram sa il folosesti corespunzator.</p>                    
                    </div>
                </div>
                
                <div className="col-lg-12">
                    <div class="title">Metode de plata</div>
                    <div className="divider text-center"></div>
                </div>

                <div className="col-lg-3">
                    <div className="paymentMethods">
                        <img src={paysafe} className="img-responsive text-center"/>
                    </div>
                </div>
                
                <div className="col-lg-3">
                    <div className="paymentMethods">
                        <img src={paypal} className="img-responsive"/>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="paymentMethods">
                        <img src={masterCard} className="img-responsive"/>
                    </div>
                </div>

                <div className="col-lg-3">
                    <div className="paymentMethods">
                        <img src={visaCard} className="img-responsive"/>
                    </div>
                </div>

                <div className="col-lg-12">
                    <div className="title text-center">Lista cu grade</div>
                    <div className="divider text-center"></div>
                </div>

                <div class="col-xs-3 col-lg-3">
                    <div class="grade">
                        <p alt="flash-mc-ro flyer rank" title="flash-mc-ro flyer rank" class="flyer text-center">Flyer - 2€</p>
                        <p alt="flash-mc-ro elite rank" title="flash-mc-ro elite rank" class="elite text-center">Elite - 5€</p>
                    </div>
                </div>

                <div class="col-xs-3 col-lg-3">
                    <div class="grade">
                        <p alt="flash-mc-ro MVP rank" title="flash-mc-ro MVP rank" class="mvp text-center">M.V.P - 10€</p>
                        <p alt="flash-mc-ro MVP+ rank" title="flash-mc-ro MVP+ rank" class="mvpPlus text-center">M.V.P+ - 15€ </p>
                    </div>
                </div>
                
                <div class="col-xs-3 col-lg-3">
                    <div class="grade">
                        <p alt="flash-mc-ro VIP rank" title="flash-mc-ro VIP rank" class="vip text-center">V.I.P - 20€</p>
                        <p alt="flash-mc-ro VIP+ rank" title="flash-mc-ro VIP+ rank" class="vipPlus text-center">V.I.P+ - 25€</p>
                    </div>
                </div>

                <div class="col-xs-3 col-lg-3">
                    <div class="grade">   
                        <p alt="flash-mc-ro hero rank" title="flash-mc-ro hero rank" class="hero text-center">Hero - 35€</p>
                        <p alt="flash-mc-ro legend rank" title="flash-mc-ro legend rank" class="legend text-center">Legend - 50€</p>
                    </div>
                </div>
            </div>
        </motion.div>
      )
    }
  
  export default Home