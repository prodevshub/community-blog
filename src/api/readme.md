# Get demo posts

#### Just modify index.js by adding this code:


```
import PostsApi from './api/contentful.api'
const posts=newPostsApi().getPosts()
console.table(posts)
```

You will get demo posts from contentful in the website console as array of objects.

P.S. See in promise results.

More about contentful use you can find here: [https://www.npmjs.com/package/contentful](https://www.npmjs.com/package/contentful)
