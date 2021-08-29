import {formatDate} from "./time.js"
export const itemListerMinxin = {
  filters: {
    showtime(value){
      let time = new Date(value)
      return formatDate(time, 'mm:ss')
    }
  }
}