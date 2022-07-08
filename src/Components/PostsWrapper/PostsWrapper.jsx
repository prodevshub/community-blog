import { React, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import FourOrMorePosts from './FourOrMorePosts'
import OnePost from './OnePost'
import ThreePosts from './ThreePosts'
import TwoPosts from './TwoPosts'

const PostsWrapper = ({
    posts,
    isLoading
}) => {
    switch (posts.length) {
    case 1:
        return (
            <OnePost
                posts={posts}
                isLoading={isLoading}
            />
        )
    case 2:
        return (
            <TwoPosts
                posts={posts}
                isLoading={isLoading}
            />
        )
    case 3:
        return (
            <ThreePosts
                posts={posts}
                isLoading={isLoading}
            />
        )
    default:
        return (
            <FourOrMorePosts
                posts={posts}
                isLoading={isLoading}
            />
        )
    }
}

PostsWrapper.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageTitle: PropTypes.string.isRequired,
        createdAt: PropTypes.instanceOf(Date).isRequired,
        updatedAt: PropTypes.instanceOf(Date).isRequired
    })),
    isLoading: PropTypes.bool
}

export default PostsWrapper
