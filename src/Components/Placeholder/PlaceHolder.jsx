import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import OnePost from '../PostsWrapper/OnePost'
import TwoPosts from '../PostsWrapper/TwoPosts'
import ThreePosts from '../PostsWrapper/ThreePosts'
import FourOrMorePosts from '../PostsWrapper/FourOrMorePosts'

const Placeholder = ({ skeletonPosts, isLoading }) => {
    const [postState, setPostState] = useState(new Array(skeletonPosts).fill('loading'))

    switch (postState.length) {
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

Placeholder.propTypes = {
    skeletonPosts: PropTypes.number.isRequired,
    isLoading: PropTypes.bool.isRequired
}

export default Placeholder
