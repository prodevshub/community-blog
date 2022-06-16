import React from 'react'
import './PostsWrapper.scss'

const ThreePost = ({
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
        className="postThree-wrapper"
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
            <div className={`postThree${i + 1}`} key={id}>
                <img
                    className={`postThree${i + 1}--img`}
                    src={imageURL}
                    alt="post"
                    style={{ objectFit }}
                />
                <div
                    className={`postThree${i + 1}--name`}
                    style={{
                        textAlign,
                        fontSize,
                        color,
                        fontFamily
                    }}
                >
                    <p
                        className={`postThree${i + 1}--name-title`}
                        style={{ margin, padding, overflow }}
                    >
                        {title}
                    </p>
                    <p
                        className={`postThree${i + 1}--name-date`}
                        style={{ margin, padding, position }}
                    >
                        {date}
                    </p>
                </div>
                <a
                    className={`postThree${i + 1}--cover`}
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

export default ThreePost
