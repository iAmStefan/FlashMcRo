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
                <p alt="flash-mc-ro vote link" title="flash-mc-ro vote link" className="voting text-center">Nu uita să votezi <a href="https://minecraft-mp.com/server/232896/vote/"><span>aici</span></a> și vei primi un bonus!</p>
              </div>
            </div>
          </div>
          <Footer/>
        </motion.div>
      )
    }
  }
  
  export default Vote