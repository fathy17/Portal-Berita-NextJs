import React, { Fragment, useEffect, useState, useContext } from 'react';
import { Grid, Box, CircularProgress } from '@material-ui/core';
import { FacebookShareButton, TwitterShareButton, WhatsappShareButton, FacebookIcon, TwitterIcon, WhatsappIcon } from 'react-share'
import Link from 'next/link'
import Axios from 'axios'
import { BeritaContext } from '../../components/Store/BeritaContext';
import Moment from 'react-moment'
import { Helmet } from "react-helmet";
import Navbar from '../../components/Home/Navbar'
import fetch from 'isomorphic-unfetch'
import Layout from '../../components/Layout';
import '../../static/index.css'


const NewsDetail = (props) => {
    // const { berita } = useContext(BeritaContext)

    // const [detail, setDetail] = useState([])
    // useEffect(() => {
    //     Axios.get(`https://admin.eksposesulsel.com/wp-json/wp/v2/berita?slug=${props.match.params.id}`)
    //         .then(res => setDetail(res.data))
    //         .catch(err => console.log(err))
    //     window.scrollTo(0, 0)
    // }, [props.match.params.id])
    const [terbaru, setTerbaru] = useState([])

    useEffect(() => {
        Axios.get('https://admin.eksposesulsel.com/wp-json/wp/v2/berita')
            .then(res => setTerbaru(res.data))
            .catch(err => console.log(err))
        window.scrollTo(0, 0)
    }, [])

    console.log(props, terbaru)
    return (
        <Fragment>
            <Layout>
                {props.berita.length ? (
                    <Fragment>
                        <div style={{ marginTop: '80px' }} >
                            <Grid container >
                                <Grid item xs={12} sm={12} md={8} style={{ paddingRight: '100px' }} className="gridMobile">
                                    <img className="detailGambar" src={props.berita[0].acf.gambar} alt={props.berita[0].slug} style={{
                                        objectFit: 'cover',
                                        backgroundPosition: 'center',
                                        backgroundSize: 'cover',
                                        backgroundRepeat: 'no-repeat', backgroundColor: 'grey', width: '100%', height: '380px'
                                    }} />
                                    <h1 style={{ fontSize: '30px', fontWeight: 'bold', lineHeight: '37px', color: '#293462' }}>{props.berita[0].title.rendered}</h1>
                                    <h5 style={{ textTransform: 'uppercase', fontSize: '10px', fontWeight: '600', color: '#808080' }}>{props.berita[0].acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{props.berita[0].date}</Moment></h5>
                                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                        {props.berita[0].acf.tag.map(item => {
                                            return (
                                                <Fragment key={item}>
                                                    <Link href={`/tags/${item}`}><button style={{ marginBottom: '4px', width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px' }}>{item}</button></Link>
                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                    <div style={{ marginTop: '30px', fontSize: '16px', fontFamily: 'Hind', lineHeight: '25px' }} dangerouslySetInnerHTML={{ __html: props.berita[0].content.rendered }} />
                                    <hr style={{ height: '1px', width: '100%', border: 'none', backgroundColor: '#C4C4C4' }} />
                                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '170px' }}>
                                        <h3 style={{ fontSize: '14px', fontWeight: '600', color: '#293462' }}>BAGIKAN</h3>
                                        <FacebookShareButton style={{ pointer: 'cursor' }} url={`https://eksposesulsel.com${props.url.asPath}`}>
                                            <FacebookIcon size={28} />
                                        </FacebookShareButton>
                                        <TwitterShareButton style={{ pointer: 'cursor' }} url={`https://eksposesulsel.com${props.url.asPath}`}>
                                            <TwitterIcon size={28} />
                                        </TwitterShareButton>
                                        <WhatsappShareButton style={{ pointer: 'cursor' }} url={`https://eksposesulsel.com${props.url.asPath}`}>
                                            <WhatsappIcon size={28} />
                                        </WhatsappShareButton>
                                    </div>
                                </Grid>
                                <Grid item xs={12} sm={12} md={4}>
                                    <div className="terbaru-detail" style={{ borderRadius: '6px', height: '35px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', backgroundColor: '#293462' }}>
                                        <h2 style={{ fontWeight: 'bold', fontSize: '24px', letterSpacing: '0.1em', margin: 'auto', color: '#FFF' }}>TERBARU</h2>
                                    </div>
                                    {terbaru.slice(0, 5).map(data => {
                                        return (
                                            <div key={data.id} style={{ paddingBottom: '10px' }}>
                                                <Link href={`/berita/${data.slug}`}>
                                                    <div>
                                                        <Box style={{ backgroundColor: 'grey', height: '240px', borderRadius: '6px' }}>
                                                            <img src={data.acf.gambar} alt={data.title.rendered} style={{ height: '240px', width: '100%', borderRadius: '6px', objectFit: 'cover' }} />
                                                        </Box>
                                                        <h3 style={{ fontWeight: '600', fontSize: '18px', lineHeight: '20px', color: '#293462' }}>{data.title.rendered}</h3>
                                                    </div>
                                                </Link>
                                            </div>
                                        )
                                    })}
                                </Grid>
                            </Grid>
                        </div>
                    </Fragment>
                ) : (
                        <Fragment>
                            <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                                <CircularProgress />
                            </div>
                        </Fragment>
                    )}
            </Layout>
        </Fragment>
    );
}

NewsDetail.getInitialProps = async function (context) {
    const res = await fetch(`https://admin.eksposesulsel.com/wp-json/wp/v2/berita?slug=${context.query.pid}`);
    const data = await res.json();

    return {
        berita: data
    };
};

export default NewsDetail;