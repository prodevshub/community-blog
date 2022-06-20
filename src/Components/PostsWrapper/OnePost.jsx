import React from 'react'
import './PostsWrapper.scss'

const OnePost = ({
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
        {posts.map(({
            id, title, imageURL, date
        }, i) => (
            <div className="postOne" key={id}>
                <img
                    className="postOne__img"
                    src={imageURL}
                    alt="post"
                    style={{ objectFit }}
                />
                <div
                    className="postOne__name"
                    style={{
                        textAlign,
                        fontSize,
                        color,
                        fontFamily
                    }}
                >
                    <p
                        className="postOne__name--title"
                        style={{ margin, padding, overflow }}
                    >
                        {title}
                    </p>
                    <p
                        className="postOne__name--date"
                        style={{ margin, padding, position }}
                    >
                        {date}
                    </p>
                </div>
                <a
                    className="postOne__cover"
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
