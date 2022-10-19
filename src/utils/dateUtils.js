/**
 * @desc 获取前n天的日期
 * @param {Number} day n
 * @return {Array} 前几天的数组
 */

export function getPreDate(day) {
  // 获取今天日期
  const myDate = new Date();
  myDate.setDate(myDate.getDate() - day);
  const dateArray = [];
  let dateTemp;
  for (let i = 0; i < day; i += 1) {
    dateTemp = myDate.getFullYear() + "-" + (myDate.getMonth() + 1) + "-" + myDate.getDate();
    dateArray.value.push(dateTemp);
    myDate.setDate(myDate.getDate() + 1);
  }
  return dateArray;
}

/**
 * @desc 获取两个日期之间的所有日期
 * @param {String} startTime 开始时间
 * @param {String} endTime 结束时间
 * @return {Array} 几天间隔的所有日期数组
 */
export function getDiffDate(startTime, endTime) {
  // 初始化日期列表，数组
  const diffdate = [];
  let i = 0;
  // 开始日期小于等于结束日期,并循环
  while (startTime <= endTime) {
    diffdate[i] = startTime;

    // 获取开始日期时间戳
    const stimeTs = new Date(startTime).getTime();

    // 增加一天时间戳后的日期
    const nextDate = stimeTs + (24 * 60 * 60 * 1000);

    // 拼接年月日，这里的月份会返回（0-11），所以要+1
    const nextDatesY = new Date(nextDate).getFullYear() + "-";
    // eslint-disable-next-line max-len
    const nextDatesM = (new Date(nextDate).getMonth() + 1 < 10) ? "0" + (new Date(nextDate).getMonth() + 1) + "-" : (new Date(nextDate).getMonth() + 1) + "-";
    const nextDatesD = (new Date(nextDate).getDate() < 10) ? "0" + new Date(nextDate).getDate() : new Date(nextDate).getDate();

    startTime = nextDatesY + nextDatesM + nextDatesD;

    // 增加数组key
    i += 1;
  }
  return diffdate;
}
