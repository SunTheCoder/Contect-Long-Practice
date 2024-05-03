function boundFuncTimer(obj, func, delay) {
  setTimeout(func.bind(obj),delay )
  // setTimeout(() => {
  //   let bound = func.bind(obj)
  //   bound()
  //   //func.call(obj)
  // }, delay)
}

/*****************************************************************************/
/***************** DO NOT MODIFY ANYTHING UNDER THIS LINE ********************/

module.exports = boundFuncTimer;
