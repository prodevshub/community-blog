import React from 'react'
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
                <div
                    className="postOne__name"
                >
                    <p
                        className="postOne__name--title"
                    >
                        {title}
                    </p>
                    <p
                        className="postOne__name--date"
                    >
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

export default OnePost
