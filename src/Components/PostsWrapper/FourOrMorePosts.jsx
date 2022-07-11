import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

let columnCounter = 0
const indexCheck = (index) => { ((index + 1) % 4 === 1 || (index + 1) % 4 === 0) ? columnCounter = 1 : columnCounter = 2 }

const FourOrMorePosts = ({
    posts,
    isLoading
}) => (
    <div className="postFour-wrapper">
        {isLoading ? posts.map((p, index) => {
            indexCheck(index)
            return (<div className={`postFour${columnCounter}-loading`} key={index} />)
        })
            : posts.map(({
                id, title, imageUrl, imageTitle, updatedAt
            }, index) => {
                indexCheck(index)
                return (
                    <div className={`postFour${columnCounter}`} key={id}>
                        <img
                            className={`postFour${columnCounter}__img`}
                            src={`https://${imageUrl}`}
                            alt={imageTitle}
                        />
                        <div className={`postFour${columnCounter}__title-wrapper`}>
                            <p className={`postFour${columnCounter}__title`}>
                                {title}
                            </p>
                            <p className={`postFour${columnCounter}__title-date`}>
                                {updatedAt}
                            </p>
                        </div>
                        <a
                            className={`postFour${columnCounter}__cover`}
                            href="#"
                        >
                            <span>Read more...</span>
                        </a>
                    </div>
                )
            })}
    </div>
)

FourOrMorePosts.propTypes = {
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

export default FourOrMorePosts
