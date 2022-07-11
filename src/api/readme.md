# Get demo posts

```
import PostsApi from '../api/contentful.api'
const posts = new PostsApi()
	.getPosts()
	.then(console.log(posts))
```

More about contentful use you can find here: [https://www.npmjs.com/package/contentful](https://www.npmjs.com/package/contentful)
