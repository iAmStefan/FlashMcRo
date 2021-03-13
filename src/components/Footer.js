import React, {Component} from 'react'
import { Route, NavLink } from 'react-router-dom';
import './css/Footer.css'


class Footer extends React.Component {

    render() {
        return ( 
            <footer className="text-center no-padding">
                <a href="https://www.instagram.com/hardalex_yt/" target="_blank" alt="flash-mc instagram link" title="flash-mc instagram link"><i class="fa fa-instagram"></i></a>
                <a href="https://www.facebook.com/alex.covrig.9889" target="_blank" alt="flash-mc facebook link" title="flash-mc facebook link"><i class="fa fa-facebook-f"></i></a>
            </footer>
        );
    }

}

export default Footer;