import React, { useEffect } from 'react'
import { useQuery } from "react-apollo"
import * as queries from 'pages/Graphql/api/queries'

const BookList = () => {
    const query = useQuery(queries.BOOKS)
    useEffect(() => {
        console.log(query)
    }, [query]);
    
    return (
        <>
            <h2>BookList</h2>
        </>
    )
}
export default BookList