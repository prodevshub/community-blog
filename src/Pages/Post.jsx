import React from 'react'
import { useParams } from 'react-router-dom'

const Post = () => {
    const { id } = useParams(1)
    return (
        <>
            <h2>Post Page</h2>
            <div>{id}</div>
        </>

    )
}
export default Post
