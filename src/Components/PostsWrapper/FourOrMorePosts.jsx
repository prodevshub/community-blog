import React from 'react'
import PropTypes from 'prop-types'
import './PostsWrapper.scss'

let columnCounter = 0
const indexCheck = (index) => { ((index + 1) % 4 === 1 || (index + 1) % 4 === 0) ? columnCounter = 1 : columnCounter = 2 }
const FourOrMorePosts = ({
    posts,
    isLoading
}) => (
    <div
        className="postFour-wrapper"
    >
        {isLoading ? posts.map((p, index) => {
            indexCheck(index)
            return (<div className={`postFour${columnCounter}-loading`} key={index} />)
        })
            : posts.map(({
                id, title, imageURL, date
            }, index) => {
                indexCheck(index)
                return (
                    <div className={`postFour${columnCounter}`} key={id}>
                        <img
                            className={`postFour${columnCounter}__img`}
                            src={imageURL}
                            alt="post"
                        />
                        <div className={`postFour${columnCounter}__title-wrapper`}>
                            <p className={`postFour${columnCounter}__title`}>
                                {title}
                            </p>
                            <p className={`postFour${columnCounter}__title-date`}>
                                {date}
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
    posts: PropTypes.arrayOf(PropTypes.object),
    isLoading: PropTypes.bool
}
export default FourOrMorePosts
