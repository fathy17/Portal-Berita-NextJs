import React, { Fragment, useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa'
import Link from 'next/link'
import { useScrollTrigger, Slide, makeStyles, SwipeableDrawer, Dialog } from '@material-ui/core';
import Navigation from './Navigation';
import Search from './Search';
import { MdSearch } from 'react-icons/md'
import Logo from '../../static/es-logo-web.png'
import '../../static/index.css'
import { Router } from 'next/router';

function HideOnScroll(props) {
    const { children } = props;
    // Note that you normally won't need to set the window ref as useScrollTrigger
    // will default to window.
    // This is only being set here because the demo is in an iframe.
    const trigger = useScrollTrigger();

    return (
        <Slide appear={false} direction="down" in={!trigger}>
            {children}
        </Slide>
    );
}

const useStyles = makeStyles({
    paper: {
        background: '#293462',
        color: 'white',
        width: '75%'
    }
});

const Navbar = (props) => {
    const [tags] = useState([
        "Daerah", "Ekobis", "Hukum Kriminal", "Nasional", "Peristiwa", "Politik", "Ragam", "Sport", "Teknologi"
    ])

    const [logo, setLogo] = useState("logo")

    const [buka, setBuka] = useState(false)
    const toogleOpen = () => {
        setBuka(!buka)
    }

    useEffect(() => {
        setOpen(false)
    }, [])

    const [open, setOpen] = useState(false)
    const toogleDrawer = () => {
        setOpen(!open)
        setLogo("logo-off")
    }

    const onClose = () => {
        setLogo("logo")
        setOpen(false)
    }
    const styles = useStyles();

    return (
        <Fragment>
            <Dialog
                open={buka}
                onClose={toogleOpen}
                fullwidth={true}
                maxWidth="xl" >
                <div style={{ overflow: 'hidden', width: '700px', zIndex: '15', height: '50px' }} >
                    <Search />
                </div>
            </Dialog>
            <SwipeableDrawer style={{ width: '100%' }} anchor="left" open={open} classes={{ paper: styles.paper }} onClose={onClose} onOpen={toogleDrawer}>
                <div style={{ width: '100%', height: '100%', margin: '20px 0 0 20px' }}>
                    <Link href='/' >
                        <div className="logo nav">
                            <div onClick={onClose} className="logoMobile nav" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                <img src={Logo} alt="Logo" style={{ height: '40px', width: '37px', marginRight: '15px' }} />
                                <h2 style={{ fontSize: '24px', lineHeight: '17px' }}>EKSPOSE SULSEL</h2>
                            </div>
                        </div>
                    </Link>
                    <div style={{ marginTop: '45px', width: '100%' }}>
                        <hr style={{ marginRight: '40px' }} />
                        {tags.map(tag => {
                            return (
                                <Link key={tag} href={`/tags/${tag}`} ><h3 onClick={onClose} style={{ fontSize: '16px' }}>{tag}</h3></Link>
                            )
                        })}
                    </div>
                </div>
            </SwipeableDrawer>
            <HideOnScroll {...props}>
                <div className="containerNav">
                    <div className='ham-icon' onClick={toogleDrawer}>
                        <FaBars style={{ color: 'white' }} />
                    </div>
                    <Link href='/' >
                        <div className={logo}>
                            <div onClick={() => setOpen(false)} className="logoMobile" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                                <img src={Logo} alt="Logo" style={{ height: '40px', width: '37px', marginRight: '15px' }} />
                                <h2 style={{ fontSize: '24px', lineHeight: '17px' }}>EKSPOSE SULSEL</h2>
                            </div>
                        </div>
                    </Link>
                    <div className="searchMobile"><MdSearch style={{ color: 'white', cursor: 'pointer', fontSize: '20px' }} onClick={toogleOpen} /></div>
                    <Navigation />
                </div>
            </HideOnScroll>
        </Fragment>
    );
}

export default Navbar;