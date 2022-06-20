/* eslint-disable no-undef */
/* eslint-disable jsx-a11y/control-has-associated-label */
/* eslint-disable jsx-a11y/anchor-has-content */
import React from 'react'
import FourOrMorePosts from './FourOrMorePosts'
import OnePost from './OnePost'
import ThreePost from './ThreePosts'
import TwoPost from './TwoPosts'
import './PostsWrapper.scss'

const PostsWrapper = ({
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
    overflow,
    bottom
}) => {
    const post1 = {
        id: 1,
        title:
      'Lorem Ipsum is simply dummy ',
        imageURL:
      'https://images.unsplash.com/photo-1653959023171-746709105833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        date: '2022-05-08'
    }
    const post2 = {
        id: 2,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imageURL:
      'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        date: '2022-05-12'
    }
    const post3 = {
        id: 3,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        imageURL:
      'https://images.unsplash.com/photo-1602447668419-c22aa459221c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',

        date: '2022-05-20'
    }
    const post4 = {
        id: 4,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        imageURL:
      'https://images.unsplash.com/photo-1653908660985-338550642ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1609&q=80',
        date: '2022-05-28'
    }
    const post5 = {
        id: 5,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imageURL:
      'https://images.unsplash.com/photo-1602447668419-c22aa459221c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
        date: '2022-06-01'
    }
    const post6 = {
        id: 6,
        title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
        imageURL:
      'https://images.unsplash.com/photo-1602447668419-c22aa459221c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',
        date: '2022-06-01'
    }
    const post7 = {
        id: 7,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        imageURL:
      'https://images.unsplash.com/photo-1653908660985-338550642ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1609&q=80',
        date: '2022-05-28'
    }

    // const posts = [post1]
    // const posts = [post1, post2]
    // const posts = [post1, post2, post3]
    const posts = [post1, post2, post3, post4]
    // const posts = [post1, post2, post3, post4, post5, post6, post7]

    switch (posts.length) {
    case 0:
        return (
        // TODO:
            <p>No Posts added</p>
        )
    case 1:
        return (
            <OnePost
                display={display}
                gridTemplateColumns={gridTemplateColumns}
                columnGap={columnGap}
                rowGap={rowGap}
                textAlign={textAlign}
                fontSize={fontSize}
                color={color}
                height={height}
                width={width}
                margin={margin}
                padding={padding}
                position={position}
                objectFit={objectFit}
                backgroundColor={backgroundColor}
                fontFamily={fontFamily}
                overflow={overflow}
                bottom={bottom}
                posts={posts}
            />
        )
    case 2:
        return (
            <TwoPost
                display={display}
                gridTemplateColumns={gridTemplateColumns}
                columnGap={columnGap}
                rowGap={rowGap}
                textAlign={textAlign}
                fontSize={fontSize}
                color={color}
                height={height}
                width={width}
                margin={margin}
                padding={padding}
                position={position}
                objectFit={objectFit}
                backgroundColor={backgroundColor}
                fontFamily={fontFamily}
                overflow={overflow}
                bottom={bottom}
                posts={posts}
            />
        )
    case 3:
        return (
            <ThreePost
                display={display}
                gridTemplateColumns={gridTemplateColumns}
                columnGap={columnGap}
                rowGap={rowGap}
                textAlign={textAlign}
                fontSize={fontSize}
                color={color}
                height={height}
                width={width}
                margin={margin}
                padding={padding}
                position={position}
                objectFit={objectFit}
                backgroundColor={backgroundColor}
                fontFamily={fontFamily}
                overflow={overflow}
                bottom={bottom}
                posts={posts}
            />
        )
    default:
        return (
            <FourOrMorePosts
                display={display}
                gridTemplateColumns={gridTemplateColumns}
                columnGap={columnGap}
                rowGap={rowGap}
                textAlign={textAlign}
                fontSize={fontSize}
                color={color}
                height={height}
                width={width}
                margin={margin}
                padding={padding}
                position={position}
                objectFit={objectFit}
                backgroundColor={backgroundColor}
                fontFamily={fontFamily}
                overflow={overflow}
                bottom={bottom}
                posts={posts}
            />
        )
    }
}

export default PostsWrapper
