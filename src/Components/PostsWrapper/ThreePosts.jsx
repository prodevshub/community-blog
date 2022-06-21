import React from 'react'
import './PostsWrapper.scss'

const ThreePost = ({
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
                <div
                    className={`postThree${index + 1}__name`}
                >
                    <p
                        className={`postThree${index + 1}__name--title`}
                    >
                        {title}
                    </p>
                    <p
                        className={`postThree${index + 1}__name--date`}
                    >
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

export default ThreePost
