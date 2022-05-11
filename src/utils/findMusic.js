import { request } from "./request.js";

// 获取用户基本信息
export function usermessage(uid){
  return request({
    url: "/user/detail",
    method: 'get',
    params: {
      uid
    }
  })
}



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
// 首页 banner
export function getBanner(){
  return request({
    url: "/banner",
    method: 'get'
  })
}
// 
export function getCopywriter(){
  return request({
    url: "/personalized/mv",
    method: 'get'
  })
}
// 
export function getpersomalized(){
  return request({
    url: " /personalized/privatecontent/list",
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
// 获取音乐详情
export function getSongDetail(ids){
  return request({
    url: '/song/detail',
    method: 'get',
    params: {
      ids
    }
  })
}
// 获取歌词
export function getSongWord(id){
  return request({
    url: '/lyric',
    method: 'get',
    params: {
      id
    }
  })
}
// 获取歌曲 评论
export function getSongCommon(id){
  return request({
    url: '/comment/music',
    method: 'get',
    params: {
      id
    }
  })
}











// 获取全部歌单
export function musiclist(){
  return request({
    url: '/top/playlist',
    method: 'get',
    params: {
      limit: 99
    }
  })
}
// 获取精品歌单
export function highquality(){
  return request({
    url: '/top/playlist/highquality',
    method: 'get'
  })
}

// 发送、删除、回复评论
export function comment(t, type, id, content, commentid){
  return request({
    url: '/comment',
    method: 'get',
    params: {
      t,
      type,
      id,
      content,
      commentid
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

// 电台分类推荐
export function recommenstype(type){
  return request({
    url: '/dj/recommend/type',
    method: 'get',
    params: {
      type
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

// 歌手排行榜
export function songer(type=1){
  return request({
    url: "/toplist/artist",
    method: 'get',
    params: {
      type
    }
  })
}
// 获取歌手专辑
export function getsongerAlbum(id){
  return request({
    url: '/artist/album',
    method: 'get',
    params: {
      id
    }
  })
}
// 获取相似歌手
export function getsongerArtist(id){
  return request({
    url: '/simi/artist',
    method: 'get',
    params: {
      id
    }
  })
}
// 获取歌手详情
export function getsongerDetail(id){
  return request({
    url: '/artist/detail',
    method: 'get',
    params: {
      id
    }
  })
}
// 获取歌手描述
export function getsongerDesc(id){
  return request({
    url: '/artist/desc',
    method: 'get',
    params: {
      id
    }
  })
}
// 获取歌手热门 50 首
export function getsongerTopSong(id){
  return request({
    url: '/artist/top/song',
    method: 'get',
    params: {
      id
    }
  })
}
// 获取歌手热门 50 首
export function getsongerMv(id){
  return request({
    url: '/artist/mv',
    method: 'get',
    params: {
      id,
      limit: 100
    }
  })
}

// 获取专辑内容
export function albumSongs(id){
  return request({
    url: '/album',
    method: 'get',
    params: {
      id
    }
  })
}













// 获取 歌手列表
export function getSonger(type=-1, area=-1){
  return request({
    url: '/artist/list',
    method: 'get',
    params: {
      type,
      area
    }
  })
}





















// 获取热搜列表
export function getHotSearch(){
  return request({
    url: '/search/hot/detail',
    method: 'get'
  })
}
// 获取搜索歌单
export function getSearchList(keywords, type){
  return request({
    url: "/search",
    method: 'get',
    params: {
      keywords,
      type,
      limit: 100
    }
  })
}

// 获取搜索建议
export function getSearchSuggest(keywords){
  return request({
    url: '/search/suggest',
    method: 'get',
    params: {
      keywords
    }
  })
}