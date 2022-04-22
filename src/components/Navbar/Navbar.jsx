import React from 'react'
import { BrowserRouter as Router, NavLink, } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { Shop, ShoppingCart } from '@material-ui/icons';

import media from '../../assets/js/import'
import "../Navbar/style.css"

function Navbar() {
    return (
        <>
            <AppBar position='fixed' className='appBar' color='inherit'>
                <Toolbar className='toolbar'>
                    <Typography variant='h6' className='title' color='inherit'>
                        <Router>
                                <NavLink to="/" >
                                    <img src={media.navbar.homeLogo} alt="BK Shoppen" height="50px" />
                                </NavLink>
                        </Router>
                    </Typography>
                    <div className="grow" />
                    <div className="right">
                        <Router className="navMain">
                            <NavLink to="/klader" className="linkItems">
                                    KLÄDER
                                </NavLink>
                                <NavLink to="/souvenir" className="linkItems">
                                    SOUVENIR
                                </NavLink>
                                <NavLink to="/ovrigt" className="linkItems">
                                    ÖVRIGT
                                </NavLink>
                                <NavLink to="/kontakta-oss" className="linkItems">
                                    KONTAKTA OSS
                                </NavLink>
                        </Router>
                        <IconButton aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart className='shoppingcart'/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
        </>
    )
}

export default Navbar