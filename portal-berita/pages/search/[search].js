import React, { Fragment } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import Link from 'next/link'
import Moment from 'react-moment'
import Layout from '../../components/Layout'
import fetch from 'isomorphic-unfetch'

const SearchPage = (props) => {

    const { item } = props

    if (item.length) {
        return (
            <Fragment>
                <Layout>
                    <Grid container spacing={3} style={{ marginTop: '50px' }}>
                        <Grid item xs={12} sm={7}>
                            <div className="textMobile" style={{ marginTop: '10px', display: 'flex', alignItems: 'center' }}>
                                <h2 style={{ marginBottom: '0px', fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#293462', lineHeight: '10px' }}>HASIL PENCARIAN <p style={{ fontSize: '24px', color: '#EC9B3B', letterSpacing: '0' }}>"{props.url.query.search}"</p></h2>
                            </div>
                            {item.length ? (
                                <Fragment>
                                    <Grid container spacing={3}>
                                        {item.map(data => {
                                            return (
                                                <Fragment key={data.id}>
                                                    <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="gMobile">
                                                        <Box className="boxMobile" style={{ backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }}>
                                                            <img src={data.acf.gambar} alt={data.title.rendered} style={{ objectFit: 'cover', backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }} />
                                                        </Box>
                                                    </Grid>
                                                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                                        <Link href={`/berita/${data.slug}`}>
                                                            <h2 style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal', color: '#293462' }}>{data.title.rendered}</h2>
                                                        </Link>
                                                        <h2 style={{ fontWeight: '600', fontSize: '12px', color: '#808080', textTransform: 'uppercase' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                                                        <div style={{ fontFamily: 'Roboto', fontSize: '14px', height: '50px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                                        {data.acf.tag.map(item => {
                                                            return (
                                                                <Fragment key={item}>
                                                                    <Link href={`/tags/${item}`}><button style={{ width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', marginTop: '5px' }}>{item}</button></Link>
                                                                </Fragment>
                                                            )
                                                        })}
                                                    </Grid>
                                                    <hr style={{ height: '1px', width: '100%', border: 'none', backgroundColor: '#C4C4C4' }} />
                                                </Fragment>
                                            )
                                        })}
                                    </Grid>
                                </Fragment>
                            ) : (
                                    <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                                        <CircularProgress />
                                    </div>
                                )}


                        </Grid>
                        <Grid item xs={12} sm={5}>
                            <Box style={{ backgroundColor: 'grey', height: '100%', marginTop: '30px' }}></Box>
                        </Grid>
                    </Grid>
                    <br />
                    <br />
                    <br />
                </Layout>
            </Fragment>
        )
    } return (
        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
            <CircularProgress />
        </div>
    )
}

SearchPage.getInitialProps = async function (context) {
    const res = await fetch(`https://admin.eksposesulsel.com/wp-json/wp/v2/berita?search=${context.query.search}`);
    const data = await res.json();

    return {
        item: data
    };
};

export default SearchPage