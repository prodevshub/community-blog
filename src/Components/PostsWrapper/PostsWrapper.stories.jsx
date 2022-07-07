import React from 'react'
import PostsWrapper from './PostsWrapper'

export default {
    title: 'Posts Wrapper',
    component: PostsWrapper
}

const Template = (args) => (
    <div>
        <PostsWrapper {...args} />
    </div>
)

export const PostLayoutWrapper = Template.bind({})
PostLayoutWrapper.args = {
    posts: [{
        id: 1,
        title:
      'Lorem Ipsum is simply dummy ',
        imageURL:
      'https://images.unsplash.com/photo-1653959023171-746709105833?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80',
        date: '2022-05-08'
    }, {
        id: 2,
        title: 'Lorem Ipsum is simply dummy text of the printing and typesetting',
        imageURL:
      'https://images.unsplash.com/photo-1471897488648-5eae4ac6686b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80',
        date: '2022-05-12'
    }, {
        id: 3,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        imageURL:
      'https://images.unsplash.com/photo-1602447668419-c22aa459221c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=778&q=80',

        date: '2022-05-20'
    }, {
        id: 4,
        title: 'Lorem Ipsum is simply dummy text of the printing',
        imageURL:
      'https://images.unsplash.com/photo-1653908660985-338550642ac2?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1609&q=80',
        date: '2022-05-28'
    }],
    isLoading: true,
    skeletonPosts: 4
}
