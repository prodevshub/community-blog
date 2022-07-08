export class ContentfulResponseMapper {
    postsResponseToPostList = (response) => response.fields.posts.map((post) => ({
        id: post.sys.id,
        title: post.fields.title,
        description: post.fields.description.content,
        imageUrl: post.fields.picture.fields.file.url,
        imageTitle: post.fields.picture.fields.title,
        createdAt: post.sys.createdAt,
        updatedAt: post.sys.updatedAt
    }))

    wrappersToWrapperList = (wrappers) => {
        const wrapperList = []
        wrappers.forEach((wrapper) => {
            wrapperList.push({
                id: wrapper.sys.id
            })
        })
        return wrapperList
    }
}
