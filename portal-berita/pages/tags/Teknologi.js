import React, { Fragment, useContext } from 'react';
import { Grid, Box } from '@material-ui/core';
import Navbar from '../../components/Home/Navbar'
import { TagsContext } from '../../components/Store/TagsContext'

const Teknologi = () => {
    const { berita } = useContext(TagsContext)
    const tag = "Teknologi"
    let data = berita.filter(item => item.acf.tag[0] === tag || item.acf.tag[1] === tag
        || item.acf.tag[2] === tag || item.acf.tag[3] === tag || item.acf.tag[4] === tag
        || item.acf.tag[5] === tag || item.acf.tag[6] === tag || item.acf.tag[7] === tag
        || item.acf.tag[8] === tag)

    return (
        <Fragment>
            <Navbar />
            <div className="margin" style={{ marginTop: '80px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                            <h2 style={{ margin: '0 15px 0 0', fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#293462' }}>TEKNOLOGI</h2>
                            <div style={{ width: '100%', height: '3px', backgroundColor: '#293462' }}></div>
                        </div>
                        <Grid container spacing={3}>
                        <Tags data={data}/>
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
        </Fragment>
    );
}

export default Teknologi