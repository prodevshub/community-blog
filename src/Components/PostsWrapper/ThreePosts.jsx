import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

const ThreePosts = ({
    isLoading,
    posts
}) => (
    <div className="postThree-wrapper">
        {isLoading ? posts.map((post, index) => (<div className={`postThree${index + 1}-loading`} key={index} />)) : posts.map(({
            id, title, imageUrl, imageTitle, updatedAt
        }, index) => (
            <div className={`postThree${index + 1}`} key={id}>
                <img
                    className={`postThree${index + 1}__img`}
                    src={`https://${imageUrl}`}
                    alt={imageTitle}
                />
                <div className={`postThree${index + 1}__title-wrapper`}>
                    <p className={`postThree${index + 1}__title`}>
                        {title}
                    </p>
                    <p className={`postThree${index + 1}__title-date`}>
                        {updatedAt}
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

export default ThreePosts
