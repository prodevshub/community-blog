import React from 'react'
import './PostsWrapper.scss'

const TwoPost = ({
    posts,
    display,
    gridTemplateColumns,
    columnGap,
    rowGap,
    textAlign,
    fontSize,
    color,
    height,
    width,
    margin,
    padding,
    position,
    objectFit,
    backgroundColor,
    fontFamily,
    overflow
}) => (
    <div
        className="postTwo-wrapper"
        style={{
            display,
            gridTemplateColumns,
            columnGap,
            rowGap,
            height,
            width,
            margin,
            padding,
            backgroundColor
        }}
    >
        {posts.map(({
            id, title, imageURL, date
        }, i) => (
            <div className="postTwo" key={id}>
                <img
                    className="postTwo__img"
                    src={imageURL}
                    alt="post"
                    style={{ objectFit }}
                />
                <div
                    className="postTwo__name"
                    style={{
                        textAlign,
                        fontSize,
                        color,
                        fontFamily
                    }}
                >
                    <p
                        className="postTwo__name--title"
                        style={{ margin, padding, overflow }}
                    >
                        {title}
                    </p>
                    <p
                        className="postTwo__name--date"
                        style={{ margin, padding, position }}
                    >
                        {date}
                    </p>
                </div>
                <a
                    className="postTwo__cover"
                    href="#"
                    style={{
                        color,
                        textAlign,
                        fontSize,
                        height,
                        width,
                        position,
                        backgroundColor,
                        fontFamily
                    }}
                >
                    <span>Read more...</span>
                </a>
            </div>
        ))}
    </div>
)

export default TwoPost
