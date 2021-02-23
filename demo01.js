/*
 * @Description: async await
 * @Author: iwillbe12138
 * @Date: 2021-02-20 14:26:55
 * @LastEditTime: 2021-02-20 14:57:40
 * @LastEditors:
 */

function takeLongTime() {
  return new Promise((resolve) => {
    setTimeout(() => resolve("long_time_value"), 1000);
  });
}

async function test() {
  const v = await takeLongTime();
  console.log(v);
}
test();
