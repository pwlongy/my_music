import { request } from "./request.js";
// 个性推荐
export function getRecommend (){
  return request({
    url: "/personalized",
    method: "get",
    params: {
      limit: 9
    }
  })
}

export function getBanner(){
  return request({
    url: "/banner",
    method: 'get'
  })
}

export function getCopywriter(){
  return request({
    url: "/personalized/mv",
    method: 'get'
  })
}

export function getpersomalized(){
  return request({
    url: "/personalized/privatecontent/list",
    method: 'get',
    params: {
      limit: 3
    }
  })
}

export function getSongerNow(limit){
  return request({
    url: "/personalized/newsong",
    method: 'get',
    params: {
      limit
    }
  })
}

// 获取歌单信息
export function playlist(id){
  return request({
    url: "/playlist/detail",
    method: 'get',
    params: {
      id
    }
  })
}
// 每日歌曲推荐
export function recomSong() {
  return request({
    url: "/recommend/songs",
    method: 'get'
  })
}

// 获取歌单评论信息
export function getComment(id){
  return request({
    url: "/comment/playlist",
    method: 'get',
    params: {
      id,
      limit: 50
    }
  })
}

// 歌单收藏者
export function getsubscribers(id){
  return request({
    url: '/playlist/subscribers',
    method: 'get',
    params: {
      id,
      limit: 100
    }
  })
}

// 为评论信息点赞
export function good(id,cid,t,type){
  return request({
    url: '/comment/like',
    method: 'get',
    params: {
      id,
      cid,
      t,
      type
    }
  })
}

// 获取 音乐 url 地址
export function songurl(id){
  return request({
    url: '/song/url',
    method: 'get',
    params: {
      id
    }
  })
}








// 主播电台
export function djBanner(){
  return request({
    url: "/dj/banner",
    method: "get"
  })
}

export function djrecommend(){
  return request({
    url: "/dj/personalize/recommend",
    method: 'get'
  })
}
export function djpaygift(){
  return request({
    url: "/dj/paygift",
    method: 'get',
    params: {
      limit : 4
    }
  })
}















// 排行榜
export function toplist(){
  return request({
    url: '/toplist/detail',
    method: 'get',
  })
}