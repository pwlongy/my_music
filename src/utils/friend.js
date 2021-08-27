import {request} from "./request"

export function userEvent(uid){
  return request({
    url: '/user/event',
    method: 'get',
    params: {
      uid
    }
  })
}

// 获取热门话题
export function hotTopic(){
  return request({
    url: '/hot/topic',
    method: 'get',
    params: {
      limit: 5
    }
  })
}