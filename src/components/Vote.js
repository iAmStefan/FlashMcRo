import { motion } from 'framer-motion'
import React from 'react'
import voteImage from '../voteImage.png'
import './css/Vote.css'
import Footer from './Footer'
import {Helmet} from "react-helmet";

const voteVariants = {
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

class Vote extends React.Component {

    render() {
      return (
        <motion.div className="container-fluid" variants={voteVariants} initial="hidden" animate="visible" exit="exit">
          <Helmet>
            <title>FlashMc | Voteaza </title>
          </Helmet>
          <div className="row">
            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12 no-padding">
              <div className="voteImage">
                <img src={voteImage} alt="" className="img-fluid"/>
                <p alt="flash-mc vote link" title="flash-mc vote link" className="voting text-center">Nu uita să votezi <a href="https://minecraft-mp.com/server/232896/vote/"><span>aici</span></a> și vei primi un bonus!</p>
              </div>
            </div>

            <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-23">
              <p className="prizeTitle text-center" alt="flash-mc prize announce" title="flash-mc prize announce">După ce ați votat veți primi</p>
            </div> 
            <div className="prize col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" alt="flash-mc vote prize" title="flash-mc vote prize">
              <p>1x Key Vote</p>
              <p>15.000$</p>
            </div>

            <div className="prize col-xs-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 col-xxl-6" alt="flash-mc vote prize" title="flash-mc vote prize">
              <p>15x Diamond</p>
              <p>15x Emerald</p>
            </div>
          </div>
          <Footer/>
        </motion.div>   
      )
    }
  }
  
  export default Vote