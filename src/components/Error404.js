import React, {Component} from 'react'
import { Route, NavLink } from 'react-router-dom';
import { motion } from 'framer-motion'
import {Helmet} from "react-helmet";
import Footer from './Footer'
import './css/404.css'

const errorVariants = {
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

class Error404 extends React.Component {

    render() {
        return ( 
            <motion.div className="container-fluid" variants={errorVariants} initial="hidden" animate="visible" exit="exit">
                <Helmet>
                    <title>FlashMc | 404</title>
                </Helmet>
                <div className="row">
                    <div className="col-xs-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="error text-center" alt="flash-mc error 404" title="flash-mc error 404">
                            <p alt="flash-mc page not found" title="flash-mc page not found">Pagina căutată nu a fost găsită!</p>
                            <p alt="flash-mc home page redirect" title="flash-mc hone page redirect">Pagina principală este <NavLink exact to="/" className="redirect">aici</NavLink>.</p>
                        </div>
                    </div>
                </div>
                <Footer/>
            </motion.div>
        );
    }

}

export default Error404;