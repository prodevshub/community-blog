import React from 'react'
// eslint-disable-next-line import/no-unresolved
import './PostsWrapper.scss'

const FourOrMorePosts = ({
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
        className="postFour-wrapper"
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
        }, i) => {
            if ((i + 1) % 4 === 1 || (i + 1) % 4 === 0) {
                return (
                    <div className="postFour1" key={id}>
                        <img
                            className="postFour1__img"
                            src={imageURL}
                            alt="post"
                            style={{ objectFit }}
                        />
                        <div
                            className="postFour1__name"
                            style={{
                                textAlign,
                                fontSize,
                                color,
                                fontFamily
                            }}
                        >
                            <p
                                className="postFour1__name--title"
                                style={{ margin, padding, overflow }}
                            >
                                {title}
                            </p>
                            <p
                                className="postFour1__name--date"
                                style={{ margin, padding, position }}
                            >
                                {date}
                            </p>
                        </div>
                        <a
                            className="postFour1__cover"
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
                )
            }

            return (
                <div className="postFour2" key={id}>
                    <img
                        className="postFour2__img"
                        src={imageURL}
                        alt="post"
                        style={{ objectFit }}
                    />
                    <div
                        className="postFour2__name"
                        style={{
                            textAlign,
                            fontSize,
                            color,
                            fontFamily
                        }}
                    >
                        <p
                            className="postFour2__name--title"
                            style={{ margin, padding, overflow }}
                        >
                            {title}
                        </p>
                        <p
                            className="postFour2__name--date"
                            style={{ margin, padding, position }}
                        >
                            {date}
                        </p>
                    </div>
                    <a
                        className="postFour2__cover"
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
            )
        })}
    </div>
)

export default FourOrMorePosts
