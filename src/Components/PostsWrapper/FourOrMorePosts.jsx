import React from 'react'
import './PostsWrapper.scss'

const FourOrMorePosts = ({
    posts,
    isLoading
}) => (
    <div
        className="postFour-wrapper"
    >
        {isLoading ? posts.map((p, index) => (((index + 1) % 4 === 1 || (index + 1) % 4 === 0)
            ? (<div className="postFour1-loading" key={index} />) : (<div className="postFour2-loading" key={index} />)))
            : posts.map(({
                id, title, imageURL, date
            }, i) => {
                if ((i + 1) % 4 === 1 || (i + 1) % 4 === 0) {
                    return (
                        <div className="postFour1" key={id}>
                            <img
                                className="postFour1__img"
                                src={imageURL}
                                alt="post"
                            />
                            <div
                                className="postFour1__name"
                            >
                                <p
                                    className="postFour1__name--title"
                                >
                                    {title}
                                </p>
                                <p
                                    className="postFour1__name--date"
                                >
                                    {date}
                                </p>
                            </div>
                            <a
                                className="postFour1__cover"
                                href="#"
                            >
                                <span>Read more...</span>
                            </a>
                        </div>
                    )
                }

                return (
                    <div className="postFour2" key={id}>
                        <img
                            className="postFour2__img"
                            src={imageURL}
                            alt="post"
                        />
                        <div
                            className="postFour2__name"
                        >
                            <p
                                className="postFour2__name--title"
                            >
                                {title}
                            </p>
                            <p
                                className="postFour2__name--date"
                            >
                                {date}
                            </p>
                        </div>
                        <a
                            className="postFour2__cover"
                            href="#"
                        >
                            <span>Read more...</span>
                        </a>
                    </div>
                )
            })}
    </div>
)

export default FourOrMorePosts
