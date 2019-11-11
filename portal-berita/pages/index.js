import React, { useEffect, useState, createContext, Fragment } from 'react';
import Axios from 'axios'
import News from '../components/Home/News'
import Terbaru from '../components/Home/Terbaru'
import BeritaContextProvider, { BeritaContext } from '../components/Store/BeritaContext';
import { CircularProgress } from '@material-ui/core';
import { Helmet } from "react-helmet";
import Navbar from '../components/Home/Navbar'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../static/index.css'
import Head from 'next/head';
import Layout from '../components/Layout';


const Home = () => {
    const [berita, setBerita] = useState([])

    useEffect(() => {
        Axios.get('https://admin.eksposesulsel.com/wp-json/wp/v2/berita')
            .then(res => setBerita(res.data))
            .catch(err => console.log(err))
    }, [])
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
        <BeritaContextProvider>
            <Head>
                <title>Ekspose Sulsel</title>
                <meta name="description" content="Portal Berita Sulawesi Selatan Terpercaya dan Menarik" />
                <link rel="canonical" href="https://eksposesulsel.com" />
            </Head>
            <Layout>
                {berita.length ? (
                    <Fragment>
                        <News />
                        {/* <Populer /> */}
                        <Terbaru />
                    </Fragment>
                ) : (
                        <div style={{ width: '100%', height: '100vh', display: 'flex', justifyContent: 'center', alignItems: 'center', zIndex: '1000000' }}>
                            <CircularProgress />
                        </div>
                    )}
            </Layout>
        </BeritaContextProvider>
    );
}

export default Home;