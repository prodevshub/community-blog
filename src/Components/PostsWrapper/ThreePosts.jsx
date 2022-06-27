import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

const ThreePosts = ({
    isLoading,
    posts
}) => (
    <div
        className="postThree-wrapper"
    >
        {isLoading ? posts.map((post, index) => (<div className={`postThree${index + 1}-loading`} key={index} />)) : posts.map(({
            id, title, imageURL, date
        }, index) => (
            <div className={`postThree${index + 1}`} key={id}>
                <img
                    className={`postThree${index + 1}__img`}
                    src={imageURL}
                    alt="post"
                />
                <div className={`postThree${index + 1}__title-wrapper`}>
                    <p className={`postThree${index + 1}__title`}>
                        {title}
                    </p>
                    <p className={`postThree${index + 1}__title-date`}>
                        {date}
                    </p>
                </div>
                <a
                    className={`postThree${index + 1}__cover`}
                    href="#"
                >
                    <span>Read more...</span>
                </a>
            </div>
        ))}
    </div>
)
ThreePosts.propTypes = {
    posts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}
export default ThreePosts
