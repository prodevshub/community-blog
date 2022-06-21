import React from 'react'
import './PostsWrapper.scss'

const TwoPost = ({
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
                <div
                    className="postTwo__name"
                >
                    <p
                        className="postTwo__name--title"
                    >
                        {title}
                    </p>
                    <p
                        className="postTwo__name--date"
                    >
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

export default TwoPost
