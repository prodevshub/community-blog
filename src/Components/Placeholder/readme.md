# Placeholder Component

### **What is Placeholder**

**Placeholder** React component generates skeleton for Home Page if there are no posts came from API .

### How to use

Example of Placeholder component usage in React:

```
import React from 'react'
import Placeholder from '../components/Placeholder'

const Home = () => (
    <>
        `<h2>Home Page``</h2>`
        `{!isLoading ? <PostsWrapper /> : <Placeholder skeleton={4} />}`
    </>
)

export default Home
```
