import React, { useEffect, useState, createContext, Fragment } from 'react';
import Axios from 'axios'
import News from '../components/Home/News'
import Terbaru from '../components/Home/Terbaru'
import BeritaContextProvider, { BeritaContext } from '../components/Store/BeritaContext';
import { CircularProgress } from '@material-ui/core';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '../static/index.css'
import Head from 'next/head';
import Layout from '../components/Layout';
import fetch from 'isomorphic-unfetch'


const Home = (props) => {

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
                <News berita={props.berita} />
                <Terbaru />
            </Layout>
        </BeritaContextProvider>
    );
}

Home.getInitialProps = async function () {
    const res = await fetch(`https://admin.eksposesulsel.com/wp-json/wp/v2/berita`);
    const data = await res.json();

    return {
        berita: data
    };
};

export default Home;