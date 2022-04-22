import React from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core'
import { Shop, ShoppingCart } from '@material-ui/icons';

import media from '../../assets/js/import'
import "../Navbar/style.css"

function Navbar() {
    return (
        <>
           <div className="navMain">
           <AppBar position='fixed' className='appBar' color='inherit'>
                <Toolbar className='toolbar'>
                    <Typography variant='h6' className='title' color='inherit'>
                                <Link to="/" >
                                    <img src={media.navbar.homeLogo} alt="BK Shoppen" height="50px" />
                                </Link>
                    </Typography>
                    <div className="grow" />
                    <div className="right">
                            <Link to="/klader" className="linkItems" >
                                    KLÄDER
                                </Link>
                                <Link to="/souvenir" className="linkItems">
                                    SOUVENIR
                                </Link>
                                <Link to="/ovrigt" className="linkItems">
                                    ÖVRIGT
                                </Link>
                                <Link to="/kontakta-oss" className="linkItems">
                                    KONTAKTA OSS
                                </Link>
                                <Link to="/admin" />
                        <IconButton aria-label='Show cart items' color="inherit">
                            <Badge badgeContent={2} color="secondary">
                                <ShoppingCart className='shoppingcart'/>
                            </Badge>
                        </IconButton>
                    </div>
                </Toolbar>
            </AppBar>
    </div>
        </>
    )
}

export default Navbar