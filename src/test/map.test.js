import lodash from 'lodash';
import underscore from 'underscore';
import { assert } from 'chai';
import * as math from '../utils/math';
import * as log from '../utils/log';

const _l = lodash;
const _u = underscore;

describe('wrapper', () => {
  describe('_.map', () => {
    function mapFunc(method, collection, func) {
      const start = new Date();
      method(collection, func);
      const end = new Date();
      return end.getTime() - start.getTime();
    }

    it('map - 1, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.range(1000 * 100);
      const repeat = 50;
      const func = (i) => i * i;

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(mapFunc(_u.map, array, func));
      }

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(mapFunc(_l.map, array, func));
      }
      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });


    it('map - 2, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.range(1000 * 1000);
      const repeat = 50;
      const func = (i) => i * i;

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(mapFunc(_u.map, array, func));
      }

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(mapFunc(_l.map, array, func));
      }
      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });


    it('map - 3, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.range(1000 * 1000 * 10);
      const repeat = 50;
      const func = (i) => i * i;

      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(mapFunc(_u.map, array, func));
      }

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(mapFunc(_l.map, array, func));
      }
      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });


    it('map - 4, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.map(_u.range(1000 * 100), (i) => ({ a: i, b: i * 10, c: i * i }));
      const repeat = 50;
      const func = (item) => item.a * item.b + item.c;

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(mapFunc(_l.map, array, func));
      }
      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(mapFunc(_u.map, array, func));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('map - 5, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.map(_u.range(1000 * 1000), (i) => ({ a: i, b: i * 10, c: i * i }));
      const repeat = 50;
      const func = (item) => item.a * item.b + item.c;

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(mapFunc(_l.map, array, func));
      }
      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(mapFunc(_u.map, array, func));
      }

      const lodashAverage = math.average(lodashResult);
      const underscoreAverage = math.average(underscoreResult);
      log.logResult(lodashResult, lodashAverage,
        underscoreResult, underscoreAverage,
        repeat, array.length);
      assert.isAbove(underscoreAverage, lodashAverage);
    });

    it('map - 6, L! lodash is faster?', () => {
      console.log('* Loading... it takes some time...');
      const array = _u.map(_u.range(1000 * 1000 * 10), (i) => ({ a: i, b: i * 10, c: i * i }));
      const repeat = 50;
      const func = (item) => item.a * item.b + item.c;

      const lodashResult = [];
      for (let i = 0; i < repeat; i++) {
        lodashResult.push(mapFunc(_l.map, array, func));
      }
      const underscoreResult = [];
      for (let i = 0; i < repeat; i++) {
        underscoreResult.push(mapFunc(_u.map, array, func));
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
