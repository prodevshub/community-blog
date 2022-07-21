import {
    React, useState, useRef, useEffect
} from 'react'
import PostsApi from '../api/contentful.api'
import Placeholder from '../Components/Placeholder'
import PostsWrapper from '../Components/PostsWrapper'

let postsWrappers = []

const Home = () => {
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        const posts = new PostsApi().getPosts().then(
            (value) => {
                postsWrappers = [...value]
                !postsWrappers.length ? setIsLoading(true) : setIsLoading(false)
            }
        )
    }, [postsWrappers])
    return (
        <>
            <h2>Home Page</h2>
            {
                !isLoading ? postsWrappers.map((post, id) => <PostsWrapper posts={post} isLoading={isLoading} key={id} />) : (<Placeholder skeletonPosts={4} isLoading={isLoading} />)
            }
        </>
    )
}

export default Home
