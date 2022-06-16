import React from 'react'
import './PostsWrapper.scss'

const OnePost = ({
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
        className="postOne-wrapper"
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
            <div className="postOne" key={id}>
                <img
                    className="postOne--img"
                    src={imageURL}
                    alt="post"
                    style={{ objectFit }}
                />
                <div
                    className="postOne--name"
                    style={{
                        textAlign,
                        fontSize,
                        color,
                        fontFamily
                    }}
                >
                    <p
                        className="postOne--name-title"
                        style={{ margin, padding, overflow }}
                    >
                        {title}
                    </p>
                    <p
                        className="postOne--name-date"
                        style={{ margin, padding, position }}
                    >
                        {date}
                    </p>
                </div>
                <a
                    className="postOne--cover"
                    href="#"
                    style={{
                        color,
                        textAlign,
                        fontSize,
                        height,
                        position,
                        fontFamily,
                        backgroundColor
                    }}
                >
                    <span>Read more...</span>
                </a>
            </div>
        ))}
    </div>
)

export default OnePost
