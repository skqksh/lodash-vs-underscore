import lodash from 'lodash';
import underscore from 'underscore';
import { assert } from 'chai';
import * as math from '../utils/math';
import * as log from '../utils/log';

const _l = lodash;
const _u = underscore;

describe('wrapper', () => {
  describe('_.each , _.forEach', () => {
    function eachFunc(method, collection, func) {
      const start = new Date();
      method(collection, func);
      const end = new Date();
      return end.getTime() - start.getTime();
    }

    it('each - 1, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.range(1000 * 1000);
      const repeat = 50;
      const func = (i) => i * i;

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(eachFunc(_u.each, array, func));
      }

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(eachFunc(_l.forEach, array, func));
      }
      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });


    it('each - 2, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.range(1000 * 1000 * 10);
      const repeat = 50;
      const func = (i) => i * i;

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(eachFunc(_u.each, array, func));
      }

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(eachFunc(_l.forEach, array, func));
      }
      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });


    it('each - 3, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.range(1000 * 1000 * 50);
      const repeat = 50;
      const func = (i) => i * i;

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(eachFunc(_u.each, array, func));
      }

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(eachFunc(_l.forEach, array, func));
      }
      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });


    it('each - 4, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.map(_u.range(1000 * 1000), (i) => ({ a: i, b: i / 10 }));
      const repeat = 50;
      const func = (item) => item.a - item.b;

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(eachFunc(_l.forEach, array, func));
      }
      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(eachFunc(_u.each, array, func));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('each - 5, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.map(_u.range(1000 * 1000 * 10), (i) => ({
        a: i, b: i / 10, c: i, d: i,
      }));

      const repeat = 50;
      const func = (item) => item.a - item.b + item.c - item.d;

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(eachFunc(_l.forEach, array, func));
      }
      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(eachFunc(_u.each, array, func));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });
  });
});
