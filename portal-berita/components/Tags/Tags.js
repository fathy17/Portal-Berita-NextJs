import React, { Fragment, useContext } from 'react';
import Moment from 'react-moment'
import { Grid, Box, CircularProgress } from '@material-ui/core';
import Link from 'next/link'
import { TagsContext } from '../Store/TagsContext';
import '../../static/index.css'

const Tags = ({tags}) => {
    const { berita } = useContext(TagsContext)
    const tag = tags
    let data = berita.filter(item => item.acf.tag[0] === tag || item.acf.tag[1] === tag
         || item.acf.tag[2] === tag || item.acf.tag[3] === tag || item.acf.tag[4] === tag
         || item.acf.tag[5] === tag || item.acf.tag[6] === tag || item.acf.tag[7] === tag
         || item.acf.tag[8] === tag)
    return (
        <Fragment>
            {data.length ? (
                <Fragment>
                    {data.map(data => {
                        return (
                            <Fragment key={data.id}>
                                <Grid item xs={12} sm={12} md={5} lg={5} xl={5} className="gMobile">
                                    <Link href={`/berita/${data.slug}`}>
                                        <Box className="boxMobile" style={{ backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }}>
                                            <img src={data.acf.gambar} alt={data.title.rendered} style={{ objectFit: 'cover', backgroundColor: 'grey', height: '145px', width: '100%', borderRadius: '6px' }} />
                                        </Box>
                                    </Link>
                                </Grid>
                                <Grid item xs={12} sm={12} md={7} lg={7} xl={7}>
                                    <Link href={`/berita/${data.slug}`}>
                                        <h2 style={{ marginTop: '10px', marginBottom: '10px', fontWeight: '600', fontSize: '18px', fontStyle: 'normal', color: '#293462' }}>{data.title.rendered}</h2>
                                    </Link>
                                    <h2 style={{ fontWeight: '600', fontSize: '12px', color: '#808080', textTransform: 'uppercase' }}>{data.acf.penulis} - <Moment locale="id" format="Do MMMM YYYY">{data.date}</Moment></h2>
                                    <div style={{ fontFamily: 'Hind', fontSize: '14px', height: '50px' }} dangerouslySetInnerHTML={{ __html: data.excerpt.rendered }} />
                                    <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                                        {data.acf.tag.map(item => {
                                            return (
                                                <Fragment key={item}>
                                                    <Link href={`/tags/${item}`}><button style={{ width: '70px', height: '25px', backgroundColor: '#EC9B3B', fontSize: '9px', color: 'white', textTransform: 'uppercase', fontWeight: '600', border: 'none', borderRadius: '3px', cursor: 'pointer', marginRight: '5px', marginTop: '5px' }}>{item}</button></Link>
                                                </Fragment>
                                            )
                                        })}
                                    </div>
                                </Grid>
                                <hr style={{ height: '1px', width: '100%', border: 'none', backgroundColor: '#C4C4C4' }} />
                            </Fragment>
                        )

                    })}
                </Fragment>
            ) : (
                    <div style={{ width: '100%', height: '500px', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                        <CircularProgress />
                    </div>
                )}
        </Fragment>
    );
}

export default Tags;