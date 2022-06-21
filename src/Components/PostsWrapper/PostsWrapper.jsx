import { React, useEffect, useState } from 'react'
import FourOrMorePosts from './FourOrMorePosts'
import OnePost from './OnePost'
import ThreePost from './ThreePosts'
import TwoPost from './TwoPosts'

const PostsWrapper = ({
    posts,
    isLoading,
    skeletonPosts = 4
}) => {
    const [postState, setPostState] = useState(new Array(skeletonPosts).fill('loading'))

    useEffect(() => {
        !isLoading ? setPostState(posts) : setPostState(new Array(skeletonPosts).fill('loading'))
    }, [isLoading])

    switch (postState.length) {
    case 0:
        return (
        // TODO:
            <p>No Posts added</p>
        )
    case 1:
        return (
            <OnePost
                posts={postState}
                isLoading={isLoading}
            />
        )
    case 2:
        return (
            <TwoPost
                posts={postState}
                isLoading={isLoading}
            />
        )
    case 3:
        return (
            <ThreePost
                posts={postState}
                isLoading={isLoading}
            />
        )
    default:
        return (
            <FourOrMorePosts
                posts={postState}
                isLoading={isLoading}
            />
        )
    }
}
export default PostsWrapper
