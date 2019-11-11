import React, { useContext, Fragment } from 'react';
import { Grid, CircularProgress, Box } from '@material-ui/core';
import { BeritaContext } from '../Store/BeritaContext'
import Test from './Test';
import Slider from 'react-slick'
import Link from 'next/link'
import Moment from 'react-moment'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const News = () => {

    const { berita } = useContext(BeritaContext)
    var settings = {
        dots: true,
        autoplay: true,
        pauseOnHover: false,
        autoplaySpeed: 6000,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
    }

    return (
        <div>
            {berita.length ? (
                <Fragment>
                    <Grid container spacing={1}>
                        <Grid item xs={12} md={8}>
                            <div style={{ marginTop: '80px', width:'100%' }}>
                                <Slider {...settings}>
                                    {berita.slice(0, 6).map(data => {
                                        return (
                                            <Test key={data.id} data={data} />
                                        )
                                    })}
                                </Slider>
                            </div>
                        </Grid>
                        <Grid item xs={12} md={4}>
                            <div className="populerMobile" style={{marginTop:'80px', height:'500px'}}>
                    {berita.slice(0,3).map(berita=>{
                        return(
                            <Link href={`/berita/${berita.slug}`} key={berita.id}>
                            <Box className="hover" style={{
                                position: 'relative',
                                borderRadius: '6px',
                                objectFit: 'cover',
                                height:'calc(484px/3)',
                                backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))',
                                backgroundPosition: 'center',
                                backgroundSize: 'cover',
                                backgroundRepeat: 'no-repeat',
                                marginBottom:'8px'
                            }}>
                                <img src={berita.acf.gambar} alt={berita.title.rendered} style={{
                                    position: 'relative',
                                    backgroundColor: 'grey', borderRadius: '6px',
                                    width: '100%',
                                    height:'calc(484px/3)',
                                    objectFit: 'cover',
                                    backgroundPosition: 'center',
                                    backgroundSize: 'cover',
                                    backgroundRepeat: 'no-repeat',
                                    zIndex: '-1'
                                }} />
                                <div style={{
                                    position: 'absolute',
                                    textAlign: 'center',
                                    transform: 'translate(-50%, -50%)',                               
                                    top: '50%',
                                    left: '50%',
                                    color: 'white',
                                    width: '80%',                        
                                }}>
                                    <h2 style={{ fontWeight: 'bold', fontSize: '16px', lineHeight: '18px', marginBottom: '5px' }} >{berita.title.rendered}</h2>
                                    <h2 style={{ fontWeight: '500', textTransform:'uppercase', fontSize:'10px' }}>{berita.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{berita.date}</Moment></h2>
                                </div>
                            </Box>
                        </Link>
                        )
                    })}
                            </div>
                        </Grid>
                    </Grid>
                </Fragment>
            ) : (
                    <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                        <CircularProgress />
                    </div>
                )}
        </div>
    )

}

export default News; 