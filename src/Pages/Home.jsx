import {
    React, useState, useRef, useEffect
} from 'react'
import PostsApi from '../api/contentful.api'
import Placeholder from '../Components/Placeholder'
import PostsWrapper from '../Components/PostsWrapper'

const posts = []
// const posts=new PostsApi().getPosts()

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        !posts.length ? setIsLoading(true) : setIsLoading(false)
    }, [posts])
    return (
        <>
            <h2>Home Page</h2>
            {
                !isLoading ? (<PostsWrapper posts={posts} isLoading={isLoading} />) : (<Placeholder skeletonPosts={4} isLoading={isLoading} />)
            }
        </>
    )
}

export default Home
