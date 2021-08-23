import { request } from "./request.js";

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