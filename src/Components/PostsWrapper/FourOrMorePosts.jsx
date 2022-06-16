import React from 'react'
// eslint-disable-next-line import/no-unresolved
import './PostsWrapper.scss'

const FourPost = ({
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
        {postai.map(({
            id, title, imageURL, date
        }, i) => {
            if ((i + 1) % 4 === 1 || (i + 1) % 4 === 0) {
                return (
                    <div className="postFour1" key={id}>
                        <img
                            className="postFour1--img"
                            src={imageURL}
                            alt="post"
                            style={{ objectFit }}
                        />
                        <div
                            className="postFour1--name"
                            style={{
                                textAlign,
                                fontSize,
                                color,
                                fontFamily
                            }}
                        >
                            <p
                                className="postFour1--name-title"
                                style={{ margin, padding, overflow }}
                            >
                                {title}
                            </p>
                            <p
                                className="postFour1--name-date"
                                style={{ margin, padding, position }}
                            >
                                {date}
                            </p>
                        </div>
                        <a
                            className="postFour1--cover"
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
                        className="postFour2--img"
                        src={imageURL}
                        alt="post"
                        style={{ objectFit }}
                    />
                    <div
                        className="postFour2--name"
                        style={{
                            textAlign,
                            fontSize,
                            color,
                            fontFamily
                        }}
                    >
                        <p
                            className="postFour2--name-title"
                            style={{ margin, padding, overflow }}
                        >
                            {title}
                        </p>
                        <p
                            className="postFour2--name-date"
                            style={{ margin, padding, position }}
                        >
                            {date}
                        </p>
                    </div>
                    <a
                        className="postFour2--cover"
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

export default FourPost
// postai.length % 4 === 1 ---> postFour (1)
// postai.length % 4 === 2 ---> postFour (2)
// postai.length % 4 === 3 ---> postFour (1)
// postai.length % 4 === 0 ---> postFour (0)
// if (i+1 % 4 === 1 || i+1 % 4 === 0) .postFour1
// if (i+1 % 4 === 2 || i+1 % 4 === 3) .postFour2
