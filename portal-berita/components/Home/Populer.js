import React, { Fragment, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import Link from 'next/link'
import { BeritaContext } from '../Store/BeritaContext';
import Moment from 'react-moment'


const Populer = () => {
    const { berita } = useContext(BeritaContext)
    return (
        <Fragment>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <h2 style={{ marginRight: '15px', fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#293462' }}>POPULER</h2>
                <div style={{ width: '100%', height: '3px', backgroundColor: '#293462' }}></div>
            </div>
            {berita.length ? (
                <Fragment>
                    <div>
                        <Grid container spacing={3}>
                            {berita.slice(0, 3).map(data => {
                                return (
                                    <Grid key={data.id} item xs={12} sm={4} md={4} lg={4} xl={4}>
                                        <Link href={`/berita/${data.slug}`} >
                                            <Box style={{ height: '215px', borderRadius: '6px', backgroundColor: 'grey' }}>
                                                <img src={data.acf.gambar} alt={data.title.rendered} style={{ height: '215px', width: '100%', borderRadius: '6px', objectFit: 'cover' }} />
                                            </Box>
                                            <h2 className="title-hover" style={{ marginTop: '10px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal', color: '#293462' }}>{data.title.rendered}</h2>
                                        </Link>
                                        <h2 style={{ fontWeight: '500', fontSize: '12px', color: '#808080', textTransform: 'uppercase' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                                        <div style={{}}>
                                            <div style={{ fontFamily: 'Roboto', fontSize: '14px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                        </div>
                                        <div style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
                                        {data.acf.tag.map(item => {
                                            return (
                                                <Fragment key={item}>
                                                    <Link href={`/tags/${item}`} ><button style={{ width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', marginTop: '5px' }}>{item}</button></Link>
                                                </Fragment>
                                            )
                                        })}
                                        </div>
                                    </Grid>
                                )
                            })}
                        </Grid>
                    </div>
                </Fragment>
            ) : (
                    <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                        <CircularProgress />
                    </div>
                )}

        </Fragment>
    );
}

export default Populer;