import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

const TwoPosts = ({
    posts,
    isLoading
}) => (
    <div className="postTwo-wrapper">
        {isLoading ? posts.map((p, index) => (<div className="postTwo-loading" key={index} />)) : posts.map(({
            id, title, imageUrl, imageTitle, updatedAt
        }) => (
            <div className="postTwo" key={id}>
                <img
                    className="postTwo__img"
                    src={`https://${imageUrl}`}
                    alt={imageTitle}
                />
                <div className="postTwo__title-wrapper">
                    <p className="postTwo__title">
                        {title}
                    </p>
                    <p className="postTwo__title-date">
                        {updatedAt.slice(0, 10)}
                    </p>
                </div>
                <a
                    className="postTwo__cover"
                    href={`/post/:${id}`}
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
        description: PropTypes.arrayOf(PropTypes.shape).isRequired,
        imageUrl: PropTypes.string.isRequired,
        imageTitle: PropTypes.string.isRequired,
        createdAt: PropTypes.string.isRequired,
        updatedAt: PropTypes.string.isRequired
    })),
    isLoading: PropTypes.bool.isRequired
}

export default TwoPosts
