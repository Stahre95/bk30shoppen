import React, { useState }from 'react'
import { Link } from 'react-router-dom'
import { AppBar, Toolbar, IconButton, Badge, Typography } from '@material-ui/core'
import { ShoppingCart } from '@material-ui/icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faWindowClose } from '@fortawesome/free-solid-svg-icons'


import media from '../../assets/js/import'
import "../Navbar/style.css"

function Navbar({totalItemsInCart}) {
    const [menuClicked, setMenuClicked] = useState(false);

    const menuActive = () => {
        if(menuClicked) {
            return (
                <div className="navigation-menu-faclose">
                    <FontAwesomeIcon icon={faWindowClose} size="2x"/>
                </div>
            )
        }else {
            return (
                <div className="navigation-menu-fabars">
                    <FontAwesomeIcon icon={faBars} size="2x"/>
                </div>
            )
        }
    }

    const handleClick = () => {
        setMenuClicked(!menuClicked)
    }

    return (
        <>
            <div className="navMain">
                <AppBar position='fixed' className='appBar' color='inherit'>
                    <Toolbar className='toolbar'>
                        <Typography variant='h6' className='title' color='inherit'>
                            <Link to="/">
                                <img src={media.navbar.homeLogo} alt="BK Shoppen" className='homeLogo' />
                            </Link>
                            <Link to="/" className="homeText">
                                BK Shopen
                            </Link>
                        </Typography>
                        <div className="navigation-menu-icon" onClick={handleClick}>
                            {menuActive()}
                        </div>
                        <div className={menuClicked ? "navigation-menu-open" : "navigation-menu"}>
                            <Link to="/klader" className="linkItems" onClick={handleClick}>
                                KLÄDER
                            </Link>
                            <Link to="/souvenir" className="linkItems" onClick={handleClick}>
                                SOUVENIR
                            </Link>
                            <Link to="/ovrigt" className="linkItems" onClick={handleClick}>
                                ÖVRIGT
                            </Link>
                            {/* <Link to="/kontakta-oss" className="linkItems">
                                KONTAKTA OSS
                            </Link> */}
                        </div>
                        <IconButton aria-label='Show cart items' color="inherit">
                                <Badge badgeContent={totalItemsInCart} color="secondary">
                                    <Link to="/varukorg">
                                        <ShoppingCart className='shoppingcart' />
                                    </Link>
                                </Badge>
                            </IconButton>
                    </Toolbar>
                </AppBar>
            </div>
        </>
    )
}

export default Navbar