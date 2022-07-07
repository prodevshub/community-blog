# PostsWrapper Component

### **What is PostsWrapper**

**PostWrapper** React component accepts Posts List from API and depending of how many posts passed it shows appropriate layout. Inside Component has switch statement, which returns correct layout depending on posts count: 1 post, 2 posts, 3 or 4. If there are more than 4 posts, it returns 4 posts layout.

### How to use

Example of PostsWrapper component usage in React:

```
import React from 'react'
import PostsWrapper from '../components/PostsWrapper'
import '../components/PostsWrapper/PostsWrapper.scss'

const Home = () => (
    <>
        `<h2>Home Page``</h2>`
        `<PostsWrapper />`
    </>
)

export default Home
```
