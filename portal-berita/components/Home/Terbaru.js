import React, { Fragment, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { BeritaContext } from '../Store/BeritaContext';
import Link from 'next/link'
import Moment from 'react-moment'
import InfiniteScroll from 'react-infinite-scroll-component'

const Terbaru = () => {

    const { berita, fetchMoreData } = useContext(BeritaContext)
    return (
        <Fragment>
            <Grid className="terbaruMobile" style={{ marginTop:'25px'}} container spacing={3}>
                <Grid item xs={12} sm={8} >
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#293462', height: '35px', marginBottom: '20px', borderRadius: '6px' }}>
                        <h2 style={{ fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#FFF' }}>TERBARU</h2>
                        {/* <div style={{ width: '100%', height: '3px', backgroundColor: '#293462' }}></div> */}
                    </div>
                    {berita.length ? (
                        <Fragment>
                            <InfiniteScroll
                                style={{ overflow: 'hidden' }}
                                dataLength={berita.length}
                                next={fetchMoreData}
                                hasMore={true}
                                endMessage={<div>.</div>}
                                scrollThreshold={0.9}
                            >
                                <Grid container spacing={3}>
                                    {berita.map(data => {
                                        return (
                                            <Fragment key={data.id}>
                                                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="gMobile">
                                                    <Link href={`/berita/${data.slug}`} >
                                                        <Box className="boxMobile" style={{ backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px', cursor: 'pointer' }}>
                                                            <img src={data.acf.gambar} alt={data.title.rendered} style={{ objectFit: 'cover', backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }} />
                                                        </Box>
                                                    </Link>
                                                </Grid>
                                                <Grid item xs={12} sm={12} md={7} lg={7} xl={7} style={{padding: '12px', textAlign: 'start'}}>
                                                    <Link href={`/berita/${data.slug}`} >
                                                        <h2 style={{ cursor: 'pointer', marginTop: '0px', marginBottom: '0px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal', color: '#293462' }}>{data.title.rendered}</h2>
                                                    </Link>
                                                    <h2 style={{ fontWeight: '500', fontSize: '12px', color: '#808080', textTransform: 'uppercase' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                                                    <div>
                                                        <div style={{ fontFamily: 'Hind', fontSize: '14px', height: '50px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                                    </div>
                                                    <div style={{display:'flex', alignItems:'center', flexWrap:'wrap'}}>
                                                    {data.acf.tag.map(item => {
                                                        return (
                                                            <Fragment key={item}>
                                                                <Link href={`/tags/${item}`} ><button style={{ width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', marginTop: '2px' }}>{item}</button></Link>
                                                            </Fragment>
                                                        )
                                                    })}
                                                    </div>
                                                </Grid>
                                                <hr style={{ height: '1px', width: '100%', border: 'none', backgroundColor: '#c4c4c4' }} />
                                            </Fragment>
                                        )
                                    })}

                                </Grid>
                            </InfiniteScroll>
                        </Fragment>
                    ) : (
                            <div style={{ width: '100%', height: '300px', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                                <CircularProgress />
                            </div>
                        )}
                </Grid>
                <Grid item xs={12} sm={4}>
                <div className="iframe" style={{width:'100%', textAlign:'end', marginTop:'0px'}}>
                <iframe title="ekspose sulsel" src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Feksposesulsel&tabs=timeline&width=300&height=500&small_header=false&adapt_container_width=true&hide_cover=false&show_facepile=true&appId" width="300" height="500" style={{border:'none',overflow:'hidden'}}></iframe>
                    </div>
                    {/* <Box style={{ height: '300px', marginTop: '30px', border: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <h3>SPACE IKLAN</h3>
                    </Box> */}
                </Grid>
            </Grid>
            <br />
            <br />
            <br />
        </Fragment>
    );
}

export default Terbaru;