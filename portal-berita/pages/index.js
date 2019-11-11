import React, { useEffect, useState, createContext, Fragment} from 'react';
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


const Home = () => {
    const [berita, setBerita] = useState([])

    useEffect(() => {
        Axios.get('https://admin.eksposesulsel.com/wp-json/wp/v2/berita')
        .then(res => setBerita(res.data))
        .catch(err => console.log(err))
    },[])
    useEffect(() => {
        window.scrollTo(0, 0)
    });

    return (
            <BeritaContextProvider>
                <Helmet>
                    <title>Ekspose Sulsel</title>
                    <link rel="canonical" href="https://eksposesulsel.com/" />
                    <meta name="description" content="Portal Berita Sulawesi Selatan" />
                    <meta name="keywords" content="Portal Berita Sulawesi Selatan" />
                </Helmet>
                <Navbar />
                <div className="margin">
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
                </div>
            </BeritaContextProvider>
    );
}

export default Home;