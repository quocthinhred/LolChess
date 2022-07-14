import { useState } from 'react'
import Context from './Context'

function Provider({ children }) {
    const [filterPrice, setFilterPrice] = useState();
    const [filterClass, setFilterClass] = useState();
    const [filterOrigin, setFilterOrigin] = useState();


    return (
        <Context.Provider value={{
            FilterPrice: [filterPrice, setFilterPrice],
            FilterClass: [filterClass, setFilterClass],
            FilterOrigin: [filterOrigin, setFilterOrigin]
        }}>
            {children}
        </Context.Provider>
    )
}


export default Provider;