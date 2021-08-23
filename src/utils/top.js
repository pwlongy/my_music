import {request} from "./request.js"

export function cellphone(phone,password){
  return request({
    url: "/login/cellphone",
    params:{
      phone,
      password
    },
    method: "get"
  })
}

export class message{
  constructor(profile){
    this.nickname = profile.nickname,
    this.followeds = profile.followeds,
    this.follows = profile.follows,
    this.eventCount = profile.eventCount,
    this.city = profile.city,
    this.birthday = profile.birthday,
    this.avatarUrl = profile.avatarUrl,
    this.vipType = profile.vipType,
    this.uid = profile.userId
  }
}