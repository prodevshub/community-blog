import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

const TwoPosts = ({
    posts,
    isLoading
}) => (
    <div className="postTwo-wrapper">
        {isLoading ? posts.map((p, index) => (<div className="postTwo-loading" key={index} />)) : posts.map(({
            id, title, imageURL, imageTitle, updatedAt
        }) => (
            <div className="postTwo" key={id}>
                <img
                    className="postTwo__img"
                    src={imageURL}
                    alt={imageTitle}
                />
                <div className="postTwo__title-wrapper">
                    <p className="postTwo__title">
                        {title}
                    </p>
                    <p className="postTwo__title-date">
                        {updatedAt}
                    </p>
                </div>
                <a
                    className="postTwo__cover"
                    href="#"
                >
                    <span>Read more...</span>
                </a>
            </div>
        ))}
    </div>
)

TwoPosts.propTypes = {
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

export default TwoPosts
