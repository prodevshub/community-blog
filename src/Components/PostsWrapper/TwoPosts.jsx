import React from 'react'
import './PostsWrapper.scss'

const TwoPost = ({
    postai,
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
        {postai.map(({
            id, title, imageURL, date
        }, i) => (
            <div className="postTwo" key={id}>
                <img
                    className="postTwo--img"
                    src={imageURL}
                    alt="post"
                    style={{ objectFit }}
                />
                <div
                    className="postTwo--name"
                    style={{
                        textAlign,
                        fontSize,
                        color,
                        fontFamily
                    }}
                >
                    <p
                        className="postTwo--name-title"
                        style={{ margin, padding, overflow }}
                    >
                        {title}
                    </p>
                    <p
                        className="postTwo--name-date"
                        style={{ margin, padding, position }}
                    >
                        {date}
                    </p>
                </div>
                <a
                    className="postTwo--cover"
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
