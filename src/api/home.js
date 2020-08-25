import request from './request'

const URL = {
    NEWS_LIST: '/newsList'
}

export default {
    getNewsList() {
        return request(URL.NEWS_LIST)
    }
}