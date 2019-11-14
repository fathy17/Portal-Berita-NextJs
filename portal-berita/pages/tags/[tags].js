import React, { Fragment } from 'react';
import { Grid, Box } from '@material-ui/core';
import Tags from '../../components/Tags/Tags';
import Layout from '../../components/Layout';
import Head from 'next/head';
import fetch from 'isomorphic-unfetch'

const Daerah = (props) => {
    return (
        <Fragment>
            <Head>
                <title>{`Ekspose Sulsel - ${props.url.query.tags}`}</title>
            </Head>
                <Layout>
                    <div style={{ marginTop: '80px' }}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                                    <h2 style={{ margin: '0 15px 0 0', fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#293462', textTransform:'uppercase' }}>{props.url.query.tags}</h2>
                                    <div style={{ width: '100%', height: '3px', backgroundColor: '#293462' }}></div>
                                </div>
                                <Grid container spacing={3}>
                                    <Tags tags={props.url.query.tags} berita={props.berita} />
                                </Grid>
                            </Grid>
                            <Grid item xs={12} sm={12} md={5} lg={5} xl={5}>
                                <Box style={{ height: '100%', marginTop: '10px', border: '1px solid grey', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                    <h3>SPACE IKLAN</h3>
                                </Box>
                            </Grid>
                        </Grid>
                        <br />
                        <br />
                    </div>
                </Layout>
        </Fragment>
    );
}

Daerah.getInitialProps = async function () {
    const res = await fetch(`https://admin.eksposesulsel.com/wp-json/wp/v2/berita`);
    const data = await res.json();

    return {
        berita: data
    };
};

export default Daerah