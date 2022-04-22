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
                            <nav className='navMain'>
                                <NavLink to="/" >
                                    <img src={media.navbar.homeLogo} alt="BK Shoppen" height="50px" />
                                </NavLink>
                                <NavLink to="/kontakta-oss" className="linkItems">
                                    Kontakta Oss
                                </NavLink>
                            </nav>
                        </Router>
                    </Typography>
                    <div className="grow" />
                    <div className="button">
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