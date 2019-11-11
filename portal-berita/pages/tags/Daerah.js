import React, { Fragment, useContext } from 'react';
import { Grid, Box } from '@material-ui/core';
import Navbar from '../../components/Home/Navbar'
import TagsContextProvider, { TagsContext } from '../../components/Store/TagsContext'
import Tags from '../../components/Tags/Tags';

const Daerah = (props) => {
    console.log(props)
    return (
        <Fragment>
        <TagsContextProvider>
            <Navbar />
            <div className="margin" style={{ marginTop: '80px' }}>
                <Grid container spacing={3}>
                    <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '15px' }}>
                            <h2 style={{ margin: '0 15px 0 0', fontSize: '24px', letterSpacing: '0.1em', fontWeight: 'bold', color: '#293462' }}>DAERAH</h2>
                            <div style={{ width: '100%', height: '3px', backgroundColor: '#293462' }}></div>
                        </div>
                        <Grid container spacing={3}>
                            <Tags/>
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
            </TagsContextProvider>
        </Fragment>
    );
}

export default Daerah