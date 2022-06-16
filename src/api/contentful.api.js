import { ContentfulResponseMapper } from './contenful.mappper'
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN } from '../lib/constants'

const contentful = require('contentful')

class PostsApi {
    constructor() {
        this.postWrapper = []
        this.mapper = new ContentfulResponseMapper()
        this.client = contentful.createClient({
            space: CONTENTFUL_SPACE_ID,
            accessToken: CONTENTFUL_ACCESS_TOKEN
        })
    }

    getPosts = async () => {
        if (!this.postWrapper.length) {
            const postsResponse = await this.client.getEntry('7ygbRyPaHM2bdGQDeny0Nf')
            this.postWrapper = this.mapper.postsResponseToPostList(postsResponse)
        }
        return this.postWrapper
    }
}

export default PostsApi
