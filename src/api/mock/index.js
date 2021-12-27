import Mock from 'mockjs'
import * as json from './json.js'

const baseUrl = '/api/product'
Mock.mock(`${baseUrl}/page`, 'post', (options) => {
    const data = JSON.parse(options.body)
    return json.mockList
})