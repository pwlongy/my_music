import { request } from "./request.js";

// 获取 mv 评论信息
export function mvcomment(id) {
  return request({
    url: "/comment/mv",
    method: 'get',
    params: {
      id,
      limit: 50
    }
  })
}
// mv 播放地址
export function mvUrl(id){
  return request({
    url: "/mv/url",
    method: 'get',
    params: {
      id
    }
  })
}
// 视频播放地址
export function videoUrl(id){
  return request({
    url: "/video/url",
    method: 'get',
    params: {
      id
    }
  })
}

// 获取 mv 相关数据
export function mvdetail(id){
  return request({
    url: '/mv/detail',
    method: 'get',
    params: {
      mvid: id
    }
  })
}

// 获取相关视频
export function relatedvideo(id){
  return request({
    url: "/related/allvideo",
    method: 'get',
    params: {
      id
    }
  })
}
