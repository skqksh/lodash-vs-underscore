
function logResult(lodashResult, lodashAverage,
  underscoreResult, underscoreAverage,
  repeat, ...params) {
  console.log(`repeat : ${repeat} / params : ${params}`);
  console.log(`lodash average : ${lodashAverage} \n[${lodashResult}]`);
  console.log(`underscore average : ${underscoreAverage} \n[${underscoreResult}]`);
}

export { logResult };
