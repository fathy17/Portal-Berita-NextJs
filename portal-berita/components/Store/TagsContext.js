import React, { useEffect, useState, createContext} from 'react';
import Axios from 'axios'

export const TagsContext = createContext()

const TagsContextProvider = (props) => {
    const [berita, setBerita] = useState([])

    useEffect(() => {
        Axios.get('https://admin.eksposesulsel.com/wp-json/wp/v2/berita')
        .then(res => setBerita(res.data))
        .catch(err => console.log(err))
    },[])

    return ( 
        <TagsContext.Provider value={{berita}}>
            {props.children}
        </TagsContext.Provider>
     );
}
 
export default TagsContextProvider;