import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

const OnePost = ({
    isLoading,
    posts
}) => (
    <div className="postOne-wrapper">
        {isLoading ? (<div className="postOne-loading" key="0" />) : posts.map(({
            id, title, imageURL, imageTitle, updatedAt
        }) => (
            <div className="postOne" key={id}>
                <img
                    className="postOne__img"
                    src={imageURL}
                    alt={imageTitle}
                />
                <div className="postOne__title-wrapper">
                    <p className="postOne__title">
                        {title}
                    </p>
                    <p className="postOne__title-date">
                        {updatedAt}
                    </p>
                </div>
                <a
                    className="postOne__cover"
                    href="#"
                >
                    <span>Read more...</span>
                </a>
            </div>
        ))}
    </div>
)

OnePost.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        description: PropTypes.string.isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageTitle: PropTypes.string.isRequired,
        createdAt: PropTypes.instanceOf(Date).isRequired,
        updatedAt: PropTypes.instanceOf(Date).isRequired
    })),
    isLoading: PropTypes.bool.isRequired
}

export default OnePost
