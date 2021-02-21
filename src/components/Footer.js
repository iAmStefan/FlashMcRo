import React, {Component} from 'react'
import { Route, NavLink } from 'react-router-dom';
import './css/Footer.css'


class Footer extends React.Component {

    render() {
        return ( 
            <footer className="text-center no-padding">
                <i class="fa fa-instagram"></i>
                <i class="fa fa-facebook-f"></i>
            </footer>
        );
    }

}

export default Footer;