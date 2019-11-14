import React, { useState, Fragment } from 'react';
import { Toolbar, Dialog } from '@material-ui/core';
import Link from 'next/link'
import { MdSearch } from 'react-icons/md'
import Search from './Search';

const Navigation = () => {
    const [open, setOpen] = useState(false)
    const [tags] = useState([
        "Daerah",
        "Ekobis",
        "Hukum Kriminal",
        "Nasional",
        "Peristiwa",
        "Politik",
        "Ragam",
        "Sport",
        "Teknologi"
    ])

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
                <div style={{ overflow: 'hidden', width: '700px', zIndex: '15', height: '50px' }} >
                    <Search />
                </div>
            </Dialog>
            <Toolbar className='tags' style={{ padding: '0' }}>
                {tags.map((tag, index) => {
                    return (
                        <Fragment key={index}>
                            <Link href={`/tags/${tag}`} >
                                <h4 style={{ marginRight: '20px', fontSize: '12px', color: 'white', textTransform: 'uppercase', cursor: 'pointer' }}>{tag}</h4>
                            </Link>
                        </Fragment>
                    )
                })}
                <MdSearch style={{ color: 'white', cursor: 'pointer', fontSize: '20px' }} onClick={toogleOpen} />
            </Toolbar>
        </div>
    );
}

export default Navigation;