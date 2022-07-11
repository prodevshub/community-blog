import { ContentfulResponseMapper } from './contenful.mappper'
import { CONTENTFUL_SPACE_ID, CONTENTFUL_ACCESS_TOKEN, CONTENTFUL_HOMEPAGE_ID } from '../lib/constants'

const contentful = require('contentful')

class PostsApi {
    constructor() {
        this.wrapperPosts = []
        this.mapper = new ContentfulResponseMapper()
        this.client = contentful.createClient({
            space: CONTENTFUL_SPACE_ID,
            accessToken: CONTENTFUL_ACCESS_TOKEN
        })
    }

    getPosts = async () => {
        if (!this.wrapperPosts.length) {
            const pageWrapper = await this.client.getEntry(CONTENTFUL_HOMEPAGE_ID)
            const { postwrapers } = pageWrapper.fields

            const wrapperList = this.mapper.wrappersToWrapperList(postwrapers)

            const promises = wrapperList.map(({ id }) => this.client.getEntry(id))
            const wrapperResponses = await Promise.all(promises)
            this.wrapperPosts = wrapperResponses.map(this.mapper.postsResponseToPostList)

            return this.wrapperPosts
        }
        return this.wrapperPosts
    }
}

export default PostsApi
