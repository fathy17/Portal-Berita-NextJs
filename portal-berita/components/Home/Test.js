import React from 'react';
import Link from 'next/link'
import { Grid, Box } from '@material-ui/core';
import Moment from 'react-moment'

const Test = ({ data }) => {
    return (
            <Link href={`/berita/${data.slug}`} >
                <Box className="hover" style={{
                    position: 'relative',
                    height: '500px', borderRadius: '6px',
                    objectFit: 'cover',
                    backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                    backgroundPosition: 'center',
                    backgroundSize: 'cover',
                    backgroundRepeat: 'no-repeat',
                    cursor: 'pointer'
                    
                }}>
                    <img src={data.acf.gambar} alt={data.title.rendered} style={{
                        position: 'relative',
                        backgroundColor: 'grey', height: '500px', borderRadius: '6px',
                        width: '100%',
                        objectFit: 'cover',
                        backgroundPosition: 'center',
                        backgroundSize: 'cover',
                        backgroundRepeat: 'no-repeat',
                        zIndex: '-1'
                    }} />
                    <div style={{
                        position: 'absolute',
                        bottom: '5%',
                        left: '5%',
                        color: 'white',
                        width: '80%'
                    }}>
                        <h2 className="titleMobile" style={{ fontWeight: 'bold', fontSize: '30px', lineHeight: '35px', marginBottom: '10px' }} >{data.title.rendered}</h2>
                        <h2 style={{ fontWeight: '500', textTransform: 'uppercase', fontSize: '12px' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                    </div>
                </Box>
            </Link>
    );
}

export default Test;