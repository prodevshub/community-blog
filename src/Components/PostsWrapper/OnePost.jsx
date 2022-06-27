import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

const OnePost = ({
    isLoading,
    posts
}) => (
    <div className="postOne-wrapper">
        {isLoading ? (<div className="postOne-loading" key="0" />) : posts.map(({
            id, title, imageURL, date
        }) => (
            <div className="postOne" key={id}>
                <img
                    className="postOne__img"
                    src={imageURL}
                    alt="post"
                />
                <div className="postOne__title-wrapper">
                    <p className="postOne__title">
                        {title}
                    </p>
                    <p className="postOne__title-date">
                        {date}
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
    posts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}
export default OnePost
