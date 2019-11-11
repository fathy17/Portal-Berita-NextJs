import React, { useEffect, useState, createContext} from 'react';
import Axios from 'axios'

export const BeritaContext = createContext()

const BeritaContextProvider = (props) => {
    const [berita, setBerita] = useState([])
    const [count, setCount] = useState(1)

    useEffect(() => {
        fetchMoreData()
    },[])

    const fetchMoreData = () => {
        Axios.get(`https://admin.eksposesulsel.com/wp-json/wp/v2/berita?per_page=5&page=${count}`)
        .then(res => setBerita([...berita, ...res.data]))
        .catch(err => console.log(err))
        setCount(count+1)
    }


    return ( 
        <BeritaContext.Provider value={{berita, fetchMoreData}}>
            {props.children}
        </BeritaContext.Provider>
     );
}
 
export default BeritaContextProvider;