import React, { useState } from 'react';
import { Toolbar, Dialog } from '@material-ui/core';
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
import Search from './Search';

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const toogleOpen = () => {
        setOpen(!open)
    }

    return (
        <div className="navigation">
            <Dialog
            open={open}
            onClose={toogleOpen}
            fullwidth={true}
            maxWidth="xl" >
                <div style={{ overflow:'hidden', width: '700px', zIndex: '15', height: '50px' }} >
                    <Search/>
                </div>
            </Dialog>
            <Toolbar className='tags' style={{ padding: '0' }}>
                <Link href='/tags/Daerah' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>DAERAH</h4>
                </Link>
                <Link href='/tags/Ekobis' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>EKOBIS</h4>
                </Link>
                <Link href='/tags/HukumKriminal' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>HUKUM KRIMINAL</h4>
                </Link>
                <Link href='/tags/Nasional' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>NASIONAL</h4>
                </Link>
                <Link href='/tags/Peristiwa' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>PERISTIWA</h4>
                </Link>
                <Link href='/tags/Politik' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>POLITIK</h4>
                </Link>
                <Link href='/tags/Ragam' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>RAGAM</h4>
                </Link>
                <Link href='/tags/Sport' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>SPORT</h4>
                </Link>
                <Link href='/tags/Teknologi' >
                    <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white' }}>TEKNOLOGI</h4>
                </Link>
                <MdSearch style={{ color: 'white', cursor: 'pointer', fontSize:'20px' }} onClick={toogleOpen}/>
            </Toolbar>
        </div>
    );
}

export default Navigation;