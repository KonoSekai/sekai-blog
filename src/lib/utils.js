export const time2Chinese = (time) => {
  let date = new Date(time)

  let scanTime = date.getTime()
  let currTime = new Date().getTime()
  let m = 1000 * 60 * 60 * 24

  let scanDays = scanTime % m > 0 ? scanTime / m + 1 : scanTime / m
  let currDays = currTime % m > 0 ? currTime / m + 1 : currTime / m

  let diff = parseInt(currDays - scanDays)

  if (diff > 30 || diff <= 0) {
    let year = date.getFullYear()
    let month = date.getMonth() + 1
    month = month < 10 ? '0' + month : month
    let day = date.getDate()
    day = day < 10 ? '0' + day : day

    return `${year}-${month}-${day}`
  }

  if (diff == 1) return '今天'

  return diff + `天前`
}

export const time2Chinese2 = (time) => {
  let date = new Date(time)

  let year = date.getFullYear()
  let month = date.getMonth() + 1
  month = month < 10 ? '0' + month : month
  let day = date.getDate()
  day = day < 10 ? '0' + day : day

  return `${year}-${month}-${day}`
}
export const timeSort = (obj1, obj2) => {
  let time1 = new Date(obj1.time).getTime()
  let time2 = new Date(obj2.time).getTime()

  if (time1 > time2) return -1
  else if (time1 < time2) return 1
  else return 0
}

export const timeSort2 = (obj1, obj2) => {
  let time1 = new Date(obj1.time).getTime()
  let time2 = new Date(obj2.time).getTime()

  if (time1 > time2) return 1
  else if (time1 < time2) return -1
  else return 0
}
