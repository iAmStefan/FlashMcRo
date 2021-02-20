import { motion } from 'framer-motion'
import React from 'react'
import voteImage from '../voteImage.png'
import './css/Vote.css'

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
          <div class="row">
            <div className="col-lg-12 no-padding">
              <div class="voteImage">
                <img src={voteImage} alt="" className="img-fluid"/>
                <p alt="flash-mc-ro vote link" title="flash-mc-ro vote link" class="voting text-center">Nu uita sa votezi <a href="https://minecraft-mp.com/server/232896/vote/"><span>aici</span></a> si vei primi un bonus!</p>
              </div>
            </div>
          </div>
        </motion.div>
      )
    }
  }
  
  export default Vote