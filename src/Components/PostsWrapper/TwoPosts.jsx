import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

const TwoPosts = ({
    posts,
    isLoading
}) => (
    <div
        className="postTwo-wrapper"
    >
        {isLoading ? posts.map((p, index) => (<div className="postTwo-loading" key={index} />)) : posts.map(({
            id, title, imageURL, date
        }) => (
            <div className="postTwo" key={id}>
                <img
                    className="postTwo__img"
                    src={imageURL}
                    alt="post"
                />
                <div className="postTwo__title-wrapper">
                    <p className="postTwo__title">
                        {title}
                    </p>
                    <p className="postTwo__title-date">
                        {date}
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
    posts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}
export default TwoPosts
