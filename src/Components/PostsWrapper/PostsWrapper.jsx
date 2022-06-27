import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FourOrMorePosts from './FourOrMorePosts'
import OnePost from './OnePost'
import ThreePosts from './ThreePosts'
import TwoPosts from './TwoPosts'

const PostsWrapper = ({
    posts = [],
    isLoading = true,
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
            <TwoPosts
                posts={postState}
                isLoading={isLoading}
            />
        )
    case 3:
        return (
            <ThreePosts
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
PostsWrapper.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool,
    skeletonPosts: PropTypes.number
}
export default PostsWrapper
